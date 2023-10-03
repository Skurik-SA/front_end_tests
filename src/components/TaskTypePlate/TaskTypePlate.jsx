import styles from "./TaskTypePlate.module.css"
import {DragPreviewImage, useDrag} from "react-dnd";
import {useEffect} from "react";
import {getEmptyImage} from "react-dnd-html5-backend";

const TaskTypePlate = ({task_id, task_name, addTask}) => {

    const [{isDragging}, drag, dragPreview] = useDrag(() => ({
        type: "type_plate",
        item: {id: task_id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    useEffect(() => {
        // dragPreview(getEmptyImage(), { captureDraggingState: true })
    }, [])

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
        </>

    )
}

export default TaskTypePlate;