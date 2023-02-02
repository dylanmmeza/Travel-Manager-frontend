import React from 'react';

import { DestinationIcon1, DestinationBlockDiv, DestinationIcon2, DestinationName } from '../TripsPage/Styles/Destinations';
import Icon from './icons';

class DestinationBlock extends React.Component {

    render() {
        const {
            destination_name,
        } = this.props;
        return (
            <DestinationBlockDiv>
                <DestinationIcon1>
                    <Icon selectedValue={'map'} selectedStyle='black' selectedSize={'2x'} ></Icon>
                    <Icon ></Icon>
                </DestinationIcon1>
                <DestinationName>
                    {destination_name}
                </DestinationName>
                <DestinationIcon2>
                    {/* <Icon selectedValue={'sun'} selectedStyle='black' selectedSize={'2x'} ></Icon> */}
                </DestinationIcon2>
            </DestinationBlockDiv>)
    }
}

export default DestinationBlock