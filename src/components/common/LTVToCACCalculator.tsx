import React, { useState, useEffect } from 'react';

const LTVToCACCalculator = () => {
    const [inputs, setInputs] = useState({
        ltv: '',
        cac: '',
    });

    const [result, setResult] = useState({
        ratio: 0,
        status: '',
        color: '',
        message: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (value === '' || /^\d*\.?\d*$/.test(value)) {
            setInputs((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    useEffect(() => {
        const ltv = parseFloat(inputs.ltv) || 0;
        const cac = parseFloat(inputs.cac) || 0;

        if (ltv > 0 && cac > 0) {
            const ratio = parseFloat((ltv / cac).toFixed(2));
            let status = '';
            let color = '';
            let message = '';

            if (ratio < 1) {
                status = 'Critical';
                color = 'text-red-600 dark:text-red-400';
                message = 'You are losing money on every customer. Immediate action required.';
            } else if (ratio < 3) {
                status = 'Needs Improvement';
                color = 'text-yellow-600 dark:text-yellow-400';
                message = 'Your margins are tight. Focus on increasing LTV or lowering CAC.';
            } else if (ratio < 5) {
                status = 'Healthy';
                color = 'text-green-600 dark:text-green-400';
                message = 'Great job! You have a sustainable and profitable business model.';
            } else {
                status = 'High ROI';
                color = 'text-blue-600 dark:text-blue-400';
                message = 'Excellent efficiency! You can likely afford to spend more to grow faster.';
            }

            setResult({ ratio, status, color, message });
        } else {
            setResult({ ratio: 0, status: '', color: '', message: '' });
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
                            Business Metrics
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Customer Lifetime Value (LTV) ($)</label>
                                <input
                                    type="text"
                                    name="ltv"
                                    value={inputs.ltv}
                                    onChange={handleInputChange}
                                    placeholder="300.00"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Customer Acquisition Cost (CAC) ($)</label>
                                <input
                                    type="text"
                                    name="cac"
                                    value={inputs.cac}
                                    onChange={handleInputChange}
                                    placeholder="100.00"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-xl">
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                            <span className="font-bold">Goal:</span> Aim for a ratio of at least 3:1. This means for every $1 you spend, you make $3 back over the customer's lifetime.
                        </p>
                    </div>
                </div>

                {/* Result Section */}
                <div className="bg-gray-50 dark:bg-black/20 rounded-2xl p-6 border border-gray-200 dark:border-white/10 flex flex-col justify-center space-y-6">

                    <div className="text-center p-8 bg-white dark:bg-black/40 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm">
                        <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">LTV to CAC Ratio</h3>
                        <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                            {result.ratio > 0 ? `${result.ratio}:1` : '-'}
                        </div>

                        {result.status && (
                            <div className="mt-6 animate-fade-in-up">
                                <div className={`text-xl font-bold ${result.color} mb-2`}>
                                    {result.status}
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {result.message}
                                </p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LTVToCACCalculator;
