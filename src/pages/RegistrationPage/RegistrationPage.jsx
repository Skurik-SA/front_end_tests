import {useEffect, useState} from "react";
import AuthApi from "../../api/auth/AuthApi";
import {Link, useNavigate} from "react-router-dom";
import "./RegistrationPage.css"
import {useFetching} from "../../components/hooks/useFetching";
import {Password1Icon, Password2Icon, UsernameIcon} from "../../components/Icons/Authorization";

const RegistrationPage = () => {

    const [username, setUsername] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    const navigate = useNavigate()

    const toLogin = () => {
        navigate("/login")
    }

    const makeRegistration = (event) => {
        event.preventDefault()
        if (password1 !== '' || password2 !== '' || username !== '') {
            if (password1 === password2) {
                fetchLogin()
            }
            else {
                alert("Пароли должны совпадать")
            }
        }
        else {
            alert("Все поля должны быть заполнены!")
        }
    }

    const [fetchLogin, isLoading, fetchError] = useFetching(async () => {
        const {data} = await AuthApi.fetch_register(username, password1)
            .then(response => {
                if (response.ok) {
                    navigate("/login")
                }
                else {
                    console.log(fetchError)
                    alert("Что-то пошло не так!")
                }
            })
        console.log(data)
    })

    useEffect(() => {

    }, [isLoading]);

    return (
        <>
            <div className="RegistrationPageMain">
                <div className="RegistrationPageContent">
                    <div className="RegistrationPageContentBlock">
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
                                <UsernameIcon/>
                                <input type="text"
                                       placeholder="логин"
                                       className="inputReg"
                                       value={username}
                                       onChange={e => setUsername(e.target.value)}
                                />
                            </div>
                            <div>
                                <Password1Icon/>
                                <input type="password"
                                       placeholder="пароль"
                                       className="inputReg"
                                       value={password1}
                                       onChange={e => setPassword1(e.target.value)}
                                />
                            </div>
                            <div>
                                <Password2Icon/>
                                <input type="password"
                                       placeholder="повторите пароль"
                                       className="inputReg"
                                       value={password2}
                                       onChange={e => setPassword2(e.target.value)}
                                />
                            </div>
                        </form>
                        <div className="BtnsA">
                            <div>
                                <button type="submit" className="registrationBtn1" onClick={makeRegistration}>Зарегистрироваться</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default RegistrationPage;