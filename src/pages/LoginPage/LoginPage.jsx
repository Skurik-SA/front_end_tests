import {useState} from "react";
import AuthApi from "../../api/AuthApi";
import {Link} from "react-router-dom";


const LoginPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const makeLogin = async (event) => {
        event.preventDefault()
        await AuthApi.login(username, password)
    }

    return (
        <>
            <div className="w-75 mx-auto">
                <div className="align-top">
                    <div className="row">
                        <div className="row-cols-1">
                            Login Page
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
                                <button type="submit" onClick={makeLogin}>
                                    Login
                                </button>

                                <button>
                                    <Link to="/registration">
                                        Registration
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

export default LoginPage;