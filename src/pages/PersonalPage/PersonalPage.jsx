
import "./PersonalPage.css"
import {ModalActiveIcon, ModalInactiveIcon} from "../../components/Icons/PersonalPageIcons";
import PersonalPageButton from "../../components/Buttons/PersonalPageButton/PersonalPageButton";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    change_Email,
    change_Lastname,
    change_Name,
    change_Phone_number,
    change_Surname, save_changes
} from "../../redux/store/reducers/User_Reducers/store_UserReducer";
import {UPDATE_USER_DATA} from "../../redux/saga/auth/saga_UpdateUserData";
import PersonalData from "../../components/PesonalSubPages/PersonalData/PersonalData";
import GroupsData from "../../components/PesonalSubPages/GroupsData/GroupsData";
import StatisticData from "../../components/PesonalSubPages/StatisticData/StatisticData";
import TestData from "../../components/PesonalSubPages/Testdata/TestData";

const PersonalPage = () => {

    const dispatch = useDispatch()
    const userData = useSelector(state => state.userData)

    const [btnsActive, setBtnsActive] = useState(
        [
            true, //Личные данные
            false, //Статистика
            false, //Мои шаблоны
            false // Мои группы
        ]
    )

    // const [group, setGroup] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])
    const [group, setGroup] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])

    return (
        <>
            <div className="PP_Layout">
                <div className="TopField_Layout">
                    <div className="PersonalInfo">
                        <div className="PersonalImage"> </div>
                        <div className="PersonalData">
                            <div>
                                {userData.user_data.last_name}
                            </div>
                            <div>
                                {userData.user_data.first_name}
                            </div>
                            <div>
                                {userData.user_data.sur_name}
                            </div>
                            <div className="email">
                                {userData.user_data.email}
                            </div>
                        </div>
                        <div className="modalMenuButtons">
                            <ModalInactiveIcon/>
                            <ModalActiveIcon/>
                        </div>
                    </div>
                    <div className="Button_tabs">
                        <div className="tabs_block1">
                            <PersonalPageButton index={1} active_arr={btnsActive} set_active_arr={setBtnsActive}>
                                Личные данные
                            </PersonalPageButton>
                            <PersonalPageButton index={2} active_arr={btnsActive} set_active_arr={setBtnsActive}>
                                Статистика
                            </PersonalPageButton>
                        </div>
                        <div className="tabs_block2">
                            <PersonalPageButton index={3} active_arr={btnsActive} set_active_arr={setBtnsActive}>
                                Мои тесты
                            </PersonalPageButton>
                            <PersonalPageButton index={4} active_arr={btnsActive} set_active_arr={setBtnsActive}>
                                Мои группы
                            </PersonalPageButton>
                        </div>
                    </div>
                </div>
                <div className="BottomFiled_Layout">
                    {btnsActive[0]
                        ?
                            <PersonalData data={userData}/>
                        :
                            <>
                                {btnsActive[1]
                                    ?
                                        <StatisticData data={group}/>
                                    :
                                        <>
                                            {btnsActive[2]
                                                ?
                                                    <TestData/>
                                                :
                                                <>
                                                    {btnsActive[3]
                                                        ?
                                                            <GroupsData/>
                                                        :
                                                        <></>
                                                    }
                                                </>
                                            }
                                        </>
                                }
                            </>
                    }
                </div>
            </div>
        </>
    )
}

export default PersonalPage;