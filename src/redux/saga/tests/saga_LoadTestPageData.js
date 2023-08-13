import {all, fork, call, put, takeEvery} from "redux-saga/effects"
import {loadTestPage_data} from "../saga_Requests/api_saga/api_tests";
import {set_is_active_task, set_test} from "../../store/slices/slice_TestForm";

export const LOAD_TEST_PAGE = "LOAD_TEST_PAGE"

function* workerTestPage(payload) {
    const data = yield call(loadTestPage_data, payload.id)

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

    yield put(set_is_active_task(responseData[0]))
    yield put(set_test(responseData))


}

function* watcherTestPage() {
    yield takeEvery(LOAD_TEST_PAGE, workerTestPage)
}

export function* load_test_page() {
    yield all([
        fork(watcherTestPage),
    ])
}