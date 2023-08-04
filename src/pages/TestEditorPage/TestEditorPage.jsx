import "./TestEditorPage.css"
import TestCard from "../../components/TestCard/TestCard";
import {useState} from "react";

const TestEditorPage = () => {
    // Эта страница просто отображает список заданий.
    const [TaskCards, setTaskCards] = useState([
        {id: 1, TaskText: 'Введите числоa1', AnswerType: 'simpleInput'},
        {id: 2, TaskText: 'Введите числоb2', AnswerType: 'simpleInput'},
        {id: 3, TaskText: 'Введите числоc3', AnswerType: 'simpleInput'},
    ])

    const [TaskCard, setTaskCard] = useState({id: '', TaskText: 'new task', AnswerType: ''})

    const addNewTask = (e) => {
        e.preventDefault()
        const newTask = {
            ...TaskCard, id: Date.now()
        }
        setTaskCards([...TaskCards, newTask])
    }

    const createTask = (newTask) => {
        setTaskCards([...TaskCards, newTask])
    }

    const removeTask = (task) => {
        setTaskCards(TaskCards.filter(t=> t.id !== task.id))
    }

    return (
        <>

            <div className="TestEditorWrapper">
                <div className="TestContent">
                    {TaskCards.map((task_i, index) =>
                        <TestCard index={index + 1}
                                  TaskText={task_i.TaskText}
                                  create={createTask}
                                  remove={removeTask}
                                  task={task_i}
                        />)}
                </div>
                <div className="TypeTestsMenu">
                    <div onClick={addNewTask}>Одиночный выбор</div>
                    <div>Множественный выбор</div>
                    <div>Ответ в свободной форме</div>
                    <div>Установление последовательностей</div>
                    <div>Установление соответствий</div>
                    <div>Заполнение пропусков</div>
                    <div>Слайдер</div>
                    <div>Загрузка слайда</div>
                    <div>Код</div>
                </div>
            </div>
        </>
    )
}

export default TestEditorPage;