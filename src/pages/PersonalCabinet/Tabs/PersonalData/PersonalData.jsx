import "./PersonalData.css"
import WrapperPersonalCabinet from "../../WrapperPersonalCabinet/WrapperPersonalCabinet";
import NavigationLine from "../../NavigationLine/NavigationLine";
import MonoContent from "../../MonoContent/MonoContent";

const PersonalData = () => {
    return (
        <>
            <WrapperPersonalCabinet>
                <NavigationLine tab_id={5}></NavigationLine>
                <MonoContent>
                    PersonalData
                </MonoContent>
            </WrapperPersonalCabinet>
        </>
    )
}

export default PersonalData;