import { useState, useEffect } from 'react';

const InfluencerCPMCalculator = () => {
  const [impressions, setImpressions] = useState('');
  const [cost, setCost] = useState('');
  const [engagementRate, setEngagementRate] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [engagementCPM, setEngagementCPM] = useState<number | null>(null);
  const [isShared, setIsShared] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('impressions')) setImpressions(params.get('impressions') || '');
    if (params.get('cost')) setCost(params.get('cost') || '');
    if (params.get('engagement')) setEngagementRate(params.get('engagement') || '');
  }, []);

  useEffect(() => {
    if (impressions && cost) {
      calculateCPM();
    }
  }, [impressions, cost, engagementRate]);

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
    } else {
      setEngagementCPM(null);
    }
  };

  const handleShare = async () => {
    const params = new URLSearchParams();
    if (impressions) params.set('impressions', impressions);
    if (cost) params.set('cost', cost);
    if (engagementRate) params.set('engagement', engagementRate);

    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`;

    try {
      await navigator.clipboard.writeText(url);
      setIsShared(true);
      setTimeout(() => setIsShared(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-3xl shadow-xl border border-white/20 dark:border-slate-700/30">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Input Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
            </span>
            Campaign Details
          </h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Expected Impressions/Reach
            </label>
            <div className="relative">
              <input
                type="number"
                value={impressions}
                onChange={(e) => setImpressions(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all dark:text-white"
                placeholder="e.g. 100,000"
              />
              <div className="absolute right-3 top-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Total Campaign Cost ($)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-3 text-gray-500 dark:text-gray-400">$</span>
              <input
                type="number"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                className="w-full pl-8 pr-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all dark:text-white"
                placeholder="e.g. 1,000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Expected Engagement Rate (%)
            </label>
            <div className="relative">
              <input
                type="number"
                value={engagementRate}
                onChange={(e) => setEngagementRate(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all dark:text-white"
                placeholder="e.g. 3.5"
              />
              <span className="absolute right-4 top-3 text-gray-500 dark:text-gray-400">%</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Optional: Calculate engagement-adjusted CPM</p>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center justify-center gap-2 w-full py-2 px-4 text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
          >
            {isShared ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Link Copied!
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
                Share Calculation
              </>
            )}
          </button>
        </div>

        {/* Results Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl -ml-16 -mb-16"></div>

          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 relative z-10">Results</h3>

          <div className="space-y-6 relative z-10">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Standard CPM</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  {result !== null ? `$${result.toFixed(2)}` : '---'}
                </span>
                <span className="text-sm text-gray-400">/ 1k views</span>
              </div>
            </div>

            {engagementRate ? (
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-purple-100 dark:border-purple-900/30">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Engagement-Adjusted CPM</p>
                  <div className="group relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 cursor-help" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-gray-900 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      Cost per 1,000 engaged users based on your engagement rate.
                    </div>
                  </div>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-gray-800 dark:text-white">
                    {engagementCPM !== null ? `$${engagementCPM.toFixed(2)}` : '---'}
                  </span>
                  <span className="text-sm text-gray-400">/ 1k engaged</span>
                </div>
              </div>
            ) : (
              <div className="text-center p-6 border-2 border-dashed border-gray-200 dark:border-slate-700 rounded-xl">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enter an engagement rate to see adjusted cost metrics
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerCPMCalculator;
