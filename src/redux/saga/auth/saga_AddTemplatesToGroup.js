import {all, fork, call, takeEvery} from "redux-saga/effects"
import {add_templates_to_group} from "../saga_Requests/api_auth/api_auth";

export const ADD_TEMPLATES_TO_GROUP = "ADD_TEMPLATES_TO_GROUP"

function* workerAddTemplatesToGroup(payload) {

    const selectedTemplatesID = payload.data.checkedTemplates.filter((template) => template.checkedState).map((t) =>
    {
        return t.template.id
    })
    const selectedTemplatesTitle = payload.data.checkedTemplates.filter((template) => template.checkedState).map((t) =>
    {
        return t.template.title
    })

    yield call(add_templates_to_group, {
        group_id: payload.data.group_id,
        templates_id: selectedTemplatesID,
        templates_title: selectedTemplatesTitle,
    })
    // yield put(set_group_data_by_id(data))
}

function* watcherAddTemplatesToGroup() {
    yield takeEvery(ADD_TEMPLATES_TO_GROUP, workerAddTemplatesToGroup)
}

export function* addTemplatesToGroup() {
    yield all([
        fork(watcherAddTemplatesToGroup)
    ])
}