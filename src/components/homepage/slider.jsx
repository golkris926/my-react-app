import React, { useState, useEffect } from "react";
import SliderButton from "../button/SliderButton";
import Button from "../button/Button";
import DotButton from "../button/DotButton";
import { shoeImages } from '../../assets/images';

const slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const slides = [
        {
            id: 1,
            type: "single",
            title: "Premium Men's Dress Shoes",
            image: shoeImages.men.img01,
            alt: "Men's stylish dress shoes",
        }, 
        {
            id: 2,
            type: "double",
            slides: [
                {
                    title: "Boys Sports Sneakers",
                    image: shoeImages.men.img02,
                    alt: "Boys athletic sneakers",
                }, 
                {
                    title: "Classic men’s evening shoes",
                    image: shoeImages.men.img03,
                    alt: "Classic men’s evening shoes",
                }
            ],
        },
        {
            id: 3,
            type: "single",
            title: "Modern men’s suit shoes",
            image: shoeImages.men.img04,
            alt: "Women's elegant high heels",
        }, 
        {
            id: 4,
            type: "double",
            slides: [
                {
                    title: "Men's Casual Loafers",
                    image: shoeImages.men.img05,
                    alt: "Men's casual loafers",
                }, 
                {
                    title: "Sharp men’s dress footwear",
                    image: shoeImages.men.img06,
                    alt: "Comfortable children's shoes",
                }
            ],
        },
        {
            id: 5,
            type: "single",
            title: "Boys Adventure Boots",
            image: shoeImages.men.img07,
            alt: "Boys outdoor boots",
        },
        {
            id: 6,
            type: "double",
            slides: [
                {
                    title: "Sleek & Stylish Men’s Shoes",
                    image: shoeImages.men.img08,
                    alt: "Women's athletic shoes",
                }, 
                {
                    title: "Elevate Your Formal Look",
                    image: shoeImages.men.img09,
                    alt: "Girls formal school shoes",
                }
            ],
        },
        // {
        //     id: 7,
        //     type: "single",
        //     title: "Men's Athletic Sneakers",
        //     image: shoeImages.men.img03,
        //     alt: "Men's sport sneakers",
        // },
        // {
        //     id: 8,
        //     type: "double",
        //     slides: [
        //         {
        //             title: "Women's Designer Sandals",
        //             image: shoeImages.women.img03,
        //             alt: "Women's summer sandals",
        //         }, 
        //         {
        //             title: "Boys Basketball Shoes",
        //             image: shoeImages.boys.img03,
        //             alt: "Boys basketball sneakers",
        //         }
        //     ],
        // }
    ];

    const totalSlides = slides.length;

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 3000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, totalSlides]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
    };

    const SingleSlide = ({ slide }) => (
        <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10"></div>
            <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12 z-20">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    {slide.title}
                </h2>
                <Button variant="primary">Shop Now</Button>
            </div>
        </div>
    );

    const DoubleSlide = ({ slideData }) => (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 h-96 md:h-[500px] lg:h-[600px]">
            {slideData.slides.map((slide, index) => (
                <div key={index} className="relative rounded-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10"></div>
                    <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
                            {slide.title}
                        </h3>
                        <Button variant="primary" className="px-4 py-2 text-xs">
                            Shop Now
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Main carousel container */}
            <div className="relative overflow-hidden rounded-2xl">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <div key={slide.id} className="w-full flex-shrink-0 px-2">
                            {slide.type === "single" ? (
                                <SingleSlide slide={slide} />
                            ) : (
                                <DoubleSlide slideData={slide} />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation buttons */}
            <SliderButton direction="left" onClick={prevSlide} ariaLabel="Previous slide" />
            <SliderButton direction="right" onClick={nextSlide} ariaLabel="Next slide" />

            {/* Dots indicator */}
            <div className="flex justify-center space-x-3 mt-8">
                {slides.map((_, index) => (
                    <DotButton
                        key={index}
                        active={index === currentSlide}
                        onClick={() => goToSlide(index)}
                        ariaLabel={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default slider;