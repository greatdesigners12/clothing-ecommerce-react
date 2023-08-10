import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import PaymentButton, {BUTTON_TYPE} from "../button/button.component";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";
import { useSelector } from "react-redux";
import { getCurrentUserSelector } from "../../store/user/user.selector";
import { getTotalCart } from "../../store/cart/cart.selector";

const PaymentForm = () => {
    const stripe = useStripe()
    const element = useElements()
    const user = useSelector(getCurrentUserSelector)
    const totalCart = useSelector(getTotalCart)
    const [isProcessingPayment, setIsProcessingPayment] = useState(false)

    const paymentHandler = async (e) => {
        e.preventDefault()
        
        if(!stripe || !element){
            return;
        }

        setIsProcessingPayment(true)
        const {displayName} = user
        const response = await fetch("/.netlify/functions/create-payment-intent", {
            method: "post",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({amount: totalCart * 100})
        }).then((body) =>  body ? body.json() : body)
        
        const clientSecret = response.paymentIntent.client_secret

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: element.getElement(CardElement),
                billing_details: {
                    name: displayName != "" ? displayName : "guest"
                }
            }
        })

        if(paymentResult.error){
            alert(paymentResult.error.message)
        }else{
            if(paymentResult.paymentIntent.status === "succeeded") {
                alert("Payment Successful")
            }
        }

        setIsProcessingPayment(false)
    }

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}> 
                <h2>Credit card payment : </h2>
                <CardElement />
                <PaymentButton isLoading={isProcessingPayment}  buttonType={BUTTON_TYPE.inverted}>Buy Now </PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm