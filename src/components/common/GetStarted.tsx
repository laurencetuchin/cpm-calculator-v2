import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GetStarted: React.FC = () => {
  const [step, setStep] = useState(1);

  const steps = [
    {
      title: 'Choose a Calculator',
      description: 'Select from CPM, Impressions, or Cost Per Impression calculators based on your needs.',
    },
    {
      title: 'Enter Your Data',
      description: 'Input your campaign details such as cost, impressions, or CPM rate.',
    },
    {
      title: 'Get Results',
      description: 'Instantly view your calculated results and optimize your marketing strategy.',
    },
  ];

  return (
    <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
      <h2 className="text-2xl font-bold mb-6">Get Started with Our Calculators</h2>
      <div className="flex justify-between mb-8">
        {steps.map((s, index) => (
          <motion.div
            key={index}
            className={`text-center ${step === index + 1 ? 'text-blue-500' : 'text-gray-500 dark:text-gray-400'}`}
            animate={{ scale: step === index + 1 ? 1.1 : 1 }}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 ${step === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
              {index + 1}
            </div>
            <p className="text-sm font-semibold">{s.title}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <h3 className="text-xl font-semibold mb-2">{steps[step - 1].title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{steps[step - 1].description}</p>
      </motion.div>
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => setStep(Math.max(1, step - 1))}
          className={`px-4 py-2 rounded ${step === 1 ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed' : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-white'}`}
          disabled={step === 1}
        >
          Previous
        </button>
        {step < 3 ? (
          <button
            onClick={() => setStep(Math.min(3, step + 1))}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Next
          </button>
        ) : (
          <a
            href="/"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Try Calculator
          </a>
        )}
      </div>
      
    </div>
  );
};

export default GetStarted;
