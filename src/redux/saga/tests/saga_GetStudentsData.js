import {call, put, takeEvery, all, fork} from "redux-saga/effects"
import {getStudentsData} from "../saga_Requests/api_saga/api_tests";
import {set_students_data} from "../../store/slices/slice_User";

export const GET_STUDENTS_DATA = "GET_STUDENTS_DATA"

function* workerGetStudentsData(payload) {
    const data = yield call(getStudentsData, payload.group_id)
    yield put(set_students_data(data))
}

function* watcherGetStudentsData() {
    yield takeEvery(GET_STUDENTS_DATA, workerGetStudentsData);
}

export function* get_students_data() {
    yield all([
        fork(watcherGetStudentsData)
    ])
}