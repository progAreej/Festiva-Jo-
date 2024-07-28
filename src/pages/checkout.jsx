import React, { useState } from "react";
import { CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import getData from "../hooks/getData";
import SuccessAlert from "../components/SuccessAlert";
import ErrorAlert from "../components/ErrorAlert";
import StripeContainer from "./StripeContainer";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const PayPalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8"
  >
    <path d="M7 11C7 11 7.5 14.5 10 14.5C13.5 14.5 15 11 15 11C15 11 14.5 7.5 12 7.5C8.5 7.5 7 11 7 11Z" />
    <path d="M10.5 16.5H8.5L7.5 20.5H9.5L10.5 16.5Z" />
    <path d="M12 4.5L11 8.5C11 8.5 11.5 9.5 13.5 9.5C16.5 9.5 18 6.5 18 6.5C18 6.5 17 3.5 14 3.5C11 3.5 12 4.5 12 4.5Z" />
  </svg>
);

const CheckOut = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [couponCode, setCouponCode] = useState("");
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });
  const initialOptions = {
    "client-id":
      "AWrR0dEDBlc9AVYB7E-RbYM8HyZMGiRs_ibLN1lcJXBnv8DhZc1BuvhagRX5ycmsDSNQ3B5TxKya81_v",
    "enable-funding": "card",
    "disable-funding": "",
    "data-sdk-integration-source": "integrationbuilder_sc",
  };
  const totalPrice = sessionStorage.getItem("totalPrice");

  const product1 = sessionStorage.getItem("orgCount");
  const product2 = sessionStorage.getItem("vipCount");
  const navigate = useNavigate();
  const [orderDetails] = useState({
    items: [
      { name: "Economy X " + product1, quantity: 1 },
      { name: "vipCount X " + product2, quantity: 2 },
    ],
    subtotal: totalPrice,
    tax: 8.0,
    total: 8 + parseInt(totalPrice),
  });
  console.log(sessionStorage.getItem("totalPrice"));
  const [coupons] = getData(
    "https://culture-3-default-rtdb.europe-west1.firebasedatabase.app/coupons.json"
  );
  console.log(coupons);
  const [couponApplied, setCouponApplied] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorMessages, setErrorMessages] = useState("");

  const handlePaymentMethodChange = method => {
    setPaymentMethod(method);
  };

  const handleCouponCodeChange = e => {
    setCouponCode(e.target.value);
  };

  const handleCardInfoChange = e => {
    setCardInfo({
      ...cardInfo,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    sessionStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    sessionStorage.setItem("paymentMethod", paymentMethod);
    sessionStorage.setItem("cardInfo", JSON.stringify(cardInfo));
    sessionStorage.setItem("couponCode", couponCode);

    console.log("Checkout submitted", {
      paymentMethod,
      couponCode,
      cardInfo,
      orderDetails,
    });
    navigate("/Booking");
  };

  function applyCoupon() {
    if (couponApplied) {
      setErrorMessages("Coupon already applied");
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 3000);
      return;
    }
    let couponFound = false;
    // alert("test")
    coupons.forEach(coupon => {
      if (coupon.code === couponCode) {
        console.log("Coupon found", coupon);
        couponFound = true;
        orderDetails.total -=
          (orderDetails.total * coupon.discountPercentage) / 100;
        setCouponApplied(true);
        setShowSuccessAlert(true);
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 3000);
      }
    });
    if (!couponFound) {
      setErrorMessages("Coupon code not found");
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 3000);
    }
  }
  const [showItem, setShowItem] = useState(false);
  return (
    <>
      <NavBar />
      <div className="py-12 mt-20">
        <SuccessAlert
          message="Coupon code applied successfully"
          show={showSuccessAlert}
        />
        <ErrorAlert error={errorMessages} show={showErrorAlert} />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg text-page1 shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-8">
                <h1 className="text-3xl font-bold mb-6">Checkout</h1>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                  <div className="space-y-4">
                    <label className="flex items-center p-4 border rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
                      <input
                        type="radio"
                        className="form-radio text-blue-500"
                        checked={paymentMethod === "credit-card"}
                        onChange={() =>
                          handlePaymentMethodChange("credit-card")
                        }
                      />
                      <CreditCard className="w-8 h-8 ml-4 text-gray-600" />
                      <span className="ml-4 font-medium">Credit Card</span>
                    </label>
                    <label className="flex items-center p-4 border rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
                      <input
                        type="radio"
                        className="form-radio text-blue-500"
                        checked={paymentMethod === "paypal"}
                        onChange={() => handlePaymentMethodChange("paypal")}
                      />
                      <PayPalIcon />
                      <span className="ml-4 font-medium">PayPal</span>
                    </label>
                  </div>
                </div>

                {paymentMethod === "credit-card" && (
                  <div className="mb-8 space-y-4 ">
                    <h2 className="text-xl font-semibold mb-4">
                      Credit Card Information
                    </h2>

                    <div className="flex flex-col items-center p-6 ">
                      <StripeContainer />
                    </div>
                  </div>
                )}

                {paymentMethod === "paypal" && (
                  <PayPalScriptProvider options={initialOptions}>
                    <PayPalButtons
                      style={{ layout: "horizontal", shape: "rect" }}
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          intent: "CAPTURE",
                          purchase_units: [
                            {
                              description: "",
                              amount: {
                                currency_code: "USD",
                                value: 200,
                              },
                            },
                          ],
                        });
                      }}
                    />
                  </PayPalScriptProvider>
                )}

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Have a coupon?</h2>
                  <div className="flex">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={handleCouponCodeChange}
                      placeholder="Enter coupon code"
                      className="flex-grow border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-page1"
                    />

                    <button
                      onClick={applyCoupon}
                      className="bg-red1 text-white px-6 py-2 rounded-r-lg hover:bg-red2 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-red1 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red2 transition-colors"
                >
                  Place Order
                </button>
              </div>

              <div className="md:w-1/3 bg-page1 p-8 text-white">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-4">
                  {orderDetails.items.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span>
                        {item.name} {item.orgCount}
                      </span>

                      {/* <span>{(item.price * item.quantity).toFixed(2)}JOD</span> */}
                    </div>
                  ))}
                  <div className="border-t pt-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>{orderDetails.subtotal}JOD</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>{orderDetails.tax}JOD</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>{orderDetails.total}JOD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default CheckOut;
