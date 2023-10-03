import styles from "./RowModuleTests.module.css"
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clear_personal_test} from "../../redux/store/slices/slice_TestForm";
import {useState} from "react";
import Portal from "../Portal/Portal";
import {GET_CLOSED_TEST_DATA} from "../../redux/saga/tests/saga_GetClosedTestData";
import ShowMeMyResults from "../ModalWindows/ShowMeMyResults/ShowMeMyResults";
import DivideLineMono from "../DivideLines/DivideLine_Mono/DivideLineMono";
import {clear_closed_personal_test_info} from "../../redux/store/slices/slice_PersonalTests";

const RowModuleTests = (props) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)

    const multiFunc = () => {
        setIsOpen(false)
        dispatch(clear_closed_personal_test_info())
        console.log("I can fly")
    }

    const {
        test_title,
        group,
        tasks_amount,
        is_closed,
        testID,
        mark
    } = props

    return (
        <>
            <Portal open={isOpen}
                    onClose={() => multiFunc()}
                    style={{  boxShadow:
                            "0 0 100px 0 rgba(0,0,0,0.75)", background: '#EAEEFF'
                    }}
            >
                <ShowMeMyResults onClose={() => multiFunc()}/>
            </Portal>
            <div className={styles.row_module_tests_container}>
                <section className={styles.textInfo}>
                    <div>
                        {test_title} |
                    </div>
                    <div>
                        {tasks_amount} заданий
                    </div>
                </section>
                <section className={styles.textInfo}>
                    {is_closed
                        ?
                        <>
                            Завершён. Полученный балл: {mark}/{tasks_amount}
                            <button className={styles.btnPassTest} onClick={() => {
                                setIsOpen(true)
                                dispatch({type: GET_CLOSED_TEST_DATA, testID})
                                // dispatch(clear_personal_test())
                                // navigate(`/test/${testID}`)
                            }}>
                                Посмотреть результат
                            </button>
                        </>
                        :
                        <>
                            "Ожидает прохождения..."
                            <button className={styles.btnPassTest} onClick={() => {
                                dispatch(clear_personal_test())
                                navigate(`/test/${testID}`)
                            }}>
                                Пройти тест
                            </button>
                        </>
                    }
                    {/*{is_closed ? <></> :*/}
                    {/*    */}
                    {/*}*/}

                </section>
            </div>
        </>
    )
}

export default RowModuleTests;