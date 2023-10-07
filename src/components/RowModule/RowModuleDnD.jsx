import "./RowModule.css"
import CopyButton from "../Buttons/ModuleRowButtons/CopyButton/CopyButton";
import EditButton from "../Buttons/ModuleRowButtons/EditButton/EditButton";
import DeleteButton from "../Buttons/ModuleRowButtons/DeleteButton/DeleteButton";
import {useEffect, useRef, useState} from "react";
import {
    change_pos
} from "../../redux/store/slices/slice_CreateTemplates";
import {useDispatch} from "react-redux";
import {useDrag, useDrop} from "react-dnd";
import update from 'immutability-helper';
import styles from "../TaskTypePlate/TaskTypePlate.module.css";
const RowModuleDnD = (
    {
        index_row,
        template_name,
        template_group,
        template_tasks_count,
        template_tasks,
        id,

        test_data,

        copyHandler,
        editHandler,
        deleteHandler,

        isDraggable,
        width_style={width: "70%"}
    }) => {

    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()

    const ref = useRef(null)
    const [{handlerId, isOver}, drop] = useDrop({
        accept: "task_plate",
        collect(monitor ) {
            return {
                handlerId: monitor.getHandlerId(),
                isOver: monitor.isOver({shallow: true})
            }
        },
        hover(item, monitor) {
            if (!ref.current) {
                return
            }

            const dragIndex = item.index_row
            // console.log(dragIndex)
            const hoverIndex = index_row


            if (dragIndex === hoverIndex) {
                return
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            // Get vertical middle
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            // Determine mouse position
            const clientOffset = monitor.getClientOffset()
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            dispatch(change_pos({dragIndex: dragIndex - 1, hoverIndex: hoverIndex - 1}))

            item.index_row = hoverIndex
            console.log(hoverIndex)
        }
    })

    const [{isDragging}, drag] = useDrag(() => ({
        type: "task_plate",
        item: () => {
            return {id, index_row} // Чёта поменял, там посмотрим
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),


        })
    }))

    const opacity = isDragging ? 0.5 : 1

    drag(drop(ref))

    return (
        <div style={{width_style, opacity}}
             data-handler-id={handlerId}
        >
                <div className="rowModuleWrapper" ref={ref}>
                    <label className="rowLabelWrapper" onClick={() => {setOpen(!open)}} ref={ref}>
                        {index_row}. {template_name} / {template_group} / {template_tasks_count}
                    </label>

                    <div className="rowButtonsWrapper">
                        {copyHandler
                            ?
                            <CopyButton copyHandler={copyHandler} id={id}/>
                            :
                            <></>
                        }
                        {editHandler
                            ?
                            <EditButton editHandler={editHandler}/>
                            :
                            <></>
                        }
                        {deleteHandler
                            ?
                            <DeleteButton deleteHandler={deleteHandler} rowID={index_row - 1}/>
                            :
                            <></>
                        }
                    </div>
                </div>


            {/*<div id={index_row} className={`rowModalBlockWrapper${open ? '' : '_inactive'}`}>*/}
            {/*    {template_tasks*/}
            {/*        ?*/}
            {/*        // <div >*/}
            {/*        <div className={`rowModalContentWrapper${open ? '' : '_inactive'}`}>*/}
            {/*            {template_tasks.map((task, index )=>*/}
            {/*                <label key={index}>*/}
            {/*                    {index + 1}. {task}*/}
            {/*                </label>*/}
            {/*            )}*/}
            {/*        </div>*/}
            {/*        :*/}
            {/*        <></>*/}
            {/*    }*/}
            {/*</div>*/}
        </div>

    )
}

export default RowModuleDnD;