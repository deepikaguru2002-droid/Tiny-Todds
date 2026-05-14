import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DashboardCard from '../components/Dashboard/DashboardCard';
import UserProfile from '../components/Dashboard/UserProfile';

export default function DashboardPage() {
  const [user] = useState({
    name: 'Deepika',
    email: 'Deepikaguru2002@gmail.com',
    phone: '9876543210',
    appointments: 5,
    joinDate: '2024-01-15',
    role: 'Patient',
  });


  const [appointments] = useState([
    {
      id: 1,
      type: 'Speech Therapy',
      date: '2024-05-20',
      time: '10:00 AM',
      therapist: 'Dr. Sarah',
      status: 'Completed',
    },
    {
      id: 2,
      type: 'Occupational Therapy',
      date: '2024-05-25',
      time: '2:00 PM',
      therapist: 'Dr. Mike',
      status: 'Upcoming',
    },
    {
      id: 3,
      type: 'Physical Therapy',
      date: '2024-06-01',
      time: '11:00 AM',
      therapist: 'Dr. Emma',
      status: 'Upcoming',
    },
  ]);

  // Sample stats data
  const stats = [
    { label: 'Total Appointments', value: 5, icon: '📅', color: 'bg-blue-100' },
    { label: 'Completed', value: 2, icon: '✅', color: 'bg-green-100' },
    { label: 'Upcoming', value: 3, icon: '🔔', color: 'bg-yellow-100' },
    { label: 'Therapists', value: 3, icon: '👨‍⚕️', color: 'bg-purple-100' },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Dashboard</h1>
            <p className="text-gray-600">Welcome to your therapy center dashboard</p>
          </div>

          {/* User Profile Section */}
          <div className="mb-8">
            <UserProfile 
              user={user}
              onEditClick={() => alert('Edit profile functionality')}
            />
          </div>

          {/* Stats Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <DashboardCard
                  key={index}
                  label={stat.label}
                  value={stat.value}
                  icon={stat.icon}
                  bgColor={stat.color}
                />
              ))}
            </div>
          </div>

          {/* Appointments Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Appointments</h2>
            <div className="space-y-4">
              {appointments.map(appointment => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  onCancel={() => alert(`Cancelled appointment ${appointment.id}`)}
                  onReschedule={() => alert(`Reschedule appointment ${appointment.id}`)}
                />
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

// Appointment Card Component (using props)
function AppointmentCard({ appointment, onCancel, onReschedule }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{appointment.type}</h3>
          <p className="text-gray-600">{appointment.therapist}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
          appointment.status === 'Completed' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {appointment.status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-600">Date</p>
          <p className="font-semibold text-gray-800">{appointment.date}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Time</p>
          <p className="font-semibold text-gray-800">{appointment.time}</p>
        </div>
      </div>

      {appointment.status === 'Upcoming' && (
        <div className="flex gap-2">
          <button
            onClick={onReschedule}
            className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Reschedule
          </button>
          <button
            onClick={onCancel}
            className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}