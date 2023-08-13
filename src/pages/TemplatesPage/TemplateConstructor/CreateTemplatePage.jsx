import "../TemplateStyles/EditTemplatePage.css"
import "../TemplateStyles/CommonTemplateStyles.css"

import TemplateRow from "../../../components/TemplateRow/TemplateRow";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GET_TASK_TYPES} from "../../../redux/saga/tests/saga_LoadTaskTypes";
import {SEND_TEST_TEMPLATE} from "../../../redux/saga/tests/saga_SendNewTestTemplate";
import {useNavigate} from "react-router-dom";
import NinjaInput from "../../../components/Inputs/NinjaInput/NinjaInput";
import NinjaSearchInput from "../../../components/Inputs/NinjaSearchInput/NinjaSearchInput";
import {
    add_task_to_test, clear_data,
    save_test_template,
    set_group_value,
    set_input_value
} from "../../../redux/store/slices/slice_CreateTemplates";


const CreateTemplatePage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const templateData = useSelector(state => state.ModifyTemplatesData.test_data)
    const task_types = useSelector(state => state.ModifyTemplatesData.task_types)

    const title = useSelector(state => state.ModifyTemplatesData.title_value)
    const group = useSelector(state => state.ModifyTemplatesData.group_value)

    const [filterInput, setFilterInput] = useState("")
    const filtered_types = task_types.filter(type => {
        return type.name.toLowerCase().includes(filterInput.toLowerCase())
    })

    const titleOnChange = (event) => {
        event.preventDefault()
        dispatch(set_input_value(event.target.value))
        dispatch(save_test_template())
    }

    const groupOnChange = (event) => {
        event.preventDefault()
        dispatch(set_group_value(event.target.value))
        dispatch(save_test_template())
    }

    const addTask = (e) => {
        e.preventDefault()
        console.log(e.target.children[0].textContent)
        dispatch(add_task_to_test(e.target.children[0].textContent))
        dispatch(save_test_template())
    }

    const saveBtn = async () => {
        dispatch(save_test_template())
        dispatch({type: SEND_TEST_TEMPLATE})
        navigate("/templates/custom_templates")
    }

    useEffect(() => {
        dispatch(clear_data())
        dispatch({type: GET_TASK_TYPES})
        console.log(templateData)
    }, [])


    return (
        <>
            <div className="TemplateContent">
                <div className="TemplateHeaderContent">
                    <div className="blockHeader">
                        <div>Название</div>
                        <NinjaInput
                            value={title}
                            onChange={titleOnChange}
                        />
                    </div>
                    <div className="blockHeader">
                        <div>
                            Группа
                        </div>
                        <NinjaInput
                            value={group}
                            onChange={groupOnChange}
                        />
                    </div>
                    <div>
                        <div className="btnCreateTemplate" onClick={saveBtn}>
                            Сохранить
                        </div>
                    </div>
                </div>
                <div className="TemplateRows">
                    {templateData.map((test, index) =>
                        <TemplateRow key={index}
                                     test_title={templateData[index].name}
                                     testID={index}
                                     page_name={"EDIT"}
                                     custom={true}/>
                    )}
                </div>

            </div>
            <div className="taskContentPanel">
                <div className="side_panel_inputs">
                    <NinjaSearchInput
                        placeholder={"Поиск"}
                        value={filterInput}
                        onChange={(e) => {
                            e.preventDefault()
                            setFilterInput(e.target.value)
                        }}
                        className={"searchInput"}
                    />
                    <NinjaSearchInput
                        placeholder={"Область"}
                        className={"searchInput"}
                    />
                </div>
                {filtered_types.map(task =>
                    <div key={task.task_id} className="taskPanelRow" onClick={addTask} >
                        {task.name}
                        <div hidden={true}>
                            {task.task_id}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default CreateTemplatePage;