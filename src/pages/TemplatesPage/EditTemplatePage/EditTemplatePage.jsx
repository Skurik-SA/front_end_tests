import "./EditTemplatePage.css"
import TemplateRow from "../../../components/TemplateRow/TemplateRow";
import {useFetching} from "../../../components/hooks/useFetching";
import axios from "axios";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    createTemplateCreator,
    templatePageCreateCreator
} from "../../../redux/store/reducers/store_TemplateCreatePageReducer";
import {GET_TASK_TYPES, LOAD_TASK_TYPES} from "../../../redux/saga/tests/saga_LoadTaskTypes";
import {SEND_TEST_TEMPLATE} from "../../../redux/saga/tests/saga_SendNewTestTemplate";
import {useNavigate} from "react-router-dom";


const EditTemplatePage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const templateData = useSelector(state => state.templateData.test_data)
    const task_types = useSelector(state => state.templateData.task_types)

    const [titleInput, setTitleInput] = useState("")
    const [groupInput, setGroupInput] = useState("")


    const titleOnChange = (event) => {
        event.preventDefault()
        setTitleInput(event.target.value)
    }

    const groupOnChange = (event) => {
        event.preventDefault()
        setGroupInput(event.target.value)
    }

    const addTask = (e) => {
        e.preventDefault()
        dispatch(templatePageCreateCreator(e.target.children[0].textContent))
        dispatch(createTemplateCreator(titleInput, groupInput))
    }

    const saveBtn = async () => {
        dispatch(createTemplateCreator(titleInput, groupInput))
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
                        <input className="searchInput" placeholder="Название" value={titleInput} onChange={titleOnChange}/>
                    </div>
                    <div className="blockHeader">
                        <div>
                            Группа
                        </div>
                        <input className="searchInput" placeholder="Селектор по идее, пока id" value={groupInput} onChange={groupOnChange}/>
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
                <input className="searchInput" placeholder="Поиск"/>
                <input className="searchInput" placeholder="Область"/>
                {task_types.map(task =>
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

export default EditTemplatePage;