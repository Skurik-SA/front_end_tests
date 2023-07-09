import {applyMiddleware, combineReducers, createStore} from "redux";
import {customerReducer} from "./reducers/Learn_Reducers/customerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga"
import {rootSaga} from "../saga/saga";
import countReducer from "./reducers/Learn_Reducers/countReducer";
import store_personalTestsReducer from "./reducers/Test_Reducers/store_personalTestsReducer";
import store_ParamsReducer from "./reducers/Test_Reducers/store_ParamsReducer";
import store_TestPageReducer, {store_IsActiveTask} from "./reducers/Test_Reducers/store_TestPageReducer";
import customTemplatesReducer from "./reducers/Template_Reducers/store_CustomTemplatesReducer";
import templatePageCreateReducer from "./reducers/Template_Reducers/store_TemplateCreatePageReducer";
import userReducer from "./reducers/User_Reducers/store_UserReducer";


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    customers: customerReducer,
    count: countReducer,
    personal_tests: store_personalTestsReducer,
    params: store_ParamsReducer,
    test: store_TestPageReducer,
    active_task: store_IsActiveTask,
    custom_templates: customTemplatesReducer,
    templateData: templatePageCreateReducer,
    userData: userReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)))

sagaMiddleware.run(rootSaga)