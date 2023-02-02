import fetch from 'node-fetch';

import DjangoBackend from './django-backend';
import { generate_handlers } from './handlers'
import { ResponseError } from 'fusion-plugin-rpc';

const backendSpecs = [
    DjangoBackend,
];

const { handlers, rpcs } = generate_handlers(
    backendSpecs,
);


handlers['login'] = async (args, ctx) => {
    //Try fetch to api endpoint and catch if any erorrs on fetch 
    let fetchResp;
    try {
        fetchResp = await fetch('http://127.0.0.1:8000/users/login/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: args.username, password: args.password })
        });
    } catch (fetchErr) {
        console.log("fetch fail");
        return { error: fetchErr.message };
    }

    //Check if errors calling backend 
    if (!fetchResp.ok) {
        console.log('Error calling backend');
        console.log(fetchResp);
        return { error: fetchResp.body };
    }

    //Get the body from response, fail if not json format 
    let fetchBody;
    try {
        fetchBody = await fetchResp.json();
    } catch (jsonParseError) {
        console.log("json fail");
        return { error: jsonParseError.message };
    }

    //Check if it is a valid response (custom value in django)
    if (!fetchBody.valid) {
        throw new ResponseError(fetchBody.message)
    }

    const sessionid = fetchResp.headers.get('Set-Cookie').split('=')[1];
    const cookieHeader = `sessionid=${sessionid}; SameSite=Lax; Secure; HttpOnly; Path=/;`;
    ctx.set('Set-Cookie', cookieHeader);

    console.log("success");
    console.log(fetchBody);
    return fetchBody;

}

handlers['logout'] = async (args, ctx) => {
    const sessionid = ''
    const cookieHeader = `sessionid=${sessionid}; SameSite=Lax; Secure; HttpOnly; Path=/;`;
    ctx.set('Set-Cookie', cookieHeader);

}

handlers['auth_login'] = async (args, ctx) => {
    const sessionid = ctx.cookies.get('sessionid')
    if (sessionid === '') {
        throw new ResponseError("session does not exist")
    }

    //Call django and check if it is a valid session 

    let fetchResp;
    try {
        fetchResp = await fetch('http://127.0.0.1:8000/users/auth_login/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'cookie': ctx.request.headers.cookie,
            },
            body: JSON.stringify()
        });
    } catch (fetchErr) {
        console.log("fetch fail");
        return { error: fetchErr.message };
    }

    //Check if errors calling backend 
    if (!fetchResp.ok) {
        console.log('Error calling backend');
        console.log(fetchResp);
        return { error: fetchResp.body };
    }

    let fetchBody;
    try {
        fetchBody = await fetchResp.json();
    } catch (jsonParseError) {
        console.log("json fail");
        return { error: jsonParseError.message };
    }

    //Check if it is a valid response (custom value in django)
    if (!fetchBody.valid) {
        console.log('Invalid response from backend');
        console.log(fetchBody);
        throw new ResponseError(fetchBody.message)
        // throw new Error(fetchBody.message)
        // return { error: fetchBody.message };
    }

    console.log("success");
    console.log(fetchBody);
    return fetchBody;
    // return true
}


handlers['get_weather'] = async (args, ctx) => {
    try {
        const apiKey = 'c67ab9d4712d10d61d1a79b4d24ab007'
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=${apiKey}`);
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
    }
}



export default handlers;

let availableEndpoints = Object.keys(handlers);
if (__NODE__) {
    availableEndpoints = Object.keys(rpcs);
}


export const endpointList = availableEndpoints;


