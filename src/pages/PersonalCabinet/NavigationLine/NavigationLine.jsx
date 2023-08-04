import "./NavigationLine.css"
import NavigationLineButton from "./NavigationLineButton/NavigationLineButton";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setActiveTab} from "../../../redux/store/reducers/Navigation_Reducer/store_NavigationReducer";

const NavigationLine = ({children}) => {
    const links_data = [
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
            button_name: "Личные данные",
            link: "/cabinet/personal_data"
        },
    ]

    const dispatch = useDispatch()
    const activeTab = useSelector(state => state.activeTabsData.active_tab)

    const changeTab = (id) => {
        dispatch(setActiveTab(id))
    }

    useEffect(() => {

    }, [])

    return (
        <div className="wrapperNavigationLine">
            {links_data.map((i, index) =>
                <div key={i.button_name}>
                    <NavigationLineButton
                        link_to={i.link}
                        activeTab={activeTab}
                        changeFunction={changeTab}
                        index={index}
                    >
                        {i.button_name}
                    </NavigationLineButton>

                </div>
            )}
        </div>
    )
}

export default NavigationLine;