import "../TemplateStyles/EditTemplatePage.css"
import "../TemplateStyles/CommonTemplateStyles.css"

import TemplateRow from "../../../components/TemplateRow/TemplateRow";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GET_TASK_TYPES} from "../../../redux/saga/tests/saga_LoadTaskTypes";
import {useNavigate, useParams} from "react-router-dom";
import {GET_TEST_TEMPLATE_BY_ID} from "../../../redux/saga/tests/saga_LoadTestTemplate_byID";
import {UPDATE_TEST_TEMPLATE} from "../../../redux/saga/tests/saga_UpdateTemplate";
import DotedLoader from "../../../components/Loaders/DotedLoader/DotedLoader";
import NinjaInput from "../../../components/Inputs/NinjaInput/NinjaInput";
import {
    add_task_to_test,
    save_test_template,
    set_group_value,
    set_input_value
} from "../../../redux/store/slices/slice_CreateTemplates";


const EditTemplatePage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    console.log(params)

    const templateData = useSelector(state => state.ModifyTemplatesData.test_data)
    const task_types = useSelector(state => state.ModifyTemplatesData.task_types)

    const title = useSelector(state => state.ModifyTemplatesData.title_value)
    const group = useSelector(state => state.ModifyTemplatesData.group_value)

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
        dispatch(add_task_to_test(e.target.children[0].textContent))
        dispatch(save_test_template())
    }

    const saveBtn = async () => {
        // dispatch(createTemplateCreator(titleInput, groupInput))
        dispatch(save_test_template())
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
            <div className="TemplateContent">
                <div className="TemplateHeaderContent">
                    <div className="blockHeader">
                        <div>Название</div>
                        <NinjaInput
                            value={title}
                            onChange={titleOnChange}
                        />
                        {/*<input className="searchInput" placeholder={formData.title} value={titleInput} onChange={titleOnChange}/>*/}
                    </div>
                    <div className="blockHeader">
                        <div>
                            Группа2
                        </div>
                        <NinjaInput
                            value={group}
                            onChange={groupOnChange}
                        />
                        {/*<input className="searchInput" placeholder={formData.group_id} value={group} onChange={groupOnChange}/>*/}
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