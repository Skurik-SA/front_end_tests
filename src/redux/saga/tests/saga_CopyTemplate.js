import {put, call, all, fork, takeEvery} from "redux-saga/effects"
import {getTestTemplate_byID_data, loadCustomTemplates, sendNewTemplate} from "../saga_Requests/api_saga/api_tests";

import {get_custom_templates} from "../../store/slices/slice_CustomTemplates";

export const COPY_TEMPLATE = "COPY_TEMPLATE"

function* workerCopyTemplate(params) {
    let data = yield call(getTestTemplate_byID_data, params.payload)
    data = {
        id: data.id,
        group_id: data.group_id,
        owner_id: localStorage.getItem('user_id'),
        tasks: data.tasks,
        tasks_amount: data.tasks_amount,
        tasks_description: data.tasks_description,
        title: data.title + " Копия"
    }
    yield call(sendNewTemplate, data)

    data = yield call(loadCustomTemplates)
    yield put(get_custom_templates(data))

}

function* watcherCopyTemplate() {
    yield takeEvery(COPY_TEMPLATE, workerCopyTemplate)
}

export default function* copyTemplate() {
    yield all([
        fork(watcherCopyTemplate)
    ])
}