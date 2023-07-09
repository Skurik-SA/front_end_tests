
import {all, fork, call, put, takeEvery, select} from "redux-saga/effects"
import {get_user_data_bd} from "../saga_Requests/api_auth/api_auth";
import {set_userData} from "../../store/reducers/User_Reducers/store_UserReducer";

export const LOAD_USER_DATA = "LOAD_USER_DATA"

function* workerUser(){
    const user_id = localStorage.getItem("user_id")
    const data = yield call(get_user_data_bd, user_id)
    console.log(data)
    yield put(set_userData(data))
}

function* watcherUser() {
    yield takeEvery(LOAD_USER_DATA, workerUser)
}

export function* loadUser() {
    yield all([
        fork(watcherUser)
    ])
}