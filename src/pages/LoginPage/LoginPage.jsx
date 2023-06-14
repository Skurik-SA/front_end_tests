import {useEffect, useState} from "react";
import AuthApi from "../../api/AuthApi";
import {Link, useNavigate} from "react-router-dom";
import "./LoginPage.css"
import axios from "axios";
import jwtDecode from "jwt-decode";

const LoginPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const toRegister = () => {
        navigate("/registration")
    }

    const login = async (e) => {
        e.preventDefault()

        const user = {
            username: username,
            password: password
        }

        try {
            const {data} = await axios.post("http://127.0.0.1:8000/api/token/",
                user, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true}
            )

            localStorage.clear()
            localStorage.setItem('access_token', data.access)
            localStorage.setItem('refresh_token', data.refresh)
            const userID = jwtDecode(data.access)['user_id']
            localStorage.setItem('user_id', userID)
            axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`

            navigate("/test/12")
        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            navigate("/test/12")
        }
    }, []);

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
                                <div>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="39" height="39" rx="5.5" fill="#4E4E4E" stroke="black"/>
                                        <path d="M23 23.5349L26.6 19.3023V8.4186L24.8 7.2093L23 6H20H17L15.2 7.2093L13.4 8.4186V19.3023L17 23.5349M23 23.5349H17M23 23.5349V25.3488M17 23.5349V25.3488M17 25.3488H23M17 25.3488L11 27.1628V32H29V27.1628L23 25.3488" stroke="black"/>
                                        <path d="M13.5 8.5L17.5 9H22.5L26.5 8.5" stroke="black"/>
                                    </svg>
                                </div>

                                <input type="text"
                                       placeholder="логин"
                                       className="inputLogin"
                                       value={username}
                                       onChange={e => setUsername(e.target.value)}
                                />
                            </div>
                            <div>
                                <div>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="39" height="39" rx="5.5" fill="#4E4E4E" stroke="black"/>
                                        <path d="M21 19H19L18 20V22L19 23V25H21V23L22 22V20L21 19Z" stroke="black"/>
                                        <path d="M29 29H11V15H29V29Z" stroke="black"/>
                                        <path d="M16 12V15H24V12L22.8571 9L21.7143 8H18.2857L17.1429 9L16 12Z" stroke="black"/>
                                    </svg>
                                </div>

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