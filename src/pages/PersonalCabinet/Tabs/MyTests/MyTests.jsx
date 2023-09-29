import styles from "./MyTests.module.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {LOAD_PERSONAL_CUSTOM_TEMPLATES} from "../../../../redux/saga/tests/saga_LoadPersonalCustomTemplates";
import {set_navbar_link} from "../../../../redux/store/slices/slice_Navbar";
import NavigationLine from "../../NavigationLine/NavigationLine";
import MonoContent from "../../MonoContent/MonoContent";
import WrapperPersonalCabinet from "../../WrapperPersonalCabinet/WrapperPersonalCabinet";
import {LOAD_PERSONAL_PAGE_DATA} from "../../../../redux/saga/tests/saga_LoadPersonalTests";
import TemplateRow from "../../../../components/TemplateRow/TemplateRow";
import RowModuleTests from "../../../../components/RowModuleTests/RowModuleTests";
// import {LOAD_PERSONAL_PAGE_DATA} from "../../../../redux/saga/actions_Saga/actions_saga";

const MyTests = () => {
    const dispatch = useDispatch()
    const isTeacher = useSelector(state => state.UserData.user_data.is_teacher)
    const personalTests = useSelector(state => state.PersonalTestsData.personal_tests)

    useEffect(() => {
        dispatch({type: LOAD_PERSONAL_PAGE_DATA})

        dispatch(set_navbar_link(
            [
                {
                    link: 'cabinet/personal_data',
                    link_name: 'Личный кабинет | ',
                    active: false,
                },
                {
                    link: 'cabinet/groups_new',
                    link_name: 'Мои тесты',
                    active: false,
                }
            ]
        ))
    }, [])

    return (
        <>
            <WrapperPersonalCabinet>
                <NavigationLine tab_id={isTeacher ? 6 : 0}></NavigationLine>
                <MonoContent>
                    <label>
                        Мои тесты
                    </label>
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
                                {personalTests.map((test, i) =>
                                    <RowModuleTests key={test.id}
                                                    test_title={test.title}
                                                    tasks_amount={test.tasks_amount}
                                                    is_closed={test.is_Closed}
                                                    testID={test.id}
                                                    mark={test.mark}
                                    />
                                )}
                            </>
                            :
                            <></>

                        }
                    </div>
                </MonoContent>
            </WrapperPersonalCabinet>
        </>
    )
}

export default MyTests;