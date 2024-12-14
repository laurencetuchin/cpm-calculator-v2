import React, { useState } from 'react';

interface CalculatorInputs {
  campaignType: string;
  budget: number;
  impressions: number;
  clicks: number;
  conversions: number;
  engagements: number;
}

const TiktokAdsCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    campaignType: 'awareness',
    budget: 0,
    impressions: 0, 
    clicks: 0,
    conversions: 0,
    engagements: 0
  });

  const [results, setResults] = useState({
    cpm: 0,
    cpc: 0,
    ctr: 0,
    cpa: 0,
    engagementRate: 0,
    roas: 0
  });

  const campaignTypes = [
    { value: 'awareness', label: 'Brand Awareness' },
    { value: 'traffic', label: 'Traffic' },
    { value: 'conversions', label: 'Conversions' },
    { value: 'engagement', label: 'Engagement' },
    { value: 'video', label: 'Video Views' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: name === 'campaignType' ? value : parseFloat(value) || 0
    }));
  };

  const calculateMetrics = () => {
    const cpm = inputs.impressions ? (inputs.budget / inputs.impressions) * 1000 : 0;
    const cpc = inputs.clicks ? inputs.budget / inputs.clicks : 0;
    const ctr = inputs.impressions ? (inputs.clicks / inputs.impressions) * 100 : 0;
    const cpa = inputs.conversions ? inputs.budget / inputs.conversions : 0;
    const engagementRate = inputs.impressions ? (inputs.engagements / inputs.impressions) * 100 : 0;
    const roas = inputs.budget ? (inputs.conversions * 50) / inputs.budget : 0; // Assuming $50 average order value

    setResults({ cpm, cpc, ctr, cpa, engagementRate, roas });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        TikTok Ads Calculator
      </h1>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Campaign Type
          </label>
          <select
            name="campaignType"
            value={inputs.campaignType}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
          >
            {campaignTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Budget ($)
            </label>
            <input
              type="number"
              name="budget"
              value={inputs.budget}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Impressions
            </label>
            <input
              type="number"
              name="impressions"
              value={inputs.impressions}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Clicks
            </label>
            <input
              type="number"
              name="clicks"
              value={inputs.clicks}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Conversions
            </label>
            <input
              type="number"
              name="conversions"
              value={inputs.conversions}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Engagements
            </label>
            <input
              type="number"
              name="engagements"
              value={inputs.engagements}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
        </div>

        <button
          onClick={calculateMetrics}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Calculate Metrics
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">CPM (Cost per 1000 Impressions)</h3>
            <p className="text-2xl">${results.cpm.toFixed(2)}</p>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">CPC (Cost per Click)</h3>
            <p className="text-2xl">${results.cpc.toFixed(2)}</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">CTR (Click-Through Rate)</h3>
            <p className="text-2xl">{results.ctr.toFixed(2)}%</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">CPA (Cost per Acquisition)</h3>
            <p className="text-2xl">${results.cpa.toFixed(2)}</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Engagement Rate</h3>
            <p className="text-2xl">{results.engagementRate.toFixed(2)}%</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">ROAS (Return on Ad Spend)</h3>
            <p className="text-2xl">{results.roas.toFixed(2)}x</p>
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
