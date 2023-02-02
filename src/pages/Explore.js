import React, { Component } from 'react'
// require("dotenv").config();

const { Configuration, OpenAIApi } = require("openai");

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
            apiKey: "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",
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
