import "./PersonalData.css"
import {
    change_Email,
    change_Lastname,
    change_Name,
    change_Phone_number,
    change_Surname, save_changes
} from "../../../redux/store/reducers/User_Reducers/store_UserReducer";
import {UPDATE_USER_DATA} from "../../../redux/saga/auth/saga_UpdateUserData";
import {useDispatch} from "react-redux";

const PersonalData = ({data}) => {

    const dispatch = useDispatch()

    return (
        <>
            <>
                <div className="input_wrapper">
                    <div className="blank_input">
                        <label>Фамилия</label>
                        <input className="info_input" value={data.input_last_name} onChange={(e) => {
                            dispatch(change_Lastname(e.target.value))
                        }}></input>
                    </div>
                    <div className="blank_input">
                        <label>Имя</label>
                        <input className="info_input"  value={data.input_first_name} onChange={(e) => {
                            dispatch(change_Name(e.target.value))
                        }}></input>

                    </div>
                    <div className="blank_input">
                        <label>Отчество</label>
                        <input className="info_input" value={data.input_sur_name} onChange={(e) => {
                            dispatch(change_Surname(e.target.value))
                        }}></input>

                    </div>
                    <div className="blank_input">
                        <label>Телефон</label>
                        <input className="info_input" value={data.input_phone_number} onChange={(e) => {
                            dispatch(change_Phone_number(e.target.value))
                        }}></input>

                    </div>
                    <div className="blank_input">
                        <label>Почта</label>
                        <input className="info_input" value={data.input_email} onChange={(e) => {
                            dispatch(change_Email(e.target.value))
                        }}></input>

                    </div>
                </div>
                <div className="save_personal">
                    <button onClick={() => {
                        dispatch(save_changes())
                        dispatch({type: UPDATE_USER_DATA})
                    }}>
                        Сохранить
                    </button>
                </div>
            </>
        </>
    )
}

export default PersonalData;