import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdPlaceholder from '../../components/AdPlaceholder';
import Input from '../../components/ui/Input';

const EmiCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState<string>('2500000');
  const [rate, setRate] = useState<string>('8.5');
  const [tenure, setTenure] = useState<string>('20');
  const [tenureUnit, setTenureUnit] = useState<'years' | 'months'>('years');

  const { emi, totalInterest, totalPayment } = useMemo(() => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 12 / 100;
    const n = tenureUnit === 'years' ? parseFloat(tenure) * 12 : parseFloat(tenure);

    if (p > 0 && r > 0 && n > 0) {
      const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPaymentValue = emiValue * n;
      const totalInterestValue = totalPaymentValue - p;
      return {
        emi: emiValue,
        totalInterest: totalInterestValue,
        totalPayment: totalPaymentValue,
      };
    }
    return { emi: 0, totalInterest: 0, totalPayment: 0 };
  }, [principal, rate, tenure, tenureUnit]);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Loan Details</h2>
          <div>
            <Input
              label="Home/Car/Personal Loan Amount (₹)"
              id="principal"
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
            />
          </div>
          <div>
            <Input
              label="Annual Interest Rate (%)"
              id="rate"
              type="number"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>
          <div className="flex items-end gap-2">
            <div className="flex-grow">
              <Input
                label="Loan Tenure"
                id="tenure"
                type="number"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
              />
            </div>
            <select
              value={tenureUnit}
              onChange={(e) => setTenureUnit(e.target.value as 'years' | 'months')}
              className="h-10 border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            >
              <option value="years">Years</option>
              <option value="months">Months</option>
            </select>
          </div>
        </div>
        <div className="bg-secondary p-6 rounded-lg flex flex-col justify-center items-center text-center">
          <h3 className="text-lg font-medium text-gray-600 mb-2">Your Monthly EMI</h3>
          <p className="text-4xl font-bold text-primary mb-6">
            ₹{emi.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
          </p>
          <div className="w-full text-left space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Principal Amount:</span>
              <span className="font-semibold">₹{parseFloat(principal || '0').toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Interest:</span>
              <span className="font-semibold">₹{totalInterest.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Payment:</span>
              <span className="font-semibold">₹{totalPayment.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EmiCalculatorPage: React.FC = () => {
    useEffect(() => {
        document.title = 'EMI Calculator for Home Loan, Car Loan | MyCalculatorsHub.com';
    }, []);

    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">EMI Calculator for Home Loan, Car Loan & Personal Loan</h1>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">Use our free Home Loan EMI Calculator to plan your finances effectively. Understand your monthly payments for home, car, or personal loans and make informed decisions.</p>
            <AdPlaceholder />
            <EmiCalculator />
            <AdPlaceholder />
            <div className="prose lg:prose-xl max-w-none mx-auto mt-12 text-gray-700">
                <h2>Understanding Your Home Loan EMI</h2>
                <p>An Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are used to pay off both interest and principal each month so that over a specified number of years, the loan is paid off in full. Our <strong>home loan emi calculator</strong> helps you accurately determine this monthly outflow, which is the first step towards sound financial planning and securing your dream home.</p>
                <p>Financial planning is crucial, especially when taking on significant debt like a home loan. Many people find themselves overwhelmed by multiple debts from credit cards, personal loans, and other sources. In such situations, exploring a <strong>debt consolidation loan</strong> can be a smart move. This involves taking out a new loan to pay off several other liabilities, simplifying your payments into a single monthly installment, often at a lower interest rate.</p>

                <h2>How is EMI Calculated?</h2>
                <p>The mathematical formula for calculating EMI is:</p>
                <p><code>EMI = [P x R x (1+R)^N] / [(1+R)^N-1]</code></p>
                <p>Where:</p>
                <ul>
                    <li><strong>P</strong> stands for the Principal Loan Amount (e.g., the home loan amount).</li>
                    <li><strong>R</strong> stands for the Rate of Interest per month.</li>
                    <li><strong>N</strong> stands for the number of monthly installments (loan tenure in months).</li>
                </ul>
                <p>Our calculator automates this complex calculation for you, providing instant and accurate results. This empowers you to compare different loan offers from various banks and financial institutions. For instance, when looking at <strong>car insurance quotes</strong>, you might also be considering a car loan. Using our EMI calculator can help you see how different loan terms affect your monthly budget alongside your insurance premiums.</p>

                <h2>SIP vs. EMI: Investing While Repaying a Loan</h2>
                <p>While an EMI is a liability you pay each month, a Systematic Investment Plan (SIP) is an asset you build. It's a disciplined way to invest a fixed amount regularly in mutual funds, helping you grow your wealth over time. Many people wonder if they should prioritize paying off their loan or start investing. The ideal strategy often involves a balance of both. You can use our <Link to="/sip-calculator">SIP calculator</Link> to see how even small monthly investments can grow into a significant corpus over your loan tenure, potentially creating a fund that could help you prepay your loan or achieve other financial goals.</p>
                
                <h2>The Importance of Financial Prudence</h2>
                <p>Making informed financial decisions extends beyond just using a <strong>home loan calculator</strong>. It's about building a secure future. A key component of this security is having adequate <strong>life insurance</strong>. It provides a financial safety net for your loved ones in your absence, ensuring they can manage loan repayments and other expenses. When planning a large loan like a home loan, many lenders even require a life insurance policy to cover the loan amount.</p>
                <p>Furthermore, if you find your monthly outgoings are too high due to multiple EMIs, it's wise to consider <strong>debt consolidation</strong>. This strategy not only simplifies your financial life but can also reduce the total interest you pay over time. In complex financial or legal situations, such as dealing with an accident, you would consult a <strong>personal injury attorney</strong> for expert advice. Similarly, for complex debt situations, consulting a financial advisor can provide a clear path forward.</p>
            </div>
        </div>
    );
};

export default EmiCalculatorPage;