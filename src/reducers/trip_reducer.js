import { createRPCReducer } from 'fusion-plugin-rpc-redux-react';
import reduceReducers from 'reduce-reducers';


const DEFAULT_STATE = {
    MyTripList: [],
    JoinedTripList: [],
    PendingTripList: [],
    loaded: false,
    loading: false,
    loadError: null,
    TripDetails: {},

    updating: false,
    updated: false,
    updatedError: null,

    creatingTrip: false,
    createdTrip: false,
    createTripError: null

};

const DEFAULT_DETAILS_SUBSTATE = {
    loaded: false,
    loading: true,
    error: null,
    trip: null,
};

export default reduceReducers(
    state => state || DEFAULT_STATE,

    createRPCReducer("create_planned_trip", {
        start: (state, { payload }) => ({ ...state, creatingTrip: true, createTripError: null }),
        success: (state, { payload }) => ({
            ...state, creatingTrip: false, createdTrip: true, MyTripList: [...state.MyTripList, payload.trip], created_trip_uuid: payload.trip.trip_uuid
        }),
        failure: (state, { payload }) => ({ ...state, loading: false, loadError: payload.message }),
    }),

    createRPCReducer("create_unplanned_trip", {
        start: (state, { payload }) => ({ ...state, creatingTrip: true, createTripError: null }),
        success: (state, { payload }) => ({
            ...state, creatingTrip: false, createdTrip: true, MyTripList: [...state.MyTripList, payload.trip], created_trip_uuid: payload.trip.trip_uuid
        }),
        failure: (state, { payload }) => ({ ...state, loading: false, loadError: payload.message }),
    }),

    createRPCReducer("delete_trip", {
        start: (state, { payload }) => ({ ...state, updating: true, updatedError: null }),
        success: (state, { payload }) => ({
            ...state, updating: false, updated: true, MyTripList: state.MyTripList.filter(item => item.trip_uuid !== payload.trip.trip_uuid)
        }),
        failure: (state, { payload }) => ({ ...state, loading: false, loadError: payload.message }),
    }),

    createRPCReducer("my_trips", {
        start: (state, { payload }) => ({ ...state, loading: true, loadError: null }),
        success: (state, { payload }) => ({
            ...state, loading: false, loaded: true, MyTripList: payload.trips
        }),
        failure: (state, { payload }) => ({ ...state, loading: false, loadError: payload.message }),
    }),

    createRPCReducer("joined_trips", {
        start: (state, { payload }) => ({ ...state, loading: true, loadError: null }),
        success: (state, { payload }) => ({
            ...state, loading: false, loaded: true, JoinedTripList: payload.trips
        }),
        failure: (state, { payload }) => ({ ...state, loading: false, loadError: payload.message }),
    }),
    createRPCReducer("pending_trips", {
        start: (state, { payload }) => ({ ...state, loading: true, loadError: null }),
        success: (state, { payload }) => ({
            ...state, loading: false, loaded: true, PendingTripList: payload.trips
        }),
        failure: (state, { payload }) => ({ ...state, loading: false, loadError: payload.message }),
    }),
    createRPCReducer("trip_details", {
        start: (state, { payload }) => ({
            ...state,
            TripDetails: { ...state.TripDetails, [payload.trip_uuid]: { ...DEFAULT_DETAILS_SUBSTATE } },
        }),
        success: (state, { payload }) => ({
            ...state,
            TripDetails: {
                ...state.TripDetails, [payload.details.trip_uuid]: {
                    loading: false, loaded: true, error: null, trip: payload.details,
                }
            },
        }),
        failure: (state, { payload }) => ({
            ...state,
            TripDetails: {
                ...state.TripDetails,
                [payload.trip_uuid]: { trip: state.TripDetails[payload.trip_uuid].trip, loading: false, error: payload.message },
            },
        }),
    }),
    createRPCReducer("update_trip", {
        start: (state, { payload }) => ({
            ...state,
            updating: true, updatedError: null,
        }),
        success: (state, { payload }) => ({
            ...state,
            updating: false,
            updated: null,
            TripDetails: {
                ...state.TripDetails, [payload.details.trip_uuid]: {
                    loading: false, loaded: true, error: null, trip: payload.details,
                }
            },
        }),
        failure: (state, { payload }) => ({
            ...state,
            TripDetails: {
                ...state.TripDetails,
                [payload.trip_uuid]: { trip: state.TripDetails[payload.trip_uuid].trip, loading: false, error: payload.message },
            },
        }),
    }),

    createRPCReducer("add_destination", {
        start: (state, { payload }) => ({ ...state, updating: true, updatedError: null }),
        success: (state, { payload }) => ({
            ...state, updating: false, updated: true, TripDetails: {
                ...state.TripDetails, [payload.details.trip_uuid]: {
                    loading: false, loaded: true, error: null, trip: payload.details,
                }
            },
        }),
        failure: (state, { payload }) => ({ ...state, updating: false, updatedError: payload.message }),
    }),

    createRPCReducer("remove_destination", {
        start: (state, { payload }) => ({ ...state, updating: true, updatedError: null }),
        success: (state, { payload }) => ({
            ...state, updating: false, updated: true, TripDetails: {
                ...state.TripDetails, [payload.details.trip_uuid]: {
                    loading: false, loaded: true, error: null, trip: payload.details,
                }
            },
        }),
        failure: (state, { payload }) => ({ ...state, updating: false, updatedError: payload.message }),
    }),

);