const defaultState = {
    test_data: [], //Front Data
    task_types: [],
    formData: [],

    title_value: "",
    group_value: "",
}

const ADD_TASK_TO_TEST = "ADD_TASK_TO_TEST"
const ADD_TASK_TO_TEST_FROM_DB = "ADD_TASK_TO_TEST_FROM_DB"
const DELETE_TASK_TO_TEST = "DELETE_TASK_TO_TEST"
const LOAD_TASK_TYPES = "LOAD_TASK_TYPES"
const SAVE_TEST_TEMPLATE = "SAVE_TEST_TEMPLATE"
const TO_EDIT = "TO_EDIT"
const CLEAR_DATA = "CLEAR_DATA"
const SET_INPUT_VALUE = "SET_INPUT_VALUE"
const SET_GROUP_VALUE = "SET_GROUP_VALUE"

export default function templatePageCreateReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_TASK_TO_TEST:
            let new_val = state.task_types.filter(task => task['task_id'] == action.payload)
            return {...state, test_data: [...state.test_data, new_val[0]]}
        case ADD_TASK_TO_TEST_FROM_DB:
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
            return {
                ...state,
                test_data: newArr,
                formData: newFormData,
                title_value: action.payload.title,
                group_value: action.payload.group_id
            }
        case DELETE_TASK_TO_TEST:
            let a = state.test_data.filter((task, index) => index !== action.payload)
            console.log(a)
            return {...state, test_data: state.test_data.filter((task, index) => index !== action.payload)}
        case LOAD_TASK_TYPES:
            return {...state, task_types: action.payload}
        case SAVE_TEST_TEMPLATE:
            const formData = {
                title: state.title_value,
                group_id: state.group_value,
                owner_id: localStorage.getItem('user_id'),
                tasks: state.test_data.map(task => task['task_id']),
                tasks_description: state.test_data.map(task => task['name']),
                tasks_amount: state.test_data.length
            }
            console.log(formData)
            return {...state, formData: formData}
        case TO_EDIT:
            // let as = action.payload.tasks.map(task => state.task_types.map(type => type['task_id'] == task))
            console.log(action.payload)

            // console.log(state.task_types)
            return state
        case SET_INPUT_VALUE:
            return {...state, title_value: action.payload}
        case SET_GROUP_VALUE:
            return {...state, group_value: action.payload}
        case CLEAR_DATA:
            return {
                ...state,
                test_data: [],
                formData: [],
                title_value: "",
                group_value: "",
            }
        default:
            return state
    }
}

export const templatePageCreateCreator = (payload) => ({type: ADD_TASK_TO_TEST, payload})
export const addTaskToTestFromDBCreator = (payload) => ({type: ADD_TASK_TO_TEST_FROM_DB, payload})
export const templateLoadTaskTypesCreator = (payload) => ({type: LOAD_TASK_TYPES, payload})
export const createTemplateCreator = () => ({type: SAVE_TEST_TEMPLATE})
export const deleteTaskCreator = (payload) => ({type: DELETE_TASK_TO_TEST, payload})
export const toEditCreator = (payload) => ({type: TO_EDIT, payload})
export const clearCreator = () => ({type: CLEAR_DATA})
export const setInputValue = (payload) => ({type: SET_INPUT_VALUE, payload})
export const setGroupValue = (payload) => ({type: SET_GROUP_VALUE, payload})