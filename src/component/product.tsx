// components/Product.js
import React from 'react';

const Product = ({ product }:{product:any}) => {
  return (
    <div className="container mx-auto px-4 py-8">
  <div className="md:flex">
    <div className="md:w-1/2 md:mr-4">
      <div className="md:h-64 md:aspect-none mb-4">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
    <div className="md:w-1/2">
      <h2 className="text-2xl font-semibold">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <p className="text-gray-800 mt-2">{product.description}</p>
      <div className="flex items-center mt-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">
          Add to Cart
        </button>
        <div className="ml-4">
          <span className="text-gray-600">Rating: {product.rating.rate}/5 ({product.rating.count} reviews)</span>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Product;
