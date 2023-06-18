import {all, call, spawn} from "redux-saga/effects"
import {loadData} from "./tests/saga_LoadPersonalTests";
import {load_test_page} from "./tests/saga_LoadTestPageData";
import {load_custom_templates_data} from "./tests/saga_LoadCustomTemplatesData";
import {loadTaskTypes} from "./tests/saga_LoadTaskTypes";
import {sendNewTestTemplate} from "./tests/saga_SendNewTestTemplate";
import deleteTemplate from "./tests/saga_DeleteTemplate";

// export function* rootSaga() {
//     yield all([countWatcher(), userWatcher()])
// }
export function* rootSaga() {
    console.log("Saga works!")
    const sagas = [
        loadData,
        load_test_page,
        load_custom_templates_data,
        loadTaskTypes,
        sendNewTestTemplate,
        deleteTemplate
    ]

    const retrySagas = yield sagas.map(saga =>
        spawn(function* () {
            while (true) {
                try {
                    yield call(saga);
                    break;
                }
                catch (e) {
                    console.log(e)
                }
            }
        })
    );

    yield all(retrySagas)
}