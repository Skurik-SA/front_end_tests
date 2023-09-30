import {call, put, takeEvery, all, fork} from "redux-saga/effects"
import {generateTestsByTemplateToAllGroup} from "../saga_Requests/api_saga/api_tests";
import {get_custom_templates} from "../../store/slices/slice_CustomTemplates";

export const GENERATE_TESTS_BY_TEMPLATE_TO_ALL_GROUP = "GENERATE_TESTS_BY_TEMPLATE_TO_ALL_GROUP"

function* workerGenerateTestsByTemplateToAllGroup(payload) {
    const data = yield call(generateTestsByTemplateToAllGroup, payload.data)
    // yield put(get_custom_templates(data))
}

function* watcherGenerateTestsByTemplateToAllGroup() {
    yield takeEvery(GENERATE_TESTS_BY_TEMPLATE_TO_ALL_GROUP, workerGenerateTestsByTemplateToAllGroup);
}

export function* generate_tests_by_template_to_all_group() {
    yield all([
        fork(watcherGenerateTestsByTemplateToAllGroup)
    ])
}