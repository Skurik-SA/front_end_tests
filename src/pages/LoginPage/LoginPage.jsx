import {useEffect, useState} from "react";
import AuthApi from "../../api/auth/AuthApi";
import {Link, useNavigate} from "react-router-dom";
import "./LoginPage.css"
import axios from "axios";
import jwtDecode from "jwt-decode";
import {useFetching} from "../../components/hooks/useFetching";
import {Password1Icon, UsernameIcon} from "../../components/Icons/Authorization";

const LoginPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const toRegister = () => {
        navigate("/registration")
    }

    const login = async (e) => {
        e.preventDefault()
        fetchLogin()
    }

    const [fetchLogin, isLoading, fetchError] = useFetching(async () => {
        const {data} = await AuthApi.login(username, password).catch(error => console.log(fetchError))
        console.log(data)
    })


    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            navigate("/test/12")
        }
    }, [isLoading]);

    return (
        <>
            <div className="LoginPageMain">
                <div className="LoginPageContent">
                    <div className="LoginPageContentBlock">
                        <div className="partUp">
                            <div>
                                Авторизация
                            </div>
                            <div>
                                <button type="button" onClick={toRegister} className="registrationBtn2">Зарегистрироваться</button>
                            </div>
                        </div>

                        <form>
                            <div>
                                <UsernameIcon/>
                                <input type="text"
                                       placeholder="логин"
                                       className="inputLogin"
                                       value={username}
                                       onChange={e => setUsername(e.target.value)}
                                />
                            </div>
                            <div>
                                <Password1Icon/>
                                <input type="password"
                                       placeholder="пароль"
                                       className="inputLogin"
                                       value={password}
                                       onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="BtnsA">
                                <div>
                                    <button type="submit" className="loginBtn2" onClick={login}>Войти</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LoginPage;