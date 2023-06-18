import axios from "axios";

const base_url = "http://127.0.0.1:8000"

export async function loadCutomTemplates() {
    const request = await axios.get(`${base_url}/api/test_template`)
    return request.data
}

export async function getPersonalTests() {
    const request = await axios.get(`${base_url}/api/personal_test`)
    return request.data
}

export async function loadTestPage_data(id) {
    const request = await axios.get(`${base_url}/api/personal_test/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true}
    )
    return request.data
}

export async function loadTaskTypes_data() {
    const request = await axios.get(`http://127.0.0.1:8000/api/task_types`)
    return request.data
}

export async function sendNewTemplate(data) {
    const request = await axios.post(`http://127.0.0.1:8000/api/test_template/`, data)

    console.log(request)
    return request.data
}

export async function deleteTemplate_req(id) {
    const request = await axios.delete(`http://127.0.0.1:8000/api/test_template/${id}/`)
}