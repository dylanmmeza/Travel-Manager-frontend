import React from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRPCRedux } from 'fusion-plugin-rpc-redux-react';

import { TripsDiv, TripListDiv, TripListSubDiv, TripListHeader, SortTypeDiv } from "./Styles/TripPage";
import SortByButton from "../common/SearchByButton";
import TripExpandedSummary from "./ExpandedSummary";
import TripBlock from "../common/trip_block";
import Icon from "../common/icons";

import { sortBySearchValue, sortBySearchValueReverse } from "../../utils/sort_list";

class TripsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortType: '',
            sortOrder: '',
            initalList: [],
            temp_list: [],
        }
        this.changeSort = this.changeSort.bind(this);
    }

    initStateFromProps() {
        const {
            currentList,
        } = this.props;

        this.setState({
            initalList: currentList,
            temp_list: currentList
        })
    }

    componentDidMount() {
        this.initStateFromProps();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentList !== this.props.currentList) {
            this.initStateFromProps();
        }
    }

    changeSort(type) {
        const { currentList } = this.props
        if (this.state.sortType == type) {
            if (this.state.sortOrder == 'Ascending') {
                this.setState({
                    temp_list: sortBySearchValueReverse(this.state.initalList, type),
                    sortOrder: 'Descending',
                })
            }
            else if (this.state.sortOrder == 'Descending') {
                this.setState({
                    temp_list: currentList,
                    sortOrder: '',
                    sortType: '',
                })
            }
        }

        else if (this.state.sortType !== type) {
            this.setState({
                temp_list: sortBySearchValue(this.state.initalList, type),
                sortType: type,
                sortOrder: 'Ascending',
            })
        }
    }

    deleteTrip(trip_uuid) {
        const {
            delete_trip
        } = this.props

        delete_trip({ trip_uuid: trip_uuid })
    }

    render() {
        const {
            view_type_chosen,
            list_type_chosen,
            // currentList,
            toggleTrip,
            TripDetails,
            trip_chosen
        } = this.props;

        if (view_type_chosen == "List") {

            if (this.state.sortOrder == 'Ascending') {
                console.log(this.state.sortType)
                console.log(this.state.sortOrder)
                console.log(this.state.temp_list)
                console.log('_______________')
            }
            if (this.state.sortOrder == 'Descending') {
                console.log(this.state.sortType)
                console.log(this.state.sortOrder)
                console.log(this.state.temp_list)
                console.log('_______________')
            }
            else {
                console.log(this.state.sortType)
                console.log(this.state.sortOrder)
                console.log(this.state.temp_list)
                console.log('_______________')
            }

            const TripList = this.state.temp_list.map((summary) => {
                return (
                    <div style={{
                        display: 'flex',
                    }}>
                        <TripBlock trip={summary} trip_chosen={trip_chosen} toggleTrip={toggleTrip} list_type_chosen={list_type_chosen} />
                        <Icon selectedValue='x' selectedFn={() => { this.deleteTrip(summary.trip_uuid) }}></Icon>
                    </div>
                );
            })

            return (
                <TripsDiv>
                    <TripListDiv>
                        <TripListHeader>
                            {/* <SortTypeDiv> */}
                            <SortByButton sortType={this.state.sortType} sortOrder={this.state.sortOrder} changeType={this.changeSort}></SortByButton>
                            {/* </SortTypeDiv> */}
                        </TripListHeader>
                        <TripListSubDiv>
                            {TripList}
                        </TripListSubDiv>
                    </TripListDiv>

                    <TripExpandedSummary ExpandedSummary={TripDetails[trip_chosen] || {}} >
                    </TripExpandedSummary>
                </TripsDiv >
            )
        }

        if (view_type_chosen == "Map")
            return (
                <TripsDiv>
                    MAP COMING SOON
                </TripsDiv>
            )
        if (view_type_chosen == "Calendar")
            return (
                <TripsDiv>
                    CALENDAR COMING SOON
                </TripsDiv>
            )

    }
}

const rpcs = [
    withRPCRedux('delete_trip')
];

const mapStateToProps = (state, ownProps) => {
    const {

        TripDetails: TripDetails
    } = state.Trips;

    return {
        ...ownProps,
        TripDetails
    };
};

const hoc = compose(
    ...rpcs,
    connect(mapStateToProps),
);

export default hoc(TripsView);