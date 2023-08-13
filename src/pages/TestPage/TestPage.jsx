import {useEffect, useState} from "react";
import "./TestPage.css"
import PaginatedControlPanel from "../../components/PaginatedControlPanel/PaginatedControlPanel";
import BoxMultipleInput from "../../components/Inputs/BoxMultipleInput/BoxMultipleInput";
import {useNavigate, useParams} from "react-router-dom";
import {verifyToken} from "../../api/auth/VerifyToken";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_TEST_PAGE} from "../../redux/saga/tests/saga_LoadTestPageData";
import {save_task, set_is_active_task} from "../../redux/store/slices/slice_TestForm";

const TestPage = () => {
    const dispatch = useDispatch()
    const params = useParams()

    const test = useSelector(state => state.TestFormData.test)
    const isActiveTask = useSelector(state => state.TestFormData.activeTask)

    //Сделать несколько варинатов input
    const [inputValue, setInputsValue] = useState("")

    function numericInputChange(event) {
        setInputsValue(event.target.value.replace(/[^0-9]/g,""))
    }

    const simpleInputChange = (event)=> {
        setInputsValue(event.target.value)
    }

    const changeTaskList = (task) => {
        dispatch(set_is_active_task(task))
        setInputsValue(task.answer)
    }

    const saveAnswer = () => {
        dispatch(save_task({test: test, active_id: isActiveTask.id, inputValue: inputValue}))
    }

    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('access_token') === null) {
            navigate('/login')
        }
        else {
            try {
                verifyToken(localStorage.getItem('access_token'))
            }
            catch (e) {
                navigate('/login')
            }
        }
    }, [])

    useEffect(() => {
        dispatch({type: LOAD_TEST_PAGE, id: params.task_id})
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
                        <PaginatedControlPanel tasks={test} change={changeTaskList}/>

                    }
                    <div className="BlockWrapper">
                        <div className="TaskContent">
                            <div>
                                {isActiveTask.taskTitle}
                            </div>
                            <div>
                                {isActiveTask.taskText}
                            </div>
                        </div>
                        <div className="BtnContent">
                            <div>
                                Поле ввода:
                            </div>
                            {isActiveTask.inputType === '8bit_input'
                                ?
                                <div className="CustomInputWrapper">
                                    <BoxMultipleInput inputValue={inputValue} onChange={numericInputChange}/>
                                </div>
                                :
                                <div>
                                    <input type="text" className="simple_input" value={inputValue} onChange={simpleInputChange}/>
                                </div>
                            }
                            <button onClick={saveAnswer}>Сохранить ответ</button>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default TestPage;