import axios from "axios";
import {BASE_URL} from "../api_base_constants";

// Request to server to load personal user data
export async function get_user_data_bd(id) {
    const request = await axios.get(`${BASE_URL}/user/api/user_data/${id}/`)
    return request.data
}

// Request to server to update personal user data
export async function send_user_data_bd(id, data) {
    const request = await axios.put(`${BASE_URL}/user/api/user_data/${id}/`, data)
    return request.data
}

// Request to server to get all the groups a user is a member of
export async function get_user_groups(data) {
    const request = await axios.post(`${BASE_URL}/user/api/group_by_userID/`, data)
    return request.data
}

// Request to server to get a single one group by group id
export async function get_group_data(id) {
    const request = await axios.get(`${BASE_URL}/user/api/group_by_userID/${id}`)
    return request.data
}