import React from "react";

export default function ServicesSection() {
  const services = [
    { icon: "🗣️", title: "Speech Therapy", desc: "Improve communication skills" },
    { icon: "🤲", title: "Occupational Therapy", desc: "Daily living skill development" },
    { icon: "🏃", title: "Physical Therapy", desc: "Movement and mobility improvement" },
    { icon: "🧠", title: "Behavioral Therapy", desc: "Behavior management support" },
  ];

  return (
    <section
      id="services"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-600 mb-8 md:mb-14">
          Our Services
        </h2>

        {/* SERVICES GRID - RESPONSIVE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-gray-700 mb-2">{service.title}</h3>
              <p className="text-sm md:text-base text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}