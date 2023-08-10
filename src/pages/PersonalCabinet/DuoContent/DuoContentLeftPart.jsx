import styles from "./DuoContentLeftPart.module.css"

const DuoContentLeftPart = ({children}) => {
    return (
        <div className={styles.DuoContentLeftPart_Wrapper}>
            {children}
        </div>
    )
}

export default DuoContentLeftPart;