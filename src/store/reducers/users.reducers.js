import { UsersTypes } from "../types/users.types";

const INITIAL_STATE = []

export const usersReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UsersTypes.GET_USER:
            console.log(action)
            return action.payload;
        default:
            return state;
    }
}