import "./FilterInput.css"
import {useEffect, useRef, useState} from "react";




const FilterInput = ({callbackFunc, position="mid", placeholder="",
                         options=[
                            {value: "Грибы", id: 0},
                            {value: "Молоко", id: 1},
                            {value: "Рыба", id: 2},
                            {value: "Группа с очень большим названием, которое не помещается в контейнер как бы ни пытался это сделать ", id: 3},
                         ]
}) => {

    const [selectedOption, setSelectedOption] = useState(placeholder)
    const [open, setOpen] = useState(false)

    let menuRef = useRef()

    const selectOption = (someval, someid) => {
        console.log(someval, someid)
        setSelectedOption(someval)
        callbackFunc({
            value: someval,
            id: someid
        })
    }

    useEffect(() => {
        let handler = (e) => {
            if(!menuRef.current.contains(e.target)) {
                console.log("Auf!")
                setOpen(false)
            }
        }

        document.addEventListener('mousedown', handler)

        return() => {
            document.removeEventListener('mousedown', handler)
        }
    }, [])



    return (
        <>
            <div className="filterInputWrapper" ref={menuRef}>
                <div className={`filterInputSelectWrapper${position === "mid" ? "Mid" : position === "up" ? "Up" : position === "down" ? "Down" : "Mid"}`} onClick={() => {setOpen(!open)}}>
                {/*<div className="filterInputSelectWrapper" onClick={() => {setOpen(!open)}}>*/}
                    <div className="filterInputSelect">
                        <div className="filterInputSelectText">
                            {selectedOption}
                        </div>

                        <div className="filterInputSelectIcon">
                            {open
                                ?
                                <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="17.5705" height="3.06822" transform="matrix(0.68686 -0.72679 -0.68686 -0.72679 2.10742 15)" fill="black"/>
                                    <rect width="17.5705" height="3.06822" transform="matrix(-0.68686 -0.72679 -0.68686 0.72679 24.1094 12.77)" fill="black"/>
                                </svg>
                                :
                                <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2.12109" width="17.1798" height="3" rx="1.5" transform="rotate(45 2.12109 0)" fill="black"/>
                                    <rect x="24.2695" y="2.12134" width="17.1798" height="3" rx="1.5" transform="rotate(135 24.2695 2.12134)" fill="black"/>
                                </svg>
                            }
                        </div>
                    </div>

                    <div className={`filterInputOptionWrapper${open ? ' ' : '_inactive'}`}>
                        {options && options.map((option, index) =>
                            <div key={index}>
                                {index === 0
                                    ?
                                    <span
                                        id={option.id}
                                        role="option"
                                        aria-selected='false'
                                        aria-label={option.value}
                                        className="filterInputOptionUp"
                                        onClick={(e) => {selectOption(e.target.attributes["aria-label"].value, e.target.attributes["id"].value)}}
                                    >
                                        {option.value}
                                     </span>
                                    :
                                    <>
                                        {index === options.length -1
                                            ?
                                            <span
                                                id={option.id}
                                                role="option"
                                                aria-selected='false'
                                                aria-label={option.value}
                                                className="filterInputOptionDown"
                                                onClick={(e) => {selectOption(e.target.attributes["aria-label"].value, e.target.attributes["id"].value)}}
                                            >
                                                {option.value}
                                             </span>
                                            :
                                            <span
                                                id={option.id}
                                                role="option"
                                                aria-selected='false'
                                                aria-label={option.value}
                                                className="filterInputOptionMid"
                                                onClick={(e) => {selectOption(e.target.attributes["aria-label"].value, e.target.attributes["id"].value)}}
                                            >
                                                {option.value}
                                             </span>
                                        }
                                    </>
                                }
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </>
    )
}

export default FilterInput;