import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { loginUser } from '../utils/auth';

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate inputs
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields!');
      setLoading(false);
      return;
    }

    // Attempt login
    const result = loginUser(formData.email, formData.password);

    if (result.success) {
      alert(result.message);
      navigate('/dashboard');
    } else {
      setError(result.message);
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-8 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">

          {/* BACK BUTTON */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition font-semibold mb-6"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>

          {/* LOGIN FORM */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Login</h1>
            <p className="text-gray-600 text-center mb-6">Sign in to your account</p>

            {/* ERROR MESSAGE */}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* EMAIL INPUT */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition"
                />
              </div>

              {/* PASSWORD INPUT */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition font-semibold disabled:opacity-50"
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>

            {/* FORGOT PASSWORD & SIGNUP LINKS */}
            <div className="mt-6 space-y-3 text-center">
              <Link
                to="/forgot-password"
                className="block text-blue-600 hover:text-blue-700 font-semibold transition"
              >
                Forgot Password?
              </Link>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Don't have an account?</span>
                <Link
                  to="/signup"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}