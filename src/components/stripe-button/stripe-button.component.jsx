import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HhbqACLqqvSBt73MyhoQch1x8Vu6h5jwlSboho9g80nPmCw8EO330epPww3ZrNO7ztx1xy17rF1l0qbZZ4metul00BiFkFYwc';

    const onToken = token => {
        console.log(token)
        alert('Payment Succesful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Breezy Store'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;