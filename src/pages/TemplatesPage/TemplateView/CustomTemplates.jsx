import "../TemplateStyles/CommonTemplateStyles.css"
import TemplateRow from "../../../components/TemplateRow/TemplateRow";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_CUSTOM_TEMPLATES} from "../../../redux/saga/actions_Saga/actions_saga";
// import {clearCreator} from "../../../redux/store/reducers/Template_Reducers/store_TemplateCreatePageReducer";
import DotedLoader from "../../../components/Loaders/DotedLoader/DotedLoader";
import NinjaSearchInput from "../../../components/Inputs/NinjaSearchInput/NinjaSearchInput";
import {clear_data} from "../../../redux/store/slices/slice_CreateTemplates";


const CustomTemplates = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const tests = useSelector(state => state.CustomTemplatesData.custom_templates)

    const [filterInput, setFilterInput] = useState("")
    const filteredData = tests.filter(test => {
        return test.title.toLowerCase().includes(filterInput.toLowerCase())
    })

    const createNewTemplate = () => {
        // dispatch(clearCreator())
        dispatch(clear_data)
        navigate("/templates/create_template/")
        console.log("Button clicked")
    }

    useEffect(() => {
        dispatch({type: LOAD_CUSTOM_TEMPLATES})
    }, [])

    return (
        <>
            <div className="TemplateContent">
                <div className="TemplateHeaderContent">
                    <div>
                        Мои шаблоны:
                    </div>
                    <div>
                        <NinjaSearchInput
                            placeholder={"Поиск"}
                            value={filterInput}
                            onChange={(e) => {
                                e.preventDefault()
                                setFilterInput(e.target.value)
                            }}
                        />
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
                        <div className="loader_style">
                            <DotedLoader/>
                        </div>
                        :
                        <>
                            {filteredData.map(test =>
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