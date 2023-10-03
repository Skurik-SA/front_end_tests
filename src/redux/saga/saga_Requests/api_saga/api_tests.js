import axios from "axios";
import {BASE_URL} from "../api_base_constants";



// Templates start //

// Request to server to load all test templates
// For now works only like "load all tests and not include which person make request"
export async function loadCustomTemplates() {
    const request = await axios.get(`${BASE_URL}/tests/api/test_template`)
    return request.data
}

export async function loadPersonalCustomTemplates(user_id) {
    console.log(user_id)
    const request = await axios.post(`${BASE_URL}/tests/api/get_my_templates/`, {
        user_id: user_id
    })
    return request.data
}

// Request to server to load test template by id
// In other words "get single test template"
export async function getTestTemplate_byID_data(id) {
    const request = await axios.get(`${BASE_URL}/tests/api/test_template/${id}`)
    return request.data
}

// Request to server to create new test template
export async function sendNewTemplate(data) {
    const request = await axios.post(`${BASE_URL}/tests/api/test_template/`, data)
    return request.data
}

// Request to server to update test template by id
export async function updateTemplate_api(id, data) {
    const request = await axios.put(`${BASE_URL}/tests/api/test_template/${id}/`, data)

    console.log(request)
    return request.data
}

// Request to server to delete test template by id
export async function deleteTemplate_req(id) {
    const request = await axios.delete(`${BASE_URL}/tests/api/test_template/${id}/`)
    return request.data
}

// Templates end //

// Request to server to load all personal tests
// For now works only like "load all personal tests and not include which person make request"
export async function getPersonalTests() {
    const request = await axios.get(`${BASE_URL}/tests/api/personal_test`)
    return request.data
}

// Request to server to load personal test by id
// In other words "get single personal test"
export async function loadTestPage_data(id) {
    const request = await axios.get(`${BASE_URL}/tests/api/personal_test/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true}
    )
    return request.data
}

// Request to server to load task types
export async function loadTaskTypes_data() {
    const request = await axios.get(`${BASE_URL}/tests/api/task_types`)
    return request.data
}

export async function getAllMyTests() {
    const request = await axios.post(`${BASE_URL}/tests/api/get_all_own_tests/`, {
        user_id: localStorage.getItem("user_id")
    })
    return request.data
}

export async function getTestData(id) {
    const response = await axios.get(`${BASE_URL}/tests/api/personal_test/${id}`)
    return response.data
}

export async function generateTestsByTemplateToAllGroup(data) {
    // console.log(data)
    const response = await axios.post(`${BASE_URL}/tests/api/generate_to_group_by_template/`, data)
    return response.data
}

export async function sendTestDataToCheckAnswers(data) {
    console.log(data)
    const response = await axios.put(`${BASE_URL}/tests/api/personal_test/${data.id}/`, {
        student_answers: data.student_answers
    })
    return response.data
}

export async function getClosedTestData(data) {
    console.log(data)
    const response = await axios.get(`${BASE_URL}/tests/api/get_all_own_tests/${data.testID}/`, {
        user_id: localStorage.getItem('user_id')
    })
    return response.data

}