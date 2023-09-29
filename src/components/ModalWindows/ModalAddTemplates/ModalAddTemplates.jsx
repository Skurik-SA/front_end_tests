import styles from "./ModalAddTemplates.module.css"
import {useEffect, useState} from "react";
import {set_navbar_link} from "../../../redux/store/slices/slice_Navbar";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_PERSONAL_CUSTOM_TEMPLATES} from "../../../redux/saga/tests/saga_LoadPersonalCustomTemplates";
import {add_many_templates} from "../../../redux/store/slices/slice_PersonalGroup";

const ModalAddTemplates = (props) => {

    const {onClose} = props

    const dispatch = useDispatch()
    const templates = useSelector(state => state.CustomTemplatesData.custom_templates)
    const [checkedTemplates, setCheckedTemplates] = useState([])

    const handleCheckboxChange = (pos) => {
        const updatedCheckedState = checkedTemplates.map((item, index) =>
            index === pos
                ?
                {
                    template: item.template,
                    checkedState: !item.checkedState
                }
                :
                item
        );

        setCheckedTemplates(updatedCheckedState)
    }

    const add_templates = () => {
        dispatch(add_many_templates(
            {
                allNewTemplates: checkedTemplates,
            }
        ))
    }

    useEffect(() => {
        // Нужно что-то сделать с dispatch, либо убрать, либо изменить форму получения данных.
        // Это нужно из-за того, что сервер будет нагружать такое количество обращений
        dispatch({type: LOAD_PERSONAL_CUSTOM_TEMPLATES, user_id: localStorage.getItem('user_id')})
        setCheckedTemplates(templates.map(t => {
            return {
                template: t,
                checkedState: false,
            }
        }))
    }, [])

    return (
        <>
            <div className={styles.modal_add_templates_container}>
                <div className={styles.modal_add_templates_exit_btn_wrapper}>
                    <div className={styles.modal_add_templates_exit_btn} onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect x="6.33008" y="4.44543" width="19.0336" height="2.66667" rx="1.33333" transform="rotate(45 6.33008 4.44543)" fill="white"/>
                            <rect x="4.63477" y="17.893" width="18.8101" height="2.66667" rx="1.33333" transform="rotate(-45 4.63477 17.893)" fill="white"/>
                        </svg>
                    </div>
                </div>
                <section className={styles.modal_add_templates_section_field}>
                    {checkedTemplates.map((t, i) =>
                        <div key={i} className={t.checkedState ? styles.modal_add_templates_lineINlist_chosen : styles.modal_add_templates_lineINlist}
                             onClick={() => handleCheckboxChange(i)}>
                            <input style={{cursor: 'pointer'}} type="checkbox" checked={t.checkedState} onChange={() => handleCheckboxChange(i)}/>
                            <label className={styles.modal_add_templates_label}>{t.template.title}</label>
                        </div>
                    )

                    }
                </section>
                <div style={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'flex-end', alignItems: 'center', marginTop: '10px'}}>
                    {checkedTemplates.length > 0
                        ?
                        <button onClick={() => {
                            onClose()
                            add_templates()
                        }}>
                            Добавить
                        </button>
                        :
                        <>
                        </>
                    }
                </div>
            </div>

        </>
    )
}

export default ModalAddTemplates