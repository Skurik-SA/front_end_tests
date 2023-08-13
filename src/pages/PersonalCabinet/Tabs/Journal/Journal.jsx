import "./Journal.css"
import WrapperPersonalCabinet from "../../WrapperPersonalCabinet/WrapperPersonalCabinet";
import NavigationLine from "../../NavigationLine/NavigationLine";
import MonoContent from "../../MonoContent/MonoContent";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {set_navbar_link} from "../../../../redux/store/slices/slice_Navbar";

const Journal = () => {

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
                    link: 'cabinet/journal',
                    link_name: 'Журнал',
                    active: false,
                }
            ]
        ))
    }, [])

    return (
        <>
            <WrapperPersonalCabinet>
                <NavigationLine tab_id={0}></NavigationLine>
                <MonoContent>
                    Journal
                </MonoContent>
            </WrapperPersonalCabinet>
        </>
    )
}

export default Journal;