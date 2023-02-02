import { createRPCReducer } from 'fusion-plugin-rpc-redux-react';
import reduceReducers from 'reduce-reducers';


const DEFAULT_STATE = {
    fetchingDestinations: false,
    fetchedDestinations: false,
    destinatonError: null,
    DestinationsList: []
};


export default reduceReducers(
    state => state || DEFAULT_STATE,

    createRPCReducer("get_destinations", {
        start: (state, { payload }) => ({ ...state, fetchingDestinations: true, fetchedDestinations: false, destinatonError: null }),
        success: (state, { payload }) => ({
            ...state, fetchingDestinations: false, fetchedDestinations: true, DestinationsList: payload.destinations
        }),
        failure: (state, { payload }) => ({ ...state, fetchingDestinations: false, destinatonError: payload.message }),
    }),

);