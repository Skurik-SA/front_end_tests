import "./CreateBlueButton.css"

const CreateBlueButton = ({children, button_params}) => {
    return (
        <div style={button_params}>
            <div className="createBlueButton">
                {children}
            </div>
            <div className="createBlueButtonSmall">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <rect x="13" width="4" height="30" fill="#D9D9D9"/>
                    <rect y="17" width="4" height="30" transform="rotate(-90 0 17)" fill="#D9D9D9"/>
                </svg>
            </div>
        </div>
    )
}

export default CreateBlueButton;