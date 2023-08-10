import { SignIn, signInWithGooglePopup, insertUserData } from "../../../utils/firebase/firebase.utils"
import FormInput from "../../basic input/form-input/formInput.component" 
import Button  from "../../button/button.component"
import {useState } from "react"
import SignUpForm from "../sign-up-form/sign-up.component"
import "./sign-in-form.style.scss"
import { useDispatch } from "react-redux"
import { emailSignInStart, googleSignInStart } from "../../../store/user/user.action"


const SignInForm = () => {
    const defaultValue = {
        "email" : "",
        "password" : ""
    }
    
    const dispatch = useDispatch()

    const [data, setData] = useState(defaultValue)

    const onInputChange = (event) => {
        const {name, value} = event.target 
        setData({...data, [name]:value})
    }
    
    const SignInFunc = async (event) => {
        event.preventDefault()
        if (data.email === "" || data.password === ""){
            return alert("Please fill all the input")
        }

        dispatch(emailSignInStart(data.email, data.password))
        

        
    }

    const googleSignIn = async (event) => {
        event.preventDefault()
        dispatch(googleSignInStart())
    }

    

    return (
        <div>
            <div className="authentication">
                <div>
                    <h1>Login</h1>
                    <form className="sign-in-form">
                        <FormInput label="Email" value={data.email} name="email" onChange={onInputChange} type="email" />
                        <FormInput label="Password" value={data.password} name="password" onChange={onInputChange} type="password" />
                        <div className="buttons-container">
                            <Button  onClick={SignInFunc}>Login</Button>
                            <Button buttonType="google" onClick={googleSignIn}>Sign in with google</Button>
                        </div>
                    
                </form>
                </div>
                
                <div>
                    <h1>Register</h1>
                    <SignUpForm />
                </div>
                
            </div>
        </div>
        
    )
}

export default SignInForm;