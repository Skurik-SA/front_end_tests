import axios from "axios";


export default class AuthApi {
    static async register(username, password) {
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