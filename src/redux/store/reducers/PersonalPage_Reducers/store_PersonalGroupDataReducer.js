const defaultState = {
    "data": {
        "id": "",
        "group_title": "",
        "participants": []
    },
}

const SET_GROUP_DATA_BY_ID = "SET_GROUP_DATA_BY_ID"

export default function personalGroupReducer(state=defaultState, action) {
    switch (action.type) {
        case SET_GROUP_DATA_BY_ID:
            return {...state, data: action.payload}

        default:
            return state
    }

}

export const set_group_data_by_id = (payload) => ({type:SET_GROUP_DATA_BY_ID, payload})