import pagBtn from "./PaginationButton.module.css"
import {useState} from "react";

const PaginationButton = ({children, activeTask}) => {
    let rootClasses = [pagBtn.PaginationButtonMainStyle]
    const [isActive, setIsActive] = useState(false)

    if (isActive) {
        rootClasses.push(pagBtn.active)
        console.log(activeTask)
    }
    else {
        rootClasses = [pagBtn.PaginationButtonMainStyle]
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => {isActive ? setIsActive(false) : setIsActive(true)}}>
            <p>{children}</p>
        </div>
    )
}

export default PaginationButton