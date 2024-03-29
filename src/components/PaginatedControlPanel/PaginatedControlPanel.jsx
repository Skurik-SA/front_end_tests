import {useState} from "react";
import PaginationButton from "../PaginationButton/PaginationButton";
import "./PaginatedControlPanel.css"
import PaginationButtonEnd from "../PaginationButton/PaginationButtonEnd";
import Portal from "../Portal/Portal";
import AreYouSureTo from "../ModalWindows/AreYouSureToDelete/AreYouSureTo";

const PaginatedControlPanel = (props) => {

    const {
        tasks,
        change,
        end,
    } = props

    // const [tasksNumbber, setTasksNumber] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
    const [currentList, setCurrentList] = useState(0)

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="TestPageLeftControlPanel">
                <div className="nav_arrows">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="49" height="49" rx="24.5" fill="#D9D9D9" stroke="#212121"/>
                        <rect x="11" y="34.4158" width="26.3914" height="7.19767" rx="3.59883" transform="rotate(-62 11 34.4158)" fill="#212121"/>
                        <rect x="32.6448" y="37.6814" width="26.3914" height="7.19767" rx="3.59883" transform="rotate(-118 32.6448 37.6814)" fill="#212121"/>
                    </svg>
                </div>
                <div>
                    {props.tasks.map((taskNumber, index) =>
                        <div key={index} onClick={() => { setCurrentList(index) }}>
                            <PaginationButton
                                              task={tasks[index]}
                                              change={change}
                                              currentPage={currentList}
                                              index={index}
                            >
                                {index + 1}
                            </PaginationButton>
                        </div>
                    )}
                    <Portal open={isOpen} onClose={() => setIsOpen(false)}
                            style={{
                                boxShadow: "0 0 100px 0 rgba(0,0,0,0.5)",
                                background: '#EAEEFF'
                    }}>
                        <AreYouSureTo onClickNO={() => setIsOpen(false)}
                                      onClickYES={() => {
                                          setIsOpen(false)
                                          end()
                                      }}
                        >
                            Хотите отправить и завершить тест?
                        </AreYouSureTo>
                    </Portal>
                    <div onClick={() => setIsOpen(true)}>
                        <PaginationButtonEnd>
                            end
                        </PaginationButtonEnd>
                    </div>
                </div>
                <div className="nav_arrows">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="49" height="49" rx="24.5" fill="#D9D9D9" stroke="#212121"/>
                        <rect x="39" y="16.3792" width="26.3914" height="7.19767" rx="3.59883" transform="rotate(118 39 16.3792)" fill="#212121"/>
                        <rect x="17.3552" y="13.1135" width="26.3914" height="7.19767" rx="3.59883" transform="rotate(62 17.3552 13.1135)" fill="#212121"/>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default PaginatedControlPanel;