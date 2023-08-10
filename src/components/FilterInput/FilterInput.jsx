import "./FilterInput.css"
import {useEffect, useRef, useState} from "react";

const FilterInput = ({options, callbackFunc, placeholder=""}) => {

    const [selectedOption, setSelectedOption] = useState(placeholder)
    const [open, setOpen] = useState(false)

    let menuRef = useRef()

    const selectOption = (someval) => {
        console.log(someval)
        setSelectedOption(someval)
        callbackFunc(someval)
    }

    useEffect(() => {
        let handler = (e) => {
            if(!menuRef.current.contains(e.target)) {
                setOpen(false)
                console.log(menuRef.current)
            }
        }

        document.addEventListener('mousedown', handler)

        return() => {
            document.removeEventListener('mousedown', handler)
        }
    }, [])

    useEffect(() => {
        // callbackFunc(selectedOption)
    }, [selectedOption])

    return (
        <>
            <div className="filterInputWrapper" ref={menuRef}>
                <div className="filterInputSelectWrapper" onClick={() => {setOpen(!open)}}>
                    <div className="filterInputSelect">
                        <div className="filterInputSelectText">
                            {selectedOption}
                        </div>

                        <div className="filterInputSelectIcon">
                            <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2.12109" width="17.1798" height="3" rx="1.5" transform="rotate(45 2.12109 0)" fill="black"/>
                                <rect x="24.2695" y="2.12134" width="17.1798" height="3" rx="1.5" transform="rotate(135 24.2695 2.12134)" fill="black"/>
                            </svg>
                        </div>
                    </div>

                    <div className={`filterInputOptionWrapper${open ? ' ' : '_inactive'}`}>
                    <span
                        role="option"
                        aria-selected='false'
                        aria-label="Грибы"
                        className="filterInputOptionUp"
                        onClick={(e) => {selectOption(e.target.attributes["aria-label"].value)}}
                    >
                        Грибы
                    </span>
                        <span
                            role="option"
                            aria-selected='false'
                            aria-label="Молоко"
                            className="filterInputOptionMid"
                            onClick={(e) => {selectOption(e.target.attributes["aria-label"].value)}}
                        >
                        Молоко
                    </span>
                        <span
                            role="option"
                            aria-selected='false'
                            aria-label="Рыба"
                            className="filterInputOptionMid"
                            onClick={(e) => {selectOption(e.target.attributes["aria-label"].value)}}
                        >
                        Рыба
                    </span>
                        <span
                            role="option"
                            aria-selected='false'
                            aria-label="Мясо"
                            className="filterInputOptionDown"
                            onClick={(e) => {selectOption(e.target.attributes["aria-label"].value)}}
                        >
                        Мясо
                    </span>
                        {/*<div id={"мясо"} className="filterInputOptionDown">Мясо</div>*/}
                    </div>
                </div>

            </div>
        </>
    )
}

export default FilterInput;