import {useState} from "react";
import AuthApi from "../../api/AuthApi";
import {Link, useNavigate} from "react-router-dom";
import "./LoginPage.css"

const LoginPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const makeLogin = async (event) => {
        event.preventDefault()
        // await AuthApi.login(username, password)
    }

    const toRegister = () => {
        navigate("/registration")
    }

    return (
        <>
            <div className="LoginPageMain">
                <div className="LoginPageContent">
                    <div className="partUp">
                        <div>
                            Авторизация
                        </div>
                        <div>
                            <button onClick={toRegister} className="registrationBtn2">Зарегистрироваться</button>
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
                                   value={password}
                                   onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </form>
                    <div className="BtnsA">
                        <div>
                            <button type="submit" className="loginBtn2">Войти</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default LoginPage;