import React from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRPCRedux } from 'fusion-plugin-rpc-redux-react';

import {
    RegistrationCardContent,
    RegistrationCardDiv,
    RegistrationCardFooter,
    RegistrationCardHeader,
    Title,
    TitleOppositeLink,
    StyledButton,
    ProgressBarContainer,
    ButtonContainer,
    ProgressBarDiv,
} from "./Styles/RegistrationCardStyles";

import { ErrorMessageDiv } from "./Styles/RegistrationCardStyles";

import Card from "./card";
import { CardSteps } from "./cardSteps";
import StepProgressBar from "./progressBar";

import { Tooltip } from "@mui/material";

class RegistrationCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: "login",
            CardSelected: 0,
            errorMessage: null,
            cardStepsState: CardSteps,
            incompleteSteps: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateStepCount = this.updateStepCount.bind(this);
        this.ChangeMode = this.ChangeMode.bind(this);
    }

    componentDidUpdate(prevProps) {
        const { loginError } = this.props

        if (prevProps.loginError !== loginError) {
            this.setState({ errorMessage: loginError })
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit() {
        const {
            login,
            signUp
        } = this.props;

        for (let field of this.state.cardStepsState[this.state.CardSelected].stepContent) {
            if (!(field.rpcValue in this.state) || this.state[field.rpcValue] == '') {
                this.setState({
                    errorMessage: field.label_name + ' is Missing',
                    cardStepsState: this.state.cardStepsState.map(step => {
                        if (step === this.state.cardStepsState[this.state.CardSelected]) {
                            return {
                                ...step,
                                stepContent: step.stepContent.map(content => {
                                    if (content === field) {
                                        return { ...content, errorStatus: true };
                                    }
                                    return content;
                                })
                            };
                        }
                        return step;
                    })
                })
            }
            else {
                this.setState({
                    cardStepsState: this.state.cardStepsState.map(step => {
                        if (step === this.state.cardStepsState[this.state.CardSelected]) {
                            return {
                                ...step,
                                stepContent: step.stepContent.map(content => {
                                    if (content === field) {
                                        return { ...content, errorStatus: false };
                                    }
                                    return content;
                                })
                            };
                        }
                        return step;
                    })
                })
            }
        }


        if (this.state.mode == "login") {
            login({ username: this.state.username, password: this.state.password })
        }
        else if (this.state.mode == "signUp") {
            if (this.state.CardSelected == 2) {
                signUp({
                    username: this.state.username,
                    password: this.state.password,
                    first_name: this.state.first_name,
                    last_name: this.state.last_name,
                    email: this.state.email,
                    bio: this.state.bio,
                    Date_of_birth: this.state.date_of_birth
                })
            }
            else {
                this.setState(state => ({ CardSelected: state.CardSelected + 1 }))
            }
        }
    }

    updateStepCount(stepId) {
        // for (item of CardSteps[CardSelected].stepContent){
        //     if(item.required && this.state){

        //     }
        //     if(state.incl)
        //     if (this.state.item.label_name)
        // }
        this.setState({ CardSelected: stepId })
    }

    ChangeMode() {
        if (this.state.mode == "login") {
            this.setState({
                mode: "signUp",
                CardSelected: 0,
                errorMessage: null
            })
        }
        else {
            this.setState({
                mode: "login",
                CardSelected: 0,
                errorMessage: null

            })
        }
    }

    render() {
        console.log(this.state.errorMessage)
        return (
            <RegistrationCardDiv>
                <div style={{ display: 'flex', flex: '1', flexDirection: 'column' }}>
                    <RegistrationCardHeader>
                        <Title>
                            {this.state.mode == "login" ? "Welcome Back!" : "Create an Account"}
                            heyyyyyyyyyyy
                        </Title>
                        <TitleOppositeLink>
                            {this.state.mode === "login" ? "Need to create an Account?" : "Already have an Account?"}
                            <Tooltip title="Switch Modes" placement="right">
                                <button
                                    onClick={() => { this.ChangeMode() }}
                                    style={{ backgroundColor: 'transparent', color: 'blue', border: 'none' }}
                                >
                                    {this.state.mode === "login" ? "Sign Up" : "Login"}
                                </button>
                            </Tooltip>
                        </TitleOppositeLink>
                    </RegistrationCardHeader>



                    <RegistrationCardContent>
                        <Card CardSelected={this.state.CardSelected} InputHandleChange={this.handleChange} CardSteps={this.state.cardStepsState} />
                        <ErrorMessageDiv active={this.state.errorMessage !== null}>{this.state.errorMessage} </ErrorMessageDiv>
                    </RegistrationCardContent>



                    <RegistrationCardFooter>
                        <ProgressBarContainer showProgressBar={this.state.mode !== "login"}>
                            <ProgressBarDiv showProgressBar={this.state.mode !== "login"}>
                                <StepProgressBar steps={this.state.cardStepsState} CardSelected={this.state.CardSelected} updateStepCount={this.updateStepCount}></StepProgressBar>
                            </ProgressBarDiv>
                        </ProgressBarContainer>

                        <ButtonContainer showProgressBar={this.state.mode !== "login"}>
                            <Tooltip title="welcome">
                                <StyledButton
                                    onClick={this.state.CardSelected == 2 || this.state.mode == "login" ? this.handleSubmit : () => { this.updateStepCount(this.state.CardSelected + 1) }}
                                >
                                    {this.state.mode == 'login' ? "Log In" : this.state.CardSelected == 2 ? "Submit" : "Next"}
                                </StyledButton>
                            </Tooltip>
                        </ButtonContainer>
                    </RegistrationCardFooter>
                </div >
            </RegistrationCardDiv >
        )
    }
}

const rpcs = [
    withRPCRedux('login'),
    withRPCRedux('signUp'),

];

const mapStateToProps = (state, ownProps) => {
    const {
        loading: loading,
        loginError: loginError,
        loggedIn: loggedIn,
    } = state.users;

    return {
        ...ownProps,
        loading,
        loginError,
        loggedIn,
    };
};


const hoc = compose(
    ...rpcs,
    connect(mapStateToProps),
);

export default hoc(RegistrationCard);