import "./RowModule.css"
import modal from"./RowModuleModalWindow.module.css"
import CopyButton from "../Buttons/ModuleRowButtons/CopyButton/CopyButton";
import EditButton from "../Buttons/ModuleRowButtons/EditButton/EditButton";
import DeleteButton from "../Buttons/ModuleRowButtons/DeleteButton/DeleteButton";

const RowModule = ({index_row, template_name, template_group, template_tasks_count, template_tasks, width_style={width: "70%"}}) => {

    let modalState = false

    const some_func = () => {
        if (modalState)
        {
            modalState = false
            document.getElementById(index_row).className = modal.rowModalBlockWrapper_inactive
        }
        else {
            modalState = true
            document.getElementById(index_row).className = modal.rowModalBlockWrapper
        }
    }

    return (
        // <div>
        <div style={width_style}>
            <div className="rowModuleWrapper">
                <label className="rowLabelWrapper" onClick={() => some_func()}>
                    {index_row}. {template_name} / {template_group} / {template_tasks_count}
                </label>

                <div className="rowButtonsWrapper">
                    <CopyButton/>
                    <EditButton/>
                    <DeleteButton/>
                </div>
            </div>
            <div id={index_row} className={modal.rowModalBlockWrapper_inactive}>
                {template_tasks
                    ?
                    <div className={modal.rowModalContentWrapper}>
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