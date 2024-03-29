import {call, all, fork, takeEvery} from "redux-saga/effects"
import {deleteTemplate_req} from "../saga_Requests/api_saga/api_tests";

export const DELETE_TEMPLATE = "DELETE_TEMPLATE"

function* workerDeleteTemplate(payload) {
    yield call(deleteTemplate_req, payload.payload)
}

function* watcherDeleteTemplate() {
    yield takeEvery(DELETE_TEMPLATE, workerDeleteTemplate)
}

export default function* deleteTemplate () {
    yield all([
        fork(watcherDeleteTemplate)
    ])
}