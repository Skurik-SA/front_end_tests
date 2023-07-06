import "./PersonalPageButton.css"

const PersonalPageButton = ({children, activeForm, index, active_arr, set_active_arr}) => {
    let act_arr = []
    for (let i = 0; i < active_arr.length; i++)
    {
        act_arr.push(false)
    }

    const setIsActive = () => {
        act_arr[index - 1] = true
        set_active_arr(act_arr)
    }

    return (
        <>
            {active_arr[index - 1]
                ?
                    <button className="PP-glow-button-activeForm">
                        {children}
                    </button>
                :
                    <button className="PP-glow-button" onClick={() => setIsActive()}>
                        {children}
                    </button>

            }
        </>
    )
}

export default PersonalPageButton;