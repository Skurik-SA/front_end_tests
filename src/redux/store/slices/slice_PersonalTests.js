import {createSlice} from "@reduxjs/toolkit";


const Slice_PersonalTests = createSlice({
    name: "personal_tests_slice",
    initialState: {
        personal_tests: [],
    },
    reducers: {
        get_personal_tests(state, action) {
            state.personal_tests = action.payload
        },
    }
})

export default Slice_PersonalTests.reducer

export const {
    get_personal_tests,
} = Slice_PersonalTests.actions