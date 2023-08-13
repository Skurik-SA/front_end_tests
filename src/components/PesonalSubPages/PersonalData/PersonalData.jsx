import "./PersonalData.css"

import {UPDATE_USER_DATA} from "../../../redux/saga/auth/saga_UpdateUserData";
import {useDispatch} from "react-redux";
import {
    change_user_email,
    change_user_firstname,
    change_user_lastname,
    change_user_phoneNumber,
    change_user_surname, save_user_changes
} from "../../../redux/store/slices/slice_User";

const PersonalData = ({data}) => {

    const dispatch = useDispatch()

    return (
        <>
            <>
                <div className="input_wrapper">
                    <div className="blank_input">
                        <label>Фамилия</label>
                        <input className="info_input" value={data.input_last_name} onChange={(e) => {
                            dispatch(change_user_lastname({last_name: e.target.value}))
                        }}></input>
                    </div>
                    <div className="blank_input">
                        <label>Имя</label>
                        <input className="info_input"  value={data.input_first_name} onChange={(e) => {
                            dispatch(change_user_firstname({first_name: e.target.value}))
                        }}></input>

                    </div>
                    <div className="blank_input">
                        <label>Отчество</label>
                        <input className="info_input" value={data.input_sur_name} onChange={(e) => {
                            dispatch(change_user_surname({sur_name: e.target.value}))
                        }}></input>

                    </div>
                    <div className="blank_input">
                        <label>Телефон</label>
                        <input className="info_input" value={data.input_phone_number} onChange={(e) => {
                            dispatch(change_user_phoneNumber({phone_number: e.target.value}))
                        }}></input>

                    </div>
                    <div className="blank_input">
                        <label>Почта</label>
                        <input className="info_input" value={data.input_email} onChange={(e) => {
                            dispatch(change_user_email({email: e.target.value}))
                        }}></input>

                    </div>
                </div>
                <div className="save_personal">
                    <button onClick={() => {
                        dispatch(save_user_changes())
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