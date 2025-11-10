import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import EmiCalculatorPage from './pages/calculators/EmiCalculatorPage';
import GstCalculatorPage from './pages/calculators/GstCalculatorPage';
import AgeCalculatorPage from './pages/calculators/AgeCalculatorPage';
import BmiCalculatorPage from './pages/calculators/BmiCalculatorPage';
import PercentageCalculatorPage from './pages/calculators/PercentageCalculatorPage';
import PasswordGeneratorPage from './pages/calculators/PasswordGeneratorPage';
import SipCalculatorPage from './pages/calculators/SipCalculatorPage';
import AboutUsPage from './pages/legal/AboutUsPage';
import ContactUsPage from './pages/legal/ContactUsPage';
import PrivacyPolicyPage from './pages/legal/PrivacyPolicyPage';
import TermsOfServicePage from './pages/legal/TermsOfServicePage';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sip-calculator" element={<SipCalculatorPage />} />
          <Route path="/emi-calculator" element={<EmiCalculatorPage />} />
          <Route path="/gst-calculator" element={<GstCalculatorPage />} />
          <Route path="/age-calculator" element={<AgeCalculatorPage />} />
          <Route path="/bmi-calculator" element={<BmiCalculatorPage />} />
          <Route path="/percentage-calculator" element={<PercentageCalculatorPage />} />
          <Route path="/password-generator" element={<PasswordGeneratorPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;