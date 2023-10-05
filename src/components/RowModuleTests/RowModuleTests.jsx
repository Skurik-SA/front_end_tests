import styles from "./RowModuleTests.module.css"
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clear_personal_test} from "../../redux/store/slices/slice_TestForm";
import {useState} from "react";
import Portal from "../Portal/Portal";
import {GET_CLOSED_TEST_DATA} from "../../redux/saga/tests/saga_GetClosedTestData";
import ShowMeMyResults from "../ModalWindows/ShowMeMyResults/ShowMeMyResults";
import DivideLineMono from "../DivideLines/DivideLine_Mono/DivideLineMono";
import {clear_closed_personal_test_info} from "../../redux/store/slices/slice_PersonalTests";
import AreYouSureTo from "../ModalWindows/AreYouSureToDelete/AreYouSureTo";

const RowModuleTests = (props) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenTestPassConfirmation, setIsOpenTestPassConfirmation] = useState(false)

    const multiFunc = () => {
        setIsOpen(false)
        dispatch(clear_closed_personal_test_info())
        console.log("I can fly")
    }

    const {
        test_title,
        group,
        tasks_amount,
        is_closed,
        testID,
        mark
    } = props

    return (
        <>
            <Portal open={isOpen}
                    onClose={() => multiFunc()}
                    style={{  boxShadow:
                            "0 0 100px 0 rgba(0,0,0,0.75)", background: '#EAEEFF'
                    }}
            >
                <ShowMeMyResults onClose={() => multiFunc()}/>
            </Portal>
            <Portal open={isOpenTestPassConfirmation}
                    onClose={() => setIsOpenTestPassConfirmation(false)}
                    style={{  boxShadow:
                            "0 0 100px 0 rgba(0,0,0,0.75)", background: '#EAEEFF'
                    }}
            >
                <AreYouSureTo onClickNO={() => setIsOpenTestPassConfirmation(false)}
                              onClickYES={() => {
                                  dispatch(clear_personal_test())
                                  navigate(`/test/${testID}`)
                              }}
                >
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <div>
                            Хотите пройти тест:
                        </div>
                        <div>
                            "{test_title}"?
                        </div>
                    </div>
                </AreYouSureTo>
            </Portal>
            <div className={styles.row_module_tests_container} onClick={() => {
                if (window.innerWidth < 1200) {
                    if (is_closed) {
                        setIsOpen(true)
                        dispatch({type: GET_CLOSED_TEST_DATA, testID})
                    }
                    else {
                        setIsOpenTestPassConfirmation(true)
                    }
                }
            }}>
                <div className={styles.textInfo}>

                        {test_title}

                </div>
                <section className={styles.textInfo2}>
                    {is_closed
                        ?
                        <div className={styles.test_indicator_block}>
                            <div>
                                Тест завершён
                            </div>
                            <button className={styles.btnPassTest} onClick={() => {
                                setIsOpen(true)
                                dispatch({type: GET_CLOSED_TEST_DATA, testID})
                                // dispatch(clear_personal_test())
                                // navigate(`/test/${testID}`)
                            }}>
                                Посмотреть результат
                            </button>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_f_716_46)">
                                    <circle cx="15" cy="15" r="11" fill="#00A62E"/>
                                </g>
                                <path d="M12.8716 18.1638C12.4098 18.6769 12.4515 19.4673 12.9646 19.9291C13.4778 20.3909 14.2681 20.3493 14.7299 19.8361L12.8716 18.1638ZM14.7299 19.8361L21.9292 11.8362L20.0708 10.1638L12.8716 18.1638L14.7299 19.8361Z" fill="black"/>
                                <path d="M12.9998 19.9602C13.5301 20.4021 14.3183 20.3305 14.7603 19.8001C15.2022 19.2698 15.1306 18.4816 14.6002 18.0396L12.9998 19.9602ZM8.19978 15.9603L12.9998 19.9602L14.6002 18.0396L9.80022 14.0397L8.19978 15.9603Z" fill="black"/>
                                <defs>
                                    <filter id="filter0_f_716_46" x="0" y="0" width="30" height="30" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_716_46"/>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        :
                        <div className={styles.test_indicator_block}>
                            <div>
                                Тест открыт
                            </div>
                            <button className={styles.btnPassTest} onClick={() => {
                                dispatch(clear_personal_test())
                                navigate(`/test/${testID}`)
                            }}>
                                Пройти тест
                            </button>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_f_719_50)">
                                    <circle cx="15" cy="15" r="11" fill="#999999"/>
                                </g>
                                <circle cx="15" cy="15" r="6" stroke="black" strokeWidth="2"/>
                                <defs>
                                    <filter id="filter0_f_719_50" x="0" y="0" width="30" height="30" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_719_50"/>
                                    </filter>
                                </defs>
                            </svg>


                            {/*<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                            {/*    <g filter="url(#filter0_f_716_42)">*/}
                            {/*        <circle cx="15" cy="15" r="11" fill="#A60000"/>*/}
                            {/*    </g>*/}
                            {/*    <path d="M10 19.9999L20.0003 9.99998" stroke="black" strokeWidth="2.5"/>*/}
                            {/*    <path d="M10 10.0001L20.0003 20" stroke="black" strokeWidth="2.5"/>*/}
                            {/*    <defs>*/}
                            {/*        <filter id="filter0_f_716_42" x="0" y="0" width="30" height="30" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">*/}
                            {/*            <feFlood floodOpacity="0" result="BackgroundImageFix"/>*/}
                            {/*            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>*/}
                            {/*            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_716_42"/>*/}
                            {/*        </filter>*/}
                            {/*    </defs>*/}
                            {/*</svg>*/}
                        </div>
                    }
                </section>
            </div>
        </>
    )
}

export default RowModuleTests;