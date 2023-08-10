import "./button.style.jsx";
import { GoogleSignInButton, ButtonContainer, InvertedButton, ButtonSpinner } from "./button.style.jsx";


export const BUTTON_TYPE = {
    "google" : "google-sign-in",
    "inverted" : "inverted",
    "base" : "base"
}

const getButton = (buttonType = BUTTON_TYPE.google) => {
    return (
        {
            "google": GoogleSignInButton,
            "base": ButtonContainer, 
            /*dikasih [value variable], biar bisa output string didalem object/dictionary*/
            [BUTTON_TYPE.inverted]: InvertedButton
        }[buttonType]
    )
}

// pass props name children to have <component>children</component>
const Button = ({children,buttonType="base", isLoading, buttonFunc,...otherProps}) => {
    const CustomBtn = getButton(buttonType)
    return (
        <CustomBtn disabled={isLoading} onClick={buttonFunc} {...otherProps}> {
            isLoading ? <ButtonSpinner /> : children
        }</CustomBtn>
    )
}

export default Button