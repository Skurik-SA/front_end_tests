
const defaultState = {
    personal_tests: [],
}

const GET_PERSONAL_TESTS = "GET_PERSONAL_TESTS"

export default function store_personalTestsReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_PERSONAL_TESTS:
            // return {...state, personal_tests: [...state.personal_tests, ...action.payload]}
            return {...state, personal_tests: [...action.payload]}

        default:
            return state;
    }
}

export const personalTestsCreator = (payload) => ({type: GET_PERSONAL_TESTS, payload})