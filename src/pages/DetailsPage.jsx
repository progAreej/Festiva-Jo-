

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const DetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const festival = location.state?.festival;

  if (!festival) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl font-semibold text-gray-800">Festival not found</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-page p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-6">
        <button
          onClick={() => navigate('/')} // Redirect to home page
          className="bg-red1 text-white py-2 px-4 rounded-lg mb-6 hover:bg-red2 transition duration-300"
        >
          Back
        </button>
        <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-6">
          <img
            src={festival.image}
            alt={festival.name}
            className="w-full h-64 md:w-1/2 md:h-auto object-cover rounded-lg shadow-md mb-6 md:mb-0"
          />
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-red1 mb-4">{festival.name}</h1>
            <p className="text-page1 text-lg mb-2">
              <strong>Date:</strong> {festival.date}
            </p>
            <p className="text-page1 text-lg mb-2">
              <strong>Location:</strong> {festival.location}
            </p>
            <p className="text-page1 text-lg">
              <strong>Description:</strong> {festival.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
