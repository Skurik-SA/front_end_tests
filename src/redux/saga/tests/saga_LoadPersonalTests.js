import {call, all, fork, takeEvery, put} from "redux-saga/effects"
// import {LOAD_PERSONAL_PAGE_DATA} from "../actions_Saga/actions_saga";
import {getAllMyTests, getPersonalTests} from "../saga_Requests/api_saga/api_tests";
import {get_personal_tests} from "../../store/slices/slice_PersonalTests";

export const LOAD_PERSONAL_PAGE_DATA = "LOAD_PERSONAL_PAGE_DATA"

export function* workerLoadPersonalTests() {
    // const data = yield call(getPersonalTests)
    const data = yield call(getAllMyTests)

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