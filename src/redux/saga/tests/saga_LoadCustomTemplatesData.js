import {call, put, takeEvery, all, fork} from "redux-saga/effects"
import {customTemplatesCreator} from "../../store/reducers/Template_Reducers/store_CustomTemplatesReducer";
import {LOAD_CUSTOM_TEMPLATES} from "../actions_Saga/actions_saga";
import {loadCustomTemplates} from "../saga_Requests/api_saga/api_tests";


function* workerCustomTemplates() {
    const data = yield call(loadCustomTemplates)

    yield put(customTemplatesCreator(data))
}

function* watcherCustomTemplates() {
    yield takeEvery(LOAD_CUSTOM_TEMPLATES, workerCustomTemplates);
}

export function* load_custom_templates_data() {
    yield all([
        fork(watcherCustomTemplates)
    ])
}