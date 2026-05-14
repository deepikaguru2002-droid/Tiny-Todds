import React, { useState } from "react";
import Toast from './Toast';

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    childName: "",
    parentName: "",
    phone: "",
    therapyType: "",
    dateTime: "",
    notes: "",
  });
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.childName || !formData.parentName || !formData.phone) {
      setToast({ message: 'Please fill required fields!', type: 'error' });
      return;
    }

    // Phone validation
    if (!/^\d{10}$/.test(formData.phone)) {
      setToast({ message: 'Phone must be 10 digits!', type: 'error' });
      return;
    }

    // Success
    setToast({ message: 'Appointment booked successfully!', type: 'success' });

    // Reset form
    setFormData({
      childName: "",
      parentName: "",
      phone: "",
      therapyType: "",
      dateTime: "",
      notes: "",
    });

    // Clear toast after 3 seconds
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <>
      {/* TOAST NOTIFICATION */}
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <section id="appointment" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto bg-gray-100 p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-lg">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-600 mb-8 md:mb-10">
            Book Appointment
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

            {/* CHILD NAME */}
            <input
              type="text"
              name="childName"
              placeholder="Child Name *"
              value={formData.childName}
              onChange={handleChange}
              required
              className="w-full p-3 md:p-4 rounded-xl border border-gray-300 outline-none focus:border-blue-500 text-sm md:text-base"
            />

            {/* PARENT NAME */}
            <input
              type="text"
              name="parentName"
              placeholder="Parent Name *"
              value={formData.parentName}
              onChange={handleChange}
              required
              className="w-full p-3 md:p-4 rounded-xl border border-gray-300 outline-none focus:border-blue-500 text-sm md:text-base"
            />

            {/* PHONE */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (10 digits) *"
              value={formData.phone}
              onChange={handleChange}
              required
              maxLength="10"
              className="w-full p-3 md:p-4 rounded-xl border border-gray-300 outline-none focus:border-blue-500 text-sm md:text-base"
            />

            {/* THERAPY TYPE */}
            <select
              name="therapyType"
              value={formData.therapyType}
              onChange={handleChange}
              className="w-full p-3 md:p-4 rounded-xl border border-gray-300 outline-none focus:border-blue-500 text-sm md:text-base"
            >
              <option value="">Select Therapy Type</option>
              <option value="speech">Speech Therapy</option>
              <option value="occupational">Occupational Therapy</option>
              <option value="physical">Physical Therapy</option>
              <option value="behavioral">Behavioral Therapy</option>
            </select>

            {/* DATE & TIME */}
            <input
              type="datetime-local"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              className="w-full p-3 md:p-4 rounded-xl border border-gray-300 outline-none focus:border-blue-500 text-sm md:text-base"
            />

            {/* NOTES - FULL WIDTH */}
            <textarea
              name="notes"
              placeholder="Additional Notes (Optional)"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
              className="sm:col-span-2 w-full p-3 md:p-4 rounded-xl border border-gray-300 outline-none focus:border-blue-500 text-sm md:text-base resize-none"
            ></textarea>

            {/* SUBMIT BUTTON - FULL WIDTH */}
            <button
              type="submit"
              className="sm:col-span-2 w-full bg-gray-600 text-white py-3 md:py-4 rounded-2xl font-semibold hover:bg-gray-700 transition text-sm md:text-base"
            >
              Confirm Appointment
            </button>
          </form>
        </div>
      </section>
    </>
  );
}