import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Toast from '../components/Toast';
import { resetPassword } from '../utils/auth';

export default function ForgotPasswordPage() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(null);

    const handleVerifyEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (!email) {
            setError('Please enter your email!');
            setToast({ message: 'Please enter your email!', type: 'error' });
            setLoading(false);
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.find(u => u.email === email);

        if (!userExists) {
            setError('Email not found! Please check and try again.');
            setToast({ message: 'Email not found!', type: 'error' });
            setLoading(false);
            return;
        }

        setSuccess('Email verified! Now create a new password.');
        setToast({ message: 'Email verified! Create new password.', type: 'success' });
        setStep(2);
        setLoading(false);
    };

    const handleResetPassword = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (!newPassword || !confirmPassword) {
            setError('Please fill in all fields!');
            setToast({ message: 'Please fill all fields!', type: 'error' });
            setLoading(false);
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('Passwords do not match!');
            setToast({ message: 'Passwords do not match!', type: 'error' });
            setLoading(false);
            return;
        }

        if (newPassword.length < 6) {
            setError('Password must be at least 6 characters!');
            setToast({ message: 'Min 6 characters required!', type: 'error' });
            setLoading(false);
            return;
        }

        const result = resetPassword(email, newPassword);

        if (result.success) {
            setToast({ message: 'Password reset! Redirecting...', type: 'success' });
            setTimeout(() => navigate('/login'), 1500);
        } else {
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
                        onClick={() => navigate('/login')}
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition font-semibold mb-6"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Login
                    </button>

                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Reset Password</h1>
                        <p className="text-gray-600 text-center mb-6">
                            {step === 1 ? 'Enter your email to reset password' : 'Create a new password'}
                        </p>

                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                                {error}
                            </div>
                        )}

                        {success && (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
                                {success}
                            </div>
                        )}

                        {step === 1 && (
                            <form onSubmit={handleVerifyEmail} className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your registered email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition font-semibold disabled:opacity-50"
                                >
                                    {loading ? 'Verifying...' : 'Verify Email'}
                                </button>
                            </form>
                        )}

                        {step === 2 && (
                            <form onSubmit={handleResetPassword} className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">New Password</label>
                                    <input
                                        type="password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        placeholder="Create a new password"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
                                    <input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="Confirm your password"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition font-semibold disabled:opacity-50"
                                >
                                    {loading ? 'Resetting...' : 'Reset Password'}
                                </button>
                            </form>
                        )}

                        <div className="mt-6 text-center">
                            <Link
                                to="/login"
                                className="text-blue-600 hover:text-blue-700 font-semibold transition"
                            >
                                Back to Login
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}