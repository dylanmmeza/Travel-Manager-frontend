import React, { Component } from 'react'
const { Configuration, OpenAIApi } = require("openai");

// import dotenv from 'dotenv';
// dotenv.config({ path: '../../.env' });
// const { OPENAI_API_KEY } = process.env;
// console.log(OPENAI_API_KEY)
const fs = require('fs');



class ExplorePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            trips: [],
            responseText: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: this.state.inputValue,
            max_tokens: 7,
            temperature: 0,
        });

        // this.setState({ responseText: response.choices[0].text });
        this.setState({ responseText: response.choices });

    }

    handleInputChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">Generate Trips</button>
                </form>
                {/* {this.state.trips.map((trip, index) => (
                    <p key={index}>{trip}</p>
                ))} */}
                <div>
                    {console.log(this.state.responseText)}
                    {this.state.responseText}
                </div>
            </div>
        );
    }
}

export default ExplorePage;
