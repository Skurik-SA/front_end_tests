import "./CopyButton.css"

const CopyButton = ({copyHandler, id}) => {
    return (
        <div className="copyButtonWrapper" onClick={() => copyHandler(id)}>
            <svg className="copyButtonSVG" viewBox="0 0 33 34" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.30859" y="1" width="26" height="30" rx="1" stroke="#D9D9D9" strokeWidth="2"/>
                <rect x="6.30859" y="3" width="25" height="30" rx="1" stroke="#D9D9D9" strokeWidth="2"/>
            </svg>
        </div>
    )
}

export default CopyButton;