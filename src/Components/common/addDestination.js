import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRPCRedux } from 'fusion-plugin-rpc-redux-react';
import MoveableModal from './MoveableModal';
import { styled } from 'styletron-react';
import Icon from './icons';

const AddDestinationModalDiv = styled('div', {
    width: '100%',
    height: '88%',
    // border: '1px solid',
    display: 'flex',
    flexDirection: 'column',
    gap: '2%'
})

const SearchDestinationInputStyle = {
    width: '90%',
    height: '100%',
    border: '0px',
    boxSizing: 'border-box',
    backgroundColor: '#E9E9E9',
    fontSize: '18px'
}

const DestinationSuggestionListDiv = styled('div', {
    width: '100%',
    height: '90%',
    overflowY: 'scroll',
    overflowX: 'hidden',
})

const DestinationSuggestionBlock = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0% 10%',
    alignItems: 'center',
    width: '100%',
    height: '20%',
    border: '1px solid',
    boxSizing: 'border-box',
})


class AddDestination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            temp_des_list: [],
            destinations_added: [],
            sort_type: 'reverse-active',
            trip_destinations: []
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.getDestinations = this.getDestinations.bind(this);
        this.processChange = this.processChange.bind(this);
        this.addDestinationToTrip = this.addDestinationToTrip.bind(this);
        this.RemoveDestinationFromTrip = this.RemoveDestinationFromTrip.bind(this);
        this.sortList = this.sortList.bind(this);
    }

    componentDidMount() {
        const { TripDetails, trip_uuid_chosen } = this.props

        this.setState({
            trip_destinations: TripDetails[trip_uuid_chosen].trip.destinations,
        })
    }

    componentDidUpdate(prevProps) {
        const {
            DestinationsList,
            updated,
            TripDetails,
            trip_uuid_chosen,
            HideModal
        } = this.props

        if (prevProps.DestinationsList !== this.props.DestinationsList) {
            this.setState({
                temp_des_list: DestinationsList
            })
        }

        if (updated && prevProps.TripDetails !== this.props.TripDetails) {
            this.setState({
                trip_destinations: TripDetails[trip_uuid_chosen].trip.destinations
            })

        }

        if (prevProps.ModalView !== this.props.ModalView) {
            this.setState({
                temp_des_list: []
            })
        }

        if (prevProps.trip_uuid_chosen !== this.props.trip_uuid_chosen) {
            () => { HideModal }
        }

    }

    handleSearchChange(event) {
        this.setState({ searchText: event.target.value });
        this.processChange();
    }

    getDestinations() {
        const {
            get_destinations
        } = this.props
        get_destinations({ searchText: this.state.searchText })
    }

    addDestinationToTrip(destination, trip_uuid_chosen) {
        const { add_destination, } = this.props

        add_destination({ destination_uuid: destination.destination_uuid, trip_uuid: trip_uuid_chosen })

        this.setState({
            destinations_added: [...this.state.destinations_added,
            destination.destination_name
            ]
        })
    }

    RemoveDestinationFromTrip(destination, trip_uuid_chosen) {
        const { remove_destination } = this.props

        remove_destination({ destination_uuid: destination.destination_uuid, trip_uuid: trip_uuid_chosen })

        this.setState(prevState => {
            return { destinations_added: prevState.destinations_added.filter(item => item !== destination.destination_name) }
        });
    }

    sortList() {
        let sorted_list;
        if (this.state.sort_type === "active") {
            this.setState({ sort_type: 'reverse-active' })

            sorted_list = [...this.state.temp_des_list].sort((a, b) => {
                const aIndex = this.state.trip_destinations.findIndex(item => item.destination_uuid === a.destination_uuid);
                const bIndex = this.state.trip_destinations.findIndex(item => item.destination_uuid === b.destination_uuid);
                return aIndex - bIndex;
            });
        }

        if (this.state.sort_type === 'reverse-active') {
            this.setState({ sort_type: 'active' })

            sorted_list = [...this.state.temp_des_list].sort((a, b) => {
                const aIndex = this.state.trip_destinations.findIndex(item => item.destination_uuid === a.destination_uuid);
                const bIndex = this.state.trip_destinations.findIndex(item => item.destination_uuid === b.destination_uuid);
                return bIndex - aIndex;


            });
        }
        this.setState({ temp_des_list: sorted_list });
    }

    processChange = debounce(() => { { this.getDestinations() } });

    render() {
        const {
            ModalView,
            HideDestinationModal,
            trip_uuid_chosen,
        } = this.props

        const des = this.state.temp_des_list.map((d) => {
            return (
                <DestinationSuggestionBlock>
                    <div className='destination_name'>
                        {d.destination_name},
                    </div>
                    <div className='destination_country'>
                        {d.destination_country}
                    </div>
                    <Icon
                        selectedValue={this.state.trip_destinations.some(item => item.destination_uuid === d.destination_uuid) ? 'circle-xmark' : 'circle-plus'}
                        selectedStyle={this.state.trip_destinations.some(item => item.destination_uuid === d.destination_uuid) ? '#FF6D6D' : '#1DD300'}
                        selectedSize={'1x'}
                        selectedFn={this.state.trip_destinations.some(item => item.destination_uuid === d.destination_uuid) ? () => { this.RemoveDestinationFromTrip(d, trip_uuid_chosen) } : () => { this.addDestinationToTrip(d, trip_uuid_chosen) }}
                    ></Icon>
                </DestinationSuggestionBlock >)
        })



        if (ModalView) {
            return (
                <MoveableModal HideModal={HideDestinationModal}>
                    <AddDestinationModalDiv>
                        <div className='SearchRowWrapper' style={{ display: 'flex', height: '10%', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <input type="text" name="trip_name" placeholder='Search Destination' style={SearchDestinationInputStyle} onKeyUp={this.handleSearchChange} required />
                            <Icon
                                selectedValue={'bars'}
                                selectedStyle={'black'}
                                selectedSize={'1x'}
                                selectedFn={this.sortList}
                            ></Icon>
                        </div>
                        <DestinationSuggestionListDiv>
                            {des}
                        </DestinationSuggestionListDiv>
                    </AddDestinationModalDiv>
                </MoveableModal >
            )
        }
        else { return null }
    }
};



function debounce(func, timeout = 150) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}
const rpcs = [
    withRPCRedux("get_destinations"),
    withRPCRedux('add_destination'),
    withRPCRedux('remove_destination')

];

const mapStateToProps = (state, ownProps) => {
    const {
        fetchingDestinations: fetchingDestinations,
        fetchedDestinations: fetchedDestinations,
        destinatonError: destinatonError,
        DestinationsList: DestinationsList
    } = state.Destinations;

    const {
        updating: updating,
        updated: updated,
        TripDetails: TripDetails,
    } = state.Trips;

    return {
        ...ownProps,
        fetchingDestinations,
        fetchedDestinations,
        destinatonError,
        DestinationsList,
        updating,
        updated,
        TripDetails
    };
};

const hoc = compose(
    ...rpcs,
    connect(mapStateToProps),
);

export default hoc(AddDestination);