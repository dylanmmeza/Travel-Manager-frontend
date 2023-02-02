import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRPCRedux } from 'fusion-plugin-rpc-redux-react';


import { Page, TripPage, HeaderDiv } from '../Components/TripsPage/Styles/TripPage'
import TripPageHeader from '../Components/TripsPage/TripPageHeader';
import TripsView from '../Components/TripsPage/TripsView';

class TripsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view_type_chosen: 'List',
            list_type_chosen: "My Trips",
            trip_chosen: 0,
            list_type_options: [{
                label: 'My Trips',
                value: 1,
            }, {
                label: 'Joined Trips',
                value: 2,
            }, {
                label: 'Pending Trips',
                value: 3,
            }],
            view_type_options: [{
                label: 'List',
                value: 1,
            }, {
                label: 'Map',
                value: 2,
            }, {
                label: 'Calendar',
                value: 3,
            }]
        };
        this.toggle_list_type = this.toggle_list_type.bind(this);
        this.toggle_view_type = this.toggle_view_type.bind(this);
        this.toggleTrip = this.toggleTrip.bind(this);
    };

    componentDidMount() {
        const {
            my_trips,
            joined_trips,
            pending_trips,
            loaded,
            loading,
        } = this.props;

        if (!loaded && !loading) {
            my_trips()
            joined_trips();
            pending_trips();
        }
    }

    toggle_list_type(tab_name) {
        this.setState({
            list_type_chosen: tab_name,
            trip_chosen: 0
        });
    }

    toggle_view_type(tab_name) {
        this.setState({
            view_type_chosen: tab_name,
            trip_chosen: 0
        });
    }

    toggleTrip(trip_uuid) {
        const { trip_details, TripDetails } = this.props
        this.setState({ trip_chosen: trip_uuid });

        if (trip_uuid != "create") {
            if (TripDetails[trip_uuid] == undefined)
                trip_details({ trip_uuid: trip_uuid });
        }
    }

    render() {
        const {
            MyTripList,
            JoinedTripList,
            PendingTripList
        } = this.props

        let currentList;

        if (this.state.list_type_chosen == 'My Trips') {
            currentList = MyTripList
        } else if (this.state.list_type_chosen == 'Joined Trips') {
            currentList = JoinedTripList
        } else if (this.state.list_type_chosen == 'Pending Trips') {
            currentList = PendingTripList
        }
        // currentList.custom_sort_list()

        return (
            <Page className="Page" >
                <TripPage className="TripPage">
                    <TripPageHeader
                        className="TripHeader"
                        view_type_options={this.state.view_type_options}
                        view_type_chosen={this.state.view_type_chosen}
                        toggle_view_type={this.toggle_view_type}

                        list_type_options={this.state.list_type_options}
                        list_type_chosen={this.state.list_type_chosen}
                        toggle_list_type={this.toggle_list_type}

                        toggleTrip={this.toggleTrip}
                    >
                    </TripPageHeader>

                    <TripsView
                        view_type_chosen={this.state.view_type_chosen}
                        list_type_chosen={this.state.list_type_chosen}
                        currentList={currentList}
                        toggleTrip={this.toggleTrip}
                        trip_chosen={this.state.trip_chosen}
                    >
                    </TripsView>
                </TripPage>
            </Page >
        )
    }
};


const rpcs = [
    withRPCRedux("my_trips"),
    withRPCRedux("joined_trips"),
    withRPCRedux("pending_trips"),
    withRPCRedux("trip_details"),
];

const mapStateToProps = (state, ownProps) => {
    const {
        loading: loading,
        loadError: loadError,
        loaded: loaded,
        MyTripList: MyTripList,
        JoinedTripList: JoinedTripList,
        PendingTripList: PendingTripList,
        TripDetails: TripDetails,
        creatingTrip: creatingTrip,
        createdTrip: createdTrip

    } = state.Trips;

    return {
        ...ownProps,
        loading,
        loadError,
        loaded,
        MyTripList,
        JoinedTripList,
        PendingTripList,
        TripDetails,
        createdTrip,
        creatingTrip,
    };
};

const hoc = compose(
    ...rpcs,
    connect(mapStateToProps),
);

export default hoc(TripsPage);