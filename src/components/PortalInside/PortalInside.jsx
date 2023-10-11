import {useEffect, useMemo, useState} from "react";
import {createPortal} from "react-dom";
import styles from "./PortalInside.module.css"

// const modalRootElement = document.querySelector("#tooltip")

// Necessary define useState hook inside component where you create modal window.
// This state will respond for open and close modal window.
const PortalInside = (props) => {
    const [element] = useState(() => document.createElement("div"))

    const {
        open,
        onClose,
        style
    } = props

    useEffect(() => {

        if (open) {
            document.body.appendChild(element)

            return () => {
                document.body.removeChild(element)
            }
        }

    })

    if (open) {
        return createPortal(
            <div className={styles.ss_background} onClick={onClose}>
                <div className={styles.ss_card} style={style} onClick={(e) => e.stopPropagation()}>
                    {props.children}
                </div>
            </div>,
            element
        )
    }

    return null;
}

export default PortalInside