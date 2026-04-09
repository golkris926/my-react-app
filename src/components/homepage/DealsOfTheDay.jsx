import React, { useState, useEffect } from "react";
import { Heart, Eye, ShoppingCart, Clock } from "lucide-react";
import { shoeImages } from "../../assets/images";

const products = [
  {
    id: 1,
    title: "Nike",
    price: "$20.00",
    originalPrice: "$35.00",
    img: shoeImages.men.img21,
    link: "/products/mens-quest",
    desc: "Premium quality men's apparel designed for comfort and style. Perfect for everyday wear with durable materials.",
    badge: "New",
    discount: "43%",
    endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
  },
  {
    id: 2,
    title: "Nike",
    price: "$20.00",
    originalPrice: "$30.00",
    img: shoeImages.men.img22,
    link: "/products/revolution",
    desc: "Revolutionary design meets exceptional comfort. A must-have addition to your wardrobe collection.",
    badge: "Hot",
    discount: "33%",
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
  },
];

function CountdownTimer({ endTime }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const isExpired = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  return (
    <div className="flex items-center justify-center gap-2 text-sm">
      <Clock className="w-4 h-4" />
      {isExpired ? (
        <span className="text-red-600 font-semibold">Expired</span>
      ) : (
        <span className="font-mono">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </span>
      )}
    </div>
  );
}

function DealsOfTheDay() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showQuickView, setShowQuickView] = useState(null);

  const addToCart = (product) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    
    // Show feedback
    const button = document.querySelector(`#cart-btn-${product.id}`);
    const originalText = button.innerHTML;
    button.innerHTML = '✓ Added!';
    button.classList.add('bg-green-600');
    setTimeout(() => {
      button.innerHTML = originalText;
      button.classList.remove('bg-green-600');
    }, 1500);
  };  

  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      }
      return [...prev, productId];
    });
  };

  const openQuickView = (product) => {
    setShowQuickView(product);
  };

  const closeQuickView = () => {
    setShowQuickView(null);
  };

  return (
    <section className=" bg-gray-100 py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            DEALS OF THE DAY
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Limited time offers on premium products. Don't miss out on these incredible deals!
          </p>
          <div className="w-24 h-1 bg-black mx-auto mt-6"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Product Image Section */}
              <div className="relative group">
                <div className="aspect-square md:aspect-[4/3] overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.badge && (
                    <span className="bg-black text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      -{product.discount}
                    </span>
                  )}
                </div>

                {/* Quick Action Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openQuickView(product)}
                    className="bg-white text-black px-6 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black hover:text-white"
                  >
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Info Section */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-black mb-2 hover:text-gray-600 cursor-pointer transition-colors">
                    {product.title}
                  </h3>
                  
                  {/* Price Section */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-black text-black">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">{product.desc}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <button
                    id={`cart-btn-${product.id}`}
                    onClick={() => addToCart(product)}
                    className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 hover:shadow-lg flex-1 justify-center min-w-0"
                  >
                    <ShoppingCart className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">Add to Cart</span>
                  </button>
                  
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 hover:shadow-lg ${
                      wishlist.includes(product.id)
                        ? 'bg-red-50 border-red-200 text-red-600'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <Heart 
                      className={`w-5 h-5 ${wishlist.includes(product.id) ? 'fill-current' : ''}`} 
                    />
                  </button>
                  
                  <button
                    onClick={() => openQuickView(product)}
                    className="p-3 rounded-lg border-2 border-gray-200 text-gray-600 hover:border-gray-300 transition-all duration-200 hover:shadow-lg"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>

                {/* Countdown Timer */}
                <div className="bg-gray-50 rounded-lg p-4 text-center border-2 border-dashed border-gray-200">
                  <h4 className="text-sm font-bold text-black mb-2 uppercase tracking-wide">
                    Hurry Up! Offer Ends In:
                  </h4>
                  <CountdownTimer endTime={product.endTime} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick View Modal */}
        {showQuickView && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={closeQuickView}
                  className="absolute top-4 right-4 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors z-10"
                >
                  ×
                </button>
                
                <div className="aspect-square">
                  <img
                    src={showQuickView.img}
                    alt={showQuickView.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{showQuickView.title}</h3>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-black text-black">{showQuickView.price}</span>
                    {showQuickView.originalPrice && (
                      <span className="text-xl text-gray-500 line-through">{showQuickView.originalPrice}</span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{showQuickView.desc}</p>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        addToCart(showQuickView);
                        closeQuickView();
                      }}
                      className="flex-1 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => toggleWishlist(showQuickView.id)}
                      className={`px-4 py-3 rounded-lg border-2 transition-colors ${
                        wishlist.includes(showQuickView.id)
                          ? 'bg-red-50 border-red-200 text-red-600'
                          : 'border-gray-200 text-gray-600'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${wishlist.includes(showQuickView.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default DealsOfTheDay;