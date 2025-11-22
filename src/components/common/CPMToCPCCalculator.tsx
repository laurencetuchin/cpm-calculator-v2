import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CPMToCPCCalculator: React.FC = () => {
  const [cpm, setCpm] = useState<number | null>(null);
  const [ctr, setCtr] = useState<number | null>(null);
  const [cpc, setCpc] = useState<number | null>(null);

  useEffect(() => {
    if (cpm !== null && ctr !== null && ctr !== 0) {
      const calculatedCPC = cpm / (ctr * 10);
      setCpc(calculatedCPC);
    } else {
      setCpc(null);
    }
  }, [cpm, ctr]);

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number | null>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? parseFloat(e.target.value) : null;
    setter(value);
  };

  const handleReset = () => {
    setCpm(null);
    setCtr(null);
    setCpc(null);
  };

  const handlePresetClick = (type: 'cpm' | 'ctr', value: number) => {
    if (type === 'cpm') setCpm(value);
    else setCtr(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass max-w-md mx-auto p-6 text-gray-900 dark:text-white rounded-xl mb-4 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
      <h2 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">CPM to CPC Calculator</h2>

      <div className="space-y-6">
        {/* CPM Input */}
        <div>
          <label htmlFor="cpm" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">CPM ($)</label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="number"
            id="cpm"
            value={cpm ?? ''}
            onChange={handleInputChange(setCpm)}
            className="block w-full border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm p-3 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="Enter CPM cost"
          />
          <div className="mt-3">
            <input
              type="range"
              min="0"
              max="100"
              step="0.5"
              value={cpm ?? 0}
              onChange={(e) => setCpm(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
              style={{
                background: cpm
                  ? `linear-gradient(to right, var(--aw-color-primary) 0%, var(--aw-color-primary) ${(cpm / 100) * 100}%, rgb(229 231 235) ${(cpm / 100) * 100}%, rgb(229 231 235) 100%)`
                  : undefined
              }}
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {[5, 10, 15, 20, 25].map((value) => (
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'var(--aw-color-primary)', color: 'white' }}
                whileTap={{ scale: 0.95 }}
                key={value}
                onClick={() => handlePresetClick('cpm', value)}
                className="text-xs px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
              >
                ${value}
              </motion.button>
            ))}
          </div>
        </div>

        {/* CTR Input */}
        <div>
          <label htmlFor="ctr" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">CTR (%)</label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="number"
            id="ctr"
            value={ctr ?? ''}
            onChange={handleInputChange(setCtr)}
            className="block w-full border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm p-3 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="Enter CTR percentage"
          />
          <div className="mt-3">
            <input
              type="range"
              min="0"
              max="10"
              step="0.1"
              value={ctr ?? 0}
              onChange={(e) => setCtr(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
              style={{
                background: ctr
                  ? `linear-gradient(to right, var(--aw-color-primary) 0%, var(--aw-color-primary) ${(ctr / 10) * 100}%, rgb(229 231 235) ${(ctr / 10) * 100}%, rgb(229 231 235) 100%)`
                  : undefined
              }}
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {[0.5, 1, 1.5, 2, 2.5].map((value) => (
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'var(--aw-color-primary)', color: 'white' }}
                whileTap={{ scale: 0.95 }}
                key={value}
                onClick={() => handlePresetClick('ctr', value)}
                className="text-xs px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
              >
                {value}%
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Result Display */}
      <div className="mt-8 min-h-[3rem]">
        <AnimatePresence>
          {cpc !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-center"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider font-semibold">Estimated CPC</p>
              <p className="text-3xl font-bold text-primary">${cpc.toFixed(2)}</p>
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

export default CPMToCPCCalculator;
