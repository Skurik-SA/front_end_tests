const defaultState = {
    custom_templates: []
}

const GET_CUSTOM_TEMPLATES = "GET_CUSTOM_TEMPLATES"
const DELETE_CUSTOM_TEMPLATE = "DELETE_CUSTOM_TEMPLATE"

export default function customTemplatesReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_CUSTOM_TEMPLATES:
            return {...state, custom_templates: [...action.payload]}
        case DELETE_CUSTOM_TEMPLATE:
            // let a = state.custom_templates.filter(template => template.id !== action.payload)
            // console.log(a)
            return {...state, custom_templates: state.custom_templates.filter(template => template.id !== action.payload)}
        default:
            return state
    }
}

export const customTemplatesCreator = (payload) => ({type: GET_CUSTOM_TEMPLATES, payload})
export const deleteCustomTemplatesCreator = (payload) => ({type: DELETE_CUSTOM_TEMPLATE, payload})