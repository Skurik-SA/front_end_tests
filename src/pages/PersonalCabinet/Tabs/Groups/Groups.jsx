import "./Groups.css"
import WrapperPersonalCabinet from "../../WrapperPersonalCabinet/WrapperPersonalCabinet";
import NavigationLine from "../../NavigationLine/NavigationLine";
import MonoContent from "../../MonoContent/MonoContent";

const Groups = () => {
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