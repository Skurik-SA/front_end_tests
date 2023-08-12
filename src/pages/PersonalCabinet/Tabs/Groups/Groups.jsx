import "./Groups.css"
import WrapperPersonalCabinet from "../../WrapperPersonalCabinet/WrapperPersonalCabinet";
import NavigationLine from "../../NavigationLine/NavigationLine";
import MonoContent from "../../MonoContent/MonoContent";
import {useEffect} from "react";
import {set_navbar_link} from "../../../../redux/store/slices/slice_Navbar";
import {useDispatch} from "react-redux";

const Groups = () => {

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
                    link: 'cabinet/groups_new',
                    link_name: 'Группы',
                    active: false,
                }
            ]
        ))
    }, [])

    return (
        <>
            <WrapperPersonalCabinet>
                <NavigationLine tab_id={2}></NavigationLine>
                <MonoContent>
                    Groups
                </MonoContent>
            </WrapperPersonalCabinet>
        </>
    )
}

export default Groups;