import React from "react";
import { shoeImages } from "../../assets/images";

function AdidasParallax() {
    // Inline style for sneaker animation
    const sneakerAnimationStyle = {
        animation: "sneaker 3s cubic-bezier(0.25, 1, 0.5, 1) infinite alternate",
    };

    return (
        <div className="relative flex items-center justify-center bg-white overflow-hidden px-4">
            {/* Sneaker animation CSS */}
            <style>{`
            @keyframes sneaker {
            0%, 10% { 
                transform: translate(100vw, 0) rotate(15deg);
            }
            90%, 100% { 
                transform: translate(-4vw, -5vw) rotate(-30deg);
            }
            }
        `}</style>

            {/* Main Text */}
            <span className="absolute font-mono italic text-[15vw] leading-none text-black z-10">
                PUMA
            </span>

            {/* Stroke Outline */}
            <span
                className="absolute font-mono italic text-[15vw] leading-none text-transparent z-20"
                style={{ WebkitTextStroke: "0.15vw Black" }}
            >
                PUMA
            </span>

            {/* Animated Sneaker */}
            <div className="relative z-30">
                <img
                    src={shoeImages.men.img12}
                    alt="White Sneaker"
                    className="w-[50vw] max-w-md filter drop-shadow-2xl"
                    style={sneakerAnimationStyle}
                />
            </div>
        </div>
    );
}

export default AdidasParallax;
