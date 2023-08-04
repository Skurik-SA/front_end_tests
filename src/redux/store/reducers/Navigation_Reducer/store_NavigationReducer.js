const defaultState = {
    active_tab: 0,
}

const SET_ACTIVE_TAB = "SET_ACTIVE_TAB"

export default function store_ActiveTabReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_ACTIVE_TAB:
            return {...state, active_tab: action.payload}
        default:
            return state
    }
}

export const setActiveTab = (payload) => ({type: SET_ACTIVE_TAB, payload})
