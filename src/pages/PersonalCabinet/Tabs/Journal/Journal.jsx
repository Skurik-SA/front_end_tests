import "./Journal.css"
import WrapperPersonalCabinet from "../../WrapperPersonalCabinet/WrapperPersonalCabinet";
import NavigationLine from "../../NavigationLine/NavigationLine";
import MonoContent from "../../MonoContent/MonoContent";

const Journal = () => {
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