import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CalculateCostPerImpression = () => {
  const [cost, setCost] = useState<number | null>(null);
  const [impressions, setImpressions] = useState<number | null>(null);
  const [cpi, setCpi] = useState<number | null>(null);

  useEffect(() => {
    if (cost !== null && impressions !== null && impressions !== 0) {
      const calculatedCPI = cost / impressions;
      setCpi(calculatedCPI);
    } else {
      setCpi(null);
    }
  }, [cost, impressions]);

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number | null>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? parseFloat(e.target.value) : null;
    setter(value);
  };

  const handleReset = () => {
    setCost(null);
    setImpressions(null);
    setCpi(null);
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
      className="w-full max-w-2xl mx-auto bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 shadow-[0_0_40px_rgba(139,92,246,0.1)]"
    >
      <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Cost Per Impression Calculator
      </h2>

      <div className="space-y-8">
        {/* Cost Input Section */}
        <div>
          <label htmlFor="cost" className="block text-sm font-medium text-gray-300 mb-2">
            Total Campaign Cost ($)
          </label>
          <motion.div className="relative" whileFocus={{ scale: 1.01 }}>
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="text-gray-400">$</span>
            </div>
            <input
              id="cost"
              type="number"
              min="0"
              step="0.01"
              value={cost ?? ''}
              onChange={handleInputChange(setCost)}
              className="w-full pl-8 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500 transition-all outline-none"
              placeholder="0.00"
            />
          </motion.div>

          <div className="mt-4">
            <input
              type="range"
              min="0"
              max="20000"
              step="100"
              value={cost ?? 0}
              onChange={(e) => setCost(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
              style={{
                background: cost
                  ? `linear-gradient(to right, #a855f7 0%, #ec4899 ${(cost / 20000) * 100}%, #374151 ${(cost / 20000) * 100}%, #374151 100%)`
                  : undefined
              }}
            />
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {[100, 500, 1000, 5000, 10000].map((value) => (
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(168, 85, 247, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                key={value}
                onClick={() => handlePresetClick('cost', value)}
                className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 transition-colors hover:border-purple-500/50"
              >
                ${value}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Impressions Input Section */}
        <div>
          <label htmlFor="impressions" className="block text-sm font-medium text-gray-300 mb-2">
            Number of Impressions
          </label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            id="impressions"
            type="number"
            min="1"
            value={impressions ?? ''}
            onChange={handleInputChange(setImpressions)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500 transition-all outline-none"
            placeholder="e.g. 10000"
          />

          <div className="mt-4">
            <input
              type="range"
              min="0"
              max="2000000"
              step="10000"
              value={impressions ?? 0}
              onChange={(e) => setImpressions(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
              style={{
                background: impressions
                  ? `linear-gradient(to right, #a855f7 0%, #ec4899 ${(impressions / 2000000) * 100}%, #374151 ${(impressions / 2000000) * 100}%, #374151 100%)`
                  : undefined
              }}
            />
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {[10000, 50000, 100000, 500000, 1000000].map((value) => (
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(168, 85, 247, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                key={value}
                onClick={() => handlePresetClick('impressions', value)}
                className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 transition-colors hover:border-purple-500/50"
              >
                {value.toLocaleString()}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Result Section */}
        <div className="min-h-[8rem]">
          <AnimatePresence>
            {cpi !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30"
              >
                <p className="text-center text-gray-300 mb-2">Cost Per Impression</p>
                <p className="text-center text-4xl font-bold text-white">
                  ${cpi.toFixed(4)}
                </p>
                <p className="text-center text-sm text-gray-400 mt-2">
                  (${(cpi * 1000).toFixed(2)} CPM)
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleReset}
          className="w-full py-3 bg-white/5 hover:bg-white/10 text-gray-300 font-medium rounded-xl border border-white/10 transition-colors"
        >
          Reset Calculator
        </motion.button>
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
    </motion.div>
  );
};

export default CalculateCostPerImpression;
