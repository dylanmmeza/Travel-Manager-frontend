import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRPCRedux } from 'fusion-plugin-rpc-redux-react';
import { useLocation } from 'fusion-plugin-react-router';


class TripDetailsPage extends React.Component {

    render() {
        const trip = this.props.location.state.trip;

        return <div> TRIP Details {trip.trip_uuid}</div>

    }
}

const rpcs = [
    withRPCRedux(""),
];

const mapStateToProps = (state, ownProps) => {
    const {
        loggedInUser: loggedInUser,
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

export default hoc(TripDetailsPage);
