import {useState} from "react";
import AuthApi from "../../api/AuthApi";
import {Link, useNavigate} from "react-router-dom";
import "./RegistrationPage.css"

const RegistrationPage = () => {

    const [username, setUsername] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    const navigate = useNavigate()

    const makeRegistration = (event) => {
        event.preventDefault()
        AuthApi.register(username, password1)
    }

    const toLogin = () => {
        navigate("/login")
    }

    return (
        <>
            <div className="RegistrationPageMain">
                <div className="RegistrationPageContent">
                    <div className="partUp">
                        <div>
                            Регистрация
                        </div>
                        <div>
                            <button onClick={toLogin} className="loginBtn1">Войти</button>
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
                                   value={password1}
                                   onChange={e => setPassword1(e.target.value)}
                            />
                        </div>
                        <div>
                            <div>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="39" height="39" rx="5.5" fill="#4E4E4E" stroke="black"/>
                                    <path d="M21 19H19L18 20V22L19 23V25H21V23L22 22V20L21 19Z" stroke="black"/>
                                    <path d="M29 29H11V15H29V29Z" stroke="black"/>
                                    <path d="M16 12V15H24V12L22.8571 9L21.7143 8H18.2857L17.1429 9L16 12Z" stroke="black"/>
                                    <path d="M26 6.54545L29.6 11L34 4" stroke="#0DA82F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </div>

                            <input type="password"
                                   placeholder="повторите пароль"
                                   value={password2}
                                   onChange={e => setPassword2(e.target.value)}
                            />
                        </div>
                    </form>
                    <div className="BtnsA">
                        <div>
                            <button type="submit" className="registrationBtn1">Зарегистрироваться</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default RegistrationPage;