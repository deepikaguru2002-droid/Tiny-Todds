import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">

          {/* LOGO - RESPONSIVE */}
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-600">
            <Link to="/">Tiny Therapy Care</Link>
          </h1>

          {/* HAMBURGER MENU - MOBILE ONLY */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* DESKTOP MENU - HIDDEN ON MOBILE */}
          <ul className="hidden md:flex gap-4 lg:gap-8 font-medium text-sm lg:text-base">
            <li>
              <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-600 transition">About</a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-600 transition">Services</a>
            </li>
            <li>
              <Link to="/appointment" className="hover:text-blue-600 transition">Appointment</Link>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
            </li>
            <li>
              <Link to="/login" className="bg-gray-600 text-white px-4 py-2 rounded-xl hover:bg-gray-700 transition">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* MOBILE MENU - ONLY SHOWS WHEN OPEN */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <ul className="space-y-3 flex flex-col">
              <li>
                <Link to="/" className="block hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Home</Link>
              </li>
              <li>
                <a href="#about" className="block hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>About</a>
              </li>
              <li>
                <a href="#services" className="block hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Services</a>
              </li>
              <li>
                <Link to="/appointment" className="block hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Appointment</Link>
              </li>
              <li>
                <a href="#contact" className="block hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Contact</a>
              </li>
              <li>
                <Link to="/login" className="block w-full text-center bg-gray-600 text-white px-4 py-2 rounded-xl hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-blue-600">Sign Up</Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-blue-600">Login</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}