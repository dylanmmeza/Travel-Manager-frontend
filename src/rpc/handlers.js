import fetch from 'node-fetch';
export const generate_handlers = (backendSpec) => {
    const handlers = {};
    const rpcs = {};

    backendSpec.forEach((backend) => {

        const createHandler = (backend, endpoint) => {
            return async (args, ctx) => {
                let fetchResp;
                const url = `${backend.basePath}/${endpoint}/`;
                let backendBody = args || {};
                try {
                    fetchResp = await fetch(url, {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json',
                            'cookie': ctx.request.headers.cookie,
                        },
                        body: JSON.stringify(backendBody)
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
                    console.log('Invalid response from backend');
                    console.log(fetchBody);
                    return { body: fetchBody };
                }

                console.log("success");
                console.log(fetchBody);
                return fetchBody;
            }
        }

        const endpointName = (endpoint) => {
            const shorthand = endpoint.split('/')
            return shorthand[shorthand.length - 1]
        }

        backend.endpoints.forEach((endpoint) => {
            const handler_name = endpointName(endpoint)
            const handler = createHandler(backend, endpoint);
            rpcs[handler_name] = handler
            handlers[handler_name] = handler
        });
    });
    return { handlers, rpcs };
}