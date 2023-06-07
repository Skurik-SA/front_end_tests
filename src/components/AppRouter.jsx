import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import SimplePage from "../pages/SimplePage";
import TestPage from "../pages/TestPage/TestPage";



const AppRouter = () => {
    return (
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<LoginPage/>}></Route>
                    <Route path='login' element={<LoginPage/>}/>
                    <Route path='registration' element={<RegistrationPage/>}/>
                </Route>
                <Route path='/homepage' element={<Layout/>}>
                    <Route path='simple_page' element={<SimplePage/>}/>
                    <Route path='test' element={<TestPage/>}/>
                </Route>
            </Routes>
    )
}

export default AppRouter;