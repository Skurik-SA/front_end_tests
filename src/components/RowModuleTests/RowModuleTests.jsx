import styles from "./RowModuleTests.module.css"
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {clear_personal_test} from "../../redux/store/slices/slice_TestForm";

const RowModuleTests = (props) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {
        key,
        test_title,
        group,
        tasks_amount,
        is_closed,
        testID,
        mark
    } = props

    return (
        <>
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
                    {is_closed ? `Завершён. Полученный балл: ${mark}/${tasks_amount}` : "Ожидает прохождения..."}
                    {is_closed ? <></> :
                        <button className={styles.btnPassTest} onClick={() => {
                            dispatch(clear_personal_test())
                            navigate(`/test/${testID}`)
                        }}>
                            Пройти тест
                        </button>
                    }

                </section>
            </div>
        </>
    )
}

export default RowModuleTests;