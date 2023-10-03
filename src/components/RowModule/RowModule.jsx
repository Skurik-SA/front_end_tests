import "./RowModule.css"
import CopyButton from "../Buttons/ModuleRowButtons/CopyButton/CopyButton";
import EditButton from "../Buttons/ModuleRowButtons/EditButton/EditButton";
import DeleteButton from "../Buttons/ModuleRowButtons/DeleteButton/DeleteButton";
import {useState} from "react";
import {change_pos_down, change_pos_up} from "../../redux/store/slices/slice_CreateTemplates";
import {useDispatch} from "react-redux";
import {useDrag} from "react-dnd";

const RowModule = (
    {
        index_row,
        template_name,
        template_group,
        template_tasks_count,
        template_tasks,
        template_id,
        id,

        copyHandler,
        editHandler,
        deleteHandler,

        isSorting,
        isDraggable,
        isTemplate,
        width_style={width: "70%"}
    }) => {

    const [open, setOpen] = useState(false);

    const dispatch = useDispatch()
    const changePos = (isSorting, id, action) => {
        if (isSorting) {
            if (action === 'up') {
                console.log(id, "up")
                dispatch(change_pos_up(id - 1))
            }
            else if (action === 'down') {
                console.log(id, "down")
                dispatch(change_pos_down(id - 1))

            }
            else {
                return <></>;
            }
        }
    }

    const [{isDragging}, drag, dragPreview] = useDrag(() => ({
        type: "type_plate",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return (
        <div ref={isDraggable ? drag : null} style={width_style}>
            <div className="rowModuleWrapper">
                <section className="rowLabelWrapper" onClick={() => {setOpen(!open)}}>
                    <label>
                        {index_row}.
                    </label>
                    <div>
                        <label>
                            {template_name}
                        </label>
                        <label>
                            |{template_group}
                        </label>
                    </div>
                </section>

                <div className="rowButtonsWrapper">
                    {isSorting
                        ?
                        <>
                            <button onClick={() => changePos(isSorting, index_row, 'up')}>up</button>
                            <button onClick={() => changePos(isSorting, index_row, 'down')}>down</button>
                        </>
                        :
                        <>
                        </>
                    }
                    {copyHandler
                        ?
                        <CopyButton copyHandler={copyHandler} id={isTemplate ? template_id : id}/>
                        :
                        <></>
                    }
                    {editHandler
                        ?
                        <EditButton editHandler={editHandler} id={template_id}/>
                        :
                        <></>
                    }
                    {deleteHandler
                        ?
                        <DeleteButton deleteHandler={deleteHandler} rowID={isTemplate ? template_id : index_row - 1}/>
                        :
                        <></>
                    }
                </div>
            </div>
            <div id={index_row} className={`rowModalBlockWrapper${open ? '' : '_inactive'}`}>
                {template_tasks
                    ?
                    // <div >
                    <div className={`rowModalContentWrapper${open ? '' : '_inactive'}`}>
                        {template_tasks.map((task, index )=>
                            <label key={index}>
                                {index + 1}. {task}
                            </label>
                        )}
                    </div>
                    :
                    <></>
                }
            </div>
        </div>

    )
}

export default RowModule;