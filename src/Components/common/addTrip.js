import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRPCRedux } from 'fusion-plugin-rpc-redux-react';
import MoveableModal from './MoveableModal';


const modalContent = {
    height: '100%',
    width: '100%',
    backgroundColor: 'yellow',
    padding: '20px',
    border: '1px solid',
    borderRadius: '4px',
}

class AddTrip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            trip_name: '',
            trip_descritpion: '',
            trip_start_date: null,
            trip_end_date: null,
            num_people: 0,
            publicTrip: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClick() {
        this.setState({ showModal: true });
    }

    handleClose() {
        this.setState({ showModal: false });
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { trip_name, trip_descritpion, trip_start_date, trip_end_date, num_people, publicTrip } = this.state;

        const {
            create_planned_trip,
            create_unplanned_trip
        } = this.props;

        this.setState({ showModal: false });

        if (trip_start_date == null && trip_end_date == null) {
            create_unplanned_trip({
                trip_name: trip_name,
                trip_descritpion: trip_descritpion,
                trip_img: 'default',
                num_people: num_people,
                public: publicTrip == "on" ? true : false
            })
        }
        else {
            create_planned_trip({
                trip_name: trip_name,
                trip_descritpion: trip_descritpion,
                trip_img: 'default',
                start_time: trip_start_date,
                end_time: trip_end_date,
                num_people: num_people,
                public: publicTrip == "on" ? true : false
            })

        }
    }

    render() {
        const { TripModalView, HideTripnModal } = this.props
        if (TripModalView) {
            return (
                <MoveableModal HideModal={HideTripnModal}>
                    <form onSubmit={this.handleFormSubmit}>
                        <label>Trip Name</label>
                        <input type="text" name="trip_name" placeholder='Trip Name' onChange={this.handleInputChange} required />
                        <br></br ><br></br>

                        <label>Trip Description</label>
                        <input type="text" name="trip_descritpion" placeholder='Trip Description' onChange={this.handleInputChange} required />
                        <br></br ><br></br>

                        <label>Trip Start Date</label>
                        <input type="date" name="trip_start_date" placeholder='Trip Start Date' onChange={this.handleInputChange} />
                        <br></br ><br></br>

                        <label>Trip End Date</label>
                        <input type="date" name="trip_end_date" placeholder='Trip End Date' onChange={this.handleInputChange} />
                        <br></br ><br></br>

                        <label>Number People</label>
                        <input type="number" name="num_people" placeholder='Number People' onChange={this.handleInputChange} />
                        <br></br ><br></br>

                        <label>Public?</label>
                        <input type="checkbox" name="publicTrip" onChange={this.handleInputChange} />
                        <br></br ><br></br>

                        {/* <label>Trip Image</label>
                                <input type='image' placeholder='Trip Image'></input> */}

                        <button type='submit'>Submit</button>

                    </form>
                </MoveableModal >
            )
        }
        else { return null }
    }
};


const rpcs = [
    withRPCRedux("create_planned_trip"),
    withRPCRedux("create_unplanned_trip"),
];

const mapStateToProps = (state, ownProps) => {
    const {
        creatingTrip: creatingTrip,
        createdTrip: createdTrip,
    } = state.Trips;

    return {
        ...ownProps,
        creatingTrip,
        createdTrip,
    };
};

const hoc = compose(
    ...rpcs,
    connect(mapStateToProps),
);

export default hoc(AddTrip);