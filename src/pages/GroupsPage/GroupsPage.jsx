import "./GroupsPage.css"
import DotedLoader from "../../components/Loaders/DotedLoader/DotedLoader";

const GroupsPage = () => {
    return (
        <>
            <div className="ContentWrap">
                Groups Page
                <button>Добавить клиента</button>
                <button>Получить клиентов из базы</button>
            </div>
            <div className="loader_style">
                <DotedLoader/>
            </div>
        </>
    )
}

export default GroupsPage;