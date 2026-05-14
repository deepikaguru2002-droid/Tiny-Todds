import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message!");
    setFormData({ email: "", message: "" });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-600 mb-8 md:mb-10">
          Contact Us
        </h2>

        {/* FORM - RESPONSIVE */}
        <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-lg">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 md:p-4 rounded-xl border border-gray-300 outline-none focus:border-blue-500 mb-4 md:mb-6 text-sm md:text-base"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 md:p-4 rounded-xl border border-gray-300 outline-none focus:border-blue-500 mb-4 md:mb-6 text-sm md:text-base resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-3 md:py-4 rounded-2xl font-semibold hover:bg-gray-700 transition text-sm md:text-base"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}