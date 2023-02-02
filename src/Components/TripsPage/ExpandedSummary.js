import React from "react"
import { styled } from "styletron-react";
import { compose } from "redux";
import { connect } from 'react-redux';
import { withRPCRedux } from 'fusion-plugin-rpc-redux-react';
import { assetUrl } from 'fusion-core';

import { ExpandedSummaryDiv } from "./Styles/TripPage";
import TripDescriptionComponennt from "./TripDescriptionComponennt";
import FDComponent from "./FDComponent";

import {
    LowerDiv,
    TopDiv,
    ExpandedSummaryDate,
    ExpandedSummaryDescriptionWrapper,
    ExpandedSummaryNameDateWrapper,
    ExpandedSummaryIcon,
    ExpandedSummaryImageWrapper,
    ExpandedSummaryInfoWrapper,
    ExpandedSummaryName,
    ExpandedSummaryTitleWrapper,
    EditButton,
} from "./Styles/ES_styles";

import Icon from "../common/icons";
import { convertToDateRange } from "../../utils/convert_time";
import AddDestination from "../common/addDestination";

export default class TripExpandedSummary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            temp_des_list: []
        };
    }

    renderExpandedSummary() {
        const {
            ExpandedSummary
        } = this.props;

        let trip = ExpandedSummary.trip
        return (
            <ExpandedSummaryDiv className="ExpandedSummary">
                <TopDiv className="TopDiv">
                    <ExpandedSummaryImageWrapper className="ExpandedSummaryImageWrapper">
                        <img style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: '10px',
                        }} src={assetUrl('../../Static/image.jpg')}></img>
                    </ExpandedSummaryImageWrapper>
                    <ExpandedSummaryInfoWrapper className="ExpandedSummaryInfoWrapper">
                        <ExpandedSummaryTitleWrapper className="ExpandedSummaryTitleWrapper">
                            <ExpandedSummaryNameDateWrapper className="ExpandedSummaryNameDateWrapper">
                                <ExpandedSummaryName to={{ pathname: `/trips/${trip.trip_uuid}`, state: { trip } }}>
                                    {trip.trip_name}
                                </ExpandedSummaryName>

                                <ExpandedSummaryDate>
                                    {convertToDateRange(trip.start_time, trip.end_time)}
                                </ExpandedSummaryDate>
                            </ExpandedSummaryNameDateWrapper>

                            <ExpandedSummaryIcon>
                                <Icon
                                    selectedValue={trip.trip_icon}
                                    selectedStyle={trip.trip_icon_color}
                                    selectedSize={'3x'}>
                                </Icon>

                            </ExpandedSummaryIcon>
                        </ExpandedSummaryTitleWrapper>

                        <TripDescriptionComponennt trip_description={trip.trip_description} trip_uuid={trip.trip_uuid}>

                        </TripDescriptionComponennt>

                    </ExpandedSummaryInfoWrapper>
                </TopDiv>
                <LowerDiv>
                    <FDComponent
                        header_icon_one={{ selectedValue: 'map', selectedStyle: 'black', selectedSize: '1x' }}
                        header_icon_two={{ selectedValue: 'circle-plus', selectedStyle: 'black', selectedSize: '1x' }}
                        header_name='DESTINATIONS'
                        fd_list={trip.destinations.sort((a, b) => a.destination_name.localeCompare(b.destination_name))
                        }
                        type="destination"
                        trip_uuid_chosen={trip.trip_uuid}
                    ></FDComponent>
                    <FDComponent
                        header_icon_one={{ selectedValue: 'map', selectedStyle: 'black', selectedSize: '1x' }}
                        header_icon_two={{ selectedValue: 'circle-plus', selectedStyle: 'black', selectedSize: '1x' }}
                        header_name='FILTERS'
                        fd_list={trip.tags}
                        type="filters"
                    ></FDComponent>
                </LowerDiv>
            </ExpandedSummaryDiv >
        )

    }


    render() {
        const {
            ExpandedSummary
        } = this.props;

        if (ExpandedSummary.loaded) {
            return this.renderExpandedSummary()
        }
        else {
            return (<ExpandedSummaryDiv className="ExpandedSummary"></ExpandedSummaryDiv>)
        }
    }
}


