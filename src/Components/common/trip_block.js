import React from 'react';
import { assetUrl } from 'fusion-core';

import Icon from './icons';
import {
    TripIconWrapper,
    TripImageWrapper,
    TripNameWrapper,
    TripDateWrapper,
    TripBlockDiv,
    InfoDiv,
    NameIconDiv,
    ShareDiv,
    TripOwnerWrapper,
    TripNumPeople,
    AttendeeCount,
    Attendees,
    ShareButton,
    AttendeesDiv
} from '../TripsPage/Styles/TripBlock'

import { convertToDateRange } from '../../utils/convert_time';



class TripBlock extends React.Component {

    render() {
        const {
            trip, trip_chosen, toggleTrip, list_type_chosen
        } = this.props;

        const attendees = trip.authorized_users.map((user) => {
            return <Attendees>{user.first_name[0] + user.last_name[0]}</Attendees>
        });

        return (
            <TripBlockDiv active={trip_chosen === trip.trip_uuid} onClick={() => { toggleTrip(trip.trip_uuid) }}>
                <TripImageWrapper>
                    <img style={{
                        width: "100%", height: "100%", borderRadius: '10px',
                    }} src={assetUrl('../../Static/image.jpg')}></img>
                </TripImageWrapper>
                <InfoDiv>
                    <NameIconDiv>
                        <div></div>
                        <TripNameWrapper >{trip.trip_name}</TripNameWrapper>
                        <TripIconWrapper>
                            <Icon selectedValue={trip.trip_icon} selectedStyle={trip.trip_icon_color} selectedSize={'2x'}></Icon>
                        </TripIconWrapper>
                    </NameIconDiv>
                    <TripDateWrapper>{convertToDateRange(trip.start_time, trip.end_time)}</TripDateWrapper>
                    <TripOwnerWrapper>{list_type_chosen !== "My Trips" ? '@' + trip.trip_owner.username : '...'}</TripOwnerWrapper>
                    <ShareDiv>
                        <AttendeeCount>
                            <Icon selectedValue={'user'} selectedStyle={'dark-grey'} selectedSize={'1x'}></Icon>
                            <TripNumPeople> {trip.num_people}</TripNumPeople>
                        </AttendeeCount>
                        <AttendeesDiv>
                            {attendees}
                        </AttendeesDiv>

                        <ShareButton>Share</ShareButton>

                    </ShareDiv>
                </InfoDiv>
            </TripBlockDiv >
        )
    }
}

export default TripBlock