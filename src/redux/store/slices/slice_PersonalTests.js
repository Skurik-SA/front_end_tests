import {createSlice} from "@reduxjs/toolkit";


const Slice_PersonalTests = createSlice({
    name: "personal_tests_slice",
    initialState: {
        personal_tests: [],
        closed_personal_test_info: {
            title: "",
            id: "",
            mark: "",
            tasks: [],
            teacher_id: "",
            tasks_amount: "",
            student_answers: [],
            answers: [],
            is_correct_answers: [],
        },
    },
    reducers: {
        get_personal_tests(state, action) {
            state.personal_tests = action.payload
        },
        set_closed_personal_test_info(state, action) {
            state.closed_personal_test_info = action.payload
        },
        clear_closed_personal_test_info(state) {
            state.closed_personal_test_info = {
                title: "",
                id: "",
                mark: "",
                tasks: [],
                teacher_id: "",
                tasks_amount: "",
                student_answers: [],
                answers: [],
                is_correct_answers: [],
            }
        }
    }
})

export default Slice_PersonalTests.reducer

export const {
    get_personal_tests,
    set_closed_personal_test_info,
    clear_closed_personal_test_info,
} = Slice_PersonalTests.actions