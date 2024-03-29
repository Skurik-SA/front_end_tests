import {all, fork, call, takeEvery, select} from "redux-saga/effects"
import {sendNewTemplate} from "../saga_Requests/api_saga/api_tests";


export const SEND_TEST_TEMPLATE = "SEND_TEST_TEMPLATE"

function* workerNewTestTemplate(){
    const stored_data = yield select(s => s.ModifyTemplatesData.formData)

    yield call(sendNewTemplate, stored_data)
}

function* watcherNewTestTemplate() {
    yield takeEvery(SEND_TEST_TEMPLATE, workerNewTestTemplate)
}

export function* sendNewTestTemplate() {
    yield all([
        fork(watcherNewTestTemplate)
    ])
}