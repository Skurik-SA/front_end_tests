import styles from "./RowModuleTests.module.css"
import axios from "axios";
import {useNavigate} from "react-router-dom";

const RowModuleTests = (props) => {

    const navigate = useNavigate()

    const {
        key,
        test_title,
        group,
        tasks_amount,
        is_closed,
        testID,
        mark
    } = props

    const pass_btn = async () => {
        // const {data} = await axios.get(`http://127.0.0.1:8000/tests/api/personal_test/${testID}`)
        // navigate(`/test/${data.id}`)
    }

    return (
        <>
            <div className={styles.row_module_tests_container}>
                {test_title} {tasks_amount}
                {is_closed ? "Завершён" : "Ожидает прохождения"}
                {is_closed ? `Полученный балл: ${mark}` : ""}
            </div>
        </>
    )
}

export default RowModuleTests;