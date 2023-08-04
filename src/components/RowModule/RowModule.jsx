import "./RowModule.css"
import CopyButton from "../Buttons/ModuleRowButtons/CopyButton/CopyButton";
import EditButton from "../Buttons/ModuleRowButtons/EditButton/EditButton";
import DeleteButton from "../Buttons/ModuleRowButtons/DeleteButton/DeleteButton";

const RowModule = ({index, template_name, template_group, template_tasks_count}) => {
    return (
        <div className="rowModuleWrapper">
            <label className="rowLabelWrapper">
                {index}. {template_name} / {template_group} / {template_tasks_count}
            </label>
            <div className="rowButtonsWrapper">
                <CopyButton/>
                <EditButton/>
                <DeleteButton/>
            </div>
        </div>
    )
}

export default RowModule;