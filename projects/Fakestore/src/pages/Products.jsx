import React from "react";

const Product = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest.",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

const Products = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-5">Products</h1>

      <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="border rounded-lg p-4 shadow-md flex flex-col"
          >
            <div className="w-full h-40">
              <img
                src={Product.image}
                alt={Product.title}
                className="w-full h-full object-contain"
              />
            </div>

            <h2 className="font-bold mt-3 line-clamp-2">
              {Product.title}
            </h2>

            <p className="mt-2 font-semibold">${Product.price}</p>

            <p>{Product.category}</p>

            <p>
              ⭐ {Product.rating.rate} ({Product.rating.count})
            </p>

            <button className="mt-4 mx-auto border rounded px-4 py-2 bg-amber-100 hover:bg-amber-200">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;