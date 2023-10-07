import "../styles/AuthStyles.css"

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
            navigate("/cabinet/personal_data")
        }
    }, [isLoading]);

    return (
        <>
            <div className="AuthMain">
                <div className="AuthPageContent">
                    <div className="AuthPageContentBlock">
                        <h2>
                            Авторизация
                        </h2>
                        <form className="form_style">
                            <div className="input_container">
                                <UsernameIcon/>
                                <input type="text"
                                       placeholder="логин"
                                       className="inputStyle"
                                       value={username}
                                       onChange={e => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="input_container">
                                <Password1Icon/>
                                <input type="password"
                                       placeholder="пароль"
                                       className="inputStyle"
                                       value={password}
                                       onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="submitButton" onClick={login}>Войти</button>
                            <div className="switchPageAuthBtnContainer">
                                <button type="button" onClick={toRegister} className="switchPageAuthBtn" >Ещё не зарегистрированы?</button>
                            </div>
                            <div style={{display: 'none'}}>
                                <button className="btn-12">
                                    войти
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}

export default LoginPage;