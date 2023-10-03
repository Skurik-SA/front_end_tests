import styles from "./PersonalData.module.css"
import WrapperPersonalCabinet from "../../WrapperPersonalCabinet/WrapperPersonalCabinet";
import NavigationLine from "../../NavigationLine/NavigationLine";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {set_navbar_link} from "../../../../redux/store/slices/slice_Navbar";
import DuoContent from "../../DuoContent/DuoContent";
import DuoContentLeftPart from "../../DuoContent/DuoContentLeftPart";
import DuoContentRightPart from "../../DuoContent/DuoContentRightPart";
import DivideLineMono from "../../../../components/DivideLines/DivideLine_Mono/DivideLineMono";
import {
    change_user_email,
    change_user_firstname,
    change_user_lastname, change_user_phoneNumber,
    change_user_surname, save_user_changes
} from "../../../../redux/store/slices/slice_User";
import {UPDATE_USER_DATA} from "../../../../redux/saga/auth/saga_UpdateUserData";

const PersonalData = () => {

    const dispatch = useDispatch()
    const isTeacher = useSelector(state => state.UserData.user_data.is_teacher)
    const userData = useSelector(state => state.UserData)

    useEffect(() => {
        dispatch(set_navbar_link(
            [
                {
                    link: 'cabinet/personal_data',
                    link_name: 'Личный кабинет | ',
                    active: false,
                },
                {
                    link: 'cabinet/personal_data',
                    link_name: 'Профиль',
                    active: false,
                }
            ]
        ))
    }, [])

    return (
        <>
            <WrapperPersonalCabinet>
                <NavigationLine tab_id={isTeacher ? 5 : 1}></NavigationLine>
                <DuoContent>
                    <DuoContentLeftPart>
                        <div className={styles.lc_headers}>
                            PersonalData
                        </div>
                        <DivideLineMono/>
                        <section className={styles.lc_personalData_section}>
                            <div className={styles.lc_personalData_div}>
                                <label className={styles.lc_personalData_label}>
                                    Фамилия
                                </label>
                                <input className={styles.lc_personalData_input}
                                       value={userData.input_last_name}
                                       onChange={(e) => {
                                    dispatch(change_user_lastname({last_name: e.target.value}))
                                }}/>
                            </div>
                            <div className={styles.lc_personalData_div}>
                                <label className={styles.lc_personalData_label}>
                                    Имя
                                </label>
                                <input className={styles.lc_personalData_input}
                                       value={userData.input_first_name}
                                       onChange={(e) => {
                                    dispatch(change_user_firstname({first_name: e.target.value}))
                                }}/>
                            </div>
                            <div className={styles.lc_personalData_div}>
                                <label className={styles.lc_personalData_label}>
                                    Отчество
                                </label>
                                <input className={styles.lc_personalData_input}
                                       value={userData.input_sur_name}
                                       onChange={(e) => {
                                    dispatch(change_user_surname({sur_name: e.target.value}))
                                }}/>
                            </div>
                        </section>
                        <div className={styles.lc_headers}>
                            Account data
                        </div>
                        <DivideLineMono/>
                        <section className={styles.lc_personalData_section}>
                            <div className={styles.lc_personalData_div}>
                                <label className={styles.lc_personalData_label}>
                                    Телефон
                                </label>
                                <input className={styles.lc_personalData_input}
                                       value={userData.input_phone_number}
                                       onChange={(e) => {
                                    dispatch(change_user_phoneNumber({phone_number: e.target.value}))
                                }}/>
                            </div>
                            <div className={styles.lc_personalData_div}>
                                <label className={styles.lc_personalData_label}>
                                    Почта
                                </label>
                                <input className={styles.lc_personalData_input}
                                       value={userData.input_email}
                                       onChange={(e) => {
                                           dispatch(change_user_email({email: e.target.value}))
                                       }}/>
                            </div>
                            <div className={styles.lc_personalData_div}>
                                <label className={styles.lc_personalData_label}>
                                    Изменить пароль
                                </label>
                            </div>
                            <div className="">
                                <button onClick={() => {
                                    dispatch(save_user_changes())
                                    dispatch({type: UPDATE_USER_DATA})
                                }}>
                                    Сохранить
                                </button>
                            </div>
                        </section>
                    </DuoContentLeftPart>
                    <DuoContentRightPart>
                        <div className={styles.rc_wrapper}>
                            <div className={styles.rc_ava}>
                                Картиночка заглушечка
                            </div>
                            <section className={styles.rc_info}>
                                <label>
                                    name
                                </label>
                                <label>
                                    surname
                                </label>
                                <label>
                                    lastname
                                </label>
                                <label>
                                    email
                                </label>
                            </section>

                        </div>
                    </DuoContentRightPart>
                </DuoContent>
            </WrapperPersonalCabinet>
        </>
    )
}

export default PersonalData;