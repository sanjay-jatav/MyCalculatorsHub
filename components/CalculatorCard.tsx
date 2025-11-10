
import React from 'react';
import { Link } from 'react-router-dom';
import type { CalculatorInfo } from '../types';

const CalculatorCard: React.FC<CalculatorInfo> = ({ path, title, description, icon }) => {
  return (
    <Link to={path} className="block group">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
        <div className="flex items-center mb-4">
          <div className="bg-secondary p-3 rounded-full mr-4">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">{title}</h3>
        </div>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default CalculatorCard;
