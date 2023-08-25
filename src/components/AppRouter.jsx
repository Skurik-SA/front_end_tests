import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import LoginPage from "../pages/AuthPages/LoginPage/LoginPage";
import RegistrationPage from "../pages/AuthPages/RegistrationPage/RegistrationPage";
import TestPage from "../pages/TestPage/TestPage";
import PersonalPage from "../pages/PersonalPage/PersonalPage";
import AllTestsPage from "../pages/AllTestsPage/AllTestsPage";
import TestEditorPage from "../pages/TestEditorPage/TestEditorPage";
import GroupsPage from "../pages/GroupsPage/GroupsPage";
import MarksPage from "../pages/MarksPage/MarksPage";
import StatisticsPage from "../pages/StatisticPage/StatisticsPage";
import ChooseTemplate from "../pages/TemplatesPage/ChooseTemplate/ChooseTemplate";
import CustomTemplates from "../pages/TemplatesPage/TemplateView/CustomTemplates";
import GeneralTemplates from "../pages/TemplatesPage/TemplateView/GeneralTemplates";
import EditTemplatePage from "../pages/TemplatesPage/TemplateConstructor/EditTemplatePage";
import {NotFoundPage} from "../pages/NotFoundPage/NotFoundPage";
import CreateTemplatePage from "../pages/TemplatesPage/TemplateConstructor/CreateTemplatePage";
import MyTemplates from "../pages/PersonalCabinet/Tabs/Templates/MyTemplates/MyTemplates";
import Journal from "../pages/PersonalCabinet/Tabs/Journal/Journal";
import Analytics from "../pages/PersonalCabinet/Tabs/Analytics/Analytics";
import TasksPlan from "../pages/PersonalCabinet/Tabs/TasksPlan/TasksPlan";
import Groups from "../pages/PersonalCabinet/Tabs/Groups/MyGroups/Groups";
import PersonalData from "../pages/PersonalCabinet/Tabs/PersonalData/PersonalData";
import CreateTemplate from "../pages/PersonalCabinet/Tabs/Templates/CreateTemplate/CreateTemplate";
import EditTemplate from "../pages/PersonalCabinet/Tabs/Templates/EditTemplate/EditTemplate";



const AppRouter = () => {
    return (
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<LoginPage/>}></Route>
                    <Route path='login' element={<LoginPage/>}/>
                    <Route path='registration' element={<RegistrationPage/>}/>

                    <Route path='test' element={<TestPage/>}/>
                    <Route path='test/:task_id' element={<TestPage/>}/>

                    <Route path="templates" element={<ChooseTemplate/>}/>
                    <Route path="templates/custom_templates" element={<CustomTemplates/>}/>
                    <Route path="templates/general_templates" element={<GeneralTemplates/>}/>
                    <Route path="templates/create_template/" element={<CreateTemplatePage/>}/>
                    <Route path="templates/edit_template/:id_template" element={<EditTemplatePage/>}/>

                    <Route path='personal' element={<PersonalPage/>}/>
                    <Route path='all_tests' element={<AllTestsPage/>}/>
                    <Route path='test_edit' element={<TestEditorPage/>}/>
                    <Route path='groups' element={<GroupsPage/>}/>
                    <Route path='marks' element={<MarksPage/>}/>
                    <Route path='statistic' element={<StatisticsPage/>}/>

                    <Route path={'cabinet'}>
                        <Route path='my_templates' element={<MyTemplates/>}/>
                        <Route path='my_templates/create' element={<CreateTemplate/>}/>
                        <Route path='my_templates/edit/:id' element={<EditTemplate/>}/>
                        <Route path='personal_data' element={<PersonalData/>}/>
                        <Route path='journal' element={<Journal/>}/>
                        <Route path='analytics' element={<Analytics/>}/>
                        <Route path='plan' element={<TasksPlan/>}/>
                        <Route path='groups_new' element={<Groups/>}/>
                    </Route>

                </Route>
                <Route path={'*'} element={<NotFoundPage/>}></Route>
            </Routes>
    )
}

export default AppRouter;