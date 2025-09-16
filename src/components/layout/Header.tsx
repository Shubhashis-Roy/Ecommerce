"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaBars,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSync,
  FaAngleDown,
  FaChevronDown,
  FaChevronUp,
  FaPhone,
} from "react-icons/fa";
import HeaderSearchBar from "./header/HeaderSeachBar";

export default function Header() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };

  return (
    <header className="w-full shadow">
      {/* Top Bar */}
      <div className="bg-[#041E42] text-white text-[0.6rem] sm:text-xs px-2 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2">
        <div className="flex items-center justify-center sm:justify-between">
          <div className="hidden sm:flex items-center gap-0.5 sm:gap-1">
            <div className="flex items-center gap-0.5 sm:gap-1 px-1 sm:px-2">
              <FaEnvelope style={{ color: "#FAB700", fontSize: "0.75rem" }} />
              <span>Info@Demo.Com</span>
            </div>
            <span className="px-0.5 sm:px-1">|</span>
            <div className="flex items-center gap-0.5 sm:gap-1 px-1 sm:px-2">
              <FaMapMarkerAlt
                style={{ color: "#FAB700", fontSize: "0.75rem" }}
              />
              <Link href="#" className="hover:underline">
                Track Order
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <select className="bg-[#041E42] text-white border-none outline-none px-1 sm:px-2 text-[0.6rem] sm:text-xs">
              <option>USD</option>
              <option>EUR</option>
              <option>INR</option>
            </select>
            <span className="px-0.5 sm:px-1">|</span>
            <select className="bg-[#041E42] text-white border-none outline-none px-1 sm:px-2 text-[0.6rem] sm:text-xs">
              <option>English</option>
              <option>German</option>
              <option>French</option>
            </select>
            <span className="px-0.5 sm:px-1">|</span>
            <div className="flex items-center gap-0.5 sm:gap-1 px-1 sm:px-2 text-[0.6rem] sm:text-xs">
              <FaUser style={{ color: "#FAB700", fontSize: "0.75rem" }} />
              <Link href="/account" className="hover:underline">
                My Account
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#041E42] py-2 sm:py-4 flex items-center px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img
              src="/eshop_logo.webp"
              alt="Logo"
              className="h-6 sm:h-8 md:h-10 w-auto"
            />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white"
          >
            <FaBars size={20} />
          </button>
        </div>

        {/* Search Bar + Icons (Desktop & Tablet only) */}
        <div className="hidden md:flex flex-1 items-center justify-between ml-6">
          <div className="flex-1 max-w-2xl mr-4">
            <HeaderSearchBar />
          </div>
          <div className="flex items-center gap-4 text-white text-sm">
            <div className="relative flex items-center">
              <FaSync className="text-white text-lg md:text-xl" />
              <span className="absolute -top-1 right-0 bg-[#FAB700] text-white rounded-full w-4 h-4 flex items-center justify-center text-[0.65rem]">
                0
              </span>
            </div>
            <div className="relative flex items-center">
              <FaHeart className="text-white text-lg md:text-xl" />
              <span className="absolute -top-1 right-0 bg-[#FAB700] text-white rounded-full w-4 h-4 flex items-center justify-center text-[0.65rem]">
                0
              </span>
            </div>
            <div className="relative flex items-center">
              <FaShoppingCart className="text-white text-lg md:text-xl" />
              <span className="absolute -top-1 right-0 bg-[#FAB700] text-white rounded-full w-4 h-4 flex items-center justify-center text-[0.65rem]">
                0
              </span>
            </div>
            <div className="flex flex-col text-center">
              <span className="text-xs">Total</span>
              <span className="text-xs">$10</span>
            </div>
          </div>
        </div>
      </div>

      {/* Categories + Navigation Menu + Phone Contact */}
      <div className="bg-[#041E42] text-white hidden md:flex items-center px-4 sm:px-6 md:px-10 lg:px-16 py-1 sm:py-2 relative">
        {/* Left - Categories Dropdown */}
        <div className="relative z-20">
          <button
            onClick={() => setCategoryOpen(!categoryOpen)}
            className="bg-yellow-400 text-black px-6 sm:px-4 py-3 sm:py-4 flex items-center justify-between text-base sm:text-lg font-medium w-full max-w-md"
          >
            {/* Left side: hamburger + text */}
            <div className="flex items-center gap-1 sm:gap-2">
              <FaBars className="text-lg sm:text-xl" />
              <span>All Categories</span>
            </div>

            {/* Right side: arrow */}
            {categoryOpen ? (
              <FaChevronUp className="text-sm sm:text-base ml-9" />
            ) : (
              <FaChevronDown className="text-sm sm:text-base ml-9" />
            )}
          </button>

          {/* Dropdown List */}
          {categoryOpen && (
            <ul className="absolute top-full left-0 bg-white text-black shadow rounded mt-1 w-32 sm:w-48 z-20">
              <li className="px-2 sm:px-4 py-1 sm:py-2 hover:bg-gray-100 cursor-pointer text-[0.7rem] sm:text-base">
                Electronics
              </li>
              <li className="px-2 sm:px-4 py-1 sm:py-2 hover:bg-gray-100 cursor-pointer text-[0.7rem] sm:text-base">
                Fashion
              </li>
              <li className="px-2 sm:px-4 py-1 sm:py-2 hover:bg-gray-100 cursor-pointer text-[0.7rem] sm:text-base">
                Home & Garden
              </li>
              <li className="px-2 sm:px-4 py-1 sm:py-2 hover:bg-gray-100 cursor-pointer text-[0.7rem] sm:text-base">
                Sports
              </li>
            </ul>
          )}
        </div>

        {/* Center - Navigation Menu */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
          <nav>
            <ul className="flex flex-wrap gap-4">
              {/* Home */}
              <li className="relative group">
                <div className="flex items-center">
                  <Link
                    href="/"
                    onClick={() => handleLinkClick("/")}
                    className={`text-[0.7rem] sm:text-base hover:text-yellow-400 ${
                      activeLink === "/" || activeLink.startsWith("/home")
                        ? "text-yellow-400"
                        : "text-white"
                    }`}
                  >
                    Home
                  </Link>
                  <FaAngleDown className="ml-3 text-[0.7rem] sm:text-base" />
                </div>
                {(activeLink === "/" || activeLink.startsWith("/home")) && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400" />
                )}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                <ul className="absolute top-full left-0 bg-white text-black shadow rounded mt-1 w-32 sm:w-48 z-20 hidden group-hover:block">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link
                      href="/home1"
                      onClick={() => handleLinkClick("/home1")}
                    >
                      Home 1
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link
                      href="/home2"
                      onClick={() => handleLinkClick("/home2")}
                    >
                      Home 2
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link
                      href="/home3"
                      onClick={() => handleLinkClick("/home3")}
                    >
                      Home 3
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Shop */}
              <li className="relative group">
                <div className="flex items-center">
                  <Link
                    href="/shop"
                    onClick={() => handleLinkClick("/shop")}
                    className={`text-[0.7rem] sm:text-base hover:text-yellow-400 ${
                      activeLink === "/shop" || activeLink.startsWith("/shop")
                        ? "text-yellow-400"
                        : "text-white"
                    }`}
                  >
                    Shop
                  </Link>
                  <FaAngleDown className="ml-3 text-[0.7rem] sm:text-base" />
                </div>
                {(activeLink === "/shop" || activeLink.startsWith("/shop")) && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400" />
                )}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                <ul className="absolute top-full left-0 bg-white text-black shadow rounded mt-1 w-32 sm:w-48 z-20 hidden group-hover:block">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link
                      href="/shop/men"
                      onClick={() => handleLinkClick("/shop/men")}
                    >
                      Men
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link
                      href="/shop/women"
                      onClick={() => handleLinkClick("/shop/women")}
                    >
                      Women
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link
                      href="/shop/kids"
                      onClick={() => handleLinkClick("/shop/kids")}
                    >
                      Kids
                    </Link>
                  </li>
                </ul>
              </li>

              {/* About */}
              <li className="relative group">
                <Link
                  href="/about"
                  onClick={() => handleLinkClick("/about")}
                  className={`text-[0.7rem] sm:text-base hover:text-yellow-400 ${
                    activeLink === "/about" ? "text-yellow-400" : "text-white"
                  }`}
                >
                  About
                </Link>
                {activeLink === "/about" && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400" />
                )}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </li>

              {/* Contact */}
              <li className="relative group">
                <Link
                  href="/contact"
                  onClick={() => handleLinkClick("/contact")}
                  className={`text-[0.7rem] sm:text-base hover:text-yellow-400 ${
                    activeLink === "/contact" ? "text-yellow-400" : "text-white"
                  }`}
                >
                  Contact
                </Link>
                {activeLink === "/contact" && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400" />
                )}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </li>

              {/* Blog */}
              <li className="relative group">
                <div className="flex items-center">
                  <Link
                    href="/blog"
                    onClick={() => handleLinkClick("/blog")}
                    className={`text-[0.7rem] sm:text-base hover:text-yellow-400 ${
                      activeLink === "/blog" || activeLink.startsWith("/blog")
                        ? "text-yellow-400"
                        : "text-white"
                    }`}
                  >
                    Blog
                  </Link>
                  <FaAngleDown className="ml-3 text-[0.7rem] sm:text-base" />
                </div>
                {(activeLink === "/blog" || activeLink.startsWith("/blog")) && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400" />
                )}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                <ul className="absolute top-full left-0 bg-white text-black shadow rounded mt-1 w-32 sm:w-48 z-20 hidden group-hover:block">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link
                      href="/blog/news"
                      onClick={() => handleLinkClick("/blog/news")}
                    >
                      News
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link
                      href="/blog/reviews"
                      onClick={() => handleLinkClick("/blog/reviews")}
                    >
                      Reviews
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link
                      href="/blog/guides"
                      onClick={() => handleLinkClick("/blog/guides")}
                    >
                      Guides
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Pages */}
              <li className="relative group">
                <div className="flex items-center">
                  <Link
                    href="/pages"
                    onClick={() => handleLinkClick("/pages")}
                    className={`text-[0.7rem] sm:text-base hover:text-yellow-400 ${
                      activeLink === "/pages" || activeLink.startsWith("/pages")
                        ? "text-yellow-400"
                        : "text-white"
                    }`}
                  >
                    Pages
                  </Link>
                  <FaAngleDown className="ml-3 text-[0.7rem] sm:text-base" />
                </div>
                {(activeLink === "/pages" ||
                  activeLink.startsWith("/pages")) && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400" />
                )}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                <ul className="absolute top-full left-0 bg-white text-black shadow rounded mt-1 w-32 sm:w-48 z-20 hidden group-hover:block">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link
                      href="/pages/faq"
                      onClick={() => handleLinkClick("/pages/faq")}
                    >
                      FAQ
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link
                      href="/pages/privacy"
                      onClick={() => handleLinkClick("/pages/privacy")}
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Link
                      href="/pages/terms"
                      onClick={() => handleLinkClick("/pages/terms")}
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right - Phone Contact */}
        <div className="ml-auto flex items-start gap-2 text-[0.6rem] sm:text-sm">
          <FaPhone className="text-yellow-400 mt-1 text-xs sm:text-sm" />
          <div className="flex flex-col leading-tight">
            <span>Need Help? Call us:</span>
            <span className="text-yellow-400 mt-1">+84 2500 888 33</span>
          </div>
        </div>
      </div>

      {/* Sidebar for Small Screens (Opening from Right) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="w-64 bg-[#041E42] text-white h-full p-2 sm:p-4 shadow-lg transform transition-transform duration-300 ease-in-out fixed right-0 top-0"
            style={{
              transform: sidebarOpen ? "translateX(0)" : "translateX(100%)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white mb-2 sm:mb-4"
            >
              <FaBars size={16} />
            </button>
            <div className="mb-2 sm:mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-2 py-1 text-gray-800 bg-white rounded focus:outline-none"
              />
            </div>
            <ul className="space-y-1 sm:space-y-2">
              <li className="font-bold text-[0.8rem] sm:text-base">Home</li>
              <li>
                <Link
                  href="/home1"
                  className="block py-0.5 sm:py-1 text-[0.7rem] sm:text-base hover:text-yellow-400"
                >
                  Home 1
                </Link>
              </li>
              <li>
                <Link
                  href="/home2"
                  className="block py-0.5 sm:py-1 text-[0.7rem] sm:text-base hover:text-yellow-400"
                >
                  Home 2
                </Link>
              </li>
              <li>
                <Link
                  href="/home3"
                  className="block py-0.5 sm:py-1 text-[0.7rem] sm:text-base hover:text-yellow-400"
                >
                  Home 3
                </Link>
              </li>
              <hr className="my-1 sm:my-2 border-gray-600" />
              <li>
                <Link
                  href="/shop"
                  className="block py-0.5 sm:py-1 text-[0.7rem] sm:text-base hover:text-yellow-400"
                >
                  Shop
                </Link>
              </li>
              <hr className="my-1 sm:my-2 border-gray-600" />
              <li>
                <Link
                  href="/contact"
                  className="block py-0.5 sm:py-1 text-[0.7rem] sm:text-base hover:text-yellow-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
