import React, { useState, useEffect } from 'react';

const YouTubeMoneyCalculator = () => {
    const [views, setViews] = useState(10000);
    const [rpm, setRpm] = useState(3.00);

    const [earnings, setEarnings] = useState({
        daily: 0,
        monthly: 0,
        yearly: 0,
    });

    useEffect(() => {
        const dailyEarnings = (views / 1000) * rpm;
        const monthlyEarnings = dailyEarnings * 30;
        const yearlyEarnings = dailyEarnings * 365;

        setEarnings({
            daily: parseFloat(dailyEarnings.toFixed(2)),
            monthly: parseFloat(monthlyEarnings.toFixed(2)),
            yearly: parseFloat(yearlyEarnings.toFixed(2)),
        });
    }, [views, rpm]);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(value);
    };

    const formatNumber = (value: number) => {
        return new Intl.NumberFormat('en-US').format(value);
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-6 md:p-8 bg-white dark:bg-white/10 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-white/20 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Input Section */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                            <span className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-500/20 flex items-center justify-center mr-3 text-red-600 dark:text-red-400">1</span>
                            Channel Stats
                        </h3>

                        {/* Views Slider */}
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Daily Video Views</label>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-lg">
                                    {formatNumber(views)}
                                </div>
                            </div>
                            <input
                                type="range"
                                min="1000"
                                max="1000000"
                                step="1000"
                                value={views}
                                onChange={(e) => setViews(parseInt(e.target.value))}
                                className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-600"
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-2">
                                <span>1K</span>
                                <span>1M+</span>
                            </div>
                        </div>

                        {/* RPM Slider */}
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Estimated RPM ($)</label>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-lg">
                                    ${rpm.toFixed(2)}
                                </div>
                            </div>
                            <input
                                type="range"
                                min="0.10"
                                max="20.00"
                                step="0.10"
                                value={rpm}
                                onChange={(e) => setRpm(parseFloat(e.target.value))}
                                className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-600"
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-2">
                                <span>$0.10</span>
                                <span>$20.00</span>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 italic">
                                *RPM varies by niche. Finance/Tech is high ($10+), Gaming/Vlogs is lower ($1-$3).
                            </p>
                        </div>
                    </div>
                </div>

                {/* Result Section */}
                <div className="flex flex-col justify-center space-y-4">
                    <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-2xl border border-red-200 dark:border-red-500/30 shadow-sm transform hover:scale-[1.02] transition-transform duration-300">
                        <h3 className="text-sm font-bold text-red-800 dark:text-red-200 uppercase tracking-wider mb-1">Daily Earnings</h3>
                        <div className="text-4xl font-bold text-red-600 dark:text-red-400">
                            {formatCurrency(earnings.daily)}
                        </div>
                    </div>

                    <div className="text-center p-6 bg-white dark:bg-black/40 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm">
                        <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Monthly Earnings</h3>
                        <div className="text-4xl font-bold text-gray-900 dark:text-white">
                            {formatCurrency(earnings.monthly)}
                        </div>
                    </div>

                    <div className="text-center p-6 bg-white dark:bg-black/40 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm">
                        <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Yearly Earnings</h3>
                        <div className="text-4xl font-bold text-gray-900 dark:text-white">
                            {formatCurrency(earnings.yearly)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YouTubeMoneyCalculator;
