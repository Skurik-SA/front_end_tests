import styles from "./ShowMeMyResults.module.css"
import {useSelector} from "react-redux";
import DivideLineMono from "../../DivideLines/DivideLine_Mono/DivideLineMono";
import DotedLoader from "../../Loaders/DotedLoader/DotedLoader";


const ShowMeMyResults = (props) => {

    const {
        onClose
    } = props

    const pt_data = useSelector(state => state.PersonalTestsData.closed_personal_test_info)

    return (
        <div className={styles.modal_showMe_wrapper}>
            {pt_data.tasks.length > 0
                ?
                <>
                    <div className={styles.modal_showMe_top}>
                        <h1>{pt_data.title} | {pt_data.mark}/{pt_data.tasks_amount}</h1>
                        <div className={styles.modal_showMe_exit_btn_wrapper}>
                            <div className={styles.modal_showMe_exit_btn} onClick={onClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect x="6.33008" y="4.44543" width="19.0336" height="2.66667" rx="1.33333" transform="rotate(45 6.33008 4.44543)" fill="white"/>
                                    <rect x="4.63477" y="17.893" width="18.8101" height="2.66667" rx="1.33333" transform="rotate(-45 4.63477 17.893)" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <section className={styles.modal_showMe_content}>
                        {pt_data && pt_data.tasks.map((task, index) =>
                            <div className={styles.modal_showMe_task_block}>
                                <h4>{index + 1}. {task}</h4>
                                <h5>Ваш ответ:
                                    <label className={pt_data.is_correct_answers[index] ? styles.modal_showMe_correct_answer : styles.modal_showMe_incorrect_answer}>
                                        {pt_data.student_answers[index]}
                                    </label> / Правильный ответ:
                                    <label className={styles.modal_showMe_correct_answer}>
                                        {pt_data.answers[index]}
                                    </label>
                                </h5>
                                <label></label>
                                <DivideLineMono/>
                            </div>
                        )}
                        <div>

                        </div>
                    </section>
                </>
                :
                <div className={styles.modal_showMe_loader_wrapper}>
                    <DotedLoader/>
                </div>
            }
        </div>
    )
}

export default ShowMeMyResults;