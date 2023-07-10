import axios from "axios";
import {useStore} from "react-redux";

export async function get_user_data_bd(id) {
    const request = await axios.get(`http://127.0.0.1:8000/api/user/${id}/`)
    return request.data
}

export async function send_user_data_bd(id, data) {
    const request = await axios.put(`http://127.0.0.1:8000/api/user/${id}/`, data)
    return request.data
}

export async function get_user_groups(id) {
    const request = await axios.get(`http://127.0.0.1:8000/api/group/${id}/`)
    return request.data
}