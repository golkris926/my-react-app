import React from "react";

function DiscountCoupon() {
  return (
    <section className="w-full py-8 sm:py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-md p-6 sm:p-8 lg:p-12">
          {/* Background Bold Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 text-gray-400 text-[3rem] sm:text-[5rem] lg:text-[8rem] font-extrabold select-none">
            10% OFF
          </div>

          <div className="relative flex flex-col lg:flex-row items-center lg:justify-between gap-6 lg:gap-8">
            {/* Left Text */}
            <div className="text-center lg:text-left max-w-lg">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                10% OFF Discount Coupons
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-2">
                Subscribe now and enjoy 10% OFF on all purchases
              </p>
            </div>

            {/* Right Button */}
            <div className="w-full sm:w-auto flex justify-center lg:justify-end">
              <a
                href="#"
                className="inline-block w-full sm:w-auto text-center bg-black text-white px-6 py-3 rounded-md uppercase text-sm font-medium hover:bg-gray-800 transition"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiscountCoupon;
