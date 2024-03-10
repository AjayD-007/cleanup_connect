// pages/success.tsx
'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const Success = () => {
    const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-2">
        <div className="flex gap-2">
         <div onClick={()=>{router.back()}} className="text-xl">{"<"}</div>
      <h1 className="text-2xl font-bold mb-4">Success</h1>
        </div>
        <img src="/assets/jpg/thank-u.jpg" alt="" />
      <p className='text-center'>Your order has been placed successfully!</p>
      <button
        onClick={()=>{router.back()}}
        className="mt-4 fixed inset-x-0 bottom-0 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
      >
        Buy other products
      </button>
    </div>
  );
};

export default Success;
