import axios from "axios";


export default class AuthApi {
    static async axios_register(username, password) {
        await axios.post("http://127.0.0.1:8000/api/register/", {
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

        let response = await fetch('http://127.0.0.1:8000/api/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        return response
    }

    static async login(username, password) {
        await axios.post("http://127.0.0.1:8000/api/login/", {
            username: username,
            password: password
        })
            .then(function (response) {
                console.log(response.data)
                return response.data
            })
            .catch(function (error) {
                return error
            });

    }
}