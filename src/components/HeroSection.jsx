import React from "react";
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-r from-gray-100 to-blue-100 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">

          {/* TEXT SECTION - RESPONSIVE */}
          <div className="order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-gray-800">
              Caring Therapy Center for Children
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
              Therapy support with love and care.
            </p>
            <Link
              to="/appointment"
              className="inline-block bg-gray-600 text-white px-6 sm:px-8 py-3 md:py-4 rounded-2xl hover:bg-gray-700 transition text-sm sm:text-base md:text-lg font-semibold"
            >
              Book Appointment
            </Link>
          </div>

          {/* IMAGE SECTION - RESPONSIVE */}
          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop"
              alt="therapy"
              className="rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl w-full h-64 sm:h-72 md:h-96 lg:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}