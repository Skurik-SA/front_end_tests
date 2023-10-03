import {createSlice} from "@reduxjs/toolkit";


const Slice_Analytics = createSlice({
    name: "personal_tests_slice",
    initialState: {
        data: {}
    },
    reducers: {
        set_analytics(state, action) {
            state.data = action.payload
        },

    }
})

export default Slice_Analytics.reducer

export const {
    set_analytics,
} = Slice_Analytics.actions