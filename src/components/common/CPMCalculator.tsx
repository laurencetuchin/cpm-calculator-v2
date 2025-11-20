import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CPMCalculator = () => {
  const [cost, setCost] = useState<number | null>(null);
  const [impressions, setImpressions] = useState<number | null>(null);
  const [cpm, setCpm] = useState<number | null>(null);

  useEffect(() => {
    if (cost !== null && impressions !== null && impressions !== 0) {
      const calculatedCPM = (cost / impressions) * 1000;
      setCpm(calculatedCPM);
    } else {
      setCpm(null);
    }
  }, [cost, impressions]);

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number | null>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? parseFloat(e.target.value) : null;
    setter(value);
  };

  const handleReset = () => {
    setCost(null);
    setImpressions(null);
    setCpm(null);
  };

  const handlePresetClick = (type: 'cost' | 'impressions', value: number) => {
    if (type === 'cost') setCost(value);
    else setImpressions(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="cpm"
      className="glass max-w-md mx-auto p-6 text-gray-900 dark:text-white rounded-xl mb-4 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
      <h2 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">CPM Calculator</h2>
      <div className="space-y-6">
        <div>
          <label htmlFor="cost" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Campaign Cost ($)</label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="number"
            id="cost"
            value={cost ?? ''}
            onChange={handleInputChange(setCost)}
            className="block w-full border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm p-3 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="Enter cost"
          />
          <div className="mt-3">
            <input
              type="range"
              min="0"
              max="20000"
              step="100"
              value={cost ?? 0}
              onChange={(e) => setCost(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
              style={{
                background: cost
                  ? `linear-gradient(to right, var(--aw-color-primary) 0%, var(--aw-color-primary) ${(cost / 20000) * 100}%, rgb(229 231 235) ${(cost / 20000) * 100}%, rgb(229 231 235) 100%)`
                  : undefined
              }}
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {[100, 500, 1000, 5000, 10000].map((value) => (
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'var(--aw-color-primary)', color: 'white' }}
                whileTap={{ scale: 0.95 }}
                key={value}
                onClick={() => handlePresetClick('cost', value)}
                className="text-xs px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
              >
                ${value}
              </motion.button>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="impressions" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Impressions</label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="number"
            id="impressions"
            value={impressions ?? ''}
            onChange={handleInputChange(setImpressions)}
            className="block w-full border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm p-3 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="Enter impressions"
          />
          <div className="mt-3">
            <input
              type="range"
              min="0"
              max="2000000"
              step="10000"
              value={impressions ?? 0}
              onChange={(e) => setImpressions(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
              style={{
                background: impressions
                  ? `linear-gradient(to right, var(--aw-color-primary) 0%, var(--aw-color-primary) ${(impressions / 2000000) * 100}%, rgb(229 231 235) ${(impressions / 2000000) * 100}%, rgb(229 231 235) 100%)`
                  : undefined
              }}
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {[10000, 50000, 100000, 500000, 1000000].map((value) => (
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'var(--aw-color-primary)', color: 'white' }}
                whileTap={{ scale: 0.95 }}
                key={value}
                onClick={() => handlePresetClick('impressions', value)}
                className="text-xs px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
              >
                {value.toLocaleString()}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 min-h-[3rem]">
        <AnimatePresence>
          {cpm !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-center"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider font-semibold">Calculated CPM</p>
              <p className="text-3xl font-bold text-primary">${cpm.toFixed(2)}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleReset}
        className="mt-6 w-full py-2.5 text-sm font-medium rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
      >
        Reset Calculator
      </motion.button>
    </motion.div>
  );
};

export default CPMCalculator;