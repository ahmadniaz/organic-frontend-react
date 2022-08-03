import React from "react";

import { Row, Col } from "reactstrap";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import InjectedCheckoutForm from "../../components/payment-form/payment-form";
// import ProductContext from "../../context/productContext/productContext";

import CartComponent from "../../components/cart/CartComponent";

function Checkout() {
  // get app context
  // const productContext = useContext(ProductContext);
  // isAuthenticated is passed to the cart component to display order button
  // const { isAuthenticated } = appContext;

  // load stripe to inject into elements components
  const stripePromise = loadStripe(
    "pk_test_51Jc33QBlVbJdCmKT8RfZDQctBk3OwAQqeReNoDMqihvRbefdYtrppChHIKn3Fcx3ovzSP6P49SjRGvDuhrVPyG2H00NkHyvBBn"
  );

  return (
    <Row style={{ gutterX: 0 }}>
      <Col style={{ paddingRight: 0 }} sm={{ size: 3, order: 1, offset: 2 }}>
        <CartComponent />
      </Col>
      <Col style={{ paddingLeft: 5 }} sm={{ size: 6, order: 2 }}>
        <Elements stripe={stripePromise}>
          <InjectedCheckoutForm />
        </Elements>
      </Col>
    </Row>
  );
  // }
}
export default Checkout;
