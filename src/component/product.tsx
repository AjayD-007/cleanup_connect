// components/Product.js
import React from 'react';

const Product = ({ product }:{product:any}) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="">
        <div className="md:w-1/2 h-[150px] aspect-square" style={{height:250,aspectRatio:1}}>
          <img src={product.image} alt={product.title} className="w-full h-[120px] aspect-square rounded-lg mx-auto md:mx-0 md:max-w-full " height={250} style={{height:250,aspectRatio:1}} />
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0 md:ml-8">
          <h2 className="text-2xl font-semibold">{product.title}</h2>
          <p className="text-gray-600">${product.price}</p>
          <p className="text-gray-800 mt-2 line-clamp-2">{product.description}</p>
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
