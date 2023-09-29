import styles from "./CreateNewGroupWindow.module.css"
import {Fragment, useRef, useState} from "react";
import * as XLSX from "xlsx";
import {useDispatch} from "react-redux";
import {SEND_REQ_CREATE_NEW_GROUP} from "../../../redux/saga/auth/saga_CreateNewGroup";

const CreateNewGroupWindow = (props) => {

    const {onClose} = props

    const dispatch = useDispatch()

    const [switchWindow, setSwitchWindow] = useState(0)
    const [newStudents, setNewStudents] = useState([])

    const fileRef = useRef(null)

    const [titleInput, setTitleInput] = useState("")
    const handleClick = (event) => {
        fileRef.current.click()
    }

    const handleCheckboxChange = (pos) => {
        const updatedCheckedState = newStudents.map((item, index) =>
            index === pos
                ?
                {
                    fio: item.fio,
                    checkedState: !item.checkedState
                }
                :
                item
        );

        setNewStudents(updatedCheckedState)
    }

    const [isAll, setIsAll] = useState(false)

    const studentsAmount = newStudents.filter(s => {return s.checkedState})

    const checkALL = () => {
        const updatedCheckedState = newStudents.map((item, index) =>
            {
                return {
                    fio: item.fio,
                    checkedState: !isAll
                }
            }
        );
        setIsAll(!isAll)
        setNewStudents(updatedCheckedState)
        console.log(newStudents)
    }

    const sendAll = () => {
        dispatch({type: SEND_REQ_CREATE_NEW_GROUP,
            data: {
                user_id: localStorage.getItem("user_id"),
                title: titleInput,
                new_students_amount: studentsAmount.length,
                students_lastname: newStudents.map(s => s.fio[0]),
                students_name: newStudents.map(s => s.fio[1]),
                students_sur_name: newStudents.map(s => s.fio[2]),
            }
        })
    }

    const handleChange = (e) => {
        e.preventDefault()

        const files = e.target.files[0]
        const reader = new FileReader()
        reader.onload = function (e) {
            const data = XLSX.read(e.target.result, {type: 'binary'})
            const ws = data.Sheets[data.SheetNames[0]]
            // const dataParse = XLSX.utils.sheet_to_json(ws, {header:1})
            const dataParse = XLSX.utils.sheet_to_json(ws, {header:1}).map((col, index) => {
                if (index !== 0 && col !== undefined && col !== null && col.length > 0) {
                    return col[0].split(" ")
                }
                else {
                    return null
                }
            }).filter(function (el) {
                return el !== null
            })
            const formData = []
            for (let i = 0; i < dataParse.length; i++) {
                formData.push(
                    {
                        fio: dataParse[i],
                        checkedState: false,
                    }
                )
            }
            console.log(formData)

            setNewStudents(formData)
        }
        reader.readAsBinaryString(files)
    }

    return (
        <>
            <div className={styles.modal_create_new_group_container}>
                <div className={styles.modal_create_new_group_exit_btn_wrapper}>
                    <div className={styles.modal_create_new_group_exit_btn} onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect x="6.33008" y="4.44543" width="19.0336" height="2.66667" rx="1.33333" transform="rotate(45 6.33008 4.44543)" fill="white"/>
                            <rect x="4.63477" y="17.893" width="18.8101" height="2.66667" rx="1.33333" transform="rotate(-45 4.63477 17.893)" fill="white"/>
                        </svg>
                    </div>
                </div>
                <div className={styles.modal_create_new_group_buttonsCover}>
                    <button className={switchWindow === 0 ? styles.modal_create_new_group_buttons_active : styles.modal_create_new_group_buttons}
                            onClick={() => setSwitchWindow(0)}>
                        Шаг 1. Настройки группы
                    </button>
                    <button className={switchWindow === 1 ? styles.modal_create_new_group_buttons_active : styles.modal_create_new_group_buttons}
                            onClick={() => setSwitchWindow(1)}>
                        Шаг 2. Ученики авто
                    </button>
                    <button className={switchWindow === 2 ? styles.modal_create_new_group_buttons_active : styles.modal_create_new_group_buttons}
                            onClick={() => setSwitchWindow(2)}>
                        Шаг 3. Ученики
                    </button>
                    <button className={switchWindow === 3 ? styles.modal_create_new_group_buttons_active : styles.modal_create_new_group_buttons}
                            onClick={() => setSwitchWindow(3)}>
                        Шаг 4. Отправка данных
                    </button>
                </div>
                {switchWindow === 0
                    ?
                    <Fragment>
                        <div className={styles.modal_create_new_group_settings}>
                            <input
                                value={titleInput}
                                onChange={(e) => {
                                    e.preventDefault()
                                    setTitleInput(e.target.value)
                                    console.log(titleInput)
                                }}
                                placeholder={"Введите название группы"}
                            />
                            <div style={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'flex-end', alignItems: 'center', marginTop: '10px'}}>
                                <button onClick={() => setSwitchWindow(1)}>
                                    Далее
                                </button>
                            </div>
                        </div>
                    </Fragment>
                    :
                    <>
                        {switchWindow === 1
                            ?
                            <Fragment>
                                <div className={styles.modal_create_new_group_some_enhancements}>
                                    <button onClick={handleClick}>
                                        Загрузить 'xlsx' файл
                                    </button>
                                    <input
                                        type="file"
                                        ref={fileRef}
                                        onChange={handleChange}
                                        style={{display: 'none'}}
                                    />
                                </div>
                                <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                    {newStudents.length > 0
                                        ?
                                        <>
                                            <label>
                                                Найдено: {newStudents.length}
                                            </label>
                                            <div style={{display: 'flex', flexDirection: 'row', gap: '4px'}}>
                                                <input type="checkbox" onClick={() => {checkALL()}}></input>
                                                <label>Выделить все</label>
                                            </div>
                                        </>
                                        :
                                        <></>
                                    }
                                </div>
                                <section className={styles.modal_create_new_group_section_field}>
                                    {
                                        newStudents.map((s, i) =>
                                            <div key={i} className={s.checkedState ? styles.modal_create_new_group_lineINlist_chosen : styles.modal_create_new_group_lineINlist}
                                                 onClick={() => handleCheckboxChange(i)}>
                                                <input style={{cursor: 'pointer'}} type="checkbox" checked={s.checkedState} onChange={() => handleCheckboxChange(i)}/>
                                                <label className={styles.modal_create_new_group_label}>{s.fio[0]} {s.fio[1]} {s.fio[2]}</label>
                                            </div>
                                        )
                                    }
                                </section>
                                <div style={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'flex-end', alignItems: 'center', marginTop: '10px'}}>
                                    {newStudents.length > 0
                                        ?
                                        <button onClick={() => setSwitchWindow(2)}>
                                            Далее
                                        </button>
                                        :
                                        <>
                                        </>
                                    }
                                </div>
                            </Fragment>
                            :
                            <>
                                {switchWindow === 2
                                    ?
                                    <Fragment>
                                        <label>
                                            3
                                        </label>
                                        <div style={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'flex-end', alignItems: 'center', marginTop: '10px'}}>
                                            <button onClick={() => setSwitchWindow(3)}>
                                                Далее
                                            </button>
                                        </div>
                                    </Fragment>
                                    :
                                    <>
                                        {switchWindow === 3
                                            ?
                                            <Fragment>
                                                <label>
                                                    ID пользователя: {localStorage.getItem("user_id")}
                                                </label>
                                                <label>
                                                    Количество студентов в группе: {studentsAmount.length}
                                                </label>
                                                <label>
                                                    Название: {titleInput}
                                                </label>
                                                <div>
                                                    {
                                                        newStudents.map((s, i) =>
                                                            <>
                                                                {s.checkedState
                                                                    ?
                                                                    <label className={styles.modal_create_new_group_results}>{s.fio[0]} {s.fio[1]} {s.fio[2]}</label>
                                                                    :
                                                                    <>
                                                                    </>
                                                                }
                                                            </>
                                                        )
                                                    }
                                                </div>
                                                <button onClick={() => sendAll()}>
                                                    Отправить
                                                </button>
                                            </Fragment>
                                            :
                                            <>

                                            </>
                                        }
                                    </>
                                }
                            </>
                        }
                    </>
                }
            </div>
        </>
    )
}

export default CreateNewGroupWindow;