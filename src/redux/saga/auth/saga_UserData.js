import {all, call, fork, put, takeEvery} from "redux-saga/effects"
import {get_user_data_bd, get_user_groups} from "../saga_Requests/api_auth/api_auth";
import {set_groups, set_userData} from "../../store/reducers/User_Reducers/store_UserReducer";

export const LOAD_USER_DATA = "LOAD_USER_DATA"

function* getUserData() {
    const user_id = localStorage.getItem("user_id")

    return yield call(get_user_data_bd, user_id)
}

function* getGroupData(data) {
    let group_data = []
    if (data && data.classroom_groups.length !== 0) {
        for (let i = 0; i < data.classroom_groups.length; i++) {
            const temp = yield call(get_user_groups, data.classroom_groups[i])
            group_data.push(temp)
            console.log(temp)
        }

        return group_data
    }
    else {
        return []
    }
}

function* workerUser(){
    const userdata = yield getUserData()
    yield put(set_userData(userdata))

    const groups_data = yield getGroupData(userdata)
    yield put(set_groups(groups_data))
}

function* watcherUser() {
    yield takeEvery(LOAD_USER_DATA, workerUser)
}

export function* loadUser() {
    yield all([
        fork(watcherUser)
    ])
}