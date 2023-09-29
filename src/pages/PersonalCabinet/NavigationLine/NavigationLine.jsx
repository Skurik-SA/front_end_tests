import "./NavigationLine.css"
import NavigationLineButton from "./NavigationLineButton/NavigationLineButton";
import {useDispatch, useSelector} from "react-redux";
import {set_active_tab} from "../../../redux/store/slices/slice_Navigation";

const NavigationLine = ({children, tab_id}) => {
    // tab_id: 0, 1, 2, 3, 4, 5
    const links_data_teacher = [
        {
            button_name: "Журнал",
            link: "/cabinet/journal"
        },
        {
            button_name: "Аналитика",
            link: "/cabinet/analytics"
        },
        {
            button_name: "Группы",
            link: "/cabinet/groups_new"
        },
        {
            button_name: "План занятий",
            link: "/cabinet/plan"
        },
        {
            button_name: "Мои шаблоны",
            link: "/cabinet/my_templates"
        },
        {
            button_name: "Профиль",
            link: "/cabinet/personal_data"
        },
    ]

    // tab_id: 10, 11...
    const links_data_student = [
        {
            button_name: "Мои тесты",
            link: "/cabinet/my_tests"
        },
        {
            button_name: "Профиль",
            link: "/cabinet/personal_data"
        },
    ]

    const dispatch = useDispatch()

    const userData = useSelector(state => state.UserData.user_data)

    const changeTab = (id) => {
        dispatch(set_active_tab(id))
    }


    return (
        <div className="wrapperNavigationLine">
            {userData && userData.is_teacher
                ?
                <>
                    {links_data_teacher.map((i, index) =>
                        <div key={i.button_name}>
                            <NavigationLineButton
                                link_to={i.link}
                                activeTab={tab_id}
                                changeFunction={changeTab}
                                index={index}
                            >
                                {i.button_name}
                            </NavigationLineButton>

                        </div>
                    )}
                </>
                :
                <>
                    {links_data_student.map((i, index) =>
                        <div key={i.button_name}>
                            <NavigationLineButton
                                link_to={i.link}
                                activeTab={tab_id}
                                changeFunction={changeTab}
                                index={index}
                            >
                                {i.button_name}
                            </NavigationLineButton>

                        </div>
                    )}
                </>
            }
        </div>
    )
}

export default NavigationLine;