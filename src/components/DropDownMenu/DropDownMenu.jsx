import styles from "./DropDownMenu.module.css"
import Portal from "../Portal/Portal";
import {useState} from "react";
import PortalInside from "../PortalInside/PortalInside";

const DropDownMenu = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (

        <div style={{display: 'flex', position: 'realative', flexDirection: 'column'}}>

            <div className={styles.wrapper} onClick={() => setIsOpen(!isOpen)}>
                <PortalInside open={isOpen} onClose={() => setIsOpen(false)}>
                    <div>
                        asd
                    </div>
                    <div>
                        asd
                    </div>
                    <div>
                        asd
                    </div>
                    <div>
                        asd
                    </div>
                    <div>
                        asd
                    </div>
                    <div>
                        asd
                    </div>
                </PortalInside>
            </div>
            {/*<div style={isOpen ? {display: "flex"} : {display: 'none'}} className={styles.wrapper}>*/}
            {/*    Some content*/}
            {/*</div>*/}
        </div>
    )
}

export default DropDownMenu;