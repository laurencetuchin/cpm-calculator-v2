import React, { useState, useEffect } from 'react';

const CACCalculator = () => {
    const [inputs, setInputs] = useState({
        totalSpend: '',
        newCustomers: '',
    });

    const [cac, setCac] = useState(0);

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
        const spend = parseFloat(inputs.totalSpend) || 0;
        const customers = parseFloat(inputs.newCustomers) || 0;

        if (spend > 0 && customers > 0) {
            setCac(parseFloat((spend / customers).toFixed(2)));
        } else {
            setCac(0);
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
                            Campaign Details
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Total Marketing Spend ($)</label>
                                <input
                                    type="text"
                                    name="totalSpend"
                                    value={inputs.totalSpend}
                                    onChange={handleInputChange}
                                    placeholder="1000.00"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">New Customers Acquired</label>
                                <input
                                    type="text"
                                    name="newCustomers"
                                    value={inputs.newCustomers}
                                    onChange={handleInputChange}
                                    placeholder="10"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-xl">
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                            <span className="font-bold">Pro Tip:</span> Include all costs (ad spend, software, salaries) for a true CAC calculation.
                        </p>
                    </div>
                </div>

                {/* Result Section */}
                <div className="bg-gray-50 dark:bg-black/20 rounded-2xl p-6 border border-gray-200 dark:border-white/10 flex flex-col justify-center space-y-6">

                    <div className="text-center p-8 bg-white dark:bg-black/40 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm">
                        <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Customer Acquisition Cost</h3>
                        <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                            {cac > 0 ? `$${cac}` : '-'}
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                            You spend <span className="font-bold text-gray-900 dark:text-white">${cac}</span> to acquire each new customer.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CACCalculator;
