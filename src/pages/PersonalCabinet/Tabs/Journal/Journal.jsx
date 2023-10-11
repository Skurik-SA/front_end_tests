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
import ShowMeMyResults from "../../../../components/ModalWindows/ShowMeMyResults/ShowMeMyResults";

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
        title: "",
        tasks: [],
        tasks_amount: 0,
        is_correct_answers: [],
        answers: [],
        student_answers: [],
        mark: "",

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
                        <Portal open={isOpen}
                                onClose={() => setIsOpen(false)}
                                style={{  boxShadow:
                                        "0 0 100px 0 rgba(0,0,0,0.75)", background: '#EAEEFF'
                                }}
                        >
                            <ShowMeMyResults onClose={() => setIsOpen(false)}
                                             pt_data={someState}
                            />
                        </Portal>
                        <div className={styles.journal_table}>
                            <div className={styles.journal_columns}>
                                <div className={styles.journal_names}>
                                    {journalData.length > 0 && journalData.map((persona, index) =>
                                        <div className={styles.journal_fio}>
                                            {persona.user_data.last_name} {persona.user_data.first_name} {persona.user_data.sur_name}
                                        </div>
                                    )}
                                </div>
                                <div className={styles.journal_marks}>
                                    {journalData.length > 0 && journalData.map((persona, index) =>
                                        <div key={index} style={{display: 'flex', flexDirection: 'row'}}>
                                            {persona.user_tests.map(test =>
                                                <div className={test.is_Closed ? styles.journal_mark_green : styles.journal_mark_red}
                                                     onClick={() => {
                                                         setSomeState(prev => prev = {
                                                             title: test.title,
                                                             tasks: test.tasks,
                                                             tasks_amount: test.tasks_amount,
                                                             answers: test.answers,
                                                             student_answers: test.student_answers,
                                                             is_correct_answers: test.is_correct_answers,
                                                             mark: test.mark
                                                         })
                                                         setIsOpen(true)

                                                     }}
                                                >
                                                    {test.mark} / {test.tasks_amount}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </MonoContent>
            </WrapperPersonalCabinet>
        </>
    )
}

export default Journal;