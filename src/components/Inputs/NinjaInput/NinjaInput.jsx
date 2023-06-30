import "./NinjaInput.css";


const NinjaInput = ({value, onChange, placeholder}) => {
    return (
        <>
            <div className="NinjaLayout">
                <input
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="MainNinjaClass"
                />
            </div>
        </>
    )
}

export default NinjaInput;