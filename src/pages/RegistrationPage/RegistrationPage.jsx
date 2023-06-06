import {useState} from "react";
import * as events from "events";
import AuthApi from "../../api/AuthApi";
import {Link} from "react-router-dom";


const RegistrationPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const makeRegistration = (event) => {
        event.preventDefault()
        AuthApi.register(username, password)
    }

    return (
        <>
            <div className="w-75 mx-auto">
                <div className="align-top">
                    <div className="row">
                        <div className="row-cols-1">
                            Registration Page
                            <div className="row-cols-1">
                                <form>
                                    <input type="text"
                                           className="text-center"
                                           placeholder={"username"}
                                           value={username}
                                           onChange={e => setUsername(e.target.value)}></input>
                                    <input type="password"
                                           className="text-center"
                                           placeholder={"password"}
                                           value={password}
                                           onChange={e => setPassword(e.target.value)}></input>
                                </form>
                                <button onClick={makeRegistration}>
                                    Registrate
                                </button>

                                <button>
                                    <Link to="/login">
                                        Login
                                    </Link>

                                </button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default RegistrationPage;