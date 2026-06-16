import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 40))); 
  }, []);

  return (
    <div className="p-8 grid grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded p-4 flex flex-col justify-between text-sm"
        >
         
          <div className="w-full h-40">
            <img
              src={product.image_link}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          
          <div className="mt-3 flex flex-col gap-1">
            <p className="text-gray-400 uppercase font-bold text-xs">
              {product.brand}
            </p>
            <p className="font-semibold text-gray-800 line-clamp-2">
              {product.name}
            </p>
            <p className="font-bold text-base mt-1 text-gray-900">
              ${product.price}
            </p>
          </div>

        
          <button className="bg-[#fc2779] text-white w-full py-2 rounded-md font-bold mt-4">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
