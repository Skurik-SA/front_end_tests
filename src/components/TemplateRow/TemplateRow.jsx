import "./TemplateRow.css"
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const TemplateRow = ({test_title, group, tasks_amount, test, custom= true, generate=false}) => {

    const [isCustom, setIsCustom] = useState(custom)

    const navigate = useNavigate()

    const copy_btn = () => {
        console.log("Copy button clicked")
    }

    const edit_btn = () => {
        console.log("Edit button clicked")
    }

    const delete_btn = () => {
        console.log("Delete button clicked")
    }

    const add_btn = () => {
        console.log("Add button clicked")
    }

    const generate_btn = async () => {
        const {data} = await axios.get(`http://127.0.0.1:8000/api/generate/${test.id}`)
        console.log(data)
        alert(`${data.title} сгенерирован [${data.id}]`)
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
                {tasks_amount
                    ?
                    <div>
                        {tasks_amount} заданий
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
                        generate
                            ?
                            <div className="btnTemplateCopy" onClick={generate_btn}>
                                Сгенерировать
                            </div>
                                :
                                <div className="btnTemplateCopy" onClick={add_btn}>
                                    Добавить себе
                                </div>
                }

            </div>
        </div>
    )
}

export default TemplateRow;