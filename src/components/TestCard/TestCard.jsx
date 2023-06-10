import "./TestCard.css"
import {useEffect, useState} from "react";

const TestCard = ({index, TaskText, AnswerType, create, remove, task}) => {
    // А на этом компоненте делается запрос с сервера конкретного задания, которое можно уже редактировать
    // Кнопка удалить пока работает хреново
    // Есть идея удаления через бэк-энд, то есть отправлять запрос на удаление id теста и возвращать новый список с удалённым тестом и рефреш.
    // Редактирование сделать по тому же принципу.
    const [taskText, setTaskText] = useState(TaskText)

    const taskTextOnChange = (event) => {
        setTaskText(event.target.value)
    }

    return (
        <div className="TestCard">
            <div className="TestCardMenu">
                <div>
                    {index}
                </div>
                <div>
                    <button className="TestCardMenuButtonCopy">
                        <svg width="12" height="16" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.5 9.5V31H3V29.5M24.5 9.5H19.5V2.5M24.5 9.5L19.5 2.5M19.5 2.5H18M3 29.5V2.5H18M3 29.5H1V1H18V2.5" stroke="black"/>
                        </svg>

                        <span className="TextCardMenuSpan">
                            Копировать
                        </span>
                    </button>
                    <button className="TestCardMenuButtonEdit">
                        <svg width="15" height="15" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 21V28H8M1 21L8 28M1 21L21 1L28 8L8 28" stroke="black"/>
                        </svg>

                        <span className="TextCardMenuSpan">
                            Редактировать
                        </span>
                    </button>
                    <button className="TestCardMenuButtonDelete" onClick={() => {
                        remove(task)
                    }}>
                        <svg width="10" height="10" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2.5L25.5 26" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                            <path d="M2 26L25.5 2.5" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                        </svg>

                        <span className="TextCardMenuSpan">
                            удалить
                        </span>
                    </button>
                </div>
            </div>
            <div>
                {TaskText
                    ? <textarea className="TextAreaStyle"
                                value={taskText}
                                onChange={taskTextOnChange}>
                    </textarea>
                    : <span>Задание</span>
                }
            </div>

            <div>
                <input placeholder="answer"/>
            </div>
        </div>
    )
}

export default TestCard;