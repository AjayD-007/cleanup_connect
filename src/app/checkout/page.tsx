'use client'
import React, { useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const user = useAuthContext();
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    zip: "",
    phone:""
  });

  // Function to handle shipping information change
  const handleInputChange = (event:any) => {
    setShippingInfo({
      ...shippingInfo,
      [event.target.name]: event.target.value,
    });
  };

  const router = useRouter();

  // Function to handle checkout process (simulation)
  const handleCheckout = (event:any) => {
    event.preventDefault();
    console.log("Checkout successful! Shipping to:", shippingInfo);
    router.replace("/payment"); // Redirect to success page
  };

  return (
    <div className="checkout-container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {user ? (
        <form onSubmit={handleCheckout} className="max-w-sm mx-auto">
          <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
          <label htmlFor="phone" className="block mb-1">
            Phone:
          </label>
          <input
            type="tel"
            minLength={10}
            maxLength={10}
            inputMode="numeric"
            name="phone"
            value={shippingInfo.phone}
            onChange={handleInputChange}
            className="w-full border rounded-md px-3 py-2 mb-2"
            required
          />
          <label htmlFor="address" className="block mb-1">
            Address:
          </label>
          <input
            type="text"
            name="address"
            value={shippingInfo.address}
            onChange={handleInputChange}
            className="w-full border rounded-md px-3 py-2 mb-2"
            required
          />
          <label htmlFor="city" className="block mb-1">
            City:
          </label>
          <input
            type="text"
            name="city"
            value={shippingInfo.city}
            onChange={handleInputChange}
            className="w-full border rounded-md px-3 py-2 mb-2"
            required
          />
          <label htmlFor="state" className="block mb-1">
            State:
          </label>
          <input
            type="text"
            name="state"
            value={shippingInfo.state}
            onChange={handleInputChange}
            className="w-full border rounded-md px-3 py-2 mb-2"
            required
          />
          <label htmlFor="zip" className="block mb-1">
            Zip Code:
          </label>
          <input
            type="text"
            name="zip"
            value={shippingInfo.zip}
            onChange={handleInputChange}
            className="w-full border rounded-md px-3 py-2 mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
          >
            Go to Payment
          </button>
        </form>
      ) : (
        <p>Please log in to checkout.</p>
      )}
    </div>
  );
};

export default Checkout;
