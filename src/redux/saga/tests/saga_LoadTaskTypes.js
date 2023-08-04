import {all, fork, call, put, takeEvery} from "redux-saga/effects"
import {loadTaskTypes_data} from "../saga_Requests/api_saga/api_tests";
import {templateLoadTaskTypesCreator} from "../../store/reducers/Template_Reducers/store_TemplateCreatePageReducer";

export const GET_TASK_TYPES = "GET_TASK_TYPES"

function* workerTaskTypes(){
    const data = yield call(loadTaskTypes_data)

    console.log(data)

    yield put(templateLoadTaskTypesCreator(data))
}

function* watcherTaskTypes() {
    yield takeEvery(GET_TASK_TYPES, workerTaskTypes)
}

export function* loadTaskTypes() {
    yield all([
        fork(watcherTaskTypes)
    ])
}