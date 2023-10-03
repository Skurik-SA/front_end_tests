import {all, fork, call, put, takeEvery} from "redux-saga/effects"
import {sendTestDataToCheckAnswers} from "../saga_Requests/api_saga/api_tests";

export const SEND_TEST_DATA_TO_CHECK_ANSWERS = "SEND_TEST_DATA_TO_CHECK_ANSWERS"

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* workerSendTestDataToCheckAnswers(payload) {
    const body = {
        id: payload.data.id,
        student_answers: payload.data.student_answers
    }
    console.log(body)
    yield delay(1000)
    const data = yield call(sendTestDataToCheckAnswers, body)
}

function* watcherSendTestDataToCheckAnswers() {
    yield takeEvery(SEND_TEST_DATA_TO_CHECK_ANSWERS, workerSendTestDataToCheckAnswers)
}

export function* send_test_data_to_check_answers() {
    yield all([
        fork(watcherSendTestDataToCheckAnswers),
    ])
}