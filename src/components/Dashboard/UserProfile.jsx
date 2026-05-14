import React from 'react';
import PropTypes from 'prop-types';

/**
 * UserProfile Component
 * Displays user information with edit button
 * 
 * @param {Object} user - User object with name, email, phone, etc.
 * @param {Function} onEditClick - Callback when edit button is clicked
 */
function UserProfile({ user, onEditClick }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{user.name}</h2>
          <p className="text-gray-600">{user.role}</p>
        </div>
        <button
          onClick={onEditClick}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <p className="text-sm text-gray-600 mb-1">Email</p>
          <p className="font-semibold text-gray-800">{user.email}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">Phone</p>
          <p className="font-semibold text-gray-800">{user.phone}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">Member Since</p>
          <p className="font-semibold text-gray-800">{user.joinDate}</p>
        </div>
      </div>
    </div>
  );
}

// PropTypes validation
UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string,
    role: PropTypes.string,
    joinDate: PropTypes.string,
  }).isRequired,
  onEditClick: PropTypes.func.isRequired,
};

export default UserProfile;