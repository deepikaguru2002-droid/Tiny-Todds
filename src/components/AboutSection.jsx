import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-600 mb-4 md:mb-6">
          About Us
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Tiny Therapy Care helps children grow confidently with professional support and compassionate care.
        </p>
      </div>
    </section>
  );
}