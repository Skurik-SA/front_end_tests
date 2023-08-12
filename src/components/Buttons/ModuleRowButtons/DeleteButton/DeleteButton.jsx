import "./DeleteButton.css"

const DeleteButton = ({deleteHandler, rowID}) => {
    return (
        <div className="deleteButtonWrapper" onClick={() => deleteHandler(rowID)}>
            <svg className="deleteButtonSVG" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="34.9782" height="4.26563" rx="2.13282" transform="matrix(0.711774 0.702409 -0.711774 0.702409 3.70117 0.86438)" fill="white"/>
                <rect width="34.9782" height="4.26563" rx="2.13282" transform="matrix(0.711774 -0.702409 0.711774 0.702409 0.664062 25.4333)" fill="white"/>
            </svg>
        </div>
    )
}

export default DeleteButton;