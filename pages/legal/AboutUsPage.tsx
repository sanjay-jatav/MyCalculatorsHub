import React, { useEffect } from 'react';

const AboutUsPage: React.FC = () => {
    useEffect(() => {
        document.title = 'About Us | MyCalculatorsHub.com';
    }, []);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About MyCalculatorsHub</h1>
      <div className="prose lg:prose-xl max-w-none text-gray-700">
        <p>Welcome to MyCalculatorsHub.com, your number one source for all types of free online calculators. We're dedicated to giving you the very best of calculation tools, with a focus on accuracy, speed, and user-friendliness.</p>
        <p>Founded in {new Date().getFullYear()}, MyCalculatorsHub.com has come a long way from its beginnings. When we first started out, our passion for providing easy-to-use, accessible digital tools drove us to create this platform, so that MyCalculatorsHub.com can offer you a comprehensive suite of calculators for finance, health, and everyday life. We now serve users all over the world and are thrilled that we're able to turn our passion into our own website.</p>
        <h2>Our Mission</h2>
        <p>Our mission is to empower individuals and professionals by providing them with reliable and easy-to-use calculators. We believe that everyone should have access to tools that can help them make informed decisions, whether it's planning a budget, assessing health metrics, or securing their digital life. We strive to simplify complex calculations and present them in a clean, intuitive interface.</p>
        <h2>What We Offer</h2>
        <p>At MyCalculatorsHub.com, you'll find a growing collection of calculators, including:</p>
        <ul>
          <li><strong>Financial Calculators:</strong> Tools like our SIP, EMI, and GST calculators to help you navigate complex financial landscapes.</li>
          <li><strong>Health & Fitness Calculators:</strong> Our BMI and Age calculators to help you keep track of important health metrics.</li>
          <li><strong>General Utility Calculators:</strong> From percentage calculations to generating secure passwords, we provide tools for your everyday needs.</li>
        </ul>
        <p>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to <a href="#/contact-us">contact us</a>.</p>
        <p>Sincerely,</p>
        <p>The MyCalculatorsHub Team</p>
      </div>
    </div>
  );
};

export default AboutUsPage;