import styles from "./ModalAddStudents.module.css"
import {useRef, useState} from "react";
import {add_many_students, add_one_student} from "../../../redux/store/slices/slice_PersonalGroup";
import {useDispatch} from "react-redux";
import * as XLSX from "xlsx";

const ModalAddStudents = (props) => {

    const {onClose} = props

    const [switchWindow, setSwitchWindow] = useState(true)
    const [nameInput, setNameInput] = useState("")
    const [surnameInput, setSurnameInput] = useState("")
    const [lastNameInput, setLastNameInput] = useState("")

    const [newStudents, setNewStudents] = useState([])

    const [selectedStudents, setSelectedStudents] = useState([
        {
            fio: [],
            checkedState: false,
        }
    ])

    const dispatch = useDispatch()

    const add_student = () => {
        dispatch(add_one_student({
            first_name: nameInput,
            last_name: lastNameInput,
            sur_name: surnameInput,
        }))
        setNameInput("")
        setSurnameInput("")
        setLastNameInput("")
    }

    const add_students = () => {
        dispatch(add_many_students(
            {
                allNewStudents: newStudents,
            }
        ))
    }

    const fileRef = useRef(null)

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
            <div className={styles.modal_add_student_FIO_container}>
                <div className={styles.modal_add_student_exit_btn_wrapper}>
                    <div className={styles.modal_add_student_exit_btn} onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect x="6.33008" y="4.44543" width="19.0336" height="2.66667" rx="1.33333" transform="rotate(45 6.33008 4.44543)" fill="white"/>
                            <rect x="4.63477" y="17.893" width="18.8101" height="2.66667" rx="1.33333" transform="rotate(-45 4.63477 17.893)" fill="white"/>
                        </svg>
                    </div>
                </div>
                {!switchWindow
                    ?
                    <>
                        <div className={styles.modal_add_student_top}>
                            <button className={styles.modal_add_student_active_btn} onClick={() => setSwitchWindow(!switchWindow)}>
                                Добавление ученика
                            </button>
                            <label className={styles.slash}> | </label>
                            <button className={styles.modal_add_student_inactive_btn}>
                                Импорт
                            </button>
                        </div>
                        <div className={styles.modal_add_student_some_enhancements}>
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
                                        <input type="checkbox" onChange={() => {checkALL()}}></input>
                                        <label>Выделить все</label>
                                    </div>
                                </>
                                :
                                <></>
                            }
                        </div>
                        <section className={styles.modal_add_students_section_field}>
                            {
                                newStudents.map((s, i) =>
                                    <div key={i} className={styles.modal_add_students_lineINlist} onClick={() => handleCheckboxChange(i)}>
                                        <input style={{cursor: 'pointer'}} type="checkbox" checked={s.checkedState} onChange={() => handleCheckboxChange(i)}/>
                                        <label className={styles.modal_add_students_label}>{s.fio[0]} {s.fio[1]} {s.fio[2]}</label>
                                    </div>
                                )
                            }
                        </section>
                        <div style={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'flex-end', alignItems: 'center', marginTop: '10px'}}>
                            {newStudents.length > 0
                                ?
                                <button onClick={() => {
                                    onClose()
                                    add_students()
                                }}>
                                    Добавить
                                </button>
                                :
                                <>
                                </>
                            }
                        </div>
                    </>
                    :///////////////////////////////////////////////////////
                    <>
                        <div className={styles.modal_add_student_top}>
                            <button className={styles.modal_add_student_inactive_btn}>
                                Добавление ученика
                            </button>
                            <label className={styles.slash}> | </label>
                            <button className={styles.modal_add_student_active_btn} onClick={() => setSwitchWindow(!switchWindow)}>
                                Импорт
                            </button>
                        </div>
                        <div className={styles.modal_add_student_some_enhancements}>
                            <div>
                                <label>
                                    Фамилия
                                </label>
                                <input
                                    value={lastNameInput}
                                    onChange={(e) => {
                                        setLastNameInput(e.target.value)
                                    }}
                                    required={true}
                                    className={styles.modal_add_student_input}
                                />
                            </div>
                            <div>
                                <label>
                                    Имя
                                </label>
                                <input
                                    value={nameInput}
                                    onChange={(e) => {
                                        setNameInput(e.target.value)
                                    }}
                                    required={true}
                                    className={styles.modal_add_student_input}
                                />
                            </div>
                            <div>
                                <label>
                                    Отчество*
                                </label>
                                <input
                                    value={surnameInput}
                                    onChange={(e) => {
                                        setSurnameInput(e.target.value)
                                    }}
                                    className={styles.modal_add_student_input}
                                />
                            </div>

                        </div>
                        <label>
                            Найдено: 0
                        </label>
                        <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%', justifyContent: 'flex-end', alignItems: 'center', marginTop: '10px'}}>
                            <button onClick={() => {
                                onClose()
                                add_student()
                            }}>
                                Добавить
                            </button>
                        </div>
                    </>

                }

            </div>

        </>
    )
}

export default ModalAddStudents