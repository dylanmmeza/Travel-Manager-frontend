import { createRPCReducer } from 'fusion-plugin-rpc-redux-react';
import reduceReducers from 'reduce-reducers';


const DEFAULT_STATE = {
    loggedInUser: null,
    loaded: false,
    loading: false,
    loadError: null,
    loginError: null
};

export default reduceReducers(
    state => state || DEFAULT_STATE,

    createRPCReducer('login', {
        start: (state, { payload }) => ({ ...state, loading: true, loadError: null }),
        success: (state, { payload }) => ({
            ...state, loading: false, loggedInUser: payload.user, loaded: true
        }),
        failure: (state, { payload }) => ({ ...state, loading: false, loginError: payload.message }),
    }),

    createRPCReducer('auth_login', {
        start: (state, { payload }) => ({ ...state, loading: true, loadError: null }),
        success: (state, { payload }) => ({
            ...state, loading: false, loggedInUser: payload.user, loaded: true
        }),
        failure: (state, { payload }) => ({ ...state, loading: false, loadError: payload.message, loaded: true }),
    }),

    createRPCReducer('logout', {
        start: (state, { payload }) => ({ ...state, loggedIn: true, loading: true, loadError: null }),
        success: (state, { payload }) => ({
            ...state, loggedIn: false, loading: false,
        }),
        failure: (state, { payload }) => ({ ...state, loading: false, loadError: payload.message }),
    }),

);