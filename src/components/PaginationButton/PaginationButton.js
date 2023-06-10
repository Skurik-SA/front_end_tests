import pagBtn from "./PaginationButton.module.css"
import {useState} from "react";

const PaginationButton = ({children, activeTask, task, change, currentPage, index}) => {
    let rootClasses = [pagBtn.PaginationButtonMainStyle]

    if (currentPage === index) {
        rootClasses.push(pagBtn.active)
    }
    else {
        if (task.answer === '')
        {
            rootClasses = [pagBtn.PaginationButtonMainStyle]
        }
        else {
            rootClasses = [pagBtn.PaginationButtonMainStyle]
            rootClasses.push(pagBtn.saved)
        }
    }
//isActive && currentPage === index ? setIsActive(false) : setIsActive(true);
    return (
        <div className={rootClasses.join(' ')} onClick={() => {change(task)}}>
            <p>{children}</p>
        </div>
    )
}

export default PaginationButton