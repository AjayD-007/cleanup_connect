// pages/cart.tsx
"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  const searchparams = useSearchParams();

  const handleCheckout = () => {
    // router.back()
    router.replace("/checkout");
  };

  return (
    <div className="">
      <div className="container mx-auto px-4 py-2">
        <div className="flex gap-2">
            <div onClick={()=>{router.back()}} className="text-xl">{"<"}</div>
          <h1 className="text-2xl font-bold mb-4">Cart</h1>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <img
            className="h-40 md:h-64 md:aspect-none mb-4"
            src={decodeURIComponent(searchparams.get("image")!)}
            alt=""
          />
          <h2 className="text-lg font-semibold">
            {decodeURIComponent(searchparams.get("title")!)}
          </h2>
          <p className="text-gray-600">
            {decodeURIComponent(searchparams.get("description")!)}
          </p>
          <div className="">
            {decodeURIComponent(searchparams.get("price")!)}
          </div>
        </div>
      </div>
      <button
        onClick={handleCheckout}
        className="mt-4 fixed inset-x-0 bottom-0 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
