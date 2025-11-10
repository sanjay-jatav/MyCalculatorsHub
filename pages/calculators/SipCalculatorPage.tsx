import React, { useState, useMemo, useEffect } from 'react';
import AdPlaceholder from '../../components/AdPlaceholder';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const SipCalculator: React.FC = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState<string>('5000');
  const [returnRate, setReturnRate] = useState<string>('12');
  const [timePeriod, setTimePeriod] = useState<string>('10');

  const { totalValue, investedAmount, estimatedReturns } = useMemo(() => {
    const p = parseFloat(monthlyInvestment);
    const r = parseFloat(returnRate);
    const t = parseFloat(timePeriod);

    if (p > 0 && r > 0 && t > 0) {
      const n = t * 12; // number of months
      const i = r / 12 / 100; // monthly interest rate
      const futureValue = p * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
      const totalInvested = p * n;
      const returns = futureValue - totalInvested;
      
      return {
        totalValue: futureValue,
        investedAmount: totalInvested,
        estimatedReturns: returns,
      };
    }
    return { totalValue: 0, investedAmount: 0, estimatedReturns: 0 };
  }, [monthlyInvestment, returnRate, timePeriod]);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Investment Details</h2>
          <div>
            <Input
              label="Monthly Investment (₹)"
              id="monthlyInvestment"
              type="number"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(e.target.value)}
            />
          </div>
          <div>
            <Input
              label="Expected Annual Return Rate (%)"
              id="returnRate"
              type="number"
              step="0.1"
              value={returnRate}
              onChange={(e) => setReturnRate(e.target.value)}
            />
          </div>
          <div>
            <Input
                label="Investment Period (Years)"
                id="tenure"
                type="number"
                value={timePeriod}
                onChange={(e) => setTimePeriod(e.target.value)}
              />
          </div>
        </div>
        <div className="bg-secondary p-6 rounded-lg flex flex-col justify-center items-center text-center">
          <h3 className="text-lg font-medium text-gray-600 mb-2">Projected Future Value</h3>
          <p className="text-4xl font-bold text-primary mb-6">
            ₹{totalValue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
          </p>
          <div className="w-full text-left space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Invested Amount:</span>
              <span className="font-semibold">₹{investedAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Estimated Returns:</span>
              <span className="font-semibold">₹{estimatedReturns.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
            </div>
             <div className="flex justify-between pt-2 border-t mt-2">
              <span className="text-gray-600 font-bold">Total Value:</span>
              <span className="font-bold">₹{totalValue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SipCalculatorPage: React.FC = () => {
    useEffect(() => {
        document.title = 'SIP Calculator - Plan Your Mutual Fund Investments | MyCalculatorsHub.com';
    }, []);

    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">SIP Calculator - Systematic Investment Plan</h1>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">Plan your financial future with our accurate SIP calculator. Estimate the returns on your monthly mutual fund investments and see your wealth grow over time.</p>
            <AdPlaceholder />
            <SipCalculator />
            <AdPlaceholder />
            <div className="prose lg:prose-xl max-w-none mx-auto mt-12 text-gray-700">
                <h2>What is a Systematic Investment Plan (SIP)?</h2>
                <p>A Systematic Investment Plan, or SIP, is a method of investing in mutual funds where you invest a fixed amount of money at regular intervals (usually monthly). It's a disciplined approach to investing that helps you build wealth over the long term through the power of compounding and rupee cost averaging. Our <strong>SIP calculator</strong> is the perfect tool to visualize this growth and plan your investments to meet your financial goals, whether it's for retirement, a child's education, or buying a home.</p>
                <p>Many aspiring investors in India use platforms like Groww or Zerodha to start their SIPs in various mutual funds, some of which track major indices like the <strong>Nifty 50</strong>. By using our calculator, you can input an expected return rate, perhaps based on the historical performance of such indices, to get a realistic projection of your investment's future value.</p>
                
                <h2>How Our SIP Calculator Works</h2>
                <p>The formula to calculate the future value of your SIP investments is:</p>
                {/* FIX: Wrap formula in a string literal to prevent TSX parsing errors. */}
                <p><code>{'FV = P × ( { [1 + i]^n – 1 } / i ) × (1 + i)'}</code></p>
                <ul>
                    <li><strong>FV</strong> is the Future Value of the investment.</li>
                    <li><strong>P</strong> is the amount you invest at regular intervals (your monthly SIP).</li>
                    <li><strong>i</strong> is the periodic rate of interest (annual rate / 12).</li>
                    <li><strong>n</strong> is the total number of payments (investment duration in months).</li>
                </ul>
                <p>This calculator simplifies the complex math for you. Just enter your monthly investment amount, the expected annual return rate, and the number of years you plan to stay invested. The tool will instantly show you the total amount you will invest, the potential capital gains, and the total expected corpus you will accumulate.</p>

                <h2>Benefits of SIP Investing</h2>
                <p>SIPs are one of the most recommended investment routes for retail investors for several reasons:</p>
                <ol>
                    <li><strong>Disciplined Investing:</strong> SIPs automate your investments, instilling a regular saving habit without you having to time the market.</li>
                    <li><strong>Rupee Cost Averaging:</strong> Since you invest a fixed amount regularly, you buy more units when the market is down and fewer units when it is up. This averages out your purchase cost over time.</li>
                    <li><strong>Power of Compounding:</strong> The returns you earn on your investment also start earning returns. Over the long term, this compounding effect can lead to exponential wealth growth.</li>
                </ol>
                <p>Financial discipline is key to a secure future. While a SIP helps you grow wealth, managing liabilities is equally important. If you have multiple loans, using a tool like our <strong>home loan emi calculator</strong> and considering a <strong>debt consolidation loan</strong> can help you manage your outflows better, freeing up more capital for investments like SIPs.</p>

                <h2>Planning Your Financial Goals</h2>
                <p>Whether you're saving up for a down payment on a house or planning for retirement, our <strong>SIP calculator</strong> can be an invaluable asset. By working backward from your goal, you can determine how much you need to invest each month. For instance, if you need ₹50 lakhs in 15 years, you can adjust the inputs in the calculator to find the required monthly SIP amount at a given rate of return.</p>
                <p>Combining smart investment strategies with prudent financial management is the key to success. This includes protecting your assets and family with adequate <strong>life insurance</strong> and finding competitive <strong>car insurance quotes</strong> to manage expenses. Every financial decision, from taking a loan to starting an investment, should be well-informed. Our suite of calculators is here to provide you with the clarity you need to make those decisions confidently.</p>
            </div>
        </div>
    );
};

export default SipCalculatorPage;