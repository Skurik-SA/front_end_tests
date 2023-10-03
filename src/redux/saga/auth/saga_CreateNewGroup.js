import {all, fork, call, put, takeEvery} from "redux-saga/effects"
import {get_group_data, send_create_new_group} from "../saga_Requests/api_auth/api_auth";
import {set_group_data_by_id} from "../../store/slices/slice_PersonalGroup";

export const SEND_REQ_CREATE_NEW_GROUP = "SEND_REQ_CREATE_NEW_GROUP"

function* workerCreateNewGroup(payload) {
    const data = yield call(send_create_new_group, payload.data)
    // yield put(set_group_data_by_id(data))
}

function* watcherCreateNewGroup() {
    yield takeEvery(SEND_REQ_CREATE_NEW_GROUP, workerCreateNewGroup)
}

export function* createNewGroup() {
    yield all([
        fork(watcherCreateNewGroup)
    ])
}