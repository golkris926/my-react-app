import React from "react";
import { shoeImages } from "../../assets/images";

const products = [
  {
    id: 1,
    title: "Nike Air Jordan",
    price: "$900",
    img: shoeImages.men.img13,
    desc: "The Nike Air Jordan blends premium leather, responsive cushioning, and timeless style. Whether on the court or the streets, it’s built to keep you moving in comfort and confidence.",
  },
  {
    id: 2,
    title: "Adidas Sneakers",
    price: "$700",
    img: shoeImages.men.img14,
    desc: "Adidas Sneakers combine modern design with innovative comfort technology, giving you a lightweight and supportive fit whether you’re running errands or hitting the streets.",
  },
  {
    id: 3,
    title: "New Balance",
    price: "$850",
    img: shoeImages.men.img15,
    desc: "New Balance Sneakers combine modern aesthetics with advanced comfort technology, making them perfect for city walks, casual outings, or daily wear.",
  },
  {
    id: 4,
    title: "Sunlight Sneakers",
    price: "$630",
    img: shoeImages.men.img16,
    desc: "Lightweight and breathable sneakers that provide all-day comfort. Perfect for workouts, running, and everyday active wear.",
  },
];

function ProductCard({ title, price, img, desc }) {
  return (
    <div
      className="relative w-full aspect-[3/4] bg-white rounded-2xl p-4 sm:p-6 text-black 
      overflow-hidden group shadow-lg border border-gray-100
      transform scale-95 group-hover:scale-100 transition-transform duration-500 ease-in-out"
    >
      {/* Product Image */}
      <img
        src={img}
        alt={title}
        className="absolute w-[55%] sm:w-[60%] md:w-[65%] left-1/2 transform -translate-x-1/2 top-4 sm:top-6 
        drop-shadow-[3px_6px_12px_rgba(0,0,0,0.15)] 
        sm:drop-shadow-[5px_10px_15px_rgba(0,0,0,0.2)] 
        transition-transform duration-500 ease-in-out 
        group-hover:-translate-y-16 sm:group-hover:-translate-y-20 md:group-hover:-translate-y-24 
        group-hover:-translate-x-[calc(50%-12px)] sm:group-hover:-translate-x-[calc(50%-16px)] 
        group-hover:-rotate-6 sm:group-hover:-rotate-8 md:group-hover:-rotate-10"
      />

      {/* Card Content */}
      <div
        className="relative text-center transform translate-y-[65%] sm:translate-y-[70%] 
        transition-all duration-500 ease-in-out 
        group-hover:translate-y-12 sm:group-hover:translate-y-16"
      >
        <h1 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2 transition-all duration-500 ease-in-out group-hover:text-left">
          {title}
        </h1>

        <span
          className="block text-xs sm:text-sm md:text-base font-medium mb-2 sm:mb-4 text-gray-900 text-left 
          opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out"
        >
          {price}
        </span>

        <p
          className="text-xs sm:text-sm mb-3 sm:mb-5 opacity-0 translate-x-10 group-hover:translate-x-0 group-hover:opacity-100 
          transition-all duration-500 delay-150 ease-in-out text-gray-700 px-1 sm:px-0 text-left"
        >
          {desc}
        </p>

        <button
          className="opacity-0 delay-150 ease-in-out group-hover:opacity-100 bg-black text-white font-semibold 
          py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-xs sm:text-sm md:text-base 
          hover:bg-gray-800 hover:shadow-[0_6px_16px_-2px_rgba(0,0,0,0.3)] 
          sm:hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.3)] 
          transform hover:scale-105 active:scale-95 transition-transform duration-200"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

function FeaturedProducts() {
  return (
    <div className="bg-gray-100 py-6 sm:py-10 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-10 text-black leading-tight">
          Featured Products
        </h2>
        {/* Responsive Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 place-items-center"
        >
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;