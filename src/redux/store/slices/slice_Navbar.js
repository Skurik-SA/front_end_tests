import {createSlice} from "@reduxjs/toolkit";


const Slice_Navbar = createSlice({
    name: "navbar_slice",
    initialState: {
        navbar_link: [],
    },
    reducers: {
        set_navbar_link(state, action) {
            state.navbar_link = action.payload
        }
    }
})

export default Slice_Navbar.reducer;
export const {set_navbar_link} = Slice_Navbar.actions