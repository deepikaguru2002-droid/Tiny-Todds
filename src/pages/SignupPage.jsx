import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Toast from '../components/Toast';
import { registerUser } from '../utils/auth';

export default function SignupPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
            setError('Please fill in all fields!');
            setLoading(false);
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match!');
            setLoading(false);
            return;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters!');
            setLoading(false);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Please enter a valid email!');
            setLoading(false);
            return;
        }

        const result = registerUser(formData.email, formData.password, formData.fullName);

        if (result.success) {
            // ✅ STYLED SUCCESS TOAST
            setToast({ message: 'Account created! Redirecting to login...', type: 'success' });
            setTimeout(() => navigate('/login'), 1500);
        } else {
            // ✅ STYLED ERROR TOAST
            setError(result.message);
            setToast({ message: result.message, type: 'error' });
        }

        setLoading(false);
    };

    return (
        <>
            <Navbar />
            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

            <main className="min-h-screen bg-gray-50 py-8 md:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto">

                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition font-semibold mb-6"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </button>

                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Create Account</h1>
                        <p className="text-gray-600 text-center mb-6">Sign up to book appointments</p>

                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition"
                                />
                            </div>

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

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Create a password (min 6 characters)"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm your password"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition font-semibold disabled:opacity-50"
                            >
                                {loading ? 'Creating Account...' : 'Sign Up'}
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <span className="text-gray-600">Already have an account?</span>
                            <Link
                                to="/login"
                                className="block text-blue-600 hover:text-blue-700 font-semibold transition mt-2"
                            >
                                Login Here
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}