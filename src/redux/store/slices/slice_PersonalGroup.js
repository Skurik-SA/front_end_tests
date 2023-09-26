import {createSlice} from "@reduxjs/toolkit";


const Slice_PersonalGroup = createSlice({
    name: "personal_group_slice",
    initialState: {
        data: {
            id: "",
            group_title: "",
            participants: []
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
                "participants": temp
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
                "participants": [...state.data.participants, ...selectedStudents]
            }
        }
    }
})

export default Slice_PersonalGroup.reducer
export const {set_group_data_by_id, add_one_student, add_many_students, delete_one_students} = Slice_PersonalGroup.actions