import { bindActionCreators } from "redux"
import { UserProfileTypes } from "../types/userProfile.types"

const INITIAL_STATE = {}

export const userProfileReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserProfileTypes.GET_USER:
            return action.payload;
        default:
            return state;
    }
}