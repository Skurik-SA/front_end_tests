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
            state.personal_tests = action.payload.sort(function (a, b) {
                    if (a.is_Closed) {
                        return 1;
                    }
                    if (b.is_Closed) {
                        return -1;
                    }
                    // a должно быть равным b
                    return 0;
            })
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
        },
        clear_pt(state) {
            state.personal_tests = []
        }
    }
})

export default Slice_PersonalTests.reducer

export const {
    get_personal_tests,
    set_closed_personal_test_info,
    clear_closed_personal_test_info,
    clear_pt,
} = Slice_PersonalTests.actions