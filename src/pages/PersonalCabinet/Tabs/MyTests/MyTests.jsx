import styles from "./MyTests.module.css"
import {useDispatch, useSelector} from "react-redux";
import {Fragment, useEffect} from "react";
import {set_navbar_link} from "../../../../redux/store/slices/slice_Navbar";
import NavigationLine from "../../NavigationLine/NavigationLine";
import MonoContent from "../../MonoContent/MonoContent";
import WrapperPersonalCabinet from "../../WrapperPersonalCabinet/WrapperPersonalCabinet";
import {LOAD_PERSONAL_PAGE_DATA} from "../../../../redux/saga/tests/saga_LoadPersonalTests";

import RowModuleTests from "../../../../components/RowModuleTests/RowModuleTests";
import DivideLineMono from "../../../../components/DivideLines/DivideLine_Mono/DivideLineMono";
import {verifyToken} from "../../../../api/auth/VerifyToken";
import {useNavigate} from "react-router-dom";


const MyTests = () => {
    const dispatch = useDispatch()
    const isTeacher = useSelector(state => state.UserData.user_data.is_teacher)
    const personalTests = useSelector(state => state.PersonalTestsData.personal_tests)
    const is_auth = useSelector(state => state.UserData.is_auth)
    const navigate = useNavigate()


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
                    <DivideLineMono/>

                    <div className={styles.my_tests_rows_wrapper}>
                        {personalTests && personalTests.length > 0
                            ?
                            <>
                                {personalTests.map((test, i) =>
                                    <Fragment key={i}>
                                        <RowModuleTests test_title={test.title}
                                                        tasks_amount={test.tasks_amount}
                                                        is_closed={test.is_Closed}
                                                        testID={test.id}
                                                        mark={test.mark}
                                        />
                                    </Fragment>
                                )}
                            </>
                            :
                            <>
                                Тесты не найдены
                            </>

                        }
                    </div>
                </MonoContent>
            </WrapperPersonalCabinet>
        </>
    )
}

export default MyTests;