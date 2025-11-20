import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GetStarted: React.FC = () => {
  const [step, setStep] = useState(1);

  const steps = [
    {
      title: 'Choose a Calculator',
      description: 'Select from CPM, Impressions, or Cost Per Impression calculators based on your needs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 3m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
          <path d="M8 7h8"></path>
          <path d="M8 11h8"></path>
          <path d="M8 15h8"></path>
        </svg>
      ),
    },
    {
      title: 'Enter Your Data',
      description: 'Input your campaign details such as cost, impressions, or CPM rate.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
          <path d="M16 3v4"></path>
          <path d="M8 3v4"></path>
          <path d="M10 16h4"></path>
          <path d="M12 14v4"></path>
        </svg>
      ),
    },
    {
      title: 'Get Results',
      description: 'Instantly view your calculated results and optimize your marketing strategy.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
          <path d="M12 12l3 2"></path>
          <path d="M12 7v5"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="relative p-8 rounded-2xl shadow-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <h2 className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
        How It Works
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4 md:gap-0 relative">
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-slate-700 -z-10 -translate-y-1/2"></div>

        {steps.map((s, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center relative z-10 cursor-pointer group w-full md:w-1/3`}
            onClick={() => setStep(index + 1)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg transition-colors duration-300 ${step === index + 1
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white ring-4 ring-blue-100 dark:ring-blue-900'
                  : 'bg-white dark:bg-slate-700 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-slate-600 group-hover:border-blue-400 dark:group-hover:border-blue-500'
                }`}
              animate={{
                scale: step === index + 1 ? 1.1 : 1,
                boxShadow: step === index + 1 ? "0 10px 25px -5px rgba(59, 130, 246, 0.5)" : "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
              }}
            >
              {s.icon}
            </motion.div>
            <p className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${step === index + 1 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
              }`}>
              Step {index + 1}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="min-h-[180px] flex flex-col justify-center items-center text-center max-w-2xl mx-auto mb-10">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{steps[step - 1].title}</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{steps[step - 1].description}</p>
        </motion.div>
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-gray-100 dark:border-slate-700">
        <button
          onClick={() => setStep(Math.max(1, step - 1))}
          className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${step === 1
              ? 'bg-gray-100 dark:bg-slate-800 text-gray-400 dark:text-slate-600 cursor-not-allowed'
              : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-600 border border-gray-200 dark:border-slate-600 shadow-sm hover:shadow'
            }`}
          disabled={step === 1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15 6l-6 6l6 6"></path>
          </svg>
          Previous
        </button>

        <div className="flex gap-2">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${i + 1 === step ? 'bg-blue-500' : 'bg-gray-300 dark:bg-slate-600'}`}
            />
          ))}
        </div>

        {step < 3 ? (
          <button
            onClick={() => setStep(Math.min(3, step + 1))}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium shadow-lg hover:shadow-blue-500/30 transition-all duration-200 flex items-center gap-2"
          >
            Next
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 6l6 6l-6 6"></path>
            </svg>
          </button>
        ) : (
          <a
            href="/"
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-medium shadow-lg hover:shadow-purple-500/30 transition-all duration-200 flex items-center gap-2"
          >
            Try Calculator
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 12l5 5l10 -10"></path>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default GetStarted;
