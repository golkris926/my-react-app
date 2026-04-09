// components/Loader.jsx
import React from 'react';

const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <div className="text-center">
                {/* Simple rotating circle */}
                <div className="w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin mx-auto mb-4"></div>

                {/* Website name */}
                <h2 className="text-2xl font-semibold text-black mb-2">
                    <div className="text-center">
                        {/* Top Text */}
                        <span className="block text-3xl font-extrabold tracking-wide text-black">
                            URBAN
                        </span>

                        {/* Middle Text */}
                        <span className="block text-3xl font-extrabold text-transparent [-webkit-text-stroke:2px_black]">
                            STRIDE
                        </span>

                        {/* Bottom Text */}
                        <span className="block text-lg font-medium text-gray-800">
                            online store
                        </span>
                    </div>

                </h2>
            </div>
        </div>
    );
};

export default Loader;