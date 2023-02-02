import React, { Component } from 'react';
import Icon from '../common/icons';
import { FDdiv, FDHeader, FDHeaderName, FDIcon1, FDIcon2, FDList } from './Styles/ES_styles';
import DestinationBlock from '../common/destination_block';
import { FilterBlock } from './Styles/Filters';
import AddDestination from '../common/addDestination';
import AddTrip from '../common/addTrip';
import MyMap from './Maps/basic_map';

class FDComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            DestinationModalView: false,
            DestinationMapModalView: false,

        };
        this.ShowDestinationModal = this.ShowDestinationModal.bind(this);
        this.HideDestinationModal = this.HideDestinationModal.bind(this);
        this.ShowDestinationMapModal = this.ShowDestinationMapModal.bind(this);
        this.HideDestinationMapModal = this.HideDestinationMapModal.bind(this);

    }

    ShowDestinationModal() {
        this.setState({ DestinationModalView: true });
    }
    HideDestinationModal() {
        this.setState({ DestinationModalView: false });
    }

    ShowDestinationMapModal() {
        this.setState({ DestinationMapModalView: true });
    }
    HideDestinationMapModal() {
        this.setState({ DestinationMapModalView: false });
    }

    render() {
        const {
            header_icon_one,
            header_name,
            header_icon_two,
            fd_list,
            type,
            trip_uuid_chosen
        } = this.props;

        let list;
        let Modal;
        let MapModal;
        if (type == "destination") {
            list = fd_list.map((row) => {
                return <DestinationBlock destination_name={row.destination_name}></DestinationBlock>
            })
            Modal =
                <AddDestination trip_uuid_chosen={trip_uuid_chosen} ModalView={this.state.DestinationModalView} HideDestinationModal={this.HideDestinationModal}></AddDestination>

            MapModal = <MyMap trip_destinations={fd_list} ModalView={this.state.DestinationMapModalView} HideDestinationModal={this.HideDestinationMapModal}></MyMap>
        }

        if (type === 'filters') {
            list = fd_list.map((row) => {
                // return <FilterBlock left_side={row.tag_left} right_side={row.tag_right} tag_value={row.tag_value}></FilterBlock>
                return (
                    <FilterBlock>
                        <FilterNameLeft>

                        </FilterNameLeft>
                        <Slider
                            defaultValue={row.defaultValue || 50}
                            marks={row.marks}
                            step={1}
                        >
                        </Slider >
                        <FilterNameRight>

                        </FilterNameRight>
                    </FilterBlock>
                )
            });
        }

        return (
            <FDdiv>
                <FDHeader>
                    <FDIcon1>
                        <Icon
                            selectedValue={header_icon_one.selectedValue}
                            selectedStyle={header_icon_one.selectedStyle}
                            selectedSize={header_icon_one.selectedSize}
                            selectedFn={!this.state.DestinationMapModalView ? this.ShowDestinationMapModal : this.HideDestinationMapModal}
                        ></Icon>
                        {MapModal}
                    </FDIcon1>
                    <FDHeaderName>
                        {header_name}
                    </FDHeaderName>
                    <FDIcon2>
                        <Icon
                            selectedValue={header_icon_two.selectedValue}
                            selectedStyle={header_icon_two.selectedStyle}
                            selectedSize={header_icon_two.selectedSize}
                            selectedFn={!this.state.DestinationModalView ? this.ShowDestinationModal : this.HideDestinationModal}
                        ></Icon>
                        {Modal}
                    </FDIcon2>

                </FDHeader>
                <FDList>
                    {list}
                </FDList>
            </FDdiv >
        )
    }
}

export default FDComponent;