import styles from "./DuoContentRightPart.module.css"

const DuoContentRightPart = ({children}) => {
    return (
        <div className={styles.DuoContentRightPart_Wrapper}>
            {children}
        </div>
    )
}

export default DuoContentRightPart;