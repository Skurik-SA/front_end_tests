import "./MyTemplates.css"
import NavigationLine from "../../../NavigationLine/NavigationLine";
import WrapperPersonalCabinet from "../../../WrapperPersonalCabinet/WrapperPersonalCabinet";
import MonoContent from "../../../MonoContent/MonoContent";
import DivideLineMono from "../../../../../components/DivideLines/DivideLine_Mono/DivideLineMono";
import Search from "../../../../../components/Search/Search";
import CreateBlueButton from "../../../../../components/Buttons/CreateBlueButton/CreateBlueButton";
import RowModule from "../../../../../components/RowModule/RowModule";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {LOAD_CUSTOM_TEMPLATES} from "../../../../../redux/saga/actions_Saga/actions_saga";

const MyTemplates = () => {

    const dispatch = useDispatch()
    const tests = useSelector(state => state.custom_templates.custom_templates)

    const [filterInput, setFilterInput] = useState("")
    const filteredData = tests.filter(test => {
        return (test.title + " " + test.group_id).toLowerCase().includes(filterInput.toLowerCase())
    })

    useEffect(() => {
        dispatch({type: LOAD_CUSTOM_TEMPLATES})
    }, [])

    return (
        <>
            <WrapperPersonalCabinet>
                <NavigationLine></NavigationLine>
                <MonoContent>
                    <div className="myTemplatesWrapper_upperBlock">
                        <Search
                            style_params={{marginLeft: '16px'}}
                            value={filterInput}
                            onChange={(e) => {
                                e.preventDefault()
                                setFilterInput(e.target.value)
                            }}
                        />
                        <CreateBlueButton
                            button_params={{marginRight: '16px'}}
                        >
                            Создать новый шаблон
                        </CreateBlueButton>
                    </div>
                    <DivideLineMono/>
                    <div className="myTemplates_TemplateWrapper">
                        {filteredData.map((test, index) =>
                            <RowModule
                                key={index}
                                index_row={index + 1}
                                width_style={{width: "70%"}}
                                template_name={test.title}
                                template_group={"Группа: " + test.group_id}
                                template_tasks_count={test.tasks_amount + " заданий"}
                                template_tasks={test.tasks_description}
                            />
                        )}
                    </div>
                </MonoContent>
            </WrapperPersonalCabinet>
        </>
    )
}

export default MyTemplates;