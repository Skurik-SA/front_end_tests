import "./Search.css"

const Search = ({style_params}) => {
    return (
        <div style={style_params}>
            <div className="searchWrapper">
                <div className="searchIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                        <circle cx="14" cy="9" r="8" stroke="black" strokeWidth="2"/>
                        <line x1="1.5845" y1="21.5871" x2="8.57181" y2="14.5871" stroke="black" strokeWidth="4"/>
                    </svg>
                </div>
                <input className="searchInputNew" placeholder={"Поиск..."}/>
            </div>
        </div>
    )
}

export default Search;