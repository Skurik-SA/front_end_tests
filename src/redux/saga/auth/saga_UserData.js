import {all, call, fork, put, takeEvery} from "redux-saga/effects"
import {get_user_data_bd, get_user_groups} from "../saga_Requests/api_auth/api_auth";
import {set_user_data, set_user_groups} from "../../store/slices/slice_User";

export const LOAD_USER_DATA = "LOAD_USER_DATA"

function* getUserData() {
    const user_id = localStorage.getItem("user_id")

    return yield call(get_user_data_bd, user_id)
}

function* getGroupData(data) {
    const user_id = {
        "user_id": localStorage.getItem("user_id")
    }
    return yield call(get_user_groups, user_id)
}

function* workerUser(){
    const userdata = yield getUserData()
    yield put(set_user_data(userdata))

    const groups_data = yield getGroupData()
    yield put(set_user_groups(groups_data))
}

function* watcherUser() {
    yield takeEvery(LOAD_USER_DATA, workerUser)
}

export function* loadUser() {
    yield all([
        fork(watcherUser)
    ])
}