import React, { useState, useEffect } from 'react';

interface CalculatorInputs {
  budget: string;
  impressions: string;
  clicks: string;
  conversions: string;
  engagements: string;
  conversionValue: string;
}

const TiktokAdsCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    budget: '',
    impressions: '',
    clicks: '',
    conversions: '',
    engagements: '',
    conversionValue: ''
  });

  const [results, setResults] = useState({
    cpm: 0,
    cpc: 0,
    ctr: 0,
    cpa: 0,
    engagementRate: 0,
    roas: 0
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Initialize from URL params
    const params = new URLSearchParams(window.location.search);
    const newInputs: any = {};
    let hasParams = false;

    Object.keys(inputs).forEach(key => {
      const value = params.get(key);
      if (value) {
        newInputs[key] = value;
        hasParams = true;
      }
    });

    if (hasParams) {
      setInputs(prev => ({ ...prev, ...newInputs }));
    }
  }, []);

  useEffect(() => {
    const budget = parseFloat(inputs.budget) || 0;
    const impressions = parseFloat(inputs.impressions) || 0;
    const clicks = parseFloat(inputs.clicks) || 0;
    const conversions = parseFloat(inputs.conversions) || 0;
    const engagements = parseFloat(inputs.engagements) || 0;
    const conversionValue = parseFloat(inputs.conversionValue) || 0;

    const cpm = impressions ? (budget / impressions) * 1000 : 0;
    const cpc = clicks ? budget / clicks : 0;
    const ctr = impressions ? (clicks / impressions) * 100 : 0;
    const cpa = conversions ? budget / conversions : 0;
    const engagementRate = impressions ? (engagements / impressions) * 100 : 0;
    const roas = budget ? (conversions * conversionValue) / budget : 0;

    setResults({ cpm, cpc, ctr, cpa, engagementRate, roas });

    // Update URL params
    const params = new URLSearchParams();
    Object.entries(inputs).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
    window.history.replaceState({}, '', newUrl);

  }, [inputs]);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  return (
    <div className="w-full relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="absolute top-4 right-4 z-50 animate-fade-in-down">
          <div className="bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Link copied to clipboard!</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
              <span className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-3 text-purple-600 dark:text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </span>
              Campaign Data
            </h2>
            <button
              onClick={handleShare}
              className="flex items-center space-x-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors text-sm font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              <span>Share</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors group-hover:text-purple-600 dark:group-hover:text-purple-400">
                Budget ($)
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="budget"
                  value={inputs.budget}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none backdrop-blur-sm"
                  placeholder="e.g., 1000"
                  onClick={(e) => (e.target as HTMLInputElement).placeholder = ''}
                  onBlur={(e) => (e.target as HTMLInputElement).placeholder = 'e.g., 1000'}
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors group-hover:text-purple-600 dark:group-hover:text-purple-400">
                Impressions
              </label>
              <input
                type="number"
                name="impressions"
                value={inputs.impressions}
                onChange={handleInputChange}
                className="w-full p-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none backdrop-blur-sm"
                placeholder="e.g., 50000"
                onClick={(e) => (e.target as HTMLInputElement).placeholder = ''}
                onBlur={(e) => (e.target as HTMLInputElement).placeholder = 'e.g., 50000'}
              />
            </div>

            <div className="group">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors group-hover:text-purple-600 dark:group-hover:text-purple-400">
                Clicks
              </label>
              <input
                type="number"
                name="clicks"
                value={inputs.clicks}
                onChange={handleInputChange}
                className="w-full p-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none backdrop-blur-sm"
                placeholder="e.g., 500"
                onClick={(e) => (e.target as HTMLInputElement).placeholder = ''}
                onBlur={(e) => (e.target as HTMLInputElement).placeholder = 'e.g., 500'}
              />
            </div>

            <div className="group">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors group-hover:text-purple-600 dark:group-hover:text-purple-400">
                Conversions
              </label>
              <input
                type="number"
                name="conversions"
                value={inputs.conversions}
                onChange={handleInputChange}
                className="w-full p-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none backdrop-blur-sm"
                placeholder="e.g., 50"
                onClick={(e) => (e.target as HTMLInputElement).placeholder = ''}
                onBlur={(e) => (e.target as HTMLInputElement).placeholder = 'e.g., 50'}
              />
            </div>

            <div className="group">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors group-hover:text-purple-600 dark:group-hover:text-purple-400">
                Avg. Value per Conversion ($)
              </label>
              <input
                type="number"
                name="conversionValue"
                value={inputs.conversionValue}
                onChange={handleInputChange}
                className="w-full p-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none backdrop-blur-sm"
                placeholder="e.g., 50"
                onClick={(e) => (e.target as HTMLInputElement).placeholder = ''}
                onBlur={(e) => (e.target as HTMLInputElement).placeholder = 'e.g., 50'}
              />
            </div>

            <div className="group">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors group-hover:text-purple-600 dark:group-hover:text-purple-400">
                Engagements
              </label>
              <input
                type="number"
                name="engagements"
                value={inputs.engagements}
                onChange={handleInputChange}
                className="w-full p-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none backdrop-blur-sm"
                placeholder="e.g., 2500"
                onClick={(e) => (e.target as HTMLInputElement).placeholder = ''}
                onBlur={(e) => (e.target as HTMLInputElement).placeholder = 'e.g., 2500'}
              />
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 border border-purple-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
            <span className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center mr-3 text-cyan-600 dark:text-cyan-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </span>
            Results
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-700/50 p-4 rounded-xl shadow-sm border border-purple-100 dark:border-gray-600 hover:shadow-md transition-shadow">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">CPM</h3>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">${results.cpm.toFixed(2)}</p>
              <p className="text-xs text-gray-400 mt-1">Cost per 1,000 Impressions</p>
            </div>

            <div className="bg-white dark:bg-gray-700/50 p-4 rounded-xl shadow-sm border border-purple-100 dark:border-gray-600 hover:shadow-md transition-shadow">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">CPC</h3>
              <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">${results.cpc.toFixed(2)}</p>
              <p className="text-xs text-gray-400 mt-1">Cost per Click</p>
            </div>

            <div className="bg-white dark:bg-gray-700/50 p-4 rounded-xl shadow-sm border border-purple-100 dark:border-gray-600 hover:shadow-md transition-shadow">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">CTR</h3>
              <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">{results.ctr.toFixed(2)}%</p>
              <p className="text-xs text-gray-400 mt-1">Click-Through Rate</p>
            </div>

            <div className="bg-white dark:bg-gray-700/50 p-4 rounded-xl shadow-sm border border-purple-100 dark:border-gray-600 hover:shadow-md transition-shadow">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">CPA</h3>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">${results.cpa.toFixed(2)}</p>
              <p className="text-xs text-gray-400 mt-1">Cost per Acquisition</p>
            </div>

            <div className="bg-white dark:bg-gray-700/50 p-4 rounded-xl shadow-sm border border-purple-100 dark:border-gray-600 hover:shadow-md transition-shadow">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Engagement Rate</h3>
              <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{results.engagementRate.toFixed(2)}%</p>
              <p className="text-xs text-gray-400 mt-1">Interactions per Impression</p>
            </div>

            <div className="bg-white dark:bg-gray-700/50 p-4 rounded-xl shadow-sm border border-purple-100 dark:border-gray-600 hover:shadow-md transition-shadow">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">ROAS</h3>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">{results.roas.toFixed(2)}x</p>
              <p className="text-xs text-gray-400 mt-1">Return on Ad Spend</p>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Meta Tags */}
      <div className="hidden">
        <h2>TikTok Advertising Calculator</h2>
        <p>Calculate key metrics for your TikTok ad campaigns including CPM, CPC, CTR, CPA, Engagement Rate, and ROAS</p>
        <p>Keywords: TikTok ads, TikTok advertising, social media marketing, CPM calculator, CPC calculator, ad performance metrics</p>
      </div>
    </div>
  );
};

export default TiktokAdsCalculator;
