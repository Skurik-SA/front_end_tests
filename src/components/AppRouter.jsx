import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import LoginPage from "../pages/AuthPages/LoginPage/LoginPage";
import RegistrationPage from "../pages/AuthPages/RegistrationPage/RegistrationPage";
import TestPage from "../pages/TestPage/TestPage";

import {NotFoundPage} from "../pages/NotFoundPage/NotFoundPage";
import MyTemplates from "../pages/PersonalCabinet/Tabs/Templates/MyTemplates/MyTemplates";
import Journal from "../pages/PersonalCabinet/Tabs/Journal/Journal";
import Analytics from "../pages/PersonalCabinet/Tabs/Analytics/Analytics";
import TasksPlan from "../pages/PersonalCabinet/Tabs/TasksPlan/TasksPlan";
import Groups from "../pages/PersonalCabinet/Tabs/Groups/MyGroups/Groups";
import PersonalData from "../pages/PersonalCabinet/Tabs/PersonalData/PersonalData";
import CreateTemplate from "../pages/PersonalCabinet/Tabs/Templates/CreateTemplate/CreateTemplate";
import EditTemplate from "../pages/PersonalCabinet/Tabs/Templates/EditTemplate/EditTemplate";
import MyTests from "../pages/PersonalCabinet/Tabs/MyTests/MyTests";
import LaboratoryStorm from "../pages/LaboratoryStorm/LaboratoryStorm";



const AppRouter = () => {
    return (
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<LoginPage/>}></Route>
                    <Route path='login' element={<LoginPage/>}/>
                    <Route path='registration' element={<RegistrationPage/>}/>

                    <Route path='test' element={<TestPage/>}/>
                    <Route path='test/:task_id' element={<TestPage/>}/>

                    <Route path='groups' element={<LaboratoryStorm/>}/>

                    <Route path={'cabinet'}>
                        <Route path='my_templates' element={<MyTemplates/>}/>
                        <Route path='my_templates/create' element={<CreateTemplate/>}/>
                        <Route path='my_templates/edit/:id' element={<EditTemplate/>}/>
                        <Route path='personal_data' element={<PersonalData/>}/>
                        <Route path='journal' element={<Journal/>}/>
                        <Route path='analytics' element={<Analytics/>}/>
                        <Route path='plan' element={<TasksPlan/>}/>
                        <Route path='groups_new' element={<Groups/>}/>
                        <Route path='my_tests' element={<MyTests/>}/>
                    </Route>

                </Route>
                <Route path={'*'} element={<NotFoundPage/>}></Route>
            </Routes>
    )
}

export default AppRouter;