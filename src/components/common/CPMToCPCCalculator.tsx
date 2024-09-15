import React, { useState, useEffect } from 'react';

const CPMToCPCCalculator: React.FC = () => {
  const [cpm, setCpm] = useState<number | null>(null);
  const [ctr, setCtr] = useState<number | null>(null);
  const [cpc, setCpc] = useState<number | null>(null);

  useEffect(() => {
    if (cpm !== null && ctr !== null && ctr !== 0) {
      const calculatedCPC = cpm / (ctr * 10);
      setCpc(calculatedCPC);
    } else {
      setCpc(null);
    }
  }, [cpm, ctr]);

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number | null>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? parseFloat(e.target.value) : null;
    setter(value);
  };

  const handleReset = () => {
    setCpm(null);
    setCtr(null);
    setCpc(null);
  };

  const handlePresetClick = (type: 'cpm' | 'ctr', value: number) => {
    if (type === 'cpm') setCpm(value);
    else setCtr(value);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md rounded-lg mb-4 relative">
      <h2 className="text-2xl font-bold mb-4">CPM to CPC Calculator</h2>
      <div className="space-y-4">
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
        <div>
          <label htmlFor="ctr" className="block text-sm font-medium text-gray-700 dark:text-gray-300">CTR (%)</label>
          <input
            type="number"
            id="ctr"
            value={ctr ?? ''}
            onChange={handleInputChange(setCtr)}
            className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Enter CTR"
          />
          <div className="mt-2 space-x-2">
            {[0.5, 1, 1.5, 2, 2.5].map((value) => (
              <button
                key={value}
                onClick={() => handlePresetClick('ctr', value)}
                className="text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                {value}%
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6">
        {cpc !== null && (
          <div className="text-lg font-semibold">
            Estimated CPC: ${cpc.toFixed(2)}
          </div>
        )}
      </div>
      <button
        onClick={handleReset}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
      >
        Reset
      </button>
    </div>
  );
};

export default CPMToCPCCalculator;
