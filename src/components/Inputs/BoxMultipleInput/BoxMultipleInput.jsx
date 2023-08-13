import InputMask from 'react-input-mask';
import bmi from "./BoxMultipleInput.module.css"
const BoxMultipleInput = ({inputValue, onChange, stl}) => {

    return (
            <div className={bmi.BoxInputBorder}>
                <InputMask
                    className={bmi.InputStyle}
                    mask="9|9|9|9|9|9|9|9"
                    value={inputValue}
                    onChange={onChange}
                    alwaysShowMask={true}
                ></InputMask>
            </div>
    )
}

export default BoxMultipleInput;





