import {call, all, fork, takeEvery, put} from "redux-saga/effects"
import {LOAD_PERSONAL_PAGE_DATA} from "../actions_Saga/actions_saga";
import {getPersonalTests} from "../saga_Requests/api_saga/api_tests";
import {get_personal_tests} from "../../store/slices/slice_PersonalTests";



export function* workerLoadPersonalTests() {
    const data = yield call(getPersonalTests)

    yield put(get_personal_tests(data))
}

export function* watcherPersonalTests() {
    yield takeEvery(LOAD_PERSONAL_PAGE_DATA, workerLoadPersonalTests);
}

export function* loadData() {
    yield all([
        fork(watcherPersonalTests),
    ])
}