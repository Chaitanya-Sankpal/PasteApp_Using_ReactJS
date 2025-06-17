import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full mx-auto p-8">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
            404
          </h1>
          <h2 className="text-3xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
          <p className="text-gray-600 mt-2">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:from-purple-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
