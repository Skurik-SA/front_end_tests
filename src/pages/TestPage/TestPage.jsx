import {useState} from "react";
import "./TestPage.css"
import PaginationButton from "../../components/PaginationButton/PaginationButton";
import PaginatedControlPanel from "../../components/PaginatedControlPanel/PaginatedControlPanel";
import BoxMultipleInput from "../../components/Inputs/BoxMultipleInput/BoxMultipleInput";

const TestPage = () => {

    const [inputValue, setInputsValue] = useState([])
    function inputChange(event) {
        setInputsValue(event.target.value.replace(/[^0-9]/g,""))
    }

    return (
        <>
            <PaginatedControlPanel/>
            <div className="BlockWrapper">
                <div className="TaskContent">
                    <div>
                        Task Title
                    </div>
                    <div>
                        Task Itself
                    </div>
                    <div>
                        Input
                    </div>
                </div>
                <div className="BtnContent">
                    <div className>
                        Поле ввода:
                    </div>
                    <div className="CustomInputWrapper">
                        <BoxMultipleInput inputValue={inputValue} onChange={inputChange}/>
                    </div>
                    <button>Сохранить ответ</button>
                </div>
            </div>
        </>
    )
}

export default TestPage;