import React, { useState, useEffect } from 'react';

const CostPerImpressionCalculator = () => {
  const [cost, setCost] = useState<number | null>(null);
  const [impressions, setImpressions] = useState<number | null>(null);
  const [costPerImpression, setCostPerImpression] = useState<number | null>(null);

  useEffect(() => {
    if (cost !== null && impressions !== null && impressions !== 0) {
      const calculatedCostPerImpression = cost / impressions;
      setCostPerImpression(calculatedCostPerImpression);
    } else {
      setCostPerImpression(null);
    }
  }, [cost, impressions]);

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number | null>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? parseFloat(e.target.value) : null;
    setter(value);
  };

  const handleReset = () => {
    setCost(null);
    setImpressions(null);
    setCostPerImpression(null);
  };

  const handlePresetClick = (type: 'cost' | 'impressions', value: number) => {
    if (type === 'cost') setCost(value);
    else setImpressions(value);
  };

  return (
    <div id="costPerImpression" className="max-w-md mx-auto p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md rounded-lg mb-4 relative">
      <h2 className="text-2xl font-bold mb-4">Cost Per Impression Calculator</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="cost" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Campaign Cost ($)</label>
          <input
            type="number"
            id="cost"
            value={cost ?? ''}
            onChange={handleInputChange(setCost)}
            className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Enter cost"
          />
          <div className="mt-2 space-x-2">
            {[100, 500, 1000, 5000, 10000].map((value) => (
              <button
                key={value}
                onClick={() => handlePresetClick('cost', value)}
                className="text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                ${value}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="impressions" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Impressions</label>
          <input
            type="number"
            id="impressions"
            value={impressions ?? ''}
            onChange={handleInputChange(setImpressions)}
            className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Enter impressions"
          />
          <div className="mt-2 space-x-2">
            {[10000, 50000, 100000, 500000, 1000000].map((value) => (
              <button
                key={value}
                onClick={() => handlePresetClick('impressions', value)}
                className="text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                {value.toLocaleString()}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6">
        {costPerImpression !== null && (
          <p className="text-lg font-semibold">Cost Per Impression: ${costPerImpression.toFixed(4)}</p>
        )}
      </div>
      <button
        onClick={handleReset}
        className="mt-4 px-3 py-1 text-sm rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
      >
        Reset
      </button>
    </div>
  );
};

export default CostPerImpressionCalculator;