import React, { useState, useMemo, useEffect } from 'react';
import AdPlaceholder from '../../components/AdPlaceholder';
import Input from '../../components/ui/Input';

const GstCalculator: React.FC = () => {
  const [amount, setAmount] = useState<string>('1000');
  const [rate, setRate] = useState<string>('18');
  const [type, setType] = useState<'exclusive' | 'inclusive'>('exclusive');

  const { gstAmount, totalAmount, baseAmount } = useMemo(() => {
    const amt = parseFloat(amount);
    const rt = parseFloat(rate);

    if (amt > 0 && rt >= 0) {
      if (type === 'exclusive') {
        const gst = amt * (rt / 100);
        return { gstAmount: gst, totalAmount: amt + gst, baseAmount: amt };
      } else { // inclusive
        const base = amt / (1 + (rt / 100));
        const gst = amt - base;
        return { gstAmount: gst, totalAmount: amt, baseAmount: base };
      }
    }
    return { gstAmount: 0, totalAmount: 0, baseAmount: 0 };
  }, [amount, rate, type]);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">GST Calculator</h2>
          <div className="flex items-center space-x-4">
            <label>
              <input
                type="radio"
                name="gstType"
                value="exclusive"
                checked={type === 'exclusive'}
                onChange={() => setType('exclusive')}
                className="mr-2"
              />
              GST Exclusive
            </label>
            <label>
              <input
                type="radio"
                name="gstType"
                value="inclusive"
                checked={type === 'inclusive'}
                onChange={() => setType('inclusive')}
                className="mr-2"
              />
              GST Inclusive
            </label>
          </div>
          <div>
            <Input
              label={type === 'exclusive' ? 'Base Amount (₹)' : 'Total Amount (₹)'}
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="rate" className="block text-sm font-medium text-gray-700 mb-1">GST Rate (%)</label>
            <select
              id="rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            >
              <option value="3">3%</option>
              <option value="5">5%</option>
              <option value="12">12%</option>
              <option value="18">18%</option>
              <option value="28">28%</option>
            </select>
          </div>
        </div>
        <div className="bg-secondary p-6 rounded-lg flex flex-col justify-center text-center">
          <div className="w-full text-left space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Base Amount:</span>
              <span className="font-semibold text-lg">₹{baseAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">GST Amount:</span>
              <span className="font-semibold text-lg">₹{gstAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
            </div>
            <hr className="my-3"/>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-lg">Total Amount:</span>
              <span className="font-bold text-2xl text-primary">₹{totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const GstCalculatorPage: React.FC = () => {
    useEffect(() => {
        document.title = 'GST Calculator - India | MyCalculatorsHub.com';
    }, []);

    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">Goods and Services Tax (GST) Calculator</h1>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">Quickly calculate the GST amount on goods and services. Our simple tool helps you find the net price whether the GST is inclusive or exclusive.</p>
            <AdPlaceholder />
            <GstCalculator />
            <AdPlaceholder />
            <div className="prose lg:prose-xl max-w-none mx-auto mt-12 text-gray-700">
                <h2>Decoding GST in India</h2>
                <p>The Goods and Services Tax (GST) is an indirect tax used in India on the supply of goods and services. It is a comprehensive, multistage, destination-based tax that has replaced many indirect taxes in India. GST is a single domestic indirect tax law for the entire country. Our GST Calculator is designed to be a handy tool for business owners, consumers, and tax professionals to compute the GST amount accurately and swiftly.</p>
                <p>For businesses, managing finances effectively is paramount. This includes not just tax calculations but also managing debts and liabilities. Sometimes, a business might take on multiple smaller loans to manage cash flow. Over time, this can become complex to manage. A strategic approach like a <strong>debt consolidation loan</strong> can streamline these liabilities into a single, more manageable payment, improving financial oversight and potentially reducing interest costs. This allows business owners to focus more on their core operations rather than juggling multiple repayment schedules.</p>

                <h2>GST Inclusive vs. GST Exclusive Calculation</h2>
                <p>Understanding the difference between these two calculation methods is key:</p>
                <ul>
                    <li><strong>GST Exclusive:</strong> In this case, the price of the product or service does not include the GST amount. You need to add the GST to the base price to get the final selling price. Our calculator does this by taking the base amount and the GST rate to compute the total cost.</li>
                    <li><strong>GST Inclusive:</strong> Here, the price listed for the product or service already includes the GST. If you need to find out how much of that price is the actual GST, you need to perform a reverse calculation. Our tool can easily extract the base price and the GST amount from a total price.</li>
                </ul>
                <p>Accurate financial management is crucial for personal and business success. Just as one might seek competitive <strong>car insurance quotes</strong> to manage vehicle expenses, businesses must diligently manage their tax obligations. Ensuring correct GST filing can prevent penalties and legal issues. In more severe cases of legal disputes, like an accident claim, one would not hesitate to hire a <strong>personal injury attorney</strong>. Similarly, for tax and compliance, precision is non-negotiable and tools like our GST calculator are invaluable.</p>
                
                <h2>The Structure of GST Rates</h2>
                <p>GST rates in India are divided into different slabs for various goods and services. The main slabs are 0% (for essential items), 5%, 12%, 18%, and 28%. There are special rates for items like gold and precious stones. This tiered structure is designed to make essential goods more affordable while luxury items are taxed at a higher rate. Our calculator provides a dropdown with the most common GST rates to make your calculations faster and more convenient.</p>
                <p>Thinking about long-term financial health is as important as managing daily transactions. For individuals, securing their family's future with products like <strong>life insurance</strong> is a cornerstone of financial planning. It ensures that in any unfortunate event, their family is not burdened with financial liabilities. This forward-thinking approach is mirrored in business. Smart business owners not only manage their current tax liabilities but also plan for future growth and stability, which may involve strategies like <strong>debt consolidation</strong> to maintain a healthy balance sheet.</p>
                
                <h2>How to Use Our GST Calculator</h2>
                <ol>
                    <li><strong>Select Calculation Type:</strong> Choose between 'GST Exclusive' and 'GST Inclusive' based on your needs.</li>
                    <li><strong>Enter the Amount:</strong> Input the base amount (for exclusive) or the total amount (for inclusive).</li>
                    <li><strong>Choose the GST Rate:</strong> Select the applicable GST slab from the dropdown menu.</li>
                    <li><strong>View the Results:</strong> The calculator will immediately show you the base amount, GST amount, and the total amount clearly broken down for your understanding.</li>
                </ol>
                <p>This tool is perfect for quick calculations while preparing invoices, checking bills, or for any personal or professional use where a GST calculation is required.</p>
            </div>
        </div>
    );
};

export default GstCalculatorPage;