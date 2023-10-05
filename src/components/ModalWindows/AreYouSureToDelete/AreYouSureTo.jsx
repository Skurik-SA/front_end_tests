import styles from "./AreYouSureTo.module.css"

const AreYouSureTo = (props) => {

    const {
        onClickNO,
        onClickYES,
    } = props

    return (
        <>
            <div className={styles.info_text}>
                {props.children}
            </div>
            <div className={styles.btn_wrapper}>
                <button className={styles.btn_r} onClick={onClickNO}>Нет</button>
                <button className={styles.btn_g} onClick={onClickYES}>Да</button>
            </div>
        </>
    )
}

export default AreYouSureTo;