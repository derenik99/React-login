import { combineReducers } from 'redux';
import { userProfileReducer } from './userProfile';
import { usersReducer } from './users.reducers';

export default combineReducers( {
    profile: userProfileReducer, 
    users: usersReducer
});