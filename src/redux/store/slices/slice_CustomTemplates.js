import {createSlice} from "@reduxjs/toolkit";

const ASC = 0
const DESC = 1
const BY_CREATED = 2
const BY_UPDATED = 3


const Slice_CustomTemplates = createSlice({
    name: "custom_templates_slice",
    initialState: {
        custom_templates: [],
    },
    reducers: {
        get_custom_templates(state, action) {
            state.custom_templates = action.payload.sort(function (a, b) {
                if (a.updated_at < b.updated_at) {
                    return 1;
                }
                if (a.updated_at > b.updated_at) {
                    return -1;
                }
                return 0;
            })
        },
        sort_templates(state, action) {
            if (action.payload.id === ASC)
            {
                state.custom_templates = state.custom_templates.sort(function (a, b) {
                    if (a.title < b.title) {
                        return -1;
                    }
                    if (a.title > b.title) {
                        return 1;
                    }
                    return 0;
                })
            }
            else if (action.payload.id === DESC) {
                state.custom_templates = state.custom_templates.sort(function (a, b) {
                    if (a.title < b.title) {
                        return 1;
                    }
                    if (a.title > b.title) {
                        return -1;
                    }
                    return 0;
                })
            }
            else if (action.payload.id === BY_CREATED) {
                state.custom_templates = state.custom_templates.sort(function (a, b) {
                    if (a.created_at < b.created_at) {
                        return 1;
                    }
                    if (a.created_at > b.created_at) {
                        return -1;
                    }
                    return 0;
                })
            }
            else if (action.payload.id === BY_UPDATED) {
                state.custom_templates = state.custom_templates.sort(function (a, b) {
                    if (a.updated_at < b.updated_at) {
                        return 1;
                    }
                    if (a.updated_at > b.updated_at) {
                        return -1;
                    }
                    return 0;
                })
            }
        },
        delete_custom_template(state, action) {
            state.custom_templates = state.custom_templates.filter(template => template.id !== action.payload)
        }
    }
})

export default Slice_CustomTemplates.reducer
export const {
    get_custom_templates,
    delete_custom_template,
    sort_templates,
} = Slice_CustomTemplates.actions