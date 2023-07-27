import "./form-input.style.jsx"
import {Group, FormInputStyle, FormInputLabel} from "./form-input.style.jsx"
const FormInput = ({label , ...type}) => {
   
    return (
        <Group>
            <FormInputStyle  {...type} />
            { label && (<FormInputLabel shrink={type.value.length}>{label}</FormInputLabel>)}
             
        </Group>
    )
}

export default FormInput