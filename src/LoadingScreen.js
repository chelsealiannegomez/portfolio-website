import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="flex space-x-5">
        <div className="w-6 h-6 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-6 h-6 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-6 h-6 bg-blue-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;