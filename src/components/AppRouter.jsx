import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import LoginPage from "../pages/AuthPages/LoginPage/LoginPage";
import RegistrationPage from "../pages/AuthPages/RegistrationPage/RegistrationPage";
import SimplePage from "../pages/SimplePage";
import TestPage from "../pages/TestPage/TestPage";
import PersonalPage from "../pages/PersonalPage/PersonalPage";
import AllTestsPage from "../pages/AllTestsPage/AllTestsPage";
import TestEditorPage from "../pages/TestEditorPage/TestEditorPage";
import GroupsPage from "../pages/GroupsPage/GroupsPage";
import MarksPage from "../pages/MarksPage/MarksPage";
import StatisticsPage from "../pages/StatisticPage/StatisticsPage";
import GeneralTestsPage from "../pages/GeneralTestsPage/GeneralTestsPage";
import ChooseTemplate from "../pages/TemplatesPage/ChooseTemplate/ChooseTemplate";
import CustomTemplates from "../pages/TemplatesPage/CustomTemplates/CustomTemplates";
import GeneralTemplates from "../pages/TemplatesPage/GeneralTemplates/GeneralTemplates";
import EditTemplatePage from "../pages/TemplatesPage/EditTemplatePage/EditTemplatePage";
import {NotFoundPage} from "../pages/NotFoundPage/NotFoundPage";



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

                    <Route path="templates" element={<ChooseTemplate/>}/>
                    <Route path="templates/custom_templates" element={<CustomTemplates/>}/>
                    <Route path="templates/general_templates" element={<GeneralTemplates/>}/>
                    <Route path="templates/edit_template/:id_template" element={<EditTemplatePage/>}/>

                    <Route path='personal' element={<PersonalPage/>}/>
                    <Route path='all_tests' element={<AllTestsPage/>}/>
                    <Route path='test_edit' element={<TestEditorPage/>}/>
                    <Route path='groups' element={<GroupsPage/>}/>
                    <Route path='marks' element={<MarksPage/>}/>
                    <Route path='statistic' element={<StatisticsPage/>}/>
                    <Route path='general_tests' element={<GeneralTestsPage/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}></Route>
            </Routes>
    )
}

export default AppRouter;