import "./CustomTemplate.css"
import TemplateRow from "../../../components/TemplateRow/TemplateRow";
import {useNavigate} from "react-router-dom";


const CustomTemplates = () => {

    const navigate = useNavigate()
    const createNewTemplate = () => {
        navigate("/templates/edit_template/1")
        console.log("Button clicked")
    }

    return (
        <>
            <div className="CustomTemplateContent">
                <div className="TemplateHeaderContent">
                    <div>
                        Мои шаблоны:
                    </div>
                    <div>
                        <input className="searchInput" placeholder="Поиск"/>
                    </div>
                    <div>
                        <div className="btnCreateTemplate" onClick={createNewTemplate}>
                            Создать новый шаблон
                        </div>
                    </div>
                </div>
                <div className="TemplateRows">
                    <TemplateRow test_title={"Виды интегральных уравнений и их решение"} group={"Б9119-02.03.01сцт"} tasks_amount={10} />
                    <TemplateRow test_title={"Шаблон 1"} group={"Б9119-02.03.01сцт"} tasks_amount={10} />
                    <TemplateRow test_title={"Шаблон 1"} group={"Б9119-02.03.01сцт"} tasks_amount={10} />
                    <TemplateRow test_title={"Шаблон 1"} group={"Б9119-02.03.01сцт"} tasks_amount={10} />
                    <TemplateRow test_title={"Шаблон 1"} group={"Б9119-02.03.01сцт"} tasks_amount={10} />
                    <TemplateRow test_title={"Шаблон 1"} group={"Б9119-02.03.01сцт"} tasks_amount={10} />
                    <TemplateRow test_title={"Шаблон 1"} group={"Б9119-02.03.01сцт"} tasks_amount={10} />
                    <TemplateRow test_title={"Шаблон 1"} group={"Б9119-02.03.01сцт"} tasks_amount={10} />
                    <TemplateRow test_title={"Шаблон 1"} group={"Б9119-02.03.01сцт"} tasks_amount={10} />
                    <TemplateRow test_title={"Шаблон 1"} group={"Б9119-02.03.01сцт"} tasks_amount={10} />
                    <TemplateRow test_title={"Шаблон 1"} group={"Б9119-02.03.01сцт"} tasks_amount={10} />
                    <TemplateRow test_title={"Шаблон 1"} group={"Б9119-02.03.01сцт"} tasks_amount={10} />
                    <TemplateRow test_title={"Шаблон 1"} group={"Б9119-02.03.01сцт"} tasks_amount={10} />
                    <TemplateRow test_title={"Шаблон 1"} group={"Б9119-02.03.01сцт"} tasks_amount={10} />
                    <TemplateRow test_title={"Шаблон 1"} group={"Б9119-02.03.01сцт"} tasks_amount={10} />
                </div>
            </div>
        </>
    )
}

export default CustomTemplates;