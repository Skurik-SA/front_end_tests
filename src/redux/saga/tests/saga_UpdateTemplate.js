import {all, fork, call, put, takeEvery, select} from "redux-saga/effects"
import {updateTemplate_api} from "../saga_Requests/api_saga/api_tests";

export const UPDATE_TEST_TEMPLATE = "UPDATE_TEST_TEMPLATE"

function* workerUpdateTemplate(params){
    const stored_data = yield select(s => s.ModifyTemplatesData.formData)

    yield call(updateTemplate_api, params.id, stored_data)
}

function* watcherUpdateTemplate() {
    yield takeEvery(UPDATE_TEST_TEMPLATE, workerUpdateTemplate)
}

export function* updateTemplate() {
    yield all([
        fork(watcherUpdateTemplate)
    ])
}