import {combineReducers} from "redux";

import createSagaMiddleware from "redux-saga"
import {rootSaga} from "../saga/saga";
import {configureStore} from "@reduxjs/toolkit";
import Slice_CustomTemplates from "./slices/slice_CustomTemplates";
import Slice_ModifyTemplates from "./slices/slice_CreateTemplates";
import Slice_Navigation from "./slices/slice_Navigation";
import Slice_TestForm from "./slices/slice_TestForm";
import Slice_PersonalTests from "./slices/slice_PersonalTests";
import Slice_User from "./slices/slice_User";
import Slice_PersonalGroup from "./slices/slice_PersonalGroup";
import Slice_Navbar from "./slices/slice_Navbar";
import Slice_Analytics from "./slices/slice_Analytics";


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    CustomTemplatesData: Slice_CustomTemplates,
    ModifyTemplatesData: Slice_ModifyTemplates,
    TestFormData: Slice_TestForm,
    PersonalTestsData: Slice_PersonalTests,

    PersonalGroupData: Slice_PersonalGroup,
    UserData: Slice_User,
    AnalyticsData: Slice_Analytics,

    NavigationData: Slice_Navigation,
    NavbarData: Slice_Navbar,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: true}).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)