import styles from "./Journal.module.css"
import WrapperPersonalCabinet from "../../WrapperPersonalCabinet/WrapperPersonalCabinet";
import NavigationLine from "../../NavigationLine/NavigationLine";
import MonoContent from "../../MonoContent/MonoContent";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {set_navbar_link} from "../../../../redux/store/slices/slice_Navbar";
import FilterInput from "../../../../components/FilterInput/FilterInput";
import {GET_ANALYTICS_DATA} from "../../../../redux/saga/analytics/saga_GetAnalyticsData";
import Portal from "../../../../components/Portal/Portal";

const Journal = () => {

    const dispatch = useDispatch()

    const journalData = useSelector(state => state.AnalyticsData.data)
    const user_groups = useSelector(state => state.UserData.groups).map(
        group => {
            return {
                value: group.title, id: group.id
            }
        })

    const [selectedGroup, SetSelectedGroup] = useState(null)

    const selectGroup = (value) => {
        SetSelectedGroup(value)
        console.log(value.id)
        dispatch({type: GET_ANALYTICS_DATA,
            data: {
                group_id: value.id
            }
        })
    }

    const [isOpen, setIsOpen] = useState(false)
    const [someState, setSomeState] = useState({
        test_title: "",
        test_tasks: [],
        test_answers: [],
        student_answers: [],
    })

    useEffect(() => {
        dispatch(set_navbar_link(
            [
                {
                    link: 'cabinet/personal_data',
                    link_name: 'Личный кабинет | ',
                    active: false,
                },
                {
                    link: 'cabinet/journal',
                    link_name: 'Журнал',
                    active: false,
                }
            ]
        ))
    }, [])

    return (
        <>
            <WrapperPersonalCabinet>
                <NavigationLine tab_id={0}></NavigationLine>
                <MonoContent>
                    <div className={styles.journal_wrapper}>
                        <div className={styles.journal_input_borders}>
                            <FilterInput placeholder={"Выберите группу"}
                                         position={"down"} options={user_groups}
                                         callbackFunc={selectGroup}
                            />
                        </div>
                        <Portal open={isOpen} onClose={() => setIsOpen(false)} style={{  boxShadow:
                                "0 0 100px 0 rgba(0,0,0,0.75)", background: '#EAEEFF'
                        }}>
                            <div>
                                {someState.test_title}
                            </div>
                            <div>
                                {someState && someState.test_answers.map((answers, index) =>
                                    <div>
                                        Верные ответы: {answers} / Ответы ученика: {someState.student_answers ? someState.student_answers[index] : ""}
                                    </div>
                                )}
                            </div>
                        </Portal>
                        <div className={styles.journal_table}>
                            <div className={styles.journal_names}>
                                {journalData.length > 0 && journalData.map((persona, index) =>
                                    <div key={index}>
                                        <div className={styles.journal_row}>
                                            <div className={styles.journal_fio}>
                                                {persona.user_data.last_name} {persona.user_data.first_name} {persona.user_data.sur_name}
                                            </div>
                                            {persona.user_tests.map(test =>
                                                <div className={test.is_Closed ? styles.journal_mark_green : styles.journal_mark_red}
                                                     onClick={() => {
                                                         setIsOpen(true)
                                                         setSomeState({
                                                             test_title: test.title,
                                                             test_tasks: test.tasks,
                                                             test_answers: test.answers,
                                                             student_answers: test.student_answers,
                                                         })
                                                     }}
                                                >
                                                    {test.mark} / {test.tasks_amount}
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </MonoContent>
            </WrapperPersonalCabinet>
        </>
    )
}

export default Journal;