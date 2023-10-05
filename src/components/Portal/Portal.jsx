import {useEffect, useMemo} from "react";
import {createPortal} from "react-dom";
import styles from "./Portal.module.css"

const modalRootElement = document.querySelector("#modal")

// Necessary define useState hook inside component where you create modal window.
// This state will respond for open and close modal window.
const Portal = (props) => {
    const element = useMemo(() => document.createElement("div"), [])

    const {
        open,
        onClose,
        style
    } = props

    useEffect(() => {

        if (open) {
            modalRootElement.appendChild(element)

            return () => {
                modalRootElement.removeChild(element)
            }
        }

    })

    if (open) {
        return createPortal(
            <div className={styles.modal_background} onClick={onClose}>
                <div className={styles.modal_card} style={style} onClick={(e) => e.stopPropagation()}>
                    {props.children}
                </div>
            </div>,
            element
        )
    }

    return null;
}

export default Portal