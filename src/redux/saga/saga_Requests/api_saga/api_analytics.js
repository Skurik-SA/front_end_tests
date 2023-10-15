import axios from "axios";
import {BASE_URL} from "../api_base_constants";

export async function getAnalyticsData(group_id) {
    return await axios.post(`${BASE_URL}/tests/api/get_group_analytics/`, {
        user_id: localStorage.getItem('user_id'),
        group_id: group_id,
    })

}