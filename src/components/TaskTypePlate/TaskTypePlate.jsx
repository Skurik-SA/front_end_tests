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

    // function dragOverHandler(e) {
    //     e.preventDefault()
    //     if (e.target.className == styles.TaskTypePlate_taskTypesPlate) {
    //         e.target.style.boxShadow = '0 2px 3px gray'
    //         // e.target.style.scale = '2'
    //
    //     }
    // }
    // function dragLeaveHandler(e) {
    //     e.target.style.boxShadow = 'none'
    //     // e.target.style.scale = '1'
    //
    // }
    // function dragStartHandler(e) {
    //
    // }
    // function dragEndHandler(e) {
    //     e.target.style.boxShadow = 'none'
    //     // e.target.style.scale = '1'
    //
    // }

    useEffect(() => {
        // dragPreview(getEmptyImage(), { captureDraggingState: true })
    }, [])

    return (
        <>
            <div
                // onDragOver={(e) => dragOverHandler(e)}
                // onDragLeave={(e) => dragLeaveHandler(e)}
                // onDragStart={(e) => dragStartHandler(e)}
                // onDragEnd={(e) => dragEndHandler(e)}
                // onDrop={(e) => {
                //     e.preventDefault()
                // }}
                ref={drag}
                key={task_id}
                id={task_id}
                className={styles.TaskTypePlate_taskTypesPlate}
                onClick={(e) => {
                    e.preventDefault()
                    addTask(e.target.attributes["id"].value)
                }}
                draggable={false}
            >
                {task_name}
            </div>
        </>

    )
}

export default TaskTypePlate;