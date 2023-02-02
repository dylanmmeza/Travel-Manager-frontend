import { combineReducers } from 'redux';

import Trips from './trip_reducer';
import users from './user_reducer';
import Destinations from './destination_reducer';


export default combineReducers({
    Trips,
    users,
    Destinations
});