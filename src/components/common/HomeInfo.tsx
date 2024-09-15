import React from 'react';

const HomeInfo: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Understanding and Utilizing CPM Calculators</h2>
      
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">What is CPM?</h3>
        <p className="text-gray-700 dark:text-gray-300">
          CPM, or Cost Per Mille, is a crucial metric in advertising that represents the cost per 1,000 impressions. It's essential for evaluating the efficiency of ad campaigns across various platforms.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">How to Calculate CPM</h3>
        <p className="text-gray-700 dark:text-gray-300">
          CPM is calculated using the formula: CPM = (Total Cost of Campaign / Total Impressions) * 1000. Our calculator simplifies this process, allowing you to input your campaign cost and impressions to instantly get your CPM.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Benefits of Understanding CPM</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>Compare ad performance across different platforms</li>
          <li>Optimize budget allocation</li>
          <li>Evaluate campaign efficiency</li>
          <li>Make data-driven decisions to improve ROI</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Improving Marketing Campaigns with CPM Insights</h3>
        <p className="text-gray-700 dark:text-gray-300">
          By understanding your CPM, you can refine targeting, adjust bid strategies, and allocate resources more effectively. This leads to more cost-efficient campaigns and better overall performance.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Our Easy-to-Use CPM Calculator</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Our tool simplifies CPM calculations, saving time and reducing errors. It's designed for quick, accurate results across multiple advertising platforms, helping you make informed decisions faster.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Advanced Calculations</h3>
        <p className="text-gray-700 dark:text-gray-300">
          Our calculator also helps you convert CPM to CPC (Cost Per Click) and estimate ad reach. These additional features provide a comprehensive view of your campaign's performance and potential.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Supported Advertising Platforms</h3>
        <p className="mb-2 text-gray-700 dark:text-gray-300">
          Our CPM calculator supports a wide range of platforms, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 grid grid-cols-2 gap-2">
          <li>Google Ads</li>
          <li>Facebook Ads</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
          <li>TikTok</li>
          <li>Podcasts</li>
          <li>YouTube</li>
          <li>Snapchat</li>
          <li>Pinterest</li>
          <li>Amazon Advertising</li>
          <li>Programmatic Display</li>
          <li>Connected TV</li>
          <li>Influencer Marketing</li>
        </ul>
      </section>
    </div>
  );
};

export default HomeInfo;
