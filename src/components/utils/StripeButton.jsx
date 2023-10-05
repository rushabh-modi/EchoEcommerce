import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default function StripeButton({ price }) {
  const priceForStripe = price;
  const publishableKey =
    'pk_test_51N0pk4SJPzGbKI26NtWC2xoRS3xPyVCQRtUxx4Sw3pTLaChs4swz0q9Wm0VW1PdHbQh7TOzYmdx7GnpL7W82ddNE00WTLQzw1L';

  const onToken = (token) => {
    console.log(token);
    alert('dummy payment successfull');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="EchoEcommerce"
      billingAddress
      shippingAddress
      image="https://user-images.githubusercontent.com/109070924/236601488-6c60f98a-ad2a-40a9-922a-e6bf7e0d56c6.png"
      description={`Your total is ₹${price / 100} Only`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}
