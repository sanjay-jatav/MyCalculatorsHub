import React, { useState, useEffect } from 'react';
import AdPlaceholder from '../../components/AdPlaceholder';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const AgeCalculator: React.FC = () => {
    const today = new Date().toISOString().split('T')[0];
    const [dob, setDob] = useState<string>('2000-01-01');
    const [targetDate, setTargetDate] = useState<string>(today);
    const [age, setAge] = useState<{ years: number; months: number; days: number } | null>(null);
  
    const calculateAge = () => {
      const startDate = new Date(dob);
      const endDate = new Date(targetDate);
  
      if (endDate < startDate) {
        alert("Target date cannot be earlier than the date of birth.");
        setAge(null);
        return;
      }
  
      let years = endDate.getFullYear() - startDate.getFullYear();
      let months = endDate.getMonth() - startDate.getMonth();
      let days = endDate.getDate() - startDate.getDate();
  
      if (days < 0) {
        months--;
        days += new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
      }
  
      if (months < 0) {
        years--;
        months += 12;
      }
  
      setAge({ years, months, days });
    };
  
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Age Calculator</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Input
            label="Date of Birth"
            id="dob"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <Input
            label="Age at the Date of"
            id="targetDate"
            type="date"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
          />
        </div>
        <Button onClick={calculateAge}>Calculate Age</Button>
  
        {age && (
          <div className="mt-8 bg-secondary p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Your Age Is</h3>
            <div className="flex justify-center items-center space-x-4 md:space-x-8">
              <div>
                <p className="text-4xl md:text-5xl font-bold text-primary">{age.years}</p>
                <p className="text-gray-600">Years</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-primary">{age.months}</p>
                <p className="text-gray-600">Months</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-primary">{age.days}</p>
                <p className="text-gray-600">Days</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

const AgeCalculatorPage: React.FC = () => {
    useEffect(() => {
        document.title = 'Age Calculator | MyCalculatorsHub.com';
    }, []);

    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">Age Calculator</h1>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">Discover your exact age in years, months, and days. A simple tool for calculating the time duration between two dates.</p>
            <AdPlaceholder />
            <AgeCalculator />
            <AdPlaceholder />
            <div className="prose lg:prose-xl max-w-none mx-auto mt-12 text-gray-700">
                <h2>Why Use an Age Calculator?</h2>
                <p>While calculating your age in years is simple, finding the exact number of months and days can be tricky due to the varying number of days in months and leap years. Our Age Calculator simplifies this process, giving you a precise breakdown of your age. This can be useful for various purposes, from filling out official forms that require your exact age to simply satisfying your curiosity about how many days you've lived.</p>
                <p>Knowing your age is also a critical factor in long-term financial planning. For instance, when you're considering purchasing <strong>life insurance</strong>, your age is one of the primary determinants of your premium. Younger, healthier individuals typically receive lower rates. Planning for insurance early in life can lead to significant savings over the policy's term. It's a fundamental part of securing your family's financial future, ensuring they are protected from unforeseen circumstances.</p>

                <h2>Calculating Time Spans Accurately</h2>
                <p>This tool is not just for calculating your own age. You can use it to find the time duration between any two dates. This makes it useful for:</p>
                <ul>
                    <li>Calculating the time elapsed since a significant historical event.</li>
                    <li>Determining the exact duration of a project or contract.</li>
                    <li>Finding out how old a building or an object is, given its start date.</li>
                    <li>Celebrating relationship anniversaries by knowing the exact number of years, months, and days together.</li>
                </ul>
                <p>Accuracy in dates and durations is crucial in legal matters too. If you were ever in a situation where you needed to consult a <strong>personal injury attorney</strong> after an accident, the exact date and time of the incident would be vital pieces of information for your case. Similarly, financial contracts, like a loan agreement, are strictly bound by their timelines. A delay of even a day can have consequences.</p>

                <h2>Age and Financial Milestones</h2>
                <p>Our age often corresponds with major financial milestones. In our 20s and 30s, we might be focused on paying off student loans and getting our first mortgage. As we get older, our focus might shift to saving for retirement and managing investments. If debts from various sources accumulate over the years, a strategy like <strong>debt consolidation</strong> can be highly effective. It helps in simplifying repayments and managing your financial health more efficiently.</p>
                <p>Another example is vehicle ownership. As we progress through life, our transportation needs change. When it's time to buy a new car, it's prudent to get multiple <strong>car insurance quotes</strong> to ensure you're getting the best deal. Your age and driving history significantly impact these quotes. A tool that calculates age precisely helps in understanding the timelines that affect these real-world financial products. For instance, a <strong>debt consolidation loan</strong> might have terms that span several years, and knowing the exact duration can help in planning for it.</p>

                <h2>How Our Age Calculator Works</h2>
                <ol>
                    <li><strong>Enter Your Date of Birth:</strong> Use the date picker to select your birth date, month, and year.</li>
                    <li><strong>Select the Target Date:</strong> By default, this is set to today's date. However, you can change it to any date in the past or future to calculate age at a specific point in time.</li>
                    <li><strong>Click 'Calculate Age':</strong> Our algorithm will process the dates, accounting for leap years and month lengths, to give you the precise result.</li>
                    <li><strong>View Your Age:</strong> The result is displayed clearly in years, months, and days.</li>
                </ol>
                <p>This tool is built for accuracy and ease of use, providing instant results without any hassle. It's a fun and practical utility for everyday use.</p>
            </div>
        </div>
    );
};

export default AgeCalculatorPage;