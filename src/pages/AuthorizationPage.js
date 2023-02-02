import React from "react";
import RegistrationCard from "../Components/Registration/RegistrationCard";
import { styled } from "styletron-react";
import { assetUrl } from 'fusion-core';

const RegistrationBackground = styled('div', {
    width: 'calc(100%-10px)',
    height: 'calc(99vh - 10px)',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export default class AuthorizationPage extends React.Component {
    render() {
        return (
            <RegistrationBackground>
                <img style={{
                    width: "110%", height: "110%", overflow: 'cut'
                }} src={assetUrl('../Static/flat-mountains.png')}></img>
                <RegistrationCard></RegistrationCard>
            </RegistrationBackground>
        )
    }

}
