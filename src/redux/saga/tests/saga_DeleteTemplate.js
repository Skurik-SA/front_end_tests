import {put, call, all, fork, takeEvery} from "redux-saga/effects"
import {deleteTemplate_req} from "../api_saga/api_tests";

export const DELETE_TEMPLATE = "DELETE_TEMPLATE"

function* workerDeleteTemplate(payload) {
    const data = yield call(deleteTemplate_req, payload.payload)
    console.log(payload)
    console.log(data)
}

function* watcherDeleteTemplate() {
    yield takeEvery(DELETE_TEMPLATE, workerDeleteTemplate)
}

export default function* deleteTemplate () {
    yield all([
        fork(watcherDeleteTemplate)
    ])
}