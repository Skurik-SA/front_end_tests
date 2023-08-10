import "./TasksPlan.css"
import WrapperPersonalCabinet from "../../WrapperPersonalCabinet/WrapperPersonalCabinet";
import NavigationLine from "../../NavigationLine/NavigationLine";
import MonoContent from "../../MonoContent/MonoContent";

const TasksPlan = () => {
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