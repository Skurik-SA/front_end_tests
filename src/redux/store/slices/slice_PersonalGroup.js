import {createSlice} from "@reduxjs/toolkit";


const Slice_PersonalGroup = createSlice({
    name: "personal_group_slice",
    initialState: {
        data: {
            "id": "",
            "group_title": "",
            "participants": []
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
        }
    }
})

export default Slice_PersonalGroup.reducer
export const {set_group_data_by_id} = Slice_PersonalGroup.actions