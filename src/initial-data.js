import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRPCRedux } from 'fusion-plugin-rpc-redux-react';

import { Link } from 'fusion-plugin-react-router';
import AuthorizationPage from './pages/AuthorizationPage';


class AuthWrapper extends React.Component {
    componentDidMount() {
        const {
            auth_login,
            loaded,
        } = this.props
        if (!loaded) {
            auth_login()
        }
    }

    render() {
        const {
            loggedInUser,
            children,
            loaded
        } = this.props

        if (!loaded) {
            return <div>loading...</div>
        }
        if (!loggedInUser) {
            return (<AuthorizationPage></AuthorizationPage>)
        }
        return <div style={{
            width: '100%', height: '100%'
        }}> {children}</div >

    }
}

const rpcs = [
    withRPCRedux("auth_login"),
];

const mapStateToProps = (state, ownProps) => {
    const {
        loggedInUser: loggedInUser,
        loaded: loaded
    } = state.users;

    return {
        ...ownProps,
        loggedInUser,
        loaded,
    };
};

const hoc = compose(
    ...rpcs,
    connect(mapStateToProps),
);

export default hoc(AuthWrapper);
