import {createSlice} from "@reduxjs/toolkit";


const Slice_TestForm = createSlice({
    name: "test_from_slice",
    initialState: {
        test: [],
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
        },
        set_is_active_task(state, action) {
            state.activeTask = action.payload
        }
    }
})

export default Slice_TestForm.reducer

export const {
    set_test,
    save_task,
    set_is_active_task
} = Slice_TestForm.actions