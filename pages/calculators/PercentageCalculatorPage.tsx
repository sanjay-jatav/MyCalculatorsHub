import React, { useState, useEffect } from 'react';
import AdPlaceholder from '../../components/AdPlaceholder';
import Input from '../../components/ui/Input';

const PercentageCalculator: React.FC = () => {
    const [val1, setVal1] = useState<string>('10');
    const [val2, setVal2] = useState<string>('50');
    const [result, setResult] = useState<string>('');

    const calculate1 = () => { // What is X% of Y
        const x = parseFloat(val1);
        const y = parseFloat(val2);
        if (!isNaN(x) && !isNaN(y)) {
            setResult(((x / 100) * y).toString());
        }
    };

    const calculate2 = () => { // X is what % of Y
        const x = parseFloat(val1);
        const y = parseFloat(val2);
        if (!isNaN(x) && !isNaN(y) && y !== 0) {
            setResult(((x / y) * 100).toFixed(2) + '%');
        } else {
            setResult('N/A');
        }
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg space-y-8">
            <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">1. What is X% of Y?</h3>
                <div className="flex items-center gap-4">
                    <div className="w-1/3">
                        <Input label="X %" id="p1_val1" type="number" value={val1} onChange={e => setVal1(e.target.value)} />
                    </div>
                    <span className="text-gray-600">of</span>
                    <div className="w-1/3">
                        <Input label="Y" id="p1_val2" type="number" value={val2} onChange={e => setVal2(e.target.value)} />
                    </div>
                    <button onClick={calculate1} className="mt-5 h-10 px-4 bg-primary text-white rounded-md hover:bg-primary-dark">=</button>
                    <div className="w-1/3 mt-5">
                       <input value={(result.includes('%') ? '' : result)} readOnly className="block w-full px-3 py-2 bg-secondary border border-gray-300 rounded-md shadow-sm" />
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">2. X is what percentage of Y?</h3>
                <div className="flex items-center gap-4">
                     <div className="w-1/3">
                        <Input label="X" id="p2_val1" type="number" value={val1} onChange={e => setVal1(e.target.value)} />
                    </div>
                    <span className="text-gray-600">is what % of</span>
                    <div className="w-1/3">
                        <Input label="Y" id="p2_val2" type="number" value={val2} onChange={e => setVal2(e.target.value)} />
                    </div>
                    <button onClick={calculate2} className="mt-5 h-10 px-4 bg-primary text-white rounded-md hover:bg-primary-dark">=</button>
                    <div className="w-1/3 mt-5">
                       <input value={(!result.includes('%') ? '' : result)} readOnly className="block w-full px-3 py-2 bg-secondary border border-gray-300 rounded-md shadow-sm" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const PercentageCalculatorPage: React.FC = () => {
    useEffect(() => {
        document.title = 'Percentage Calculator | MyCalculatorsHub.com';
    }, []);

    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">Percentage Calculator</h1>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">A versatile tool for all your percentage calculation needs. Whether it's for shopping discounts, financial analysis, or academic purposes, we've got you covered.</p>
            <AdPlaceholder />
            <PercentageCalculator />
            <AdPlaceholder />
            <div className="prose lg:prose-xl max-w-none mx-auto mt-12 text-gray-700">
                <h2>The Power of Percentages</h2>
                <p>Percentages are a fundamental part of our daily lives. We encounter them everywhere: from store discounts and sales tax to bank interest rates and statistical reports. Understanding how to calculate percentages is an essential skill for managing personal finances, making informed consumer choices, and interpreting data. Our Percentage Calculator provides a simple and intuitive interface to handle various common percentage problems effortlessly.</p>
                <p>In the realm of personal finance, percentages are critical. When you're considering a <strong>debt consolidation loan</strong>, the interest rate, expressed as a percentage, is one of the most important factors. A lower percentage can save you thousands of dollars over the life of the loan. This tool can help you quickly calculate the potential interest savings between different loan offers, empowering you to make a financially sound decision.</p>

                <h2>Common Percentage Calculations</h2>
                <p>Our tool is designed to solve the most frequent percentage-related questions:</p>
                <ul>
                    <li><strong>Finding a percentage of a number:</strong> This is useful for calculating tips, commissions, or sales tax. For example, "What is 18% of $50?"</li>
                    <li><strong>Calculating what percentage one number is of another:</strong> This is helpful for understanding proportions or performance metrics. For example, "15 is what percentage of 60?"</li>
                </ul>
                <p>These calculations are vital in many fields. For instance, when comparing <strong>car insurance quotes</strong>, you might see that one company offers a 15% discount for a safe driving record. Using our calculator, you can easily determine the actual monetary value of that discount. Financial literacy, built on a solid understanding of concepts like percentages, is key to navigating life's major decisions.</p>

                <h2>Percentages in Finance and Insurance</h2>
                <p>The financial world runs on percentages. Interest rates, return on investment (ROI), and inflation rates are all expressed this way. A solid grasp of these concepts is crucial for anyone looking to build wealth or manage debt. For those with multiple debts, undertaking a <strong>debt consolidation</strong> strategy is often about leveraging percentages to their advantage—securing a new loan at a lower percentage rate to pay off debts with higher rates.</p>
                <p>Similarly, the <strong>life insurance</strong> industry relies heavily on percentages and actuarial data to calculate premiums and benefits. The likelihood of certain events, expressed as a percentage, determines the cost of a policy. While our tool handles basic calculations, it highlights the importance of numerical literacy in dealing with complex products. In some unfortunate life events, like a serious accident, the settlement offered might be a percentage of damages, a calculation that a <strong>personal injury attorney</strong> would carefully scrutinize. Having the ability to double-check these numbers, even at a basic level, can be empowering.</p>

                <h2>How to Use Our Percentage Calculator</h2>
                <p>Using our tool is straightforward. We have divided it into sections for different types of calculations:</p>
                <ol>
                    <li><strong>Choose the calculation type:</strong> Select the problem you want to solve (e.g., "What is X% of Y?").</li>
                    <li><strong>Enter your numbers:</strong> Fill in the input fields with the values from your problem.</li>
                    <li><strong>Get the answer:</strong> The result is calculated and displayed instantly.</li>
                </ol>
                <p>This simple process eliminates the chance of manual errors and provides quick answers for your homework, business calculations, or everyday questions. It's a reliable companion for anyone who deals with numbers.</p>
            </div>
        </div>
    );
};

export default PercentageCalculatorPage;