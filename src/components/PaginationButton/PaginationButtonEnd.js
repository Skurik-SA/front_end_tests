import pagBtn from "./PaginationButton.module.css"
import {useState} from "react";

const PaginationButtonEnd = (props) => {
    let rootClasses = [pagBtn.PaginationButtonMainStyle]



    return (
        <div className={rootClasses.join(' ')}>
            <p>{props.children}</p>
        </div>
    )
}

export default PaginationButtonEnd