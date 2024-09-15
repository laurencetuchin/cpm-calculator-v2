import React, { useState } from 'react';

const CalculatorSelector = () => {
  const [selectedCalculator, setSelectedCalculator] = useState<string | null>(null);

  const calculators = [
    { id: 'cpm', question: 'I would like to work out my cost per thousand impressions (CPM)' },
    { id: 'impressions', question: 'I would like to calculate the number of impressions for my campaign' },
    { id: 'costPerImpression', question: 'I would like to determine the cost per impression for my campaign' },
  ];

  const handleSelection = (id: string) => {
    setSelectedCalculator(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg mb-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        What would you like to calculate?
      </h2>
      <div className="space-y-4">
        {calculators.map((calc) => (
          <button
            key={calc.id}
            onClick={() => handleSelection(calc.id)}
            className={`w-full p-4 text-left rounded-lg transition-all duration-200 ease-in-out ${
              selectedCalculator === calc.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            <p className="text-lg font-medium">{calc.question}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CalculatorSelector;
