import styles from "./TaskTypePlate.module.css"
import {DragPreviewImage, useDrag} from "react-dnd";

const TaskTypePlate = ({task_id, task_name, addTask}) => {

    const [{isDragging}, drag, dragPreview] = useDrag(() => ({
        type: "type_plate",
        item: {id: task_id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    const dosmth = (smth) => {
        return(
            // <div
            //     ref={dragPreview}
            //     key={task_id}
            //     id={task_id}
            //     className={styles.TaskTypePlate_onDrag}
            // >
            // </div>
            <>
                {dragPreview(smth)}
            </>
        )
    }

    return (
        <>
            <div
                ref={drag}
                key={task_id}
                id={task_id}
                className={styles.TaskTypePlate_taskTypesPlate}
                onClick={(e) => {
                    e.preventDefault()
                    addTask(e.target.attributes["id"].value)
                }}
            >
                {task_name}
            </div>

            {isDragging ?
                dosmth(            <div
                    ref={dragPreview}
                    key={task_id}
                    id={task_id}
                    className={styles.TaskTypePlate_onDrag}
                >
                </div>)
            :
            <></>
            }
            <DragPreviewImage connect={dragPreview} src={""}/>


        </>
    )
}

export default TaskTypePlate;