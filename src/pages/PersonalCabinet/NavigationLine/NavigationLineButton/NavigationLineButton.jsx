import asd from"./NavigationLineButton.module.css"
import {Link} from "react-router-dom";

const NavigationLineButton = ({children, activeTab, index, changeFunction, link_to=""}) => {

    let rootClasses = [asd.buttonNavigationLine]

    if (activeTab === index) {
        rootClasses.push(asd.active)
    }

    return (
            <Link
                to={link_to}
                className={rootClasses.join(' ')}
                onClick={() => changeFunction(index)}
            >
                <div>{children}</div>
            </Link>
    )
}

export default NavigationLineButton;