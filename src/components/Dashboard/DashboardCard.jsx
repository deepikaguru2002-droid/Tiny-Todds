import React from 'react';
import PropTypes from 'prop-types';

/**
 * DashboardCard Component
 * Displays statistics with icon, label, and value
 * 
 * @param {string} label - Card label
 * @param {number} value - Stat value to display
 * @param {string} icon - Icon emoji
 * @param {string} bgColor - Tailwind background color
 */
function DashboardCard({ label, value, icon, bgColor }) {
  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm mb-2">{label}</p>
          <p className="text-3xl font-bold text-gray-800">{value}</p>
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
    </div>
  );
}

// PropTypes validation
DashboardCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
};

DashboardCard.defaultProps = {
  bgColor: 'bg-gray-100',
};

export default DashboardCard;