import {createSlice} from "@reduxjs/toolkit";


const Slice_Navigation = createSlice({
    name: "navigation_slice",
    initialState: {
        active_tab: 0,
    },
    reducers: {
        set_active_tab(state, action) {
            state.active_tab = action.payload
        }
    }
})

export default Slice_Navigation.reducer

export const {
    set_active_tab
} = Slice_Navigation.actions