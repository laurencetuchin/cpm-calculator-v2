import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CPMCalculator from './CPMCalculator';
import ImpressionsCalculator from './ImpressionsCalculator';
import CostPerImpressionCalculator from './CostPerImpressionCalculator';

const CalculatorShowcase = () => {
    const [activeTab, setActiveTab] = useState('cpm');

    const tabs = [
        { id: 'cpm', label: 'CPM Calculator', component: CPMCalculator },
        { id: 'impressions', label: 'Impressions', component: ImpressionsCalculator },
        { id: 'cost', label: 'Cost Per Impression', component: CostPerImpressionCalculator },
    ];

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
                    Powerful Marketing Tools
                </h2>
                <p className="text-xl text-gray-400">
                    Everything you need to optimize your campaign performance
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${activeTab === tab.id
                            ? 'text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                                initial={false}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10">{tab.label}</span>
                    </button>
                ))}
            </div>

            <div className="relative min-h-[600px] bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 shadow-[0_0_40px_rgba(139,92,246,0.1)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none" />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10"
                    >
                        {tabs.map((tab) => {
                            if (tab.id === activeTab) {
                                const Component = tab.component;
                                return <Component key={tab.id} />;
                            }
                            return null;
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default CalculatorShowcase;
