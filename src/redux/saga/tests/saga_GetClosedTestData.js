import {call, put, takeEvery, all, fork} from "redux-saga/effects"
import {getClosedTestData} from "../saga_Requests/api_saga/api_tests";
import {set_closed_personal_test_info} from "../../store/slices/slice_PersonalTests";

export const GET_CLOSED_TEST_DATA = "GET_CLOSED_TEST_DATA"

function* workerGetClosedTestData(test_id) {
    const data = yield call(getClosedTestData, test_id)
    yield put(set_closed_personal_test_info(data))
}

function* watcherGetClosedTestData() {
    yield takeEvery(GET_CLOSED_TEST_DATA, workerGetClosedTestData);
}

export function* get_closed_test_data() {
    yield all([
        fork(watcherGetClosedTestData)
    ])
}