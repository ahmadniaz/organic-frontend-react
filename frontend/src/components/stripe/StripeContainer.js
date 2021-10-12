import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./CheckoutForm"

const PUBLIC_KEY = "pk_test_51Jc33QBlVbJdCmKT8RfZDQctBk3OwAQqeReNoDMqihvRbefdYtrppChHIKn3Fcx3ovzSP6P49SjRGvDuhrVPyG2H00NkHyvBBn"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer=()=> {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}
export default StripeContainer;