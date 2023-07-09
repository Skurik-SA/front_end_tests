import axios from "axios";
import {call, take, all, fork, takeEvery, put, delay} from "redux-saga/effects"
import {personalTestsCreator} from "../../store/reducers/Test_Reducers/store_personalTestsReducer";
import {LOAD_PERSONAL_PAGE_DATA} from "../actions_Saga/actions_saga";
import {getPersonalTests} from "../saga_Requests/api_saga/api_tests";



export function* workerLoadPersonalTests() {
    // const data = yield getPersonalTests()
    const data = yield call(getPersonalTests)
    console.log(data)
    let responseData = []
    for (let i = 0; i < data.length; i++) {
        responseData.push({
            id: data[i].id,
            title: data[i].title,
            group_id: data[i].group_id,
            owner_id: data[i].owner_id,
            tasks: data[i].tasks,
            tasks_amount: data[i].tasks_amount
        })
    }
    console.log(responseData)
    yield put(personalTestsCreator(data))
}

export function* watcherPersonalTests() {
    yield takeEvery(LOAD_PERSONAL_PAGE_DATA, workerLoadPersonalTests);
}

export function* loadData() {
    yield all([
        fork(watcherPersonalTests),
    ])
}