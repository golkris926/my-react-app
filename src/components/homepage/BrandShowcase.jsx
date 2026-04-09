import React from 'react';

const shoeCompanies = {
  row1: [
    { name: 'Adidas', logo: 'https://logoeps.com/wp-content/uploads/2012/11/adidas-vector-logo.png' },
    { name: 'Puma', logo: 'https://logoeps.com/wp-content/uploads/2013/03/puma-vector-logo.png' },
    { name: 'Reebok', logo: 'https://logoeps.com/wp-content/uploads/2013/03/reebok-vector-logo.png' },
    { name: 'Converse', logo: 'https://logoeps.com/wp-content/uploads/2013/03/converse-vector-logo.png' },
    { name: 'Vans', logo: 'https://logoeps.com/wp-content/uploads/2013/03/vans-vector-logo.png' },
    { name: 'Adidas', logo: 'https://logoeps.com/wp-content/uploads/2012/11/adidas-vector-logo.png' },
    { name: 'Puma', logo: 'https://logoeps.com/wp-content/uploads/2013/03/puma-vector-logo.png' },
    { name: 'Reebok', logo: 'https://logoeps.com/wp-content/uploads/2013/03/reebok-vector-logo.png' },
    { name: 'Converse', logo: 'https://logoeps.com/wp-content/uploads/2013/03/converse-vector-logo.png' },
    { name: 'Vans', logo: 'https://logoeps.com/wp-content/uploads/2013/03/vans-vector-logo.png' },
  ],
  row2: [
    { name: 'New Balance', logo: 'https://logoeps.com/wp-content/uploads/2013/03/new-balance-vector-logo.png' },
    { name: 'Jordan', logo: 'https://logoeps.com/wp-content/uploads/2013/03/jordan-vector-logo.png' },
    { name: 'Under Armour', logo: 'https://logoeps.com/wp-content/uploads/2013/03/under-armour-vector-logo.png' },
    { name: 'Skechers', logo: 'https://logoeps.com/wp-content/uploads/2013/03/skechers-vector-logo.png' },
    { name: 'Fila', logo: 'https://logoeps.com/wp-content/uploads/2013/03/fila-vector-logo.png' },
    { name: 'Asics', logo: 'https://logoeps.com/wp-content/uploads/2013/03/asics-vector-logo.png' },
    { name: 'New Balance', logo: 'https://logoeps.com/wp-content/uploads/2013/03/new-balance-vector-logo.png' },
    { name: 'Jordan', logo: 'https://logoeps.com/wp-content/uploads/2013/03/jordan-vector-logo.png' },
    { name: 'Under Armour', logo: 'https://logoeps.com/wp-content/uploads/2013/03/under-armour-vector-logo.png' },
    { name: 'Skechers', logo: 'https://logoeps.com/wp-content/uploads/2013/03/skechers-vector-logo.png' },
    { name: 'Fila', logo: 'https://logoeps.com/wp-content/uploads/2013/03/fila-vector-logo.png' },
    { name: 'Asics', logo: 'https://logoeps.com/wp-content/uploads/2013/03/asics-vector-logo.png' },
  ],
};

const LogoItem = ({ company }) => (
  <div className="flex-shrink-0 w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48 mx-3">
    <img  
      src={company.logo}
      alt={`${company.name} logo`}
      className="h-10 sm:h-12 md:h-16 lg:h-20 w-full object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition duration-300"
      onError={(e) => {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'block';
      }}
    />
    <div className="hidden text-black font-bold text-sm sm:text-base md:text-lg text-center">
      {company.name}
    </div>
  </div>
);

const MarqueeRow = ({ companies, reverse = false }) => (
  <div className="relative w-full overflow-hidden py-4">
    <div className="absolute left-0 top-0 w-12 sm:w-16 h-full bg-gradient-to-r from-white to-transparent z-10" />
    <div className="flex">
      <div className={`flex animate-marquee ${reverse ? 'animate-marquee-reverse' : ''}`}>
        {companies.map((company, i) => <LogoItem key={`first-${i}`} company={company} />)}
      </div>
      <div className={`flex animate-marquee ${reverse ? 'animate-marquee-reverse' : ''}`}>
        {companies.map((company, i) => <LogoItem key={`second-${i}`} company={company} />)}
      </div>
    </div>
    <div className="absolute right-0 top-0 w-12 sm:w-16 h-full bg-gradient-to-l from-white to-transparent z-10" />
  </div>
);

function BrandShowcase() {
  return (
    <div className="bg-white mb-5">
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            Stride with the Best
          </h2>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
            Our sneaker showcase platform has reached over{' '}
            <span className="font-semibold text-black relative">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-transparent [-webkit-text-stroke:1.5px_gray]">
                500 Million Views
              </span>
            </span>{' '}
            globally! Join the sneaker community and experience the difference yourself.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 md:gap-12 mt-6 sm:mt-8">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-black">50+</div>
              <div className="text-gray-500 text-sm sm:text-base">Brands</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-black">10M+</div>
              <div className="text-gray-500 text-sm sm:text-base">Customers</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-black">99.9%</div>
              <div className="text-gray-500 text-sm sm:text-base">Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <MarqueeRow companies={shoeCompanies.row1} reverse={false} />
          <MarqueeRow companies={shoeCompanies.row2} reverse={true} />
        </div>
      </section>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }

          @keyframes marquee-reverse {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0%); }
          }

          .animate-marquee {
            animation: marquee 25s linear infinite;
          }

          .animate-marquee-reverse {
            animation: marquee-reverse 25s linear infinite;
          }

          @media (max-width: 768px) {
            .animate-marquee { animation-duration: 20s; }
            .animate-marquee-reverse { animation-duration: 20s; }
          }

          @media (max-width: 480px) {
            .animate-marquee { animation-duration: 15s; }
            .animate-marquee-reverse { animation-duration: 15s; }
          }
        `}
      </style>
    </div>
  );
}

export default BrandShowcase;
