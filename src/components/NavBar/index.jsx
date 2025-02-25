import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <nav className="w-full bg-green-50 py-4">
    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-green-900">Ingreli</div>

      {/* Navigation Links (Hidden on small screens) */}
      <ul className="hidden md:flex space-x-6 text-green-800">
        <li><a href="#pricing" className="hover:text-green-600">Pricing</a></li>
        <li>
          <Link
            href={'/blog'} className="hover:text-green-600">
            Blog
          </Link>
        </li>
        <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
      </ul>

      {/* Buttons */}
      <div className="flex items-center space-x-4">
        {/* Mobile: Show Download App button */}
        <button className="md:hidden bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-green-700">
          Download App
        </button>

        {/* Desktop: Download App button */}
        <button className="hidden md:block bg-white text-green-800 font-semibold py-2 px-4 rounded-lg shadow hover:bg-green-100">
          Download App
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;

