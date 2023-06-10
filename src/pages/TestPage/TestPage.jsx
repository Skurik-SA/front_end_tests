import {useState} from "react";
import "./TestPage.css"
import PaginationButton from "../../components/PaginationButton/PaginationButton";
import PaginatedControlPanel from "../../components/PaginatedControlPanel/PaginatedControlPanel";
import BoxMultipleInput from "../../components/Inputs/BoxMultipleInput/BoxMultipleInput";

const TestPage = () => {
    //Попробовать через callback сделать смену странички
    const [inputValue, setInputsValue] = useState([])

    const [Tasks, setTasks] = useState([
        {taskTitle: 'Task Title1', taskText: 'Task Itself1', inputType:'Input'},
        {taskTitle: 'Task Title2', taskText: 'Task Itself2', inputType:'Input'},
        {taskTitle: 'Task Title3', taskText: 'Task Itself3', inputType:'Input'}
    ])

    const [isActiveTask, setIsActiveTask] = useState(Tasks[0])

    function inputChange(event) {
        setInputsValue(event.target.value.replace(/[^0-9]/g,""))

    }

    const changeTaskList = (task) => {
        setIsActiveTask(task)
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
                    <div className="CustomInputWrapper">
                        <BoxMultipleInput inputValue={inputValue} onChange={inputChange}/>
                    </div>
                    <button>Сохранить ответ</button>
                </div>
            </div>
        </>
    )
}

export default TestPage;