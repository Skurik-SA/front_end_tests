import "./CustomTemplate.css"
import TemplateRow from "../../../components/TemplateRow/TemplateRow";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_CUSTOM_TEMPLATES, LOAD_PERSONAL_PAGE_DATA} from "../../../redux/saga/actions_Saga/actions_saga";
import {clearCreator} from "../../../redux/store/reducers/store_TemplateCreatePageReducer";


const CustomTemplates = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const tests = useSelector(state => state.custom_templates.custom_templates)

    const createNewTemplate = () => {
        dispatch(clearCreator())
        navigate("/templates/create_template/")
        console.log("Button clicked")
    }

    useEffect(() => {
        dispatch({type: LOAD_CUSTOM_TEMPLATES})
    }, [])

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
                    {tests.length <= 0
                        ?
                        <div>Загрузка</div>
                        :
                        <>
                            {tests.map(test =>
                                <TemplateRow key={test.id}
                                             test_title={test.title}
                                             group={"Группа " + test.group_id}
                                             test={test}
                                             page_name={"CUSTOM"}
                                             custom={true}
                                             generate={true}
                                             />
                            )}
                        </>

                    }
                </div>
            </div>
        </>
    )
}

export default CustomTemplates;