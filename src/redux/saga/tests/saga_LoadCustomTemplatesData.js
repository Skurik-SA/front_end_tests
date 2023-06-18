import axios from "axios";
import {call, put, takeEvery, all, fork} from "redux-saga/effects"
import {customTemplatesCreator} from "../../store/reducers/store_CustomTemplatesReducer";
import {LOAD_CUSTOM_TEMPLATES} from "../actions_Saga/actions_saga";
import {loadCutomTemplates} from "../api_saga/api_tests";


function* workerCustomTemplates() {
    const data = yield call(loadCutomTemplates)

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