import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publicKey = 'pk_test_Pyz0wWxk3Kgck14DV6PJIS2n00VIPpP30v';

    const onToken = token => {
        console.log(token)
        alert('Payment succesfull')
    }
    
    return (
        <StripeCheckout
            label='Pay now'
            name='CRWN clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publicKey}
        />
    )
}

export default StripeCheckoutButton