import React from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="w-full text-center h-auto bottom-0 bg-footerBackground text-footerText p-4">
      {/* Footer Main Row */}
      <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8 space-y-4 md:space-y-0">
        {/* Subscription Section */}
        <div className="flex flex-col items-center md:items-start ">
          <h5 className="font-bold text-white">Subscribe to our Newsletter</h5>
          <form className="flex mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md bg-white text-[#FFFFFF] outline-none"
            />
            <button
              type="submit"
              className="p-2 rounded-r-md bg-[#00594C] text-[#FFFFFF] font-bold"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Copyright Section */}
        <div className="text-center bg-[#00332A] text-[#FFFFFF] p-2 rounded-md">
          © QuranBliss 2024. All Rights Reserved.
        </div>

        {/* Contact Section */}
        <div className="flex items-center gap-6">
          {/* WhatsApp Contact */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#FFFFFF]"
          >
            <FaWhatsapp size={24} />
            <span>+123 456 7890</span>
          </a>
          
          {/* Email Contact */}
          <a
            href="mailto:quranbliss@gmail.com"
            className="flex items-center gap-2 text-[#FFFFFF]"
          >
            <FaEnvelope size={24} />
            <span>quranbliss@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
