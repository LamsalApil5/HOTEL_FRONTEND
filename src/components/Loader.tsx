// src/components/Loader.tsx
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full border-4 border-t-4 border-gray-200 h-16 w-16 border-b-gray-500 bg-gray-300 transition-all duration-500 ease-in-out"></div>
    </div>
  );
};

export default Loader;
