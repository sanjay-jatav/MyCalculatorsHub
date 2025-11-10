import React, { useState, useMemo, useEffect } from 'react';
import AdPlaceholder from '../../components/AdPlaceholder';
import Input from '../../components/ui/Input';

const BmiCalculator: React.FC = () => {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [weight, setWeight] = useState<string>('70');
  const [height, setHeight] = useState<string>('175');
  const [feet, setFeet] = useState<string>('5');
  const [inches, setInches] = useState<string>('9');

  const { bmi, category } = useMemo(() => {
    let bmiValue = 0;
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (unit === 'metric' && w > 0 && h > 0) {
      bmiValue = w / Math.pow(h / 100, 2);
    } else if (unit === 'imperial') {
      const ft = parseFloat(feet);
      const inc = parseFloat(inches);
      if (w > 0 && (ft > 0 || inc > 0)) {
        const totalInches = (ft * 12) + inc;
        bmiValue = (w / Math.pow(totalInches, 2)) * 703;
      }
    }

    let bmiCategory = 'N/A';
    if (bmiValue > 0) {
      if (bmiValue < 18.5) bmiCategory = 'Underweight';
      else if (bmiValue < 25) bmiCategory = 'Normal weight';
      else if (bmiValue < 30) bmiCategory = 'Overweight';
      else bmiCategory = 'Obesity';
    }

    return { bmi: bmiValue, category: bmiCategory };
  }, [unit, weight, height, feet, inches]);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">BMI Calculator</h2>
          <div className="flex items-center space-x-4">
            <label><input type="radio" name="unit" value="metric" checked={unit === 'metric'} onChange={() => setUnit('metric')} className="mr-2"/>Metric</label>
            <label><input type="radio" name="unit" value="imperial" checked={unit === 'imperial'} onChange={() => setUnit('imperial')} className="mr-2"/>Imperial</label>
          </div>
          {unit === 'metric' ? (
            <>
              <Input label="Weight (kg)" id="weight_kg" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
              <Input label="Height (cm)" id="height_cm" type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
            </>
          ) : (
            <>
              <Input label="Weight (lbs)" id="weight_lbs" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
              <div className="flex gap-2">
                <Input label="Height (ft)" id="height_ft" type="number" value={feet} onChange={(e) => setFeet(e.target.value)} />
                <Input label="(in)" id="height_in" type="number" value={inches} onChange={(e) => setInches(e.target.value)} />
              </div>
            </>
          )}
        </div>
        <div className="bg-secondary p-6 rounded-lg flex flex-col justify-center items-center text-center">
          <h3 className="text-lg font-medium text-gray-600 mb-2">Your BMI Score</h3>
          <p className="text-5xl font-bold text-primary mb-4">{bmi.toFixed(1)}</p>
          <p className={`text-xl font-semibold px-4 py-1 rounded-full ${
            category === 'Normal weight' ? 'bg-green-100 text-green-800' : 
            category === 'Underweight' ? 'bg-yellow-100 text-yellow-800' :
            category === 'N/A' ? 'bg-gray-100 text-gray-800' :
            'bg-red-100 text-red-800'
          }`}>{category}</p>
          <p className="text-xs text-gray-500 mt-4">Below 18.5 is underweight, 18.5-24.9 is normal, 25-29.9 is overweight, and 30+ is obesity.</p>
        </div>
      </div>
    </div>
  );
};

const BmiCalculatorPage: React.FC = () => {
    useEffect(() => {
        document.title = 'BMI Calculator - Body Mass Index | MyCalculatorsHub.com';
    }, []);

    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">Body Mass Index (BMI) Calculator</h1>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">Monitor your health by calculating your BMI. This tool provides an estimate of your body fat based on your height and weight.</p>
            <AdPlaceholder />
            <BmiCalculator />
            <AdPlaceholder />
            <div className="prose lg:prose-xl max-w-none mx-auto mt-12 text-gray-700">
                <h2>What is Body Mass Index (BMI)?</h2>
                <p>Body Mass Index (BMI) is a measure that uses your height and weight to work out if your weight is healthy. The BMI calculation divides an adult's weight in kilograms by their height in metres squared. The resulting number is used to categorize someone as underweight, normal weight, overweight, or obese. It is a widely used screening tool to identify potential weight problems for adults.</p>
                <p>Maintaining a healthy BMI is a crucial aspect of your overall well-being, which in turn affects many areas of your life, including your finances. For example, when you apply for <strong>life insurance</strong>, insurers assess your health profile to determine your premium. A healthy BMI can lead to more favorable rates, as it often correlates with a lower risk of certain health conditions. This demonstrates a direct link between personal health management and long-term financial planning.</p>

                <h2>BMI Categories</h2>
                <p>For adults 20 years and older, BMI is interpreted using standard weight status categories. These categories are the same for men and women of all body types and ages.</p>
                <ul>
                    <li><strong>Underweight:</strong> BMI is less than 18.5</li>
                    <li><strong>Normal weight:</strong> BMI is 18.5 to 24.9</li>
                    <li><strong>Overweight:</strong> BMI is 25 to 29.9</li>
                    <li><strong>Obesity:</strong> BMI is 30 or greater</li>
                </ul>
                <p>It's important to remember that BMI is a screening tool, not a diagnostic tool. It doesn't tell the whole story about a person's health. Factors like body composition (muscle vs. fat), age, and sex are not taken into account. However, it remains a useful starting point for assessing your weight. In cases of accidents leading to health complications, having a record of your health metrics could be useful if you need to work with a <strong>personal injury attorney</strong> to file a claim.</p>

                <h2>Health Implications and Financial Well-being</h2>
                <p>A high BMI is associated with an increased risk for several diseases and health conditions, including hypertension, type 2 diabetes, heart disease, and more. Taking steps to maintain a healthy weight can mitigate these risks. This proactive approach to health is similar to proactive financial management. For instance, if you have multiple high-interest debts, you might consider a <strong>debt consolidation loan</strong> to manage your finances more effectively and reduce stress. Just as managing debt can improve financial health, managing your weight can improve your physical health.</p>
                <p>Similarly, other aspects of life require proactive planning. When you are looking for a vehicle, it's essential to research and compare <strong>car insurance quotes</strong> to find the best coverage at a reasonable price. This foresight prevents financial strain in the event of an accident. The principle is the same: taking control of variables, whether it's your health, your finances, or your insurance, leads to better outcomes. Tackling financial burdens through strategies like <strong>debt consolidation</strong> is a powerful step towards a more secure and less stressful life.</p>

                <h2>How to Use Our BMI Calculator</h2>
                <ol>
                    <li><strong>Select Your Units:</strong> Choose between Metric (kg, cm) or Imperial (lbs, ft, in) systems.</li>
                    <li><strong>Enter Your Weight and Height:</strong> Input your details in the corresponding fields.</li>
                    <li><strong>Get Your Result:</strong> The calculator will instantly compute and display your BMI score and the corresponding weight category.</li>
                </ol>
                <p>Use this tool as a part of your health and wellness journey. It can help you set goals, track your progress, and stay motivated. Remember to consult with a healthcare provider for a comprehensive health assessment and personalized advice.</p>
            </div>
        </div>
    );
};

export default BmiCalculatorPage;