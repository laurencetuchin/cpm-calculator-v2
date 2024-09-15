import React, { useState, useEffect } from 'react';

const ImpressionsCalculator = () => {
  const [cost, setCost] = useState<number | null>(null);
  const [cpm, setCpm] = useState<number | null>(null);
  const [impressions, setImpressions] = useState<number | null>(null);

  useEffect(() => {
    if (cost !== null && cpm !== null && cpm !== 0) {
      const calculatedImpressions = (cost / cpm) * 1000;
      setImpressions(calculatedImpressions);
    } else {
      setImpressions(null);
    }
  }, [cost, cpm]);

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number | null>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? parseFloat(e.target.value) : null;
    setter(value);
  };

  const handleReset = () => {
    setCost(null);
    setCpm(null);
    setImpressions(null);
  };

  const handlePresetClick = (type: 'cost' | 'cpm', value: number) => {
    if (type === 'cost') setCost(value);
    else setCpm(value);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md rounded-lg mb-4 relative">
      <h2 className="text-2xl font-bold mb-4">Impressions Calculator</h2>
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
          <label htmlFor="cpm" className="block text-sm font-medium text-gray-700 dark:text-gray-300">CPM ($)</label>
          <input
            type="number"
            id="cpm"
            value={cpm ?? ''}
            onChange={handleInputChange(setCpm)}
            className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Enter CPM"
          />
          <div className="mt-2 space-x-2">
            {[5, 10, 15, 20, 25].map((value) => (
              <button
                key={value}
                onClick={() => handlePresetClick('cpm', value)}
                className="text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                ${value}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6">
        {impressions !== null && (
          <p className="text-lg font-semibold">Calculated Impressions: {Math.round(impressions).toLocaleString()}</p>
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

export default ImpressionsCalculator;