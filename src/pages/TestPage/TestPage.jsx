import {useState} from "react";
import "./TestPage.css"
import PaginatedControlPanel from "../../components/PaginatedControlPanel/PaginatedControlPanel";
import BoxMultipleInput from "../../components/Inputs/BoxMultipleInput/BoxMultipleInput";

const TestPage = () => {
    //Сделать несколько варинатов input
    const [inputValue, setInputsValue] = useState("")

    const [Tasks, setTasks] = useState([
        {id: 1, taskTitle: 'Task Title1', taskText: 'Task Itself1', inputType:'Simple input', answer: ''},
        {id: 2, taskTitle: 'Task Title2', taskText: 'Task Itself2', inputType:'8-bit Input', answer: ''},
        {id: 3, taskTitle: 'Task Title3', taskText: 'Task Itself3', inputType:'Simple input', answer: ''},
        {id: 4, taskTitle: 'Task Title4', taskText: 'Task Itself4', inputType:'8-bit Input', answer: ''},
        {id: 5, taskTitle: 'Task Title5', taskText: 'Task Itself5', inputType:'Simple input', answer: ''},
        {id: 6, taskTitle: 'Task Title6', taskText: 'Task Itself6', inputType:'8-bit Input', answer: ''},
        {id: 7, taskTitle: 'Task Title7', taskText: 'Task Itself7', inputType:'Simple input', answer: ''},
    ])

    const [isActiveTask, setIsActiveTask] = useState(Tasks[0])

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

    return (
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
                    <div className>
                        Поле ввода:
                    </div>
                    {isActiveTask.inputType === '8-bit Input'
                    ?
                        <div className="CustomInputWrapper">
                            <BoxMultipleInput inputValue={inputValue} onChange={numericInputChange}/>
                        </div>
                        :
                        <div>
                            <input type="text" className="SimpleInput" value={inputValue} onChange={simpleInputChange}/>
                        </div>
                    }
                    <button onClick={saveAnswer}>Сохранить ответ</button>
                </div>
            </div>
        </>
    )
}

export default TestPage;