import "./PersonalData.css"
import WrapperPersonalCabinet from "../../WrapperPersonalCabinet/WrapperPersonalCabinet";
import NavigationLine from "../../NavigationLine/NavigationLine";
import MonoContent from "../../MonoContent/MonoContent";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {set_navbar_link} from "../../../../redux/store/slices/slice_Navbar";

const PersonalData = () => {

    const dispatch = useDispatch()
    const isTeacher = useSelector(state => state.UserData.user_data.is_teacher)

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
                <MonoContent>
                    PersonalData
                </MonoContent>
            </WrapperPersonalCabinet>
        </>
    )
}

export default PersonalData;