import styles from "./DuoContentMobileRightPart.module.css"

const DuoContentMobileRightPart = (props) => {

    const {
        onClick,
        children,
    } = props

    return (
        <div className={styles.DuoContentMobileRightPart_Wrapper} onClick={() => {
            if (window.innerWidth <= 1200) {
                onClick()
            }
        }}>
            {children}
        </div>
    )
}

export default DuoContentMobileRightPart;