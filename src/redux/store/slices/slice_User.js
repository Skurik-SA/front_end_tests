import {createSlice} from "@reduxjs/toolkit";


const Slice_User = createSlice({
    name: "user_slice",
    initialState: {
        user_data: {
            username: "",
            is_teacher: false,
            email: "",
            first_name: "",
            sur_name: "",
            last_name: "",
            phone_number: "",
            classroom_groups: [],
        },
        input_username: "",
        input_first_name: "",
        input_sur_name: "",
        input_last_name: "",
        input_phone_number: "",
        input_email: "",
        groups: [],
        students_data: [],
        is_auth: false,
    },
    reducers: {
        set_user_data(state, action) {
                state.user_data = action.payload
                state.input_username = action.payload.username
                state.input_first_name = action.payload.first_name
                state.input_sur_name = action.payload.sur_name
                state.input_last_name = action.payload.last_name
                state.input_phone_number = action.payload.phone_number
                state.input_email = action.payload.email
        },
        set_user_groups(state, action) {
            state.groups = action.payload
        },
        delete_user_data(state, action) {
            state.user_data = {}
        },
        change_user_firstname(state, action) {
            state.input_first_name = action.payload.first_name
        },
        change_user_surname(state, action) {
            state.input_sur_name = action.payload.sur_name
        },
        change_user_lastname(state, action) {
            state.input_last_name = action.payload.last_name
        },
        change_user_phoneNumber(state, action) {
            state.input_phone_number = action.payload.phone_number
        },
        change_user_email(state, action) {
            state.input_email = action.payload.email
        },
        save_user_changes(state, action) {
            state.user_data = {
                username: state.user_data.username,
                is_teacher: state.user_data.is_teacher,
                email: state.input_email,
                first_name: state.input_first_name,
                sur_name: state.input_sur_name,
                last_name: state.input_last_name,
                phone_number: state.input_phone_number,
            }
        },
        set_students_data(state, action) {
            state.students_data = action.payload
        }
    }
})

export default Slice_User.reducer

export const {
    set_user_data,
    set_user_groups,
    delete_user_data,
    change_user_firstname,
    change_user_surname,
    change_user_lastname,
    change_user_phoneNumber,
    change_user_email,
    save_user_changes,
    set_students_data,
} = Slice_User.actions