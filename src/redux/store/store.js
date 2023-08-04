import {applyMiddleware, combineReducers, createStore} from "redux";
import {customerReducer} from "./reducers/Learn_Reducers/customerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga"
import {rootSaga} from "../saga/saga";
import store_personalTestsReducer from "./reducers/Test_Reducers/store_personalTestsReducer";
import store_TestPageReducer, {store_IsActiveTask} from "./reducers/Test_Reducers/store_TestPageReducer";
import customTemplatesReducer from "./reducers/Template_Reducers/store_CustomTemplatesReducer";
import templatePageCreateReducer from "./reducers/Template_Reducers/store_TemplateCreatePageReducer";
import userReducer from "./reducers/User_Reducers/store_UserReducer";
import personalGroupReducer from "./reducers/PersonalPage_Reducers/store_PersonalGroupDataReducer";
import store_ActiveTabReducer from "./reducers/Navigation_Reducer/store_NavigationReducer";


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    customers: customerReducer,
    personal_tests: store_personalTestsReducer,
    test: store_TestPageReducer,
    active_task: store_IsActiveTask,
    custom_templates: customTemplatesReducer,
    templateData: templatePageCreateReducer,
    userData: userReducer,
    groupById: personalGroupReducer,
    activeTabsData: store_ActiveTabReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)))

sagaMiddleware.run(rootSaga)