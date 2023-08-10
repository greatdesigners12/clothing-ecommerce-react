import { useState } from "react"
import { createUserBasic, insertUserData } from "../../../utils/firebase/firebase.utils"
import FormInput from "../../basic input/form-input/formInput.component"
import Button from  "../../button/button.component"
import { useDispatch } from "react-redux"
import { emailSignUpStart } from "../../../store/user/user.action"




const SignUpForm = () => {
    const dlft = {
        "name" : "",
        "email" : "",
        "password" : "",
        "confirmPassword": ""
    }

    const dispatch = useDispatch()

    const [dataForm, setDataForm] = useState(dlft)
    const onChangeInput = (event) => {
        const {name, value} = event.target
        setDataForm({...dataForm, [name] :value})
        
    }
  

    const register = async () => {
        if(!dataForm.name || !dataForm.email || !dataForm.password || !dataForm.confirmPassword) {
            alert("Please fill the form")
            return 
        }
        if(dataForm.password !== dataForm.confirmPassword) {
            alert("The password doesn't match")
            return 
        }
        try{
            console.log(dataForm.email, dataForm.password)
            dispatch(emailSignUpStart(dataForm.name, dataForm.email, dataForm.password))
            
            alert("Success")
            setDataForm(dlft)
            
        }catch(e){
            alert(e.code)
        }
        

    }
    return (
        <div>
            <form>
                
               
                <FormInput label="Name" type="text" required onChange={onChangeInput} name="name" value={dataForm.name} />
                <FormInput label="Email" type="email" required onChange={onChangeInput} name="email" value={dataForm.email} />
                <FormInput label="Password" type="password" required onChange={onChangeInput} name="password" value={dataForm.password} />
                <FormInput label="Confirm Password" type="password" required onChange={onChangeInput} name="confirmPassword" value={dataForm.confirmPassword} />
                
                <Button type="button" onClick={register}>Register</Button>
            </form>
        </div>
    )
}

export default SignUpForm