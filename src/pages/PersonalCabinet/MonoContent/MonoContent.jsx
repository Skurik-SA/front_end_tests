import "./MonoContent.css"

const MonoContent = ({children}) => {
    return (
        <div className="monoContentWrapper">
            {children}
        </div>
    )
}

export default MonoContent;