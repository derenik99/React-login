import { UsersTypes } from "../types/users.types"

export const getUsers = (users) => {
    return {
        type: UsersTypes.GET_USER,
        payload: users,
    }
}