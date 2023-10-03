import axios from "axios";
import "../../utils/constants"
import jwtDecode from "jwt-decode";
import {BASE_URL} from "../../redux/saga/saga_Requests/api_base_constants";

export default class AuthApi {
    static async axios_register(username, password) {

        await axios.post(`${BASE_URL}/user/api/register/`, {
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

        let response = await fetch(`${BASE_URL}/user/api/register/`, {
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
            const {data} = await axios.post(`${BASE_URL}/user/api/token/`,
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
            localStorage.clear()
            console.log(e)
        }
    }
}