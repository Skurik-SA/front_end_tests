import styles from "./GroupsPlate.module.css"

const GroupsPlate = ({children, onClick}) => {
    return (
        <div className={styles.groupPlateWrapper} onClick={onClick}>
            {children}
        </div>
    )
}

export default GroupsPlate;