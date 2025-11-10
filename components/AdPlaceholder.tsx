
import React from 'react';

const AdPlaceholder: React.FC<{className?: string}> = ({className = ''}) => {
  return (
    <div className={`bg-gray-200 border border-dashed border-gray-400 rounded-lg flex items-center justify-center text-gray-500 text-sm min-h-[100px] w-full my-6 ${className}`}>
      Future Ad Space
    </div>
  );
};

export default AdPlaceholder;
