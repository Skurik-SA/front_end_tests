import "./TemplateRow.css"
import {useState} from "react";

const TemplateRow = ({test_title, group, tasks_amount, custom= true}) => {

    const [isCustom, setIsCustom] = useState(custom)

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

    return (
        <div className="TemplateRowContentGray">
            <div className="infoTemplate">
                <div className="infoTitle">
                    {test_title}
                </div>
                <div>
                    /
                </div>
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
                <div>
                    {tasks_amount} заданий
                </div>
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
                    <div className="btnTemplateCopy" onClick={add_btn}>
                        Добавить себе
                    </div>
                }

            </div>
        </div>
    )
}

export default TemplateRow;