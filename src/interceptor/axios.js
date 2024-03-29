import axios from "axios";
import {BASE_URL} from "../redux/saga/saga_Requests/api_base_constants";

let refresh = false;
// Если что-то будет плохо работать с авторизацией чекнуть тут и в Logout
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
axios.interceptors.response.use(resp => resp, async error => {
    if (error.response.status === 401 && !refresh) {
        refresh = true;
        console.log(localStorage.getItem('refresh_token'))
        const response = await axios.post(`${BASE_URL}/user/api/token/refresh/`, {
            refresh:localStorage.getItem('refresh_token')
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        }, {
            withCredentials: true,
        });

        if (response.status === 200) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['access']}`;
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            return axios(error.config);
        }
        else {
            localStorage.clear()
        }
    }
    refresh = false;

    return error;
})