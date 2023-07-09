import "./EditTemplatePage.css"
import TemplateRow from "../../../components/TemplateRow/TemplateRow";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    createTemplateCreator, setGroupValue, setInputValue,
    templatePageCreateCreator
} from "../../../redux/store/reducers/Template_Reducers/store_TemplateCreatePageReducer";
import {GET_TASK_TYPES, LOAD_TASK_TYPES} from "../../../redux/saga/tests/saga_LoadTaskTypes";
import {SEND_TEST_TEMPLATE} from "../../../redux/saga/tests/saga_SendNewTestTemplate";
import {useNavigate} from "react-router-dom";
import NinjaInput from "../../../components/Inputs/NinjaInput/NinjaInput";
import NinjaSearchInput from "../../../components/Inputs/NinjaSearchInput/NinjaSearchInput";


const CreateTemplatePage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const templateData = useSelector(state => state.templateData.test_data)
    const task_types = useSelector(state => state.templateData.task_types)

    const title = useSelector(state => state.templateData.title_value)
    const group = useSelector(state => state.templateData.group_value)

    const [filterInput, setFilterInput] = useState("")
    const filtered_types = task_types.filter(type => {
        return type.name.toLowerCase().includes(filterInput.toLowerCase())
    })

    const titleOnChange = (event) => {
        event.preventDefault()
        dispatch(setInputValue(event.target.value))
        dispatch(createTemplateCreator())
    }

    const groupOnChange = (event) => {
        event.preventDefault()
        dispatch(setGroupValue(event.target.value))
        dispatch(createTemplateCreator())
    }

    const addTask = (e) => {
        e.preventDefault()
        dispatch(templatePageCreateCreator(e.target.children[0].textContent))
        dispatch(createTemplateCreator())
    }

    const saveBtn = async () => {
        dispatch(createTemplateCreator())
        dispatch({type: SEND_TEST_TEMPLATE})
        navigate("/templates/custom_templates")
    }



    useEffect(() => {
        dispatch({type: GET_TASK_TYPES})
        console.log(templateData)
    }, [])


    return (
        <>
            <div className="EditTemplateContent">
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