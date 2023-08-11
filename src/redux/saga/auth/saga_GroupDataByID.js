import {all, fork, call, put, takeEvery} from "redux-saga/effects"
import {get_group_data} from "../saga_Requests/api_auth/api_auth";
import {set_group_data_by_id} from "../../store/slices/slice_PersonalGroup";

export const LOAD_GROUP_DATA = "LOAD_GROUP_DATA"

function* workerGroupData(payload) {
    const data = yield call(get_group_data, payload.id)
    yield put(set_group_data_by_id(data))
}

function* watcherGroupData() {
    yield takeEvery(LOAD_GROUP_DATA, workerGroupData)
}

export function* loadGroupData() {
    yield all([
        fork(watcherGroupData)
    ])
}