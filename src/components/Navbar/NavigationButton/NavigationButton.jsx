import {Link} from "react-router-dom";


const NavigationButton = ({children, link_to}) => {
    return (
        <div>
            <Link
                to={link_to}
                style={{ textDecoration: 'none', color: 'white'}}
            >
                <div>{children}</div>
            </Link>
        </div>
    )
}

export default NavigationButton;