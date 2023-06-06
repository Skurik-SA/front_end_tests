import np from "./NavigationPanel.module.css"

const NavigationPanel = ({children, visible, setVisible, menuMode, setMenuMode}) => {

    const rootClasses = [np.NavigationPanelBackground]

    if (visible) {
        rootClasses.push(np.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => {setVisible(false); setMenuMode(false)}}>
            <div className={np.NavigationPanelBackground} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default NavigationPanel;