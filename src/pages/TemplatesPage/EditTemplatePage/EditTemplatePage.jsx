import "./EditTemplatePage.css"
import TemplateRow from "../../../components/TemplateRow/TemplateRow";
import {useFetching} from "../../../components/hooks/useFetching";
import axios from "axios";
import {useEffect, useState} from "react";


const EditTemplatePage = () => {

    const [taskTypes, setTaskTypes] = useState([])

    const [titleInput, setTitleInput] = useState("")
    const [groupInput, setGroupInput] = useState("")

    const titleOnChange = (event) => {
        event.preventDefault()
        setTitleInput(event.target.value)
    }

    const groupOnChange = (event) => {
        event.preventDefault()
        setGroupInput(event.target.value)
    }

    const [newTask, setNewTask] = useState(
        {
            task_id: '',
            example: 'new task',
            subject_id: '',
            subject_name: '',
            type: '',
            name: '',
        })
    const [testValue, setTestValue] = useState([])
    const addTask = (e) => {
        e.preventDefault()
        let newVal = taskTypes[e.target.children[0].textContent]
        console.log(newVal)
        if (newVal !== undefined)
            setTestValue([...testValue, newVal])
        else
            console.log("it was undefined")
    }

    const saveBtn = async () => {

        let task_ids = []
        for (let i = 0; i < testValue.length; i++)
        {
            task_ids.push(testValue[i].task_id)
        }

        const formData = {
            title: titleInput,
            group_id: groupInput,
            owner_id: localStorage.getItem('user_id'),
            tasks: task_ids,
            tasks_amount: testValue.length
        }
        console.log(formData)
        const {data} = await axios.post(`http://127.0.0.1:8000/api/test_template/`,
            formData
        )
        console.log(data)
    }

    const [fetchData, isLoading, fetchError] = useFetching(async () => {
        const {data} = await axios.get(`http://127.0.0.1:8000/api/task_types`
        )
        let responseData = []
        for (let i = 0; i < data.length; i++) {
            responseData.push({
                task_id: data[i].task_id,
                example: data[i].example,
                subject_id: data[i].subject_id,
                subject_name: data[i].subject_name,
                type: data[i].type,
                name: data[i].name
            })
        }
        setTaskTypes(responseData)
    })

    useEffect(() => {
        fetchData()
        console.log(taskTypes)

    }, [])


    useEffect(() => {

    }, [testValue])

    return (
        <>
            <div className="EditTemplateContent">
                <div className="TemplateHeaderContent">
                    <div className="blockHeader">
                        <div>Название</div>
                        <input className="searchInput" placeholder="Название" value={titleInput} onChange={titleOnChange}/>
                    </div>
                    <div className="blockHeader">
                        <div>
                            Группа
                        </div>
                        <input className="searchInput" placeholder="Селектор по идее, пока id" value={groupInput} onChange={groupOnChange}/>
                    </div>
                    <div>
                        <div className="btnCreateTemplate" onClick={saveBtn}>
                            Сохранить
                        </div>
                    </div>
                </div>
                <div className="TemplateRows">
                    {/*<TemplateRow test_title={"Виды интегральных уравнений и их решение"} />*/}
                    {testValue.map((test, index) =>
                        <TemplateRow key={index} test_title={testValue[index].name} custom={true}/>
                    )}
                </div>

            </div>
            <div className="taskContentPanel">
                {isLoading
                    ?
                    <>
                        <input className="searchInput" placeholder="Поиск"/>
                        <input className="searchInput" placeholder="Область"/>
                        {taskTypes.map((task) =>
                            <div key={task.task_id} className="taskPanelRow" onClick={addTask} >
                                {task.name}
                                <div hidden={true}>
                                    {task.task_id - 1}
                                </div>
                            </div>
                        )}
                    </>
                    :
                    <>
                        <input className="searchInput" placeholder="Поиск"/>
                        <input className="searchInput" placeholder="Область"/>
                        {taskTypes.map((task) =>
                            <div key={task.task_id} className="taskPanelRow" onClick={addTask} >
                                {task.name}
                                <div hidden={true}>
                                    {task.task_id - 1}
                                </div>
                            </div>
                        )}
                    </>
                }
            </div>
        </>
    )
}

export default EditTemplatePage;