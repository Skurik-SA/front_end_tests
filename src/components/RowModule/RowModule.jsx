import "./RowModule.css"
import CopyButton from "../Buttons/ModuleRowButtons/CopyButton/CopyButton";
import EditButton from "../Buttons/ModuleRowButtons/EditButton/EditButton";
import DeleteButton from "../Buttons/ModuleRowButtons/DeleteButton/DeleteButton";
import {useState} from "react";

const RowModule = (
    {
        index_row,
        template_name,
        template_group,
        template_tasks_count,
        template_tasks,
        id,

        copyHandler,
        editHandler,
        deleteHandler,

        width_style={width: "70%"}
    }) => {
    const [open, setOpen] = useState(false);

    return (
        <div style={width_style}>
            <div className="rowModuleWrapper">
                <label className="rowLabelWrapper" onClick={() => {setOpen(!open)}}>
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