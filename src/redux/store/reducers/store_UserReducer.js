const defaultState = {
    user_data: []
}

const SET_USER_DATA = "GET_USER_DATA"
const DELETE_USER_DATA = "DELETE_USER_DATA"

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, user_data: action.payload}
        case DELETE_USER_DATA:
            return {...state, user_data: []}
        default:
            return state
    }
}

export const set_userData = (payload) => ({type: SET_USER_DATA, payload})
export const delete_userData = () => ({type: DELETE_USER_DATA})