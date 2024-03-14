'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const PaymentPage = () => {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('');

  const handlePaymentOptionChange = (event:any) => {
    setSelectedPaymentOption(event.target.value);
  };
  const router = useRouter();
  const handleCheckout = (event:any) => {
    event.preventDefault();
    console.log("Checkout successful! Shipping to:");
    router.replace("/success"); // Redirect to success page
  };
  return (
    <div className="payment-page flex flex-col gap-4">
      <h1 className="text-xl font-bold text-center">Payment Options</h1>
      <p className="text-sm text-gray-500 text-center">**For development purposes only. No actual payments will be processed.**</p>
      <form onSubmit={handleCheckout}>
        <fieldset className="border rounded-md p-4">
          <legend className="text-base font-medium">Choose Payment Method:</legend>
          <div className="payment-options grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="cod"
                name="paymentOption"
                value="cash_on_delivery"
                checked={selectedPaymentOption === 'cash_on_delivery'}
                onChange={handlePaymentOptionChange}
                className="mr-2 w-4 h-4 border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
              />
              <label htmlFor="cod" className="text-sm">Cash on Delivery</label>
            </div>
            <div className="flex items-center sm:mt-0">
              <input
                type="radio"
                id="upi"
                name="paymentOption"
                value="upi"
                checked={selectedPaymentOption === 'upi'}
                onChange={handlePaymentOptionChange}
                className="mr-2 w-4 h-4 border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
              />
              <label htmlFor="upi" className="text-sm">UPI</label>
            </div>
            <div className="flex items-center sm:mt-0">
              <input
                type="radio"
                id="debit_credit_card"
                name="paymentOption"
                value="debit_credit_card"
                checked={selectedPaymentOption === 'debit_credit_card'}
                onChange={handlePaymentOptionChange}
                className="mr-2 w-4 h-4 border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
              />
              <label htmlFor="debit_credit_card" className="text-sm">Debit/Credit Card</label>
            </div>
          </div>
        </fieldset>
        <button
          type="submit"
          disabled={!selectedPaymentOption}
          className="mt-4 py-2 px-4 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          Place Order (Simulated)
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
