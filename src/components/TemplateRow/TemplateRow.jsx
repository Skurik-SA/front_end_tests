import "./TemplateRow.css"
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {DELETE_TEMPLATE} from "../../redux/saga/tests/saga_DeleteTemplate";
import {COPY_TEMPLATE} from "../../redux/saga/tests/saga_CopyTemplate";
import {delete_custom_template} from "../../redux/store/slices/slice_CustomTemplates";
import {delete_task_to_test, save_test_template} from "../../redux/store/slices/slice_CreateTemplates";

const TemplateRow = ({test_title,
                      group,
                      testID,
                      test,
                      page_name,
                      custom= false,
                      generate=false,
                      pass_test=false,
                      add_test=false
}) => {

    const [isCustom, setIsCustom] = useState(custom)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const copy_btn = () => {
        dispatch({type: COPY_TEMPLATE, payload: test.id})
        console.log("Copy button clicked")
    }

    const edit_btn = () => {

        navigate(`/templates/edit_template/${test.id}/`)
        console.log("Edit button clicked")
    }

    const delete_btn = () => {
        console.log(testID)

        if (page_name === "EDIT")
            dispatch(delete_task_to_test(testID))
            dispatch(save_test_template())
            console.log("edited")

        if (page_name === "CUSTOM") {
            dispatch({type: DELETE_TEMPLATE, payload: test.id})
            dispatch(delete_custom_template(test.id))
        }

        console.log("Delete button clicked")
    }

    const add_btn = () => {
        console.log("Add button clicked")
    }

    const generate_btn = async () => {
        const {data} = await axios.get(`http://127.0.0.1:8000/tests/api/generate/${test.id}`)
        console.log(data)
        alert(`${data.title} сгенерирован [${data.id}]`)
        navigate(`/test/${data.id}`)
    }

    const pass_btn = async () => {
        const {data} = await axios.get(`http://127.0.0.1:8000/tests/api/personal_test/${test.id}`)
        navigate(`/test/${data.id}`)
    }

    return (
        <div className="TemplateRowContentGray">
            <div className="infoTemplate">
                {test_title
                    ?
                    <>
                        <div className="infoTitle">
                            {test_title}
                        </div>
                        <div>
                            /
                        </div>
                    </>
                    :
                    <></>
                }
                {group
                    ?
                    <>
                        <div>
                            {group}
                        </div>
                        <div>
                            /
                        </div>
                    </>
                    :
                    <></>
                }
                {test
                    ?
                    <div>
                        {test.tasks_amount} заданий
                    </div>
                    :
                    <></>
                }
            </div>
            <div className="BtnTemplateContent">
                {isCustom
                    ?
                        <>
                            <div className="btnTemplateCopy" onClick={copy_btn}>
                                Копировать
                            </div>
                            <div className="btnTemplateEdit" onClick={edit_btn}>
                                Редактировать
                            </div>
                            <div className="btnTemplateDelete" onClick={delete_btn}>
                                Удалить
                            </div>
                        </>
                        :
                        <></>
                }
                {generate
                    ?
                        <div className="btnTemplateCopy" onClick={generate_btn}>
                            Сгенерировать
                        </div>
                    :
                    <></>
                }
                {pass_test
                    ?
                        <div className="btnTemplateCopy" onClick={pass_btn}>
                            Пройти тест
                        </div>
                    :
                    <></>
                }
                {add_test
                    ?
                    <div className="btnTemplateCopy" onClick={add_btn}>
                        Добавить себе
                    </div>
                    :
                    <></>
                }

            </div>
        </div>
    )
}

export default TemplateRow;