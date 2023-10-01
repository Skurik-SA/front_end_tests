import {useEffect, useState} from "react";
import "./TestPage.css"
import PaginatedControlPanel from "../../components/PaginatedControlPanel/PaginatedControlPanel";
import BoxMultipleInput from "../../components/Inputs/BoxMultipleInput/BoxMultipleInput";
import {useNavigate, useParams} from "react-router-dom";
import {verifyToken} from "../../api/auth/VerifyToken";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_TEST_PAGE} from "../../redux/saga/tests/saga_LoadTestPageData";
import {
    save_task,
    send_data_to_check_test,
    set_is_active_task,
    set_test_id
} from "../../redux/store/slices/slice_TestForm";
import {SEND_TEST_DATA_TO_CHECK_ANSWERS} from "../../redux/saga/tests/saga_SendTestDataToCheckAnswers";
import DivideLineMono from "../../components/DivideLines/DivideLine_Mono/DivideLineMono";

const TestPage = () => {
    const dispatch = useDispatch()
    const params = useParams()

    const test = useSelector(state => state.TestFormData.test)
    const test_id = useSelector(state => state.TestFormData.test_id)
    const student_answers = useSelector(state => state.TestFormData.answers)
    const isActiveTask = useSelector(state => state.TestFormData.activeTask)

    //Сделать несколько варинатов input
    const [inputValue, setInputsValue] = useState("")

    function numericInputChange(event) {
        setInputsValue(event.target.value.replace(/[^0-9]/g,""))
    }

    const simpleInputChange = (event)=> {
        setInputsValue(event.target.value.toUpperCase())
    }

    const changeTaskList = (task) => {
        dispatch(set_is_active_task(task))
        setInputsValue(task.answer)
    }

    const saveAnswer = () => {
        dispatch(save_task({test: test, active_id: isActiveTask.id, inputValue: inputValue}))
    }
    const endTest = () => {
        dispatch(send_data_to_check_test())
        dispatch({type: SEND_TEST_DATA_TO_CHECK_ANSWERS,
            data: {
                id: test_id,
                student_answers: student_answers
            }
        })
        navigate('/cabinet/my_tests')
    }

    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('access_token') === null) {
            navigate('/login')
        }
        else {
            try {
                verifyToken(localStorage.getItem('access_token')).then(data => {
                    console.log(data)
                })
            }
            catch (e) {
                navigate('/login')
            }
        }
    }, [])

    useEffect(() => {
        dispatch({type: LOAD_TEST_PAGE, id: params.task_id})
        dispatch(send_data_to_check_test())
        dispatch(set_test_id(test.test_id))
    }, [])

    return (
        <>
            {test === undefined
                ?
                <div>
                    Загрузка
                </div>
                :
                <>
                    {test === []
                        ?
                        <div></div>
                        :
                        <PaginatedControlPanel tasks={test} change={changeTaskList} end={endTest}/>

                    }
                    <div className="BlockWrapper">
                        <div className="TaskContent">
                            <h1 >
                                {isActiveTask.taskTitle}
                            </h1>
                            <DivideLineMono/>
                            <div>
                                {isActiveTask.taskText}
                            </div>
                        </div>
                        <div className="BtnContent">
                            <div style={{display: "flex", justifyContent: 'center', alignItems: "center", fontSize: '1.5rem', gap: '20px'}}>
                                <div>
                                    Поле ввода:
                                </div>
                                <div>
                                    <input type="text" className="testPage_input" value={inputValue} onChange={simpleInputChange}/>
                                </div>
                            </div>
                            <button onClick={saveAnswer}> Сохранить ответ</button>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default TestPage;