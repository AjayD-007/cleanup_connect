// components/Product.tsx
"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Product = ({ product }: { product: any }) => {
  const router = useRouter();
  const addToCart = () => {
    router.push(
      `/cart?productId=${encodeURIComponent(
        product.id
      )}&title=${encodeURIComponent(product.title)}&price=${encodeURIComponent(
        product.price
      )}&image=${encodeURIComponent(product.image)}&description=${encodeURIComponent(product.description)}`,
    );
  };
  return (
    <div className="container mx-auto px-4 py-2">
      <div className="md:flex shadow-lg rounded-lg border p-4">
        <div className="md:w-1/2 md:mr-4">
          <div
            className="h-40 md:h-64 md:aspect-none mb-4"
            style={{ height: 200 }}
          >
            <img
              src={product.image}
              alt={product.title}
              height={200}
              className=" object-scale-down h-[200px] rounded-lg"
            />
          </div>
        </div>
        <div className="md:w-1/2  flex-col gap-2">
          <h2 className="text-lg font-semibold line-clamp-2">
            {product.title}
          </h2>
          <p className="text-gray-600">${product.price}</p>
          <p className="text-gray-800 mt-2 text-sm">{product.description}</p>
          <div className="md:flex items-center mt-4">
            <div className="flex gap-4">
            <button
              onClick={() => addToCart()}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
            >
              Add to Cart
            </button>
            <button
              onClick={() => router.push('/checkout')}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
            >
             Buy Now
            </button>
            </div>
            <div className="text-xs mt-2">
              <span className="text-gray-600">
                Rating: {product.rating.rate}/5 ({product.rating.count} reviews)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
