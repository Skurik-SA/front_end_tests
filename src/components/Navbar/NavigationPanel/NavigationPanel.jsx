import np from "./NavigationPanel.module.css"

const NavigationPanel = ({children, visible, setVisible}) => {

    const rootClasses = [np.NavPanNew]
    const blur = [np.blur]
    if (visible) {
        rootClasses.push(np.active)
        blur.push(np.active)
    }

    return (
        // <div style={{display: 'none'}} className={blur} onClick={() => {setVisible(true)}}>
        <div className={blur} onClick={() => {setVisible(true)}}>
            <div className={rootClasses.join(' ')} onClick={() => {setVisible(false)}}>
                <div className={np.NavPanelContent} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>

    )
}

export default NavigationPanel;