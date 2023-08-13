import "./DotedLoader.css"

const DotedLoader = () => {
    // Есть баг в стилях внутреннее кольцо чуть сдвинуто влево
    return (
        <div>
            <div className="custom_loader">
                <div className="custom_circle_big"></div>
                <div className="custom_circle_big"></div>
                <div className="custom_circle_big"></div>
                <div className="custom_circle_big"></div>
                <div className="custom_circle_little"></div>
                <div className="custom_circle_little"></div>
                <div className="custom_circle_little"></div>
                <div className="custom_circle_little"></div>
            </div>
        </div>
    )
}

export default DotedLoader;