import {all, fork, call, put, takeEvery} from "redux-saga/effects"
import {getTestTemplate_byID_data} from "../saga_Requests/api_saga/api_tests";
import {add_task_to_test_from_db} from "../../store/slices/slice_CreateTemplates";

export const GET_TEST_TEMPLATE_BY_ID = "GET_TEST_TEMPLATE_BY_ID"

function* workerTestTemplate_byID(params) {

    const data = yield call(getTestTemplate_byID_data, params.id)

    console.log(data)
    yield put(add_task_to_test_from_db(data))
}

function* watcherTestTemplate_byID() {
    yield takeEvery(GET_TEST_TEMPLATE_BY_ID, workerTestTemplate_byID)
}

export function* loadTestTemplate(){
    yield all([
        fork(watcherTestTemplate_byID)
    ])
}