import {applyMiddleware, combineReducers, createStore} from "redux";
import {customerReducer} from "./reducers/customerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga"
import {rootSaga} from "../saga/saga";
import countReducer from "./reducers/countReducer";
import store_personalTestsReducer from "./reducers/store_personalTestsReducer";
import store_ParamsReducer from "./reducers/store_ParamsReducer";
import store_TestPageReducer, {store_IsActiveTask} from "./reducers/store_TestPageReducer";
import customTemplatesReducer from "./reducers/store_CustomTemplatesReducer";
import templatePageCreateReducer from "./reducers/store_TemplateCreatePageReducer";


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
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)))

sagaMiddleware.run(rootSaga)