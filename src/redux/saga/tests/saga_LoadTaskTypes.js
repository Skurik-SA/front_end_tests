import {all, fork, call, put, takeEvery} from "redux-saga/effects"
import {loadTaskTypes_data} from "../saga_Requests/api_saga/api_tests";
import {load_task_types} from "../../store/slices/slice_CreateTemplates";

export const GET_TASK_TYPES = "GET_TASK_TYPES"

function* workerTaskTypes(){
    const data = yield call(loadTaskTypes_data)

    yield put(load_task_types(data))
}

function* watcherTaskTypes() {
    yield takeEvery(GET_TASK_TYPES, workerTaskTypes)
}

export function* loadTaskTypes() {
    yield all([
        fork(watcherTaskTypes)
    ])
}