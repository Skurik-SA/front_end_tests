const defaultState = {
    user_data: {
        username: "",
        is_teacher: false,
        email: "",
        first_name: "",
        sur_name: "",
        last_name: "",
        phone_number: "",
        classroom_groups: [],
        groups: []
    },
    input_username: "",
    input_first_name: "",
    input_sur_name: "",
    input_last_name: "",
    input_phone_number: "",
    input_email: ""
}

const SET_USER_DATA = "GET_USER_DATA"
const DELETE_USER_DATA = "DELETE_USER_DATA"
const CHANGE_NAME = "CHANGE_NAME"
const CHANGE_SURNAME = "CHANGE_SURNAME"
const CHANGE_LASTNAME = "CHANGE_LASTNAME"
const CHANGE_PHONE_NUMBER = "CHANGE_PHONE_NUMBER"
const CHANGE_EMAIL = "CHANGE_EMAIL"
const SAVE_CHANGES = "SAVE_CHANGES"

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state,
                user_data: action.payload,
                input_username: action.payload.username,
                input_first_name: action.payload.first_name,
                input_sur_name: action.payload.sur_name,
                input_last_name: action.payload.last_name,
                input_phone_number: action.payload.phone_number,
                input_email: action.payload.email
            }
        case DELETE_USER_DATA:
            return {...state, user_data: []}
        case CHANGE_NAME:
            return {...state, input_first_name: action.payload}
        case CHANGE_SURNAME:
            return {...state, input_sur_name: action.payload}
        case CHANGE_LASTNAME:
            return {...state, input_last_name: action.payload}
        case CHANGE_PHONE_NUMBER:
            return {...state, input_phone_number: action.payload}
        case CHANGE_EMAIL:
            return {...state, input_email: action.payload}
        case SAVE_CHANGES:
            return {...state, user_data: {
                    username: state.user_data.username,
                    is_teacher: state.user_data.is_teacher,
                    email: state.input_email,
                    first_name: state.input_first_name,
                    sur_name: state.input_sur_name,
                    last_name: state.input_last_name,
                    phone_number: state.input_phone_number,
                }}
        default:
            return state
    }
}

export const set_userData = (payload) => ({type: SET_USER_DATA, payload})
export const delete_userData = () => ({type: DELETE_USER_DATA})
export const change_Name = (payload) => ({type: CHANGE_NAME, payload})
export const change_Surname = (payload) => ({type: CHANGE_SURNAME, payload})
export const change_Lastname = (payload) => ({type: CHANGE_LASTNAME, payload})
export const change_Phone_number = (payload) => ({type: CHANGE_PHONE_NUMBER, payload})
export const change_Email = (payload) => ({type: CHANGE_EMAIL, payload})
export const save_changes = () => ({type: SAVE_CHANGES})