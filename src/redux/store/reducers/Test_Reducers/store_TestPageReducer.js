const defaultTasks = {
    test: [],
}

export const SET_TEST = "SET_TASKS"
export const SAVE_TASK = "SAVE_TASK"

export default function store_TestPageReducer(state= defaultTasks, action) {
    switch (action.type) {
        case SET_TEST:
            return {...state, test: action.payload}
        case SAVE_TASK:
            let newVal = action.payload.map(item =>
                                            item.id === action.active_id
                                                ? {...item, answer: action.inputValue}
                                                : item)
            return {...state, test: newVal}
        default:
            return state
    }
}

export const testPageCreator = (payload) => ({type: SET_TEST, payload})
export const testSaveCreator = (payload, active_id, inputValue) => ({type: SAVE_TASK, payload, active_id, inputValue})


const defaultIsActive = {
    activeTask: {}
}

const SET_IS_ACTIVE_TASK = "SET_IS_ACTIVE_TASK"

export function store_IsActiveTask(state= defaultIsActive, action) {
    switch (action.type) {
        case SET_IS_ACTIVE_TASK:
            return {...state, activeTask: action.payload}
        default:
            return state
    }
}

export const setIsActiveTask = (payload) => ({type: SET_IS_ACTIVE_TASK, payload})