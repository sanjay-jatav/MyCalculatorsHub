import React from 'react';
import { CALCULATORS } from '../constants';
import CalculatorCard from '../components/CalculatorCard';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="text-center bg-secondary p-10 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Free Online SIP, EMI & GST Calculators</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Your one-stop destination for free online financial and health calculators. We provide simple, fast, and reliable tools to help you plan your investments, loans, taxes, and health.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CALCULATORS.map((calculator) => (
            <CalculatorCard key={calculator.path} {...calculator} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;