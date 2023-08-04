import "./MyTemplates.css"
import NavigationLine from "../../../NavigationLine/NavigationLine";
import WrapperPersonalCabinet from "../../../WrapperPersonalCabinet/WrapperPersonalCabinet";
import MonoContent from "../../../MonoContent/MonoContent";
import DivideLineMono from "../../../../../components/DivideLines/DivideLine_Mono/DivideLineMono";
import Search from "../../../../../components/Search/Search";
import CreateBlueButton from "../../../../../components/Buttons/CreateBlueButton/CreateBlueButton";
import RowModule from "../../../../../components/RowModule/RowModule";

const MyTemplates = () => {

    return (
        <>
            <WrapperPersonalCabinet>
                <NavigationLine></NavigationLine>
                <MonoContent>
                    <div className="myTemplatesWrapper_upperBlock">
                        <Search style_params={{marginLeft: '16px'}}/>
                        <CreateBlueButton
                            button_params={{marginRight: '16px'}}
                        >Создать новый шаблон</CreateBlueButton>
                    </div>
                    <DivideLineMono/>
                    <div className="myTemplates_TemplateWrapper">
                        <RowModule
                            index={"1"}
                            template_name={"Temp first"}
                            template_group={"Б9119-02.03.01сцт"}
                            template_tasks_count={"11 заданий"}
                        />
                        <RowModule/>
                        <RowModule/>
                        <RowModule/>
                    </div>
                </MonoContent>
            </WrapperPersonalCabinet>
        </>
    )
}

export default MyTemplates;