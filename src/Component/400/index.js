// BadRequestPage.js
import React, { useState } from "react";
// import Popup from "./Popup";

const BadRequestPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleTryAgain = () => {
    setShowPopup(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          400 Bad Request
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Oops! Your request could not be understood by the server.
        </p>
        <button
          onClick={handleTryAgain}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Try Again
        </button>
      </div>
      {showPopup && <animation onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default BadRequestPage;
