import {useEffect, useState} from "react";
import "./TestPage.css"
import PaginatedControlPanel from "../../components/PaginatedControlPanel/PaginatedControlPanel";
import BoxMultipleInput from "../../components/Inputs/BoxMultipleInput/BoxMultipleInput";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {verifyToken} from "../../api/auth/VerifyToken";
import {useFetching} from "../../components/hooks/useFetching";

const TestPage = () => {
    //Сделать несколько варинатов input
    const [inputValue, setInputsValue] = useState("")

    const params = useParams()

    const [Tasks, setTasks] = useState([{}
        // {id: 1, taskTitle: 'Task Title1', taskText: 'Task Itself1', inputType:'Simple input', answer: ''},
        // {id: 2, taskTitle: 'Task Title2', taskText: 'Task Itself2', inputType:'8-bit Input', answer: ''},
        // {id: 3, taskTitle: 'Task Title3', taskText: 'Task Itself3', inputType:'Simple input', answer: ''},
        // {id: 4, taskTitle: 'Task Title4', taskText: 'Task Itself4', inputType:'8-bit Input', answer: ''},
        // {id: 5, taskTitle: 'Task Title5', taskText: 'Task Itself5', inputType:'Simple input', answer: ''},
        // {id: 6, taskTitle: 'Task Title6', taskText: 'Task Itself6', inputType:'8-bit Input', answer: ''},
        // {id: 7, taskTitle: 'Task Title7', taskText: 'Task Itself7', inputType:'Simple input', answer: ''},
    ])

    const [isActiveTask, setIsActiveTask] = useState({})
    const [isDataLoading, setIsDataLoading] = useState(true)

    function numericInputChange(event) {
        setInputsValue(event.target.value.replace(/[^0-9]/g,""))
    }

    const simpleInputChange = (event)=> {
        setInputsValue(event.target.value)
    }

    const changeTaskList = (task) => {
        setIsActiveTask(task)
        setInputsValue(task.answer)
        console.log(Tasks)
    }

    const saveAnswer = () => {
        setTasks(prevState => prevState.map(item =>
            item.id === isActiveTask.id
            ? {...item, answer: inputValue}
                : item
        ))
    }

    const navigate = useNavigate()

    const [fetchData, isLoading, fetchError] = useFetching(async () => {
        const {data} = await axios.get(`http://127.0.0.1:8000/api/personal_test/${params.task_id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true}
        )
        let responseData = []
        for (let i = 0; i < data.tasks.length; i++) {
            responseData.push({
                id: i + 1,
                taskTitle: `Задание ${i + 1}`,
                taskText: data.tasks[i],
                inputType: data.input_type[i],
                answer: ''
            })
        }
        setTasks(responseData)
        setIsActiveTask(responseData[0])
    })

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
        fetchData()
        console.log(Tasks)
        // setIsDataLoading(false)
    }, [])

    return (
        <>
            {isLoading
                ?
                <div>Загрузка</div>
                :
                <>
                    <PaginatedControlPanel tasks={Tasks} change={changeTaskList}/>
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