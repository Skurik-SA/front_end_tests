import {useEffect} from "react";
import "./AllTestsPage.css"
import TemplateRow from "../../components/TemplateRow/TemplateRow";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_PERSONAL_PAGE_DATA} from "../../redux/saga/actions_Saga/actions_saga";


const AllTestsPage = () => {
    const personalTests = useSelector(state => state.personal_tests.personal_tests)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: LOAD_PERSONAL_PAGE_DATA})
    }, [])

    return (
        <>
            <div className="CustomTemplateContent">
                <div className="TemplateHeaderContent">
                    <div>
                        Мои тесты:
                    </div>
                    <div>
                        <input className="searchInput" placeholder="Поиск"/>
                    </div>
                </div>
                <div className="TemplateRows">
                    {personalTests.length > 0
                        ?
                        <>
                            {personalTests.map(test =>
                                <TemplateRow key={test.id}
                                             test_title={test.title}
                                             group={"Группа " + test.group_id}
                                             tasks_amount={10}
                                             test={test}
                                             custom={false}
                                             pass_test={true}
                                />
                            )}
                        </>
                        :
                        <></>

                    }
                </div>
            </div>
        </>
    )
}
export default AllTestsPage;