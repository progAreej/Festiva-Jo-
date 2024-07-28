import React, { useState } from "react";
import axios from "axios";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#32325d",
      fontWeight: 500,
      fontFamily: "Arial, sans-serif",
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

export default function Payment() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    
    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("https://culture-festival-new-default-rtdb.europe-west1.firebasedatabase.app/payments.json",
         {
          amount: 1000,
          id,
          
        });

        if (response.data.success) {
          console.log("Successful payment 💵");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
    
   
      {!success ? (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl p-6 bg-white  rounded ">
          <fieldset className="mb-4">
            <div className="border border-gray-300 p-4 rounded-md">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button className="w-full bg-red1 text-white py-2 px-4 rounded hover:bg-red2 transition duration-200">
            Pay
          </button>
        </form>
      ) : (
        <div className="text-center p-6 bg-green-100 text-green-800 rounded">
          <h2 className="text-2xl font-bold">Payment Successful</h2>
        </div>
      )}
    
    </>
  );
}

