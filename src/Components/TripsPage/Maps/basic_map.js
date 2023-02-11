import process from 'process';
import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import MoveableModal from '../../common/MoveableModal';

require('dotenv').config();

// const fs = require('fs');
// if (process.env.GOOGLE_MAPS_API_KEY) {
//     const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY
// }
class MapComponent extends React.Component {
    render() {
        const {
            trip_destinations
        } = this.props

        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: parseFloat(trip_destinations[0].destination_latitude), lng: parseFloat(trip_destinations[0].destination_longitude) }}
            >
                {trip_destinations.map((marker, index) => (
                    <Marker key={index} position={{ lat: parseFloat(marker.destination_latitude), lng: parseFloat(marker.destination_longitude) }} />
                ))}
            </GoogleMap>
        );
    }
}

const WrappedMap = withScriptjs(withGoogleMap(MapComponent));

class MyMap extends React.Component {
    render() {
        const { trip_destinations, ModalView, HideDestinationModal } = this.props

        if (ModalView) {
            return (
                <MoveableModal HideModal={HideDestinationModal}>
                    <WrappedMap
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${prcoess.env.GOOGLE_MAPS_API_KEY}`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div
                            style={{ height: `100%`, width: '100%' }}
                            onMouseDown={(event) => { event.stopPropagation() }}
                            onMouseMove={(event) => { event.stopPropagation() }}
                            onMouseUp={(event) => { event.stopPropagation() }}
                        />
                        }
                        mapElement={<div style={{ height: `100%` }} />}
                        trip_destinations={trip_destinations}

                    />
                </MoveableModal>
            );
        } else { return null }
    }
}

export default MyMap;
