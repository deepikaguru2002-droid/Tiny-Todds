import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AppointmentSection from '../components/AppointmentSection';
import Footer from '../components/Footer';

export default function AppointmentPage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="font-medium bg-gray-50 text-gray-800 min-h-screen">

        {/* BACK BUTTON */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition font-semibold text-sm md:text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
        </div>

        {/* APPOINTMENT FORM */}
        <AppointmentSection />
      </main>
      <Footer />
    </>
  );
}