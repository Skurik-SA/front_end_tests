import {createSlice} from "@reduxjs/toolkit";


const Slice_Analytics = createSlice({
    name: "personal_tests_slice",
    initialState: {
        data: {},
        is_loading: false,
    },
    reducers: {
        set_analytics(state, action) {
            state.data = action.payload
        },
        set_is_loading(state, action) {
            state.is_loading = action.payload
        }

    }
})

export default Slice_Analytics.reducer

export const {
    set_analytics,
    set_is_loading,
} = Slice_Analytics.actions