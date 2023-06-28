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
import {useNavigate, useParams} from "react-router-dom";
import {GET_TEST_TEMPLATE_BY_ID} from "../../../redux/saga/tests/saga_LoadTestTemplate_byID";
import {UPDATE_TEST_TEMPLATE} from "../../../redux/saga/tests/saga_UpdateTemplate";
import DotedLoader from "../../../components/Loaders/DotedLoader/DotedLoader";


const EditTemplatePage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    console.log(params)

    const templateData = useSelector(state => state.templateData.test_data)
    const formData = useSelector(state => state.templateData.formData)
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
        // dispatch(createTemplateCreator(titleInput, groupInput))
        dispatch({type: UPDATE_TEST_TEMPLATE, id: params.id_template})
        navigate("/templates/custom_templates")
    }



    useEffect(() => {
        dispatch({type: GET_TASK_TYPES})
        dispatch({type: GET_TEST_TEMPLATE_BY_ID, id: params.id_template})
        console.log(templateData)
    }, [])


    return (
        <>
            <div className="EditTemplateContent">
                <div className="TemplateHeaderContent">
                    <div className="blockHeader">
                        <div>Название</div>
                        <input className="searchInput" placeholder={formData.title} value={titleInput} onChange={titleOnChange}/>
                    </div>
                    <div className="blockHeader">
                        <div>
                            Группа2
                        </div>
                        <input className="searchInput" placeholder={formData.group_id} value={groupInput} onChange={groupOnChange}/>
                    </div>
                    <div>
                        <div className="btnCreateTemplate" onClick={saveBtn}>
                            Сохранить
                        </div>
                    </div>
                </div>
                <div className="TemplateRows">
                    {templateData.length <= 0
                        ?
                        <div className="loader_style">
                            <DotedLoader/>
                        </div>
                        :
                        <>
                            {templateData.map((test, index) =>
                                <TemplateRow key={index}
                                             test_title={templateData[index].name}
                                             testID={index}
                                             page_name={"EDIT"}
                                             custom={true}/>
                            )}
                        </>
                    }
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