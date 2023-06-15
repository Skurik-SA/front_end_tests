import TemplateRow from "../../../components/TemplateRow/TemplateRow";


const GeneralTemplates = () => {
    return (
        <>
            <div className="CustomTemplateContent">
                <div className="TemplateHeaderContent">
                    <div>
                        Общие шаблоны:
                    </div>
                    <div>
                        <select>
                            <option>Вариант 1</option>
                            <option>Вариант 2</option>
                            <option>Вариант 3</option>
                        </select>
                    </div>
                </div>
                <div className="TemplateRows">
                    <TemplateRow test_title={"Виды интегральных уравнений и их решение"} tasks_amount={10} add_test={true}/>
                    <TemplateRow test_title={"Шаблон 1"} tasks_amount={10} add_test={true}/>
                    <TemplateRow test_title={"Шаблон 1"} tasks_amount={10} add_test={true}/>
                    <TemplateRow test_title={"Шаблон 1"} tasks_amount={10} add_test={true}/>
                    <TemplateRow test_title={"Шаблон 1"} tasks_amount={10} add_test={true}/>
                    <TemplateRow test_title={"Шаблон 1"} tasks_amount={10} add_test={true}/>
                    <TemplateRow test_title={"Шаблон 1"} tasks_amount={10} add_test={true}/>
                    <TemplateRow test_title={"Шаблон 1"} tasks_amount={10} add_test={true}/>
                    <TemplateRow test_title={"Шаблон 1"} tasks_amount={10} add_test={true}/>
                    <TemplateRow test_title={"Шаблон 1"} tasks_amount={10} add_test={true}/>
                    <TemplateRow test_title={"Шаблон 1"} tasks_amount={10} add_test={true}/>
                    <TemplateRow test_title={"Шаблон 1"} tasks_amount={10} add_test={true}/>
                    <TemplateRow test_title={"Шаблон 1"} tasks_amount={10} add_test={true}/>
                    <TemplateRow test_title={"Шаблон 1"} tasks_amount={10} add_test={true}/>

                </div>
            </div>
        </>
    )
}

export default GeneralTemplates;