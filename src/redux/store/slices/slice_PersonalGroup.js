import {createSlice} from "@reduxjs/toolkit";


const Slice_PersonalGroup = createSlice({
    name: "personal_group_slice",
    initialState: {
        "data": {
            "id": "",
            "group_title": "",
            "participants": []
        },
    },
    reducers: {
        set_group_data_by_id(state, action) {
            state.data = action.payload
        }
    }
})

export default Slice_PersonalGroup.reducer
export const {set_group_data_by_id} = Slice_PersonalGroup.actions