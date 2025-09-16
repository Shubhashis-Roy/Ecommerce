"use client";

import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Newsletter Section */}
      <div className="bg-yellow-500 text-black px-6 md:px-20 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">Subscribe Our Newsletter</h2>
          <p>
            Get E-mail updates about our latest shop and receive{" "}
            <span className="text-blue-700 font-semibold">special offers.</span>
          </p>
        </div>
        <div className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-l-md w-full md:w-72 outline-none"
          />
          <button className="bg-black text-white px-5 rounded-r-md">
            Subscribe
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#001f3f] text-white px-6 md:px-20 py-16 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo & Description */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="logo" width={40} height={40} />
            <span className="text-yellow-500 font-bold text-xl">eshopi</span>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet Senectus mattis fermentum mauris orci sit enim. Orci duis.
          </p>
          <p className="text-sm">From Google Play Or App Store</p>
          <div className="flex gap-2 mt-2">
            <Image src="/images/google-play.png" alt="Google Play" width={120} height={40} />
            <Image src="/images/app-store.png" alt="App Store" width={120} height={40} />
          </div>
        </div>

        {/* Customer Service */}
        <div className="space-y-2">
          <h3 className="font-bold">CUSTOMER SERVICE</h3>
          <ul className="space-y-1 text-sm">
            <li>Contact us</li>
            <li>Payments & Returns</li>
            <li>Shipping & Returns</li>
            <li>Terms and conditions</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="space-y-2">
          <h3 className="font-bold">USEFUL LINKS</h3>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Shop Products</li>
            <li>My Cart</li>
            <li>Order Tracking</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Categories */}
        <div className="space-y-2">
          <h3 className="font-bold">CATEGORIES</h3>
          <ul className="space-y-1 text-sm">
            <li>Computer & Laptop</li>
            <li>Television & Video</li>
            <li>Headphones</li>
            <li>Smartphones</li>
            <li>Camera & Photos</li>
          </ul>
        </div>

        {/* Information */}
        <div className="space-y-2">
          <h3 className="font-bold">INFORMATION</h3>
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>+12064812559</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <span>info@demo.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>4140 Alfred Drive, New York</span>
            </div>
          </div>
          <p className="mt-2">Follow Us</p>
          <div className="flex gap-2 mt-1">
            <FaFacebookF className="p-2 bg-gray-700 rounded-md" />
            <FaTwitter className="p-2 bg-gray-700 rounded-md" />
            <FaInstagram className="p-2 bg-gray-700 rounded-md" />
            <FaTelegramPlane className="p-2 bg-gray-700 rounded-md" />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#001f3f] border-t border-gray-700 px-6 md:px-20 py-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">Copyright © 2025. All rights reserved</p>
        <div className="flex gap-2 mt-2 md:mt-0">
          <Image src="/images/visa.png" alt="Visa" width={40} height={25} />
          <Image src="/images/mastercard.png" alt="MasterCard" width={40} height={25} />
          <Image src="/images/apple-pay.png" alt="Apple Pay" width={40} height={25} />
          <Image src="/images/google-pay.png" alt="GPay" width={40} height={25} />
          <Image src="/images/paypal.png" alt="PayPal" width={40} height={25} />
        </div>
      </div>
    </footer>
  );
}
