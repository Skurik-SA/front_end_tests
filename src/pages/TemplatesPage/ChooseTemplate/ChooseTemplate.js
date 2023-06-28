import {Link} from "react-router-dom";
import "./ChooseTemplate.css"
import DotedLoader from "../../../components/Loaders/DotedLoader/DotedLoader";

const ChooseTemplate = () => {
    return (
        <>
            <div className="ChooseTemplateContent">
                <Link to={"/templates/custom_templates"} className="btnLink"><div className="pressed-button-blue">Мои шаблоны</div></Link>
                <Link to={"/templates/general_templates"} className="btnLink"><div className="pressed-button-gray">Общие шаблоны</div></Link>
            </div>
        </>
    )
}

export default ChooseTemplate;