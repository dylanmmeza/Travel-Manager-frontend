import React from 'react';

import { TabIcon1Wrapper, TabIcon2Wrapper, TabNameWrapper } from '../TripsPage/Styles/Destinations';
import { FDBlockDiv } from '../TripsPage/Styles/ES_styles';

import Icon from './icons';

class FDBlock extends React.Component {
    render() {
        const {
            tab_icon_1,
            tab_icon_2,
            tab_name
        } = this.props;

        return (
            <FDBlockDiv>
                <TabIcon1Wrapper>
                    <Icon selectedValue={tab_icon_1.selectedValue || ''} selectedStyle={tab_icon_1.selectedStyle || 'grey'} selectedSize={tab_icon_1.selectedSize || '1x'} ></Icon>
                    <Icon ></Icon>
                </TabIcon1Wrapper>
                <TabNameWrapper>
                    {tab_name}
                </TabNameWrapper>
                <TabIcon2Wrapper>
                    <Icon selectedValue={tab_icon_2.selectedValue || ''} selectedStyle={tab_icon_2.selectedStyle || 'grey'} selectedSize={tab_icon_2.selectedSize || '1x'} ></Icon>
                </TabIcon2Wrapper>
            </FDBlockDiv>
        )
    }
}

export default FDBlock