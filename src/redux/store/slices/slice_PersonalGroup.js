import {createSlice} from "@reduxjs/toolkit";


const Slice_PersonalGroup = createSlice({
    name: "personal_group_slice",
    initialState: {
        data: {
            id: "",
            group_title: "",
            participants: [],
            templates_id: [],
            templates_title: [],
        },
        teacher_fio: "",
    },
    reducers: {
        set_group_data_by_id(state, action) {
            state.data = action.payload
            let fio = action.payload.participants.filter(participant => participant.role === "Учитель")
            if (fio.length > 0) {
                state.teacher_fio = [fio[0].last_name + " " + fio[0].first_name + " " +  fio[0].sur_name]
                for (let i = 1; i < fio.length; i++) {
                    state.teacher_fio.push(fio[i].last_name + " " + fio[i].first_name + " " +  fio[i].sur_name)
                }
            }
        },
        delete_one_students(state, action) {
            state.data.participants = state.data.participants.filter((p, i) => i !== action.payload.index)
        },
        add_one_student(state, action) {
            let temp = [...state.data.participants, {
                role: "Ученик",
                // id: 11,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                sur_name: action.payload.sur_name,
            }]
            state.data = {
                "id": state.data.id,
                "group_title": state.data.group_title,
                "participants": temp,
                "templates_id": state.data.templates_id,
                "templates_title": state.data.templates_title,
            }
        },
        add_many_students(state, action) {
            const selectedStudents = action.payload.allNewStudents.filter((student) => student.checkedState).map((student) =>
            {
                return {
                    role: "Ученик",

                    first_name: student.fio[0],
                    last_name: student.fio[1],
                    sur_name: student.fio[2],
                }
            })
            console.log(selectedStudents)

            state.data = {
                "id": state.data.id,
                "group_title": state.data.group_title,
                "participants": [...state.data.participants, ...selectedStudents],
                "templates_id": state.data.templates_id,
                "templates_title": state.data.templates_title,
            }
        },
        add_many_templates(state, action) {
            const selectedTemplatesID = action.payload.allNewTemplates.filter((template) => template.checkedState).map((t) =>
            {
                    return t.template.id
            })
            const selectedTemplatesTitle = action.payload.allNewTemplates.filter((template) => template.checkedState).map((t) =>
            {
                return t.template.title
            })
            console.log(selectedTemplatesID)

            if (state.data.templates_id && state.data.templates_title) {
                state.data = {
                    "id": state.data.id,
                    "group_title": state.data.group_title,
                    "participants": state.data.participants,
                    "templates_id": [...state.data.templates_id, ...selectedTemplatesID],
                    "templates_title": [...state.data.templates_title, ...selectedTemplatesTitle],
                }
            }
            else if (state.data.templates_id && !state.data.templates_title) {
                state.data = {
                    "id": state.data.id,
                    "group_title": state.data.group_title,
                    "participants": state.data.participants,
                    "templates_id": [...state.data.templates_id, ...selectedTemplatesID],
                    "templates_title": [...selectedTemplatesTitle],
                }
            }
            else if (!state.data.templates_id && state.data.templates_title) {
                state.data = {
                    "id": state.data.id,
                    "group_title": state.data.group_title,
                    "participants": state.data.participants,
                    "templates_id": [...selectedTemplatesID],
                    "templates_title": [...state.data.templates_title, ...selectedTemplatesTitle],
                }
            }
            else {
                state.data = {
                    "id": state.data.id,
                    "group_title": state.data.group_title,
                    "participants": state.data.participants,
                    "templates_id": [...selectedTemplatesID],
                    "templates_title": [...selectedTemplatesTitle],
                }
            }
        }
    }
})

export default Slice_PersonalGroup.reducer
export const {
    set_group_data_by_id,
    add_one_student,
    add_many_students,
    delete_one_students,
    add_many_templates} = Slice_PersonalGroup.actions