import React, { useState, useEffect } from 'react';

const EngagementRateCalculator = () => {
    const [platform, setPlatform] = useState('instagram');
    const [inputs, setInputs] = useState({
        followers: '',
        likes: '',
        comments: '',
        shares: '',
    });

    const [result, setResult] = useState({
        rate: 0,
        status: '',
        color: '',
        message: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (value === '' || /^\d*$/.test(value)) {
            setInputs((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    useEffect(() => {
        const followers = parseInt(inputs.followers) || 0;
        const likes = parseInt(inputs.likes) || 0;
        const comments = parseInt(inputs.comments) || 0;
        const shares = parseInt(inputs.shares) || 0;

        if (followers > 0) {
            const totalInteractions = likes + comments + shares;
            const rate = (totalInteractions / followers) * 100;
            const formattedRate = parseFloat(rate.toFixed(2));

            let status = '';
            let color = '';
            let message = '';

            // Benchmarks vary by platform
            const benchmarks = {
                instagram: { low: 1, avg: 3.5, high: 6 },
                tiktok: { low: 3, avg: 6, high: 10 }, // TikTok rates are generally higher
                linkedin: { low: 0.5, avg: 2, high: 4 }, // LinkedIn rates are generally lower
            };

            const b = benchmarks[platform as keyof typeof benchmarks];

            if (formattedRate < b.low) {
                status = 'Low Engagement';
                color = 'text-red-600 dark:text-red-400';
                message = `This is below average for ${platform}. Focus on higher quality content and call-to-actions.`;
            } else if (formattedRate < b.avg) {
                status = 'Average';
                color = 'text-yellow-600 dark:text-yellow-400';
                message = `This is a standard engagement rate for ${platform}. Good foundation to build on.`;
            } else if (formattedRate < b.high) {
                status = 'High Engagement';
                color = 'text-green-600 dark:text-green-400';
                message = `Great job! Your audience is highly connected to your content.`;
            } else {
                status = 'Viral / Influencer Level';
                color = 'text-purple-600 dark:text-purple-400';
                message = `Exceptional! This level of engagement is rare and highly valuable.`;
            }

            setResult({ rate: formattedRate, status, color, message });
        } else {
            setResult({ rate: 0, status: '', color: '', message: '' });
        }
    }, [inputs, platform]);

    return (
        <div className="w-full max-w-4xl mx-auto p-6 md:p-8 bg-white dark:bg-white/10 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-white/20 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <span className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center mr-3 text-purple-600 dark:text-purple-300">1</span>
                            Platform & Metrics
                        </h3>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Platform</label>
                            <div className="grid grid-cols-3 gap-2">
                                {['instagram', 'tiktok', 'linkedin'].map((p) => (
                                    <button
                                        key={p}
                                        onClick={() => setPlatform(p)}
                                        className={`py-2 px-4 rounded-xl text-sm font-bold capitalize transition-all ${platform === p
                                                ? 'bg-purple-600 text-white shadow-lg'
                                                : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10'
                                            }`}
                                    >
                                        {p}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Total Followers</label>
                                <input
                                    type="text"
                                    name="followers"
                                    value={inputs.followers}
                                    onChange={handleInputChange}
                                    placeholder="10000"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Avg. Likes</label>
                                    <input
                                        type="text"
                                        name="likes"
                                        value={inputs.likes}
                                        onChange={handleInputChange}
                                        placeholder="300"
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Avg. Comments</label>
                                    <input
                                        type="text"
                                        name="comments"
                                        value={inputs.comments}
                                        onChange={handleInputChange}
                                        placeholder="50"
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Avg. Shares/Saves (Optional)</label>
                                <input
                                    type="text"
                                    name="shares"
                                    value={inputs.shares}
                                    onChange={handleInputChange}
                                    placeholder="20"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Result Section */}
                <div className="bg-gray-50 dark:bg-black/20 rounded-2xl p-6 border border-gray-200 dark:border-white/10 flex flex-col justify-center space-y-6">

                    <div className="text-center p-8 bg-white dark:bg-black/40 rounded-xl border border-gray-200 dark:border-white/5 shadow-sm">
                        <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Engagement Rate</h3>
                        <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                            {result.rate > 0 ? `${result.rate}%` : '-'}
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

                    <div className="p-4 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-xl">
                        <p className="text-xs text-blue-800 dark:text-blue-200">
                            <span className="font-bold">Formula:</span> ((Likes + Comments + Shares) / Followers) × 100
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EngagementRateCalculator;
