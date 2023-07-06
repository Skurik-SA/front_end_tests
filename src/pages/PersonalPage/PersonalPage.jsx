
import "./PersonalPage.css"
import {ModalActiveIcon, ModalInactiveIcon} from "../../components/Icons/PersonalPageIcons";
import PersonalPageButton from "../../components/Buttons/PersonalPageButton/PersonalPageButton";
import {useState} from "react";
import {useSelector} from "react-redux";

const PersonalPage = () => {

    const userData = useSelector(state => state.userData.user_data)

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
                                {userData.last_name}
                            </div>
                            <div>
                                {userData.first_name}
                            </div>
                            <div>
                                {userData.sur_name}
                            </div>
                            <div className="email">
                                {userData.email}
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
                            <>
                                <div className="input_wrapper">
                                    <div className="blank_input">
                                        <label>Фамилия</label>
                                        <input className="info_input" value={userData.last_name}></input>
                                    </div>
                                    <div className="blank_input">
                                        <label>Имя</label>
                                        <input className="info_input"  value={userData.first_name}></input>

                                    </div>
                                    <div className="blank_input">
                                        <label>Отчество</label>
                                        <input className="info_input" value={userData.sur_name}></input>

                                    </div>
                                    <div className="blank_input">
                                        <label>Телефон</label>
                                        <input className="info_input" value={userData.phone_number}></input>

                                    </div>
                                    <div className="blank_input">
                                        <label>Почта</label>
                                        <input className="info_input" value={userData.email}></input>

                                    </div>
                                </div>
                                <div className="save_personal">
                                    <button>
                                        Сохранить
                                    </button>
                                </div>
                            </>
                        :
                            <>
                                {btnsActive[1]
                                    ?
                                        <>
                                            <div className="statistic_wrapper">
                                                <div className="statistic_group">
                                                    <hr/>
                                                    Группы
                                                    <hr/>
                                                </div>
                                                <div className="statistic_table">
                                                    {group.map(person => <div>Человек {person}</div>)}
                                                </div>
                                            </div>
                                        </>
                                    :
                                        <>
                                            {btnsActive[2]
                                                ?
                                                <>
                                                    <div>qwerty</div>
                                                    <div>qwerty</div>
                                                    <div>qwerty</div>
                                                    <div>qwerty</div>
                                                    <div>qwerty</div>
                                                    <div>qwerty</div>
                                                    <div>qwerty</div>
                                                    <div>qwerty</div>
                                                    <div>qwerty</div>
                                                    <div>qwerty</div>
                                                    <div>qwerty</div>
                                                    <div>qwerty</div>
                                                    <div>qwerty</div>
                                                    <div>qwerty</div>
                                                    <div>qwerty</div>
                                                    <div>qwerty</div>

                                                </>
                                                :
                                                <>
                                                    {btnsActive[3]
                                                        ?
                                                        <>
                                                            <div>Муха</div>
                                                            <div>Муха</div>
                                                            <div>Муха</div>
                                                            <div>Муха</div>
                                                            <div>Муха</div>
                                                            <div>Муха</div>
                                                            <div>Муха</div>
                                                            <div>Муха</div>
                                                            <div>Муха</div>
                                                            <div>Муха</div>
                                                            <div>Муха</div>
                                                            <div>Муха</div>
                                                            <div>Муха</div>
                                                            <div>Муха</div>
                                                            <div>Муха</div>
                                                            <div>Муха</div>

                                                        </>
                                                        :
                                                        <>

                                                        </>
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