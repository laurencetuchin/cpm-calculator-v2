import { useState } from 'react';

const CalculateCostPerImpression = () => {
  const [totalCost, setTotalCost] = useState<string>('');
  const [impressions, setImpressions] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculateCPI = () => {
    const cost = parseFloat(totalCost);
    const impr = parseFloat(impressions);
    
    if (!isNaN(cost) && !isNaN(impr) && impr !== 0) {
      const cpi = cost / impr;
      setResult(cpi);
    } else {
      setResult(null);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-slate-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Cost Per Impression Calculator</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="cost" className="block text-sm font-medium mb-1">
            Total Campaign Cost ($)
          </label>
          <input
            id="cost"
            type="number"
            min="0"
            step="0.01"
            value={totalCost}
            onChange={(e) => setTotalCost(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-700"
            placeholder="Enter total cost"
          />
        </div>

        <div>
          <label htmlFor="impressions" className="block text-sm font-medium mb-1">
            Number of Impressions
          </label>
          <input
            id="impressions"
            type="number"
            min="1"
            value={impressions}
            onChange={(e) => setImpressions(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-700"
            placeholder="Enter number of impressions"
          />
        </div>

        <button
          onClick={calculateCPI}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
        >
          Calculate
        </button>

        {result !== null && (
          <div className="mt-6 p-4 bg-gray-100 dark:bg-slate-800 rounded-lg">
            <p className="text-center">
              <span className="font-semibold">Cost Per Impression:</span>{' '}
              ${result.toFixed(4)}
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
        <p className="mb-2">
          <strong>How it works:</strong> Cost Per Impression (CPI) is calculated by dividing the total campaign cost by the number of impressions.
        </p>
        <p>
          <strong>Formula:</strong> CPI = Total Cost / Number of Impressions
        </p>
      </div>
    </div>
  );
};

export default CalculateCostPerImpression;
