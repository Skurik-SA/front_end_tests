import {createSlice} from "@reduxjs/toolkit";


const Slice_ModifyTemplates = createSlice({
    name: "create_custom_templates_slice",
    initialState: {
        test_data: [], //Front Data
        task_types: [],
        formData: [],

        title_value: "",
        group_value: "",
    },
    reducers: {
        add_task_to_test(state, action) {
            state.test_data.push(state.task_types.filter(task => task['task_id'] == action.payload)[0])
        },
        add_task_to_test_from_db(state, action) {
            let newArr = []

            for (let i = 0; i < action.payload.tasks.length; i++)
            {
                newArr.push(state.task_types.filter(task => task['task_id'] == action.payload.tasks[i])[0])
            }

            const newFormData = {
                title: action.payload.title,
                group_id: action.payload.group_id,
                owner_id: action.payload.owner_id,
                tasks: newArr.map(task => task['task_id']),
                tasks_description: newArr.map(task => task['name']),
                tasks_amount: newArr.length
            }

            state.test_data = newArr
            state.formData = newFormData
            state.title_value = action.payload.title
            state.group_value = action.payload.group_id
        },
        delete_task_to_test(state, action) {
            state.test_data = state.test_data.filter((task, index) => index !== action.payload)
        },
        load_task_types(state, action) {
            state.task_types = action.payload
        },
        save_test_template(state, action) {
            state.formData = {
                title: state.title_value,
                group_id: state.group_value,
                owner_id: localStorage.getItem('user_id'),
                tasks: state.test_data.map(task => task['task_id']),
                tasks_description: state.test_data.map(task => task['name']),
                tasks_amount: state.test_data.length
            }
        },
        set_input_value(state, action) {
            state.title_value = action.payload
        },
        set_group_value(state, action) {
            state.group_value = action.payload
        },
        clear_data(state) {
            state.test_data = []
            state.formData = []
            state.title_value = ""
            state.group_value = ""
        }
    }
})

export default Slice_ModifyTemplates.reducer

export const {
    add_task_to_test,
    add_task_to_test_from_db,
    delete_task_to_test,
    load_task_types,
    save_test_template,
    set_input_value,
    set_group_value,
    clear_data
} = Slice_ModifyTemplates.actions