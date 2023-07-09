import axios from "axios";
import {all, fork, call, put, takeEvery, select} from "redux-saga/effects"
import {setIsActiveTask, testPageCreator} from "../../store/reducers/Test_Reducers/store_TestPageReducer";
import {loadTestPage_data} from "../saga_Requests/api_saga/api_tests";

export const LOAD_TEST_PAGE = "LOAD_TEST_PAGE"

function* workerTestPage(id) {
    const params = yield select(s => s.params.page_params.task_id)
    const data = yield call(loadTestPage_data, params)
    console.log(data)
    let responseData = []
    for (let i = 0; i < data.tasks.length; i++) {
        responseData.push({
            id: i + 1,
            taskTitle: `Задание ${i + 1}`,
            taskText: data.tasks[i],
            inputType: data.input_type[i],
            answer: ''
        })
    }
    console.log(responseData[0])
    yield put(setIsActiveTask(responseData[0]))
    yield put(testPageCreator(responseData))


}

function* watcherTestPage() {
    yield takeEvery(LOAD_TEST_PAGE, workerTestPage)
}

export function* load_test_page() {
    yield all([
        fork(watcherTestPage),
    ])
}