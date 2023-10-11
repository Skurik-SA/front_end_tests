import {all, fork, call, put, takeEvery} from "redux-saga/effects"
import {verify_token} from "../saga_Requests/api_auth/api_auth";

export const VERIFY_TOKEN = "VERIFY_TOKEN"

function* workerTokenVerify(payload) {
    const data = yield call(verify_token, payload.token)
    if (data.status !== 200) {
        localStorage.clear()

    }
    // console.log(data.status)
}

function* watcherTokenVerify() {
    yield takeEvery(VERIFY_TOKEN, workerTokenVerify)

}

export function* tokenVerify() {
    yield all([
        fork(watcherTokenVerify)
    ])
}
