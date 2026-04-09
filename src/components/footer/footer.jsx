import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-10 px-5 sm:px-10 select-none w-full">
      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
        
        {/* Info */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900 text-lg sm:text-xl">Info</h3>
          <ul className="space-y-1 text-sm sm:text-base">
            {['Track Your Order', 'Our Blog', 'Privacy policy', 'Shipping', 'Contact Us', 'Help', 'Community'].map((item, i) => (
              <li key={i} className="cursor-pointer hover:text-gray-500 transition-colors">{item}</li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900 text-lg sm:text-xl">About</h3>
          <ul className="space-y-1 text-sm sm:text-base">
            {['History', 'Our Team', 'Services', 'Company', 'Manufacture', 'Wholesale', 'Retail'].map((item, i) => (
              <li key={i} className="cursor-pointer hover:text-gray-500 transition-colors">{item}</li>
            ))}
          </ul>
        </div>

        {/* Women Shoes */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900 text-lg sm:text-xl">Women Shoes</h3>
          <ul className="space-y-1 text-sm sm:text-base">
            {['Track Your Order', 'Our Blog', 'Privacy policy', 'Shipping', 'Contact Us', 'Help', 'Community'].map((item, i) => (
              <li key={i} className="cursor-pointer hover:text-gray-500 transition-colors">{item}</li>
            ))}
          </ul>
        </div>

        {/* Popular */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900 text-lg sm:text-xl">Popular</h3>
          <ul className="space-y-1 text-sm sm:text-base">
            {['Prices Drop', 'New Products', 'Best Sales', 'Stores', 'Login', 'Cart'].map((item, i) => (
              <li key={i} className="cursor-pointer hover:text-gray-500 transition-colors">{item}</li>
            ))}
          </ul>
        </div>

        {/* Mens Collection */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900 text-lg sm:text-xl">Mens Collection</h3>
          <ul className="space-y-1 text-sm sm:text-base">
            {['Delivery', 'About Us', 'Shoes', 'Contact Us'].map((item, i) => (
              <li key={i} className="cursor-pointer hover:text-gray-500 transition-colors">{item}</li>
            ))}
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-900 text-lg sm:text-xl">Get In Touch</h3>
          <p className="text-sm sm:text-base leading-relaxed max-w-[250px]">
            Stylish Online Store<br />123 Main Street, Toulouse - France.
            <br />
            <span>Call us: </span>
            <a
              href="tel:+33800456789987"
              className="text-gray-500 font-semibold hover:underline"
            >
              (+33) 800 456 789-987
            </a>
            <br />
            <a
              href="mailto:contact@yourwebsite.com"
              className="text-black font-bold hover:underline"
            >
              contact@yourwebsite.com
            </a>
          </p>
        </div>
      </div>

      {/* Footer bottom text */}
      <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} URBAN STRIDE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
