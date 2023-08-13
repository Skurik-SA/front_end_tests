import "./NinjaSearchInput.css"

const NinjaSearchInput = ({value, onChange, placeholder, className, ...props}) => {

    return (
        <div className="NinjaLayout">
            {className
                ?
                <input
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={className}
                />
                :
                <input
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="MainNinjaClass"
                />


            }

        </div>
    )
}

export default NinjaSearchInput;