import axios from "axios";

const defaultState = {
    test_data: [],
    task_types: [],
    formData: []
}

const ADD_TASK_TO_TEST = "ADD_TASK_TO_TEST"
const DELETE_TASK_TO_TEST = "DELETE_TASK_TO_TEST"
const LOAD_TASK_TYPES = "LOAD_TASK_TYPES"
const SAVE_TEST_TEMPLATE = "SAVE_TEST_TEMPLATE"
const TO_EDIT = "TO_EDIT"

export default function templatePageCreateReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_TASK_TO_TEST:
            let new_val = state.task_types.filter(task => task['task_id'] == action.payload)
            return {...state, test_data: [...state.test_data, new_val[0]]}
        case DELETE_TASK_TO_TEST:
            let a = state.test_data.filter((task, index) => index !== action.payload)
            console.log(a)
            return {...state, test_data: state.test_data.filter((task, index) => index !== action.payload)}
        case LOAD_TASK_TYPES:
            return {...state, task_types: action.payload}
        case SAVE_TEST_TEMPLATE:
            const formData = {
                title: action.titleInput,
                group_id: action.groupInput,
                owner_id: localStorage.getItem('user_id'),
                tasks: state.test_data.map(task => task['task_id']),
                tasks_amount: state.test_data.length
            }
            console.log(formData)
            return {...state, formData: formData}
        case TO_EDIT:
            // let as = action.payload.tasks.map(task => state.task_types.map(type => type['task_id'] == task))
            console.log(action.payload)

            // console.log(state.task_types)
            return state
        default:
            return state
    }
}

export const templatePageCreateCreator = (payload) => ({type: ADD_TASK_TO_TEST, payload})
export const templateLoadTaskTypesCreator = (payload) => ({type: LOAD_TASK_TYPES, payload})
export const createTemplateCreator = (titleInput, groupInput) => ({type: SAVE_TEST_TEMPLATE, titleInput, groupInput})
export const deleteTaskCreator = (payload) => ({type: DELETE_TASK_TO_TEST, payload})
export const toEditCreator = (payload) => ({type: TO_EDIT, payload})