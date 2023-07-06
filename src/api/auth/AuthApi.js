import axios from "axios";
import "../../utils/constants"
import {BACK_END_URL} from "../../utils/constants";
import jwtDecode from "jwt-decode";
import {useDispatch} from "react-redux";

export default class AuthApi {
    static async axios_register(username, password) {

        await axios.post(`${BACK_END_URL}/api/register/`, {
            username: username,
            password: password
        })
            .then(function (response) {

                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    static async fetch_register(username, password) {
        const user = {
            username: username,
            password: password
        }

        let response = await fetch(`${BACK_END_URL}/api/register/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        console.log(response)
        return response
    }

    static async login(username, password) {
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
        }
        catch (e) {
            console.log(e)
        }

        // await axios.post(`${BACK_END_URL}/api/login/`, {
        //     username: username,
        //     password: password
        // })
        //     .then(function (response) {
        //         console.log(response.data)
        //         return response.data
        //     })
        //     .catch(function (error) {
        //         return error
        //     });

    }
}