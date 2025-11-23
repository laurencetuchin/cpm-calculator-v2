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
    <div className="w-full max-w-2xl mx-auto bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 shadow-[0_0_40px_rgba(139,92,246,0.1)]">
      <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Cost Per Impression Calculator
      </h2>

      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="cost" className="block text-sm font-medium text-gray-300">
            Total Campaign Cost ($)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="text-gray-400">$</span>
            </div>
            <input
              id="cost"
              type="number"
              min="0"
              step="0.01"
              value={totalCost}
              onChange={(e) => setTotalCost(e.target.value)}
              className="w-full pl-8 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
              placeholder="0.00"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="impressions" className="block text-sm font-medium text-gray-300">
            Number of Impressions
          </label>
          <input
            id="impressions"
            type="number"
            min="1"
            value={impressions}
            onChange={(e) => setImpressions(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
            placeholder="e.g. 10000"
          />
        </div>

        <button
          onClick={calculateCPI}
          className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl shadow-lg transform transition hover:-translate-y-0.5"
        >
          Calculate CPI
        </button>

        {result !== null && (
          <div className="mt-8 p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30 animate-fade-in">
            <p className="text-center text-gray-300 mb-2">Cost Per Impression</p>
            <p className="text-center text-4xl font-bold text-white">
              ${result.toFixed(4)}
            </p>
            <p className="text-center text-sm text-gray-400 mt-2">
              (${(result * 1000).toFixed(2)} CPM)
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-white/10 text-sm text-gray-400">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-purple-400 text-xs">i</span>
          </div>
          <p>
            <strong className="text-gray-300">How it works:</strong> Divides your total campaign cost by the total number of impressions to find the cost of a single view.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalculateCostPerImpression;
