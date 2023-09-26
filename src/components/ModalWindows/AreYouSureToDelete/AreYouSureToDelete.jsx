import styles from "./AreYouSureToDelete.module.css"
import {delete_one_students} from "../../../redux/store/slices/slice_PersonalGroup";
import {useDispatch} from "react-redux";

const AreYouSureToDelete = (props) => {

    const {
        onClose,
        index,
    } = props
    const dispatch = useDispatch()

    return (
        <>
            <div>
                Вы уверены, что хотите удалить этого ученика?
            </div>
            <div className={styles.btn_wrapper}>
                <button className={styles.btn_r} onClick={onClose}>Нет</button>
                <button className={styles.btn_g} onClick={() => {
                        dispatch(delete_one_students({index: index}))
                        onClose()
                    }}
                >
                    Да
                </button>
            </div>
        </>
    )
}

export default AreYouSureToDelete;