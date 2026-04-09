import React, { useState } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaPinterestP,
    FaUser,
    FaShoppingCart,
    FaSearch,
} from "react-icons/fa";

function navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full shadow-sm">
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center text-sm px-4 md:px-10 py-2 border-b space-y-2 md:space-y-0">
                {/* Social Icons */}
                <div className="flex space-x-3 text-gray-500">
                    <FaFacebookF className="cursor-pointer hover:text-gray-500"/>
                    <FaInstagram className="cursor-pointer hover:text-gray-500" />
                    <FaYoutube className="cursor-pointer hover:text-gray-500" />
                    <FaPinterestP className="cursor-pointer hover:text-gray-500" />
                </div>

                {/* Offer Text */}
                <p className="text-center text-gray-900 text-[14px]">
                    <span className="font-semibold">Special Offer:</span> Free Shipping on all the orders above $100
                </p>

                {/* Contact/Cart/Login */}
                <div className="flex space-x-4 text-gray-800">
                    <button className="hover:text-gray-500">Contact</button>
                    <button className="hover:text-gray-500">Cart</button>
                    <button className="hover:text-gray-500">Login</button>
                </div>
            </div>


            {/* Main Navbar */}
            <nav className="border-b">
                {/* Top Navbar */}
                <div className="flex justify-between items-center px-4 md:px-10">
                    {/* Logo */}
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

                    {/* Menu (Desktop) */}
                    <div className="hidden md:flex space-x-6 font-medium text-gray-900">
                        <div className="cursor-pointer hover:text-gray-500">Home</div>
                        <div className="cursor-pointer hover:text-gray-500">Men</div>
                        <div className="cursor-pointer hover:text-gray-500">Women</div>
                        <div className="cursor-pointer hover:text-gray-500">Page</div>
                        <div className="cursor-pointer hover:text-gray-500">Shop</div>
                        <div className="cursor-pointer hover:text-gray-500">Sale</div>
                    </div>

                    {/* Icons (Desktop) */}
                    <div className="hidden md:flex items-center space-x-4 text-gray-900">
                        <FaUser className="cursor-pointer hover:text-gray-500" />
                        <FaShoppingCart className="cursor-pointer hover:text-gray-500" />
                        <FaSearch className="cursor-pointer hover:text-gray-500" />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-900 focus:outline-none text-2xl"
                    >
                        ☰
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {isOpen && (
                    <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white shadow-lg font-medium text-gray-900">
                        {/* Menu Items */}
                        <div className="cursor-pointer hover:text-gray-500">Home</div>
                        <div className="cursor-pointer hover:text-gray-500">Men</div>
                        <div className="cursor-pointer hover:text-gray-500">Women</div>
                        <div className="cursor-pointer hover:text-gray-500">Page</div>
                        <div className="cursor-pointer hover:text-gray-500">Shop</div>
                        <div className="cursor-pointer hover:text-gray-500">Sale</div>

                        {/* Icons (Mobile - Line by Line) */}
                        <div className="flex w-full justify-center space-x-3 text-gray-900 pt-4 border-t">
                            <FaUser className="cursor-pointer hover:text-gray-500" />
                            <FaShoppingCart className="cursor-pointer hover:text-gray-500" />
                            <FaSearch className="cursor-pointer hover:text-gray-500" />
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default navbar;