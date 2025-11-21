import React, { useState, useEffect } from 'react';

const BreakEvenROASCalculator = () => {
    const [inputs, setInputs] = useState({
        productPrice: '',
        cogs: '',
        miscCosts: '',
    });

    const [results, setResults] = useState({
        breakEvenROAS: 0,
        breakEvenCPA: 0,
        profitMargin: 0,
        profitDollars: 0,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        // Allow only numbers and decimals
        if (value === '' || /^\d*\.?\d*$/.test(value)) {
            setInputs((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    useEffect(() => {
        const price = parseFloat(inputs.productPrice) || 0;
        const cogs = parseFloat(inputs.cogs) || 0;
        const misc = parseFloat(inputs.miscCosts) || 0;

        const totalCosts = cogs + misc;
        const profit = price - totalCosts;

        if (price > 0 && profit > 0) {
            const margin = (profit / price) * 100;
            const breakEvenROAS = price / profit;

            setResults({
                breakEvenROAS: parseFloat(breakEvenROAS.toFixed(2)),
                breakEvenCPA: parseFloat(profit.toFixed(2)),
                profitMargin: parseFloat(margin.toFixed(2)),
                profitDollars: parseFloat(profit.toFixed(2)),
            });
        } else {
            setResults({
                breakEvenROAS: 0,
                breakEvenCPA: 0,
                profitMargin: 0,
                profitDollars: 0,
            });
        }
    }, [inputs]);

    return (
        <div className="w-full max-w-4xl mx-auto p-6 md:p-8 bg-white dark:bg-white/10 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-white/20 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <span className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center mr-3 text-purple-600 dark:text-purple-300">1</span>
                            Product Details
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Selling Price (AOV) ($)</label>
                                <input
                                    type="text"
                                    name="productPrice"
                                    value={inputs.productPrice}
                                    onChange={handleInputChange}
                                    placeholder="100.00"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Cost of Goods Sold (COGS) ($)</label>
                                <input
                                    type="text"
                                    name="cogs"
                                    value={inputs.cogs}
                                    onChange={handleInputChange}
                                    placeholder="40.00"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Misc. Costs (Shipping/Fees) ($)</label>
                                <input
                                    type="text"
                                    name="miscCosts"
                                    value={inputs.miscCosts}
                                    onChange={handleInputChange}
                                    placeholder="10.00"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-xl">
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                            <span className="font-bold">Note:</span> Break-Even ROAS is the minimum return you need to cover your product and shipping costs. Anything above this is profit.
                        </p>
                    </div>
                </div>

                {/* Result Section */}
                <div className="bg-gray-50 dark:bg-black/20 rounded-2xl p-6 border border-gray-200 dark:border-white/10 flex flex-col justify-center space-y-6">

                    {/* Main Metric: Break-Even ROAS */}
                    <div className="text-center p-6 bg-white dark:bg-black/40 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm">
                        <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Break-Even ROAS</h3>
                        <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                            {results.breakEvenROAS > 0 ? `${results.breakEvenROAS}x` : '-'}
                        </div>
                        <p className="text-xs text-gray-400 mt-2">Minimum ROAS to not lose money</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Break-Even CPA */}
                        <div className="text-center p-4 bg-white dark:bg-black/40 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm">
                            <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Max CPA</h3>
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                {results.breakEvenCPA > 0 ? `$${results.breakEvenCPA}` : '-'}
                            </div>
                            <p className="text-[10px] text-gray-400 mt-1">Max ad spend per sale</p>
                        </div>

                        {/* Profit Margin */}
                        <div className="text-center p-4 bg-white dark:bg-black/40 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm">
                            <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Profit Margin</h3>
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                {results.profitMargin > 0 ? `${results.profitMargin}%` : '-'}
                            </div>
                            <p className="text-[10px] text-gray-400 mt-1">Before ad spend</p>
                        </div>
                    </div>

                    {/* Visual Bar */}
                    {results.breakEvenROAS > 0 && (
                        <div className="mt-4">
                            <div className="flex justify-between text-xs text-gray-500 mb-1">
                                <span>Loss</span>
                                <span>Profit</span>
                            </div>
                            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden flex">
                                <div className="h-full bg-red-500" style={{ width: '50%' }}></div>
                                <div className="h-full bg-green-500" style={{ width: '50%' }}></div>
                            </div>
                            <div className="text-center mt-2 text-xs font-medium text-gray-600 dark:text-gray-300">
                                Target ROAS above <span className="text-green-500 font-bold">{results.breakEvenROAS}</span> to be profitable
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default BreakEvenROASCalculator;
