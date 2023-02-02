import React from "react";
// import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRPCRedux } from 'fusion-plugin-rpc-redux-react';

class LogoutButton extends React.Component {
    handleLogOut = () => {
        const {
            logout,
        } = this.props
        logout();
        // history.push('/login');
    }

    render() {
        return (
            <div>
                <button type="submit" onClick={this.handleLogOut}>Log out</button>
            </div >
        )

    }

}

const rpcs = [
    withRPCRedux('logout'),

];

// const mapStateToProps = (state, ownProps) => {
//     const {
//         loading: loading,
//         loadError: loadError,
//         loaded: loaded,
//         list: blocksList,
//     } = state.users;

//     return {
//         ...ownProps,
//         loading,
//         loadError,
//         loaded,
//         blocksList,
//     };
// };


const hoc = compose(
    ...rpcs,
    // connect(mapStateToProps),
);

export default hoc(LogoutButton);





