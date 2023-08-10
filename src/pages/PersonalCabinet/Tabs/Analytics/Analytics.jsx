import "./Analytics.css"
import WrapperPersonalCabinet from "../../WrapperPersonalCabinet/WrapperPersonalCabinet";
import NavigationLine from "../../NavigationLine/NavigationLine";
import MonoContent from "../../MonoContent/MonoContent";

const Analytics = () => {
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