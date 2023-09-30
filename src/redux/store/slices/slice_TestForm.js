import {createSlice} from "@reduxjs/toolkit";


const Slice_TestForm = createSlice({
    name: "test_from_slice",
    initialState: {
        test: [],
        test_id: -1,
        answers: [],
        activeTask: {}
    },
    reducers: {
        set_test(state, action) {
            state.test = action.payload
        },
        save_task(state, action) {
            state.test = action.payload.test.map(
                                item =>
                                    item.id === action.payload.active_id
                                        ? {...item, answer: action.payload.inputValue}
                                        : item
                            )
            state.answers = state.test.map(t => t.answer)
        },
        set_is_active_task(state, action) {
            state.activeTask = action.payload
        },
        set_test_id(state, action) {
            state.test_id = action.payload
        },
        clear_personal_test(state, action) {
            state.test = []
        },
        send_data_to_check_test(state, action) {
            state.answers = state.test.map(t => t.answer)
        }
    }
})

export default Slice_TestForm.reducer

export const {
    set_test,
    save_task,
    set_is_active_task,
    set_test_id,
    clear_personal_test,
    send_data_to_check_test
} = Slice_TestForm.actions