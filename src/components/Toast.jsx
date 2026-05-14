import React, { useState, useEffect } from 'react';

export default function Toast({ message, type = 'success', duration = 3000, onClose }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onClose?.();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!isVisible) return null;

    const bgColor = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500',
        warning: 'bg-yellow-500',
    }[type];

    const icon = {
        success: '✓',
        error: '✕',
        info: 'ℹ',
        warning: '⚠',
    }[type];

    return (
        <div className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-slide-in z-50 max-w-sm`}>
            <span className="text-2xl font-bold">{icon}</span>
            <span className="text-base font-semibold">{message}</span>
            <button
                onClick={() => setIsVisible(false)}
                className="ml-auto text-xl hover:opacity-80 transition"
            >
                ×
            </button>
        </div>
    );
}