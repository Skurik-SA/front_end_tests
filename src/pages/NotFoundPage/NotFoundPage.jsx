import "./NotFoundPage.css"

export const NotFoundPage = () => {
    return (
        <div className="NotFoundWrapper">
            <div className="NotFoundContent">
                <div>Извините, но такой страницы не найдено</div>
                <p><img src="NotFoundCat.jpg" className="NotFoundImage"/></p>
            </div>
        </div>
    )
}