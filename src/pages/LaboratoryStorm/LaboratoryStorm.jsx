import "./LaboratoryStorm.css"
import DotedLoader from "../../components/Loaders/DotedLoader/DotedLoader";
import Portal from "../../components/Portal/Portal";
import {useState} from "react";

const LaboratoryStorm = () => {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
            <Portal open={isOpen} onClose={() => setIsOpen(false)}>
                Первое модальное окно
                <div style={{marginLeft: '200px'}}>
                    asdasd
                </div>
                <button onClick={() => setIsOpen(false)}>
                    Close
                </button>
            </Portal>

            <div className="ContentWrap">
                Groups Page
                <button>Добавить клиента</button>
                <button>Получить клиентов из базы</button>
                <button onClick={() => setIsOpen(true)}>Модальное окно</button>
            </div>
            <div className="loader_style">
                <DotedLoader/>
            </div>

        </>
    )
}

export default LaboratoryStorm;