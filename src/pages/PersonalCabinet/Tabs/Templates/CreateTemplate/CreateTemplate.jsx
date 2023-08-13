import styles from "./CreateTemplate.module.css"
import WrapperPersonalCabinet from "../../../WrapperPersonalCabinet/WrapperPersonalCabinet";
import NavigationLine from "../../../NavigationLine/NavigationLine";
import DuoContent from "../../../DuoContent/DuoContent";
import DuoContentLeftPart from "../../../DuoContent/DuoContentLeftPart";
import DuoContentRightPart from "../../../DuoContent/DuoContentRightPart";
import DivideLineMono from "../../../../../components/DivideLines/DivideLine_Mono/DivideLineMono";
import Search from "../../../../../components/Search/Search";
import FilterInput from "../../../../../components/FilterInput/FilterInput";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import RowModule from "../../../../../components/RowModule/RowModule";
import {GET_TASK_TYPES} from "../../../../../redux/saga/tests/saga_LoadTaskTypes";
import {
    add_task_to_test,
    clear_data, delete_task_to_test, save_test_template,
    save_test_template_new
} from "../../../../../redux/store/slices/slice_CreateTemplates";
import {SEND_TEST_TEMPLATE} from "../../../../../redux/saga/tests/saga_SendNewTestTemplate";
import {useNavigate} from "react-router-dom";
import {set_navbar_link} from "../../../../../redux/store/slices/slice_Navbar";
import TaskTypePlate from "../../../../../components/TaskTypePlate/TaskTypePlate";
import {useDrop} from "react-dnd";

