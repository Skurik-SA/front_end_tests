import "../styles/AuthStyles.css"

import AuthApi from "../../../api/auth/AuthApi";

import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useFetching} from "../../../components/hooks/useFetching";
import {Password1Icon, Password2Icon, UsernameIcon} from "../../../components/Icons/Authorization";


const RegistrationPage = () => {

    const [username, setUsername] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    const navigate = useNavigate()

    const toLogin = () => {
        navigate("/login")
    }

    const makeRegistration = async (event) => {
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
            <div className="AuthMain">
                <div className="AuthPageContent">
                    <div className="AuthPageContentBlock">
                        <h2 >
                            Регистрация
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
                                       value={password1}
                                       onChange={e => setPassword1(e.target.value)}
                                />
                            </div>
                            <div className="input_container">
                                <Password2Icon/>
                                <input type="password"
                                       placeholder="повторите пароль"
                                       className="inputStyle"
                                       value={password2}
                                       onChange={e => setPassword2(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="submitButton" onClick={makeRegistration}>Зарегистрироваться</button>
                            <div className="switchPageAuthBtnContainer">
                                <button onClick={toLogin} className="switchPageAuthBtn">Уже есть аккаунт?</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default RegistrationPage;