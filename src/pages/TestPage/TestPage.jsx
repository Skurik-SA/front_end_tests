import {useEffect, useState} from "react";
import "./TestPage.css"
import PaginatedControlPanel from "../../components/PaginatedControlPanel/PaginatedControlPanel";
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
import {clear_pt} from "../../redux/store/slices/slice_PersonalTests";
import {set_navbar_link} from "../../redux/store/slices/slice_Navbar";

const TestPage = () => {
    const dispatch = useDispatch()
    const params = useParams()

    const test = useSelector(state => state.TestFormData.test)
    const test_id = useSelector(state => state.TestFormData.test_id)
    const test_title = useSelector(state => state.TestFormData.title)
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
        dispatch(clear_pt())
        navigate('/cabinet/personal_data')
    }

    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('access_token') === null) {
            navigate('/login')
        }
    }, [])

    useEffect(() => {
        dispatch({type: LOAD_TEST_PAGE, id: params.task_id})
        dispatch(send_data_to_check_test())
        dispatch(set_test_id(test.test_id))
        dispatch(set_navbar_link(
            [
                {
                    link: 'cabinet/my_tests',
                    link_name: 'Мои тесты | ',
                    active: true,
                },
            ]
        ))
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
                    <PaginatedControlPanel tasks={test} change={changeTaskList} end={endTest}/>
                    <div className="TestPageTestWrapper">
                        <section className="TaskContent">
                            <h1 >
                                {isActiveTask.taskTitle}
                            </h1>
                            <DivideLineMono/>
                            <div className="inside_text">
                                {isActiveTask.taskText}
                            </div>
                        </section>
                        <section>
                            <div className="BtnContent">
                                <div className="btn_wrapper">
                                    <div className="input_text_val">
                                        Поле ввода:
                                    </div>
                                    <div>
                                        <input type="text" className="testPage_input" value={inputValue} onChange={simpleInputChange}/>
                                    </div>
                                </div>
                                <button className="sv_btn" onClick={saveAnswer}> Сохранить</button>
                            </div>
                        </section>
                    </div>

                </>
            }
        </>

    // <>
    //     {test === undefined
    //         ?
    //         <div>
    //             Загрузка
    //         </div>
    //         :
    //         <>
    //             {test === []
    //                 ?
    //                 <div></div>
    //                 :
    //                 <PaginatedControlPanel tasks={test} change={changeTaskList} end={endTest}/>
    //
    //             }
    //             <div className="BlockWrapper">
    //                 <div className="TaskContent">
    //                     <h1 >
    //                         {isActiveTask.taskTitle}
    //                     </h1>
    //                     <DivideLineMono/>
    //                     <div>
    //                         {isActiveTask.taskText}
    //                     </div>
    //                 </div>
    //                 <div className="BtnContent">
    //                     <div className="btn_wrapper">
    //                         <div className="input_text_val">
    //                             Поле ввода:
    //                         </div>
    //                         <div>
    //                             <input type="text" className="testPage_input" value={inputValue} onChange={simpleInputChange}/>
    //                         </div>
    //                     </div>
    //                     <button className="sv_btn" onClick={saveAnswer}> Сохранить</button>
    //                 </div>
    //             </div>
    //         </>
    //     }
    // </>
    )
}

export default TestPage;