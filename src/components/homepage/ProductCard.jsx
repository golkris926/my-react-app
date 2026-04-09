import React from 'react';
import { ShoppingCart } from "lucide-react";
import { shoeImages } from '../../assets/images';

// Single Product Card Component
function ProductCard({ title = "Sneaker", subtitle = "Premium Quality", price = "$990", image = "https://primefaces.org/cdn/primereact/images/landing/air-jordan.png" }) {
  return (
    <div className="max-w-sm p-6 border border-gray-200 rounded-xl shadow-md opacity-100 bg-white text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="w-48 mx-auto mb-6 transition-transform duration-300 hover:scale-105"
      />

      {/* Product Info */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-left">
          <h3 className="font-semibold text-black">{title}</h3>
          <p className="text-black text-sm">{subtitle}</p>
        </div>
        <span className="font-semibold text-xl text-black">{price}</span>
      </div>

      {/* Add to Cart Button */}
      <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold uppercase tracking-wider text-sm transition-all duration-300 transform backdrop-blur-sm border-2 border-black/10 text-black hover:bg-black hover:text-white hover:border-black hover:scale-105 active:scale-95">
        <ShoppingCart size={18} />
        Add to Cart
      </button>
    </div>
  );
}
function productcard() {
  // Sample product data - you can customize these
  const products = [
    {
      title: "Air Jordan 1",
      subtitle: "Premium Quality",
      price: "$990",
      image: shoeImages.men.img17,
    },
    {
      title: "Nike Dunk",
      subtitle: "Limited Edition",
      price: "$850",
      image: shoeImages.men.img18,
    },
    {
      title: "Yeezy Boost",
      subtitle: "Comfort Series",
      price: "$1200",
      image: shoeImages.men.img19,
    },
    {
      title: "Retro Classic",
      subtitle: "Vintage Style",
      price: "$750",
      image: shoeImages.men.img20,
    }
  ];

  return (
    <div className="py-12 px-4 opacity-100 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Premium Jordan Collection
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our exclusive range of premium sneakers crafted for style and comfort
          </p>
        </div>

        {/* Responsive Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              subtitle={product.subtitle}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default productcard;