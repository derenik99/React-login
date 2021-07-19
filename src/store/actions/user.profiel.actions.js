import { UserProfileTypes } from "../types/userProfile.types"

export const getProfile = (profile) => {
    return {
        type: UserProfileTypes.GET_USER,
        payload: profile,
    }
}