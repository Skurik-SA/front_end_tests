import styles from "./DuoContent.module.css"

const DuoContent = ({children}) => {
    return (
        <div className={styles.DuoContent_Wrapper}>
            {children}
        </div>
    )
}

export default DuoContent;