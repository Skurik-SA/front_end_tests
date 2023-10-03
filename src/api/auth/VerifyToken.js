import axios from "axios";
import {BASE_URL} from "../../redux/saga/saga_Requests/api_base_constants";

export const verifyToken = async (token) => {
    try {
        await axios.post(`${BASE_URL}/user/api/token/verify/`,
            {
                token: token
            }).then(function (data) {
                if (data.response.status === 401) {
                    localStorage.clear()
                    window.location.replace('http://localhost:3000/');
                }
                else {
                    return data.data
                }
            })
    }
    catch (error) {
        console.log(error)
    }
}