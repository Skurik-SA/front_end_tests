import {createSlice} from "@reduxjs/toolkit";


const Slice_CustomTemplates = createSlice({
    name: "custom_templates_slice",
    initialState: {
        custom_templates: [],
    },
    reducers: {
        get_custom_templates(state, action) {
            state.custom_templates = action.payload
        },
        delete_custom_template(state, action) {
            state.custom_templates = state.custom_templates.filter(template => template.id !== action.payload)
        }
    }
})

export default Slice_CustomTemplates.reducer
export const {get_custom_templates, delete_custom_template} = Slice_CustomTemplates.actions