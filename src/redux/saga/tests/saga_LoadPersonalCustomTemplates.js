import {call, put, takeEvery, all, fork} from "redux-saga/effects"
import {loadPersonalCustomTemplates} from "../saga_Requests/api_saga/api_tests";
import {get_custom_templates} from "../../store/slices/slice_CustomTemplates";

export const LOAD_PERSONAL_CUSTOM_TEMPLATES = "LOAD_PERSONAL_CUSTOM_TEMPLATES"

function* workerPersonalCustomTemplates(payload) {
    const data = yield call(loadPersonalCustomTemplates, payload.user_id)
    yield put(get_custom_templates(data))
}

function* watcherPersonalCustomTemplates() {
    yield takeEvery(LOAD_PERSONAL_CUSTOM_TEMPLATES, workerPersonalCustomTemplates);
}

export function* load_personal_custom_templates_data() {
    yield all([
        fork(watcherPersonalCustomTemplates)
    ])
}