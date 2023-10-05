import styles from "./GroupsPlate.module.css"

const GroupsPlate = ({children, onClick, key_d}) => {
    return (
        <div key={key_d} className={styles.groupPlateWrapper} onClick={onClick}>
            {children}
        </div>
    )
}

export default GroupsPlate;