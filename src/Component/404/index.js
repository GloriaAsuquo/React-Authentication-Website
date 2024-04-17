import React from "react";

export default function Index() {
  return (
    <div>
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            404 - Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Oops! The page you're looking for could not be found.
          </p>
          <a href="/" className="text-blue-500 hover:underline">
            Go back to home
          </a>
        </div>
      </div>
    </div>
  );
}
