import axios from "axios";
import {BASE_URL} from "../../redux/saga/saga_Requests/api_base_constants";

export const SITE_URL = 'http://localhost:3000'

export const verifyToken = async (token) => {
    try {
        if (localStorage.getItem('access_token') !== null) {
            await axios.post(`${BASE_URL}/user/api/token/verify/`,
                {
                    token: token
                }).then(function (data) {
                if (data.status === 200) {
                    console.log(data.status)
                    return data
                }
                else {
                    localStorage.clear()
                    console.log(data.status)
                    // window.location.replace(`${SITE_URL}/`);
                }
            })
        }
        else {
            return {
                data: 'no data in ls'
            }
        }
    }
    catch (error) {
        // localStorage.clear()
        console.log(error)
    }
}