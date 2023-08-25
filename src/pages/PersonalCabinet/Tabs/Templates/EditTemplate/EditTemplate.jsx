import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {
    add_task_to_test, clear_data,
    delete_task_to_test, save_test_template,
    save_test_template_new, set_group_value, set_input_value
} from "../../../../../redux/store/slices/slice_CreateTemplates";
import {SEND_TEST_TEMPLATE} from "../../../../../redux/saga/tests/saga_SendNewTestTemplate";
import {useDrop} from "react-dnd";
import {GET_TASK_TYPES} from "../../../../../redux/saga/tests/saga_LoadTaskTypes";
import {set_navbar_link} from "../../../../../redux/store/slices/slice_Navbar";
import WrapperPersonalCabinet from "../../../WrapperPersonalCabinet/WrapperPersonalCabinet";
import NavigationLine from "../../../NavigationLine/NavigationLine";
import DuoContent from "../../../DuoContent/DuoContent";
import DuoContentLeftPart from "../../../DuoContent/DuoContentLeftPart";
import styles from "../CreateTemplate/CreateTemplate.module.css";
import FilterInput from "../../../../../components/FilterInput/FilterInput";
import DivideLineMono from "../../../../../components/DivideLines/DivideLine_Mono/DivideLineMono";
import RowModuleDnD from "../../../../../components/RowModule/RowModuleDnD";
import DuoContentRightPart from "../../../DuoContent/DuoContentRightPart";
import Search from "../../../../../components/Search/Search";
import TaskTypePlate from "../../../../../components/TaskTypePlate/TaskTypePlate";
import {GET_TEST_TEMPLATE_BY_ID} from "../../../../../redux/saga/tests/saga_LoadTestTemplate_byID";
import {UPDATE_TEST_TEMPLATE} from "../../../../../redux/saga/tests/saga_UpdateTemplate";
import FiltersHeader from "../../../../../components/FiltersHeader/FiltersHeader";


const EditTemplate = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const user_groups = useSelector(state => state.UserData.groups).map(
        group => {
            return {
                value: group.title, id: group.id
            }
        })

    const selectGroup = (value) => {
        dispatch(set_group_value(value))
        console.log(value.id)
    }

    const [selectedSubject, setSelectedSubject] = useState(null)
    const Subjects = [
        {value: "Все предметы", id: "all_subjects"},
        {value: "Информатика", id: "inf"},
        {value: "Математика", id: "math"},
    ]
    const selectSubject = (value) => {
        setSelectedSubject(value)
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
    const form_data = useSelector(state => state.ModifyTemplatesData.formData)
    const group_value = useSelector(state => state.ModifyTemplatesData.group_value)
    const title_value = useSelector(state => state.ModifyTemplatesData.title_value)

    const addTask = (task_ID) => {
        dispatch(add_task_to_test(task_ID))
    }

    const [correctFields, setCorrectFields] = useState(false)
    const saveBtn = async () => {
        setCorrectFields(true)
        if (title_value !== "" && group_value) {
            dispatch(save_test_template_new({
                title: title_value,
                group_id: group_value.id,
                group_title: group_value.value
            }))
            setCorrectFields(false)
            dispatch({type: UPDATE_TEST_TEMPLATE, id: params.id})
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
    const clearFilters = () => {
        setFilterInput("")
    }

    const [{isOver}, drop] = useDrop(() => ({
        accept: "type_plate",
        drop: (item, monitor) => {
            addTask(item.id)
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))


    useEffect(() => {
        dispatch({type: GET_TASK_TYPES})
        dispatch({type: GET_TEST_TEMPLATE_BY_ID, id: params.id})

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
                    link: `cabinet/my_templates/edit/${params}`,
                    link_name: 'Редактирование []',
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
                                {/*form_data.title*/}
                                <input
                                    value={title_value}
                                    // onChange={(e) => handleTemplateTitle(e.target.value)}
                                    onChange={(e) => dispatch(set_input_value(e.target.value))}
                                    className={styles.CreateTemplateLeft_default}
                                    placeholder={"Введите название"}
                                />
                                {title_value !== "" || !correctFields
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
                                    <FilterInput placeholder={group_value}
                                                 position={"down"}
                                                 options={user_groups}
                                                 callbackFunc={selectGroup}
                                                 IsDefaultValue
                                    >
                                        {group_value.value}
                                    </FilterInput>
                                </div>
                                {group_value || !correctFields
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
                                <RowModuleDnD
                                    key={index}
                                    index_row={index + 1}
                                    width_style={{width: "100%"}}

                                    id={task.task_id}

                                    test_data={template_tasks}

                                    copyHandler={copyRow}
                                    editHandler={editRow}
                                    deleteHandler={deleteRow}

                                    isDraggable
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
                                <div style={{width: "100%"}}>
                                    <FiltersHeader clearFilters={clearFilters}/>
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

export default EditTemplate;

