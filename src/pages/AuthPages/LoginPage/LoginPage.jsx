import "../styles/AuthStyles.css"
import "../styles/AuthButtonsStyles.css"

import AuthApi from "../../../api/auth/AuthApi";

import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useFetching} from "../../../components/hooks/useFetching";
import {Password1Icon, UsernameIcon} from "../../../components/Icons/Authorization";
import {useDispatch} from "react-redux";
import {LOAD_USER_DATA} from "../../../redux/saga/auth/saga_UserData";

const LoginPage = () => {

    const dispatch = useDispatch()

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
            dispatch({type: LOAD_USER_DATA})
            navigate("/personal")
        }
    }, [isLoading]);

    return (
        <>
            <div className="AuthMain">
                <div className="AuthPageContent">
                    <div className="AuthPageContentBlock">
                        <div className="partUp">
                            <div>
                                Авторизация
                            </div>
                            <div>
                                <button type="button" onClick={toRegister} className="switchPageAuthBtn">Зарегистрироваться</button>
                            </div>
                        </div>

                        <form>
                            <div>
                                <UsernameIcon/>
                                <input type="text"
                                       placeholder="логин"
                                       className="inputStyle"
                                       value={username}
                                       onChange={e => setUsername(e.target.value)}
                                />
                            </div>
                            <div>
                                <Password1Icon/>
                                <input type="password"
                                       placeholder="пароль"
                                       className="inputStyle"
                                       value={password}
                                       onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                <div>
                                    <button type="submit" className="submitButton" onClick={login}>Войти</button>
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