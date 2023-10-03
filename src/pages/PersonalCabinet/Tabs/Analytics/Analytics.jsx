import "./Analytics.css"
import WrapperPersonalCabinet from "../../WrapperPersonalCabinet/WrapperPersonalCabinet";
import NavigationLine from "../../NavigationLine/NavigationLine";
import MonoContent from "../../MonoContent/MonoContent";
import {useEffect} from "react";
// import {clear_data} from "../../../../redux/store/slices/slice_CreateTemplates";
// import {GET_TASK_TYPES} from "../../../../redux/saga/tests/saga_LoadTaskTypes";
import {set_navbar_link} from "../../../../redux/store/slices/slice_Navbar";
import {useDispatch} from "react-redux";

const Analytics = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(set_navbar_link(
            [
                {
                    link: 'cabinet/personal_data',
                    link_name: 'Личный кабинет | ',
                    active: false,
                },
                {
                    link: 'cabinet/analytics',
                    link_name: 'Аналитика',
                    active: false,
                }
            ]
        ))
    }, [])

    return (
        <>
            <WrapperPersonalCabinet>
                <NavigationLine tab_id={1}></NavigationLine>
                <MonoContent>
                    Analytics
                </MonoContent>
            </WrapperPersonalCabinet>
        </>
    )
}

export default Analytics;