const CreateTemplate = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [templateTitle, setTemplateTitle] = useState("")
    const handleTemplateTitle = (value) => {
        setTemplateTitle(value)
    }

    const user_groups = useSelector(state => state.UserData.groups).map(
        group => {
            return {
                value: group.title, id: group.id
            }
        })
    const [selectedGroup, SetSelectedGroup] = useState(null)
    const selectGroup = (value) => {
        SetSelectedGroup(value)
        console.log(value)
    }

    const [selectedSubject, setSelectedSubject] = useState(null)
    const Subjects = [
        {value: "Все предметы", id: "all_subjects"},
        {value: "Информатика", id: "inf"},
        {value: "Математика", id: "math"},
    ]
    const selectSubject = (value) => {
        setSelectedSubject()
    }

    const [selectedDifficulty, setSelectedDifficulty] = useState(null)
    const Difficulties = [
        {value: "Все сложности", id: "all_difficulties"},
        {value: "Простой уровень", id: "easy"},
        {value: "Средний уровень", id: "medium"},
        {value: "Сложный уровень", id: "hard"},
    ]
    const selectDifficulty = (value) => {
        setSelectedDifficulty(value)
    }

    const [selectedTopic, setSelectedTopic] = useState(null)
    const Topics = [
        {value: "Все задания", id: "all_tasks"},
        {value: "Числа в памяти компьютера", id: "numbers_in_computers_memory"},
        {value: "Графы", id: "graphs"},
        {value: "Логика", id: "logic"},
        {value: "Системы счисления", id: "number_systems"},
    ]
    const selectTopic = (value) => {
        setSelectedTopic(value)
    }

    const task_types = useSelector(state => state.ModifyTemplatesData.task_types)
    const [filterInput, setFilterInput] = useState("")
    const filtered_types = task_types.filter(type => {
        return type.name.toLowerCase().includes(filterInput.toLowerCase())
    })

    const template_tasks = useSelector(state => state.ModifyTemplatesData.test_data)
    const addTask = (task_ID) => {
        dispatch(add_task_to_test(task_ID))
    }

    const [correctFields, setCorrectFields] = useState(false)
    const saveBtn = async () => {
        setCorrectFields(true)
        if (templateTitle !== "" && selectedGroup) {
            dispatch(save_test_template_new({
                title: templateTitle,
                group_id: selectedGroup.id
            }))
            setCorrectFields(false)
            dispatch({type: SEND_TEST_TEMPLATE})
            navigate("/cabinet/my_templates")
        }
    }

    const copyRow = (taskID) => {
        dispatch(add_task_to_test(taskID))
        console.log("Копировать!!")
    }

    const editRow = () => {
        console.log("Редактировать!")
    }
    const deleteRow = (rowID) => {
        dispatch(delete_task_to_test(rowID))
        dispatch(save_test_template())
        console.log("Удалить!")
    }

    const [{isOver}, drop] = useDrop(() => ({
        accept: "type_plate",
        drop: (item) => addTask(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))


    useEffect(() => {
        dispatch(clear_data())
        dispatch({type: GET_TASK_TYPES})
        dispatch(set_navbar_link(
            [
                {
                    link: 'cabinet/personal_data',
                    link_name: 'Личный кабинет | ',
                    active: false,
                },
                {
                    link: 'cabinet/my_templates',
                    link_name: 'Мои шаблоны',
                    active: true,
                },
                {
                    link: 'cabinet/my_templates/create',
                    link_name: 'Создание',
                    active: false,
                }
            ]
        ))
    }, [])

    return (
        <>
            <WrapperPersonalCabinet>
                <NavigationLine></NavigationLine>
                <DuoContent>
                    <DuoContentLeftPart>
                        <div className={styles.CreateTemplateLeft_wrapperInputs_row}>
                            <section className={styles.CreateTemplateLeft_wrapperLeftInput_column}>
                                <label className={styles.CreateTemplateLeft_labelInput}>
                                    Название шаблона
                                </label>
                                <input
                                    value={templateTitle}
                                    onChange={(e) => handleTemplateTitle(e.target.value)}
                                    className={styles.CreateTemplateLeft_default}
                                    placeholder={"Введите название"}
                                />
                                {templateTitle !== "" || !correctFields
                                    ?
                                    <>
                                    </>
                                    :
                                    <label className={styles.CreateTemplateErrorLabel}>
                                        Вы не ввели название*
                                    </label>
                                }

                            </section>
                            <section className={styles.CreateTemplateLeft_wrapperRightInput_column}>
                                <label className={styles.CreateTemplateLeft_labelInput}>
                                    Группа
                                </label>
                                <div className={styles.CreateTemplateLeft_groupsSelector}>
                                    <FilterInput placeholder={"Выберите группу"} position={"down"} options={user_groups} callbackFunc={selectGroup}/>
                                </div>
                                {selectedGroup || !correctFields
                                    ?
                                    <></>
                                    :
                                    <label className={styles.CreateTemplateErrorLabel}>
                                        Вы не выбрали группу*
                                    </label>
                                }
                            </section>
                        </div>

                        <DivideLineMono/>

                        <div className={styles.CreateTemplateLeft_TaskArea} ref={drop}>
                            {template_tasks.map((task, index) =>
                                <RowModule
                                    key={index}
                                    index_row={index + 1}
                                    width_style={{width: "100%"}}

                                    id={task.task_id}

                                    copyHandler={copyRow}
                                    editHandler={editRow}
                                    deleteHandler={deleteRow}

                                    template_name={task.name}
                                />
                            )}
                        </div>
                        <div>
                            <button disabled={template_tasks.length <= 0} className={styles.CreateTemplateLeft_SaveButton} onClick={() => saveBtn()}>
                                Сохранить
                            </button>
                        </div>
                    </DuoContentLeftPart>
                    <DuoContentRightPart>
                        <div className={styles.CreateTemplateRight_inputs}>
                            <div className={styles.CreateTemplateRight_filters}>
                                <Search
                                    style_params={{width: "100%"}}
                                    value={filterInput}
                                    onChange={(e) => {
                                        e.preventDefault()
                                        setFilterInput(e.target.value)
                                    }}
                                />
                                <div>
                                    Фильтры:
                                </div>
                                <FilterInput placeholder={"Выберите предмет"} position={"up"} options={Subjects} callbackFunc={selectSubject}/>
                                <FilterInput placeholder={"Выберите сложность"} position={"mid"} options={Difficulties} callbackFunc={selectDifficulty}/>
                                <FilterInput placeholder={"Выберите тематику"} position={"down"} options={Topics} callbackFunc={selectTopic}/>
                            </div>
                            <div className={styles.CreateTemplateLeft_taskTypesWrapper}>
                                {filtered_types.map(task =>
                                    <TaskTypePlate
                                        key={task.task_id}
                                        task_id={task.task_id}
                                        addTask={addTask}
                                        task_name={task.name}
                                    />
                                )}
                            </div>
                        </div>

                    </DuoContentRightPart>
                </DuoContent>
            </WrapperPersonalCabinet>
        </>
    )
}

export default CreateTemplate;