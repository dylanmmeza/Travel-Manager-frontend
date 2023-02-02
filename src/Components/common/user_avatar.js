import React from "react";
import { styled } from "styletron-react";
import { Link } from 'fusion-plugin-react-router';
import { assetUrl } from 'fusion-core';
import { connect } from 'react-redux';
import { compose } from 'redux';

const MainDiv = styled('div', ({
    width: '10%',
}));

export const ImageWrapper = styled('div', (props) => ({
    boxShadow: props.active ? '0em 0em .9em  3px grey;' : '',
    display: 'inline-block',
    position: 'relative',
    height: '70px',
    width: '70px',
    borderRadius: '50%',
    alignContent: 'center',
    overflow: 'hidden',
}));




class UserAvatar extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {

        const { PageChange, loggedInUser } = this.props
        return (
            <MainDiv>
                <Link key={'test'} to={'/AccountPage'} onClick={() => { PageChange(window.location.pathname); }}>
                    <ImageWrapper active={window.location.pathname === '/AccountPage'}>
                        <img style={{
                            width: '100%', height: "100%", borderRadius: '50%',
                        }} src={assetUrl('../../Static/image.jpg')}>

                        </img>
                    </ImageWrapper>
                </Link>
            </MainDiv>
        )
    }
}
const rpcs = [
];

const mapStateToProps = (state, ownProps) => {
    const {
        loggedInUser: loggedInUser
    } = state.users;

    return {
        ...ownProps,
        loggedInUser,

    };
};

const hoc = compose(
    ...rpcs,
    connect(mapStateToProps),
);

export default hoc(UserAvatar);