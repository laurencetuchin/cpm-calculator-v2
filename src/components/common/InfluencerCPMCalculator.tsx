import { useState } from 'react';

const InfluencerCPMCalculator = () => {
  const [impressions, setImpressions] = useState('');
  const [cost, setCost] = useState('');
  const [engagementRate, setEngagementRate] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [engagementCPM, setEngagementCPM] = useState<number | null>(null);

  const calculateCPM = () => {
    if (!impressions || !cost) return;

    const impressionsNum = parseFloat(impressions);
    const costNum = parseFloat(cost);
    const engagementRateNum = parseFloat(engagementRate) || 0;

    // Calculate standard CPM
    const cpm = (costNum / impressionsNum) * 1000;
    setResult(cpm);

    // Calculate engagement-adjusted CPM if engagement rate is provided
    if (engagementRateNum > 0) {
      const engagedImpressions = impressionsNum * (engagementRateNum / 100);
      const engagementBasedCPM = (costNum / engagedImpressions) * 1000;
      setEngagementCPM(engagementBasedCPM);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-slate-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Influencer Marketing CPM Calculator</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Expected Impressions/Reach
          </label>
          <input
            type="number"
            value={impressions}
            onChange={(e) => setImpressions(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
            placeholder="e.g. 100000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Campaign Cost ($)
          </label>
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
            placeholder="e.g. 1000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Expected Engagement Rate (%)
          </label>
          <input
            type="number"
            value={engagementRate}
            onChange={(e) => setEngagementRate(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
            placeholder="e.g. 3.5"
          />
        </div>

        <button
          onClick={calculateCPM}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Calculate CPM
        </button>

        {result !== null && (
          <div className="mt-6 p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Results:</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Standard CPM: <span className="font-bold">${result.toFixed(2)}</span>
            </p>
            {engagementCPM !== null && (
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Engagement-Adjusted CPM: <span className="font-bold">${engagementCPM.toFixed(2)}</span>
              </p>
            )}
          </div>
        )}

        <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
          <p className="mb-2">
            <strong>How to use this calculator:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Enter the expected impressions/reach from the influencer's content</li>
            <li>Input the total campaign cost (influencer fee + additional costs)</li>
            <li>Optionally add expected engagement rate for engagement-adjusted CPM</li>
            <li>The calculator will show both standard CPM and engagement-adjusted CPM (if applicable)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfluencerCPMCalculator;
