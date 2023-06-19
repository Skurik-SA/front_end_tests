import {all, fork, call, put, takeEvery, select} from "redux-saga/effects"
import {getTestTemplate_byID_data} from "../api_saga/api_tests";
import {
    addTaskToTestFromDBCreator,
    templatePageCreateCreator
} from "../../store/reducers/store_TemplateCreatePageReducer";

export const GET_TEST_TEMPLATE_BY_ID = "GET_TEST_TEMPLATE_BY_ID"

function* workerTestTemplate_byID(params) {

    const data = yield call(getTestTemplate_byID_data, params.id)

    // for (let i = 0; i < data.tasks.length; i++)
    // {
    //     yield put(templatePageCreateCreator(data.tasks[i]))
    // }
    yield put(addTaskToTestFromDBCreator(data))

    console.log(data)


}

function* watcherTestTemplate_byID() {
    yield takeEvery(GET_TEST_TEMPLATE_BY_ID, workerTestTemplate_byID)
}

export function* loadTestTemplate(){
    yield all([
        fork(watcherTestTemplate_byID)
    ])
}