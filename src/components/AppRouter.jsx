import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import SimplePage from "../pages/SimplePage";
import TestPage from "../pages/TestPage/TestPage";
import PersonalPage from "../pages/PersonalPage/PersonalPage";
import AllTestsPage from "../pages/AllTestsPage/AllTestsPage";
import TestEditorPage from "../pages/TestEditorPage/TestEditorPage";
import GroupsPage from "../pages/GroupsPage/GroupsPage";
import MarksPage from "../pages/MarksPage/MarksPage";
import StatisticsPage from "../pages/StatisticPage/StatisticsPage";
import GeneralTestsPage from "../pages/GeneralTestsPage/GeneralTestsPage";



const AppRouter = () => {
    return (
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<LoginPage/>}></Route>
                    <Route path='login' element={<LoginPage/>}/>
                    <Route path='registration' element={<RegistrationPage/>}/>
                    <Route path='simple_page' element={<SimplePage/>}/>
                    <Route path='test' element={<TestPage/>}/>
                    <Route path='test/:task_id' element={<TestPage/>}/>
                    <Route path='personal' element={<PersonalPage/>}/>
                    <Route path='all_tests' element={<AllTestsPage/>}/>
                    <Route path='test_edit' element={<TestEditorPage/>}/>
                    <Route path='groups' element={<GroupsPage/>}/>
                    <Route path='marks' element={<MarksPage/>}/>
                    <Route path='statistic' element={<StatisticsPage/>}/>
                    <Route path='general_tests' element={<GeneralTestsPage/>}/>
                </Route>
            </Routes>
    )
}

export default AppRouter;