import React from "react";
import { TripHeader } from "./Styles/TripPage";
import TabBar from '../common/tab-bar'
import SearchBar from "../common/search";
import { ViewTypeTabBarStyle, ViewTypeTabStyle, ListTypeTabBarStyle, ListTypeTabStyle, SearchBarWrapper, AddTripButtonWrapper } from "./Styles/tripHeaderStyle";
import AddTrip from '../common/addTrip'
import Dropdown from "../common/dropdownButton";

export default class TripPageHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            TripModalView: false,
        };
        this.ShowTripnModal = this.ShowTripnModal.bind(this);
        this.HideTripnModal = this.HideTripnModal.bind(this);
    }


    ShowTripnModal() {
        this.setState({ TripModalView: true });
    }

    HideTripnModal() {
        this.setState({ TripModalView: false });
    }

    render() {
        const {
            view_type_options,
            view_type_chosen,
            toggle_view_type,
            list_type_options,
            list_type_chosen,
            toggle_list_type,
        } = this.props;


        let AddTripModal = <AddTrip TripModalView={this.state.TripModalView} HideTripnModal={this.HideTripnModal}></AddTrip>

        // const create_options=[
        //     {
        //         label
        // }
        // ]

        return (
            <TripHeader>
                <TabBar
                    tabOptions={view_type_options}
                    selectedValue={view_type_chosen}
                    selectFn={toggle_view_type}
                    styleWrapper={ViewTypeTabBarStyle}
                    styleTab={ViewTypeTabStyle}>
                </TabBar>
                <TabBar
                    tabOptions={list_type_options}
                    selectedValue={list_type_chosen}
                    selectFn={toggle_list_type}
                    styleWrapper={ListTypeTabBarStyle}
                    styleTab={ListTypeTabStyle}>
                </TabBar>
                {/* <Options>FILTERS</Options> */}
                <AddTripButtonWrapper>
                    {/* <button onClick={this.ShowTripnModal}>Add Trip</button> */}

                    <Dropdown dropdown_options={["Create Trip", "Explore Trips", "Join Trip"]} selectFn={this.ShowTripnModal}></Dropdown>

                </AddTripButtonWrapper>
                {AddTripModal}
                <SearchBarWrapper>
                    <SearchBar></SearchBar>
                </SearchBarWrapper>


            </TripHeader >
        )
    }
}