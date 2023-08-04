import "./Journal.css"
import WrapperPersonalCabinet from "../../WrapperPersonalCabinet/WrapperPersonalCabinet";
import NavigationLine from "../../NavigationLine/NavigationLine";
import MonoContent from "../../MonoContent/MonoContent";

const Journal = () => {
    return (
        <>
            <WrapperPersonalCabinet>
                <NavigationLine></NavigationLine>
                <MonoContent>
                    Journal
                </MonoContent>
            </WrapperPersonalCabinet>
        </>
    )
}

export default Journal;