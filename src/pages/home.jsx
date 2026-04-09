import React from "react";
import Slider from "../components/homepage/slider";
import DiscountBanner from "../components/homepage/discountbanner";
import FeaturedProducts from "../components/homepage/featuredproducts";
import ProductCard from "../components/homepage/ProductCard";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import BrandShowcase from "../components/homepage/BrandShowcase";
import AdidasParallax from "../components/homepage/AdidasParallax";
import DealsOfTheDay from "../components/homepage/DealsOfTheDay"
function home() {
  return (
    <div className="font-sans">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Slider />

      {/* Discount Banner */}
      <DiscountBanner />

      {/* Featured Products */}
      <FeaturedProducts />

      {/*Brand Showcase*/}
      <BrandShowcase/>

      {/* Product Card */}
      <ProductCard/>
      {/* AdidasParallax */}
      <AdidasParallax/>

      {/* DealsOfTheDay */}
      <DealsOfTheDay/>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default home;
