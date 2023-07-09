const defaultState = {
    page_params: 0
}

const GET_PARAMS_ID = "GET_PARAMS_ID"

export default function store_ParamsReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_PARAMS_ID:
            return {...state, page_params: action.payload}
        default:
            return state
    }

}

export const getParameterID = (payload) => ({type: GET_PARAMS_ID, payload})