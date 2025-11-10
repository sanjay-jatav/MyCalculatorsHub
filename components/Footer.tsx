
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">MyCalculatorsHub</h3>
            <p className="text-gray-400">
              Your trusted source for free, accurate, and easy-to-use online calculators for all your needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact-us" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Calculators</h3>
            <ul className="space-y-2">
              <li><Link to="/emi-calculator" className="text-gray-400 hover:text-white transition-colors">EMI Calculator</Link></li>
              <li><Link to="/gst-calculator" className="text-gray-400 hover:text-white transition-colors">GST Calculator</Link></li>
              <li><Link to="/bmi-calculator" className="text-gray-400 hover:text-white transition-colors">BMI Calculator</Link></li>
              <li><Link to="/age-calculator" className="text-gray-400 hover:text-white transition-colors">Age Calculator</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} MyCalculatorsHub.com. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
