import {all, fork, call, put, takeEvery, select} from "redux-saga/effects"
import {send_user_data_bd} from "../saga_Requests/api_auth/api_auth";
import {set_user_data} from "../../store/slices/slice_User";

export const UPDATE_USER_DATA = "UPDATE_USER_DATA"

function* workerUpdaterUserData() {
    const user_id = localStorage.getItem("user_id")
    const storage_data = yield select(s => s.UserData.user_data)

    const data = yield call(send_user_data_bd, user_id, storage_data)
    yield put(set_user_data(data))
}

function* watcherUpdaterUserData() {
    yield takeEvery(UPDATE_USER_DATA, workerUpdaterUserData)
}

export function* update_UserData() {
    yield all([
        fork(watcherUpdaterUserData)
    ])
}