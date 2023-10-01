import {all, call, spawn} from "redux-saga/effects"
import {loadData} from "./tests/saga_LoadPersonalTests";
import {load_test_page} from "./tests/saga_LoadTestPageData";
import {load_custom_templates_data} from "./tests/saga_LoadCustomTemplatesData";
import {loadTaskTypes} from "./tests/saga_LoadTaskTypes";
import {sendNewTestTemplate} from "./tests/saga_SendNewTestTemplate";
import deleteTemplate from "./tests/saga_DeleteTemplate";
import {loadTestTemplate} from "./tests/saga_LoadTestTemplate_byID";
import {updateTemplate} from "./tests/saga_UpdateTemplate";
import copyTemplate from "./tests/saga_CopyTemplate";
import {loadUser} from "./auth/saga_UserData";
import {update_UserData} from "./auth/saga_UpdateUserData";
import {loadGroupData} from "./auth/saga_GroupDataByID";
import {load_personal_custom_templates_data} from "./tests/saga_LoadPersonalCustomTemplates";
import {addTemplatesToGroup} from "./auth/saga_AddTemplatesToGroup";
import {createNewGroup} from "./auth/saga_CreateNewGroup";
import {generate_tests_by_template_to_all_group} from "./tests/saga_GenerateTestsByTemplateToAllGroup";
import {send_test_data_to_check_answers} from "./tests/saga_SendTestDataToCheckAnswers";
import {get_closed_test_data} from "./tests/saga_GetClosedTestData";
import {get_analytics_data} from "./analytics/saga_GetAnalyticsData";

// export function* rootSaga() {
//     yield all([countWatcher(), userWatcher()])
// }
export function* rootSaga() {
    console.log("Saga works!")
    const sagas = [
        loadData,
        load_test_page,
        load_custom_templates_data,
        load_personal_custom_templates_data,
        loadTaskTypes,
        sendNewTestTemplate,
        deleteTemplate,
        loadTestTemplate,
        updateTemplate,
        copyTemplate,
        loadUser,
        update_UserData,
        loadGroupData,
        addTemplatesToGroup,
        createNewGroup,
        generate_tests_by_template_to_all_group,
        send_test_data_to_check_answers,
        get_closed_test_data,
        get_analytics_data
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