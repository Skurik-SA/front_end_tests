import "./TasksPlan.css"
import WrapperPersonalCabinet from "../../WrapperPersonalCabinet/WrapperPersonalCabinet";
import NavigationLine from "../../NavigationLine/NavigationLine";
import MonoContent from "../../MonoContent/MonoContent";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {set_navbar_link} from "../../../../redux/store/slices/slice_Navbar";

const TasksPlan = () => {

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
                    link: 'cabinet/plan',
                    link_name: 'План занятий',
                    active: false,
                }
            ]
        ))
    }, [])

    return (
        <>
            <WrapperPersonalCabinet>
                <NavigationLine tab_id={3}></NavigationLine>
                <MonoContent>
                    TasksPlan
                </MonoContent>
            </WrapperPersonalCabinet>
        </>
    )
}

export default TasksPlan;