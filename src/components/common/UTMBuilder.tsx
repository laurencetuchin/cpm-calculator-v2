import React, { useState, useEffect } from 'react';

const UTMBuilder = () => {
    const [formData, setFormData] = useState({
        url: '',
        source: '',
        medium: '',
        campaign: '',
        term: '',
        content: '',
    });

    const [generatedUrl, setGeneratedUrl] = useState('');
    const [copied, setCopied] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    useEffect(() => {
        if (!formData.url) {
            setGeneratedUrl('');
            return;
        }

        try {
            const url = new URL(formData.url.startsWith('http') ? formData.url : `https://${formData.url}`);

            if (formData.source) url.searchParams.set('utm_source', formData.source);
            if (formData.medium) url.searchParams.set('utm_medium', formData.medium);
            if (formData.campaign) url.searchParams.set('utm_campaign', formData.campaign);
            if (formData.term) url.searchParams.set('utm_term', formData.term);
            if (formData.content) url.searchParams.set('utm_content', formData.content);

            setGeneratedUrl(url.toString());
        } catch (e) {
            // Invalid URL, just return what we have if possible or empty
            setGeneratedUrl('');
        }
    }, [formData]);

    const handleCopy = () => {
        if (!generatedUrl) return;
        navigator.clipboard.writeText(generatedUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleClear = () => {
        setFormData({
            url: '',
            source: '',
            medium: '',
            campaign: '',
            term: '',
            content: '',
        });
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-6 md:p-8 bg-white dark:bg-white/10 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-white/20 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <span className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center mr-3 text-purple-600 dark:text-purple-300">1</span>
                            Enter Website Details
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Website URL *</label>
                                <input
                                    type="text"
                                    name="url"
                                    value={formData.url}
                                    onChange={handleInputChange}
                                    placeholder="https://yourwebsite.com"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                            <span className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center mr-3 text-blue-600 dark:text-blue-300">2</span>
                            Campaign Parameters
                        </h3>

                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Campaign Source *</label>
                                    <input
                                        type="text"
                                        name="source"
                                        value={formData.source}
                                        onChange={handleInputChange}
                                        placeholder="google, newsletter"
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Campaign Medium *</label>
                                    <input
                                        type="text"
                                        name="medium"
                                        value={formData.medium}
                                        onChange={handleInputChange}
                                        placeholder="cpc, banner, email"
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Campaign Name *</label>
                                <input
                                    type="text"
                                    name="campaign"
                                    value={formData.campaign}
                                    onChange={handleInputChange}
                                    placeholder="summer_sale, promo_code"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">Campaign Term (Optional)</label>
                                    <input
                                        type="text"
                                        name="term"
                                        value={formData.term}
                                        onChange={handleInputChange}
                                        placeholder="running+shoes"
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-1">Campaign Content (Optional)</label>
                                    <input
                                        type="text"
                                        name="content"
                                        value={formData.content}
                                        onChange={handleInputChange}
                                        placeholder="logolink, textlink"
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleClear}
                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors underline"
                    >
                        Clear all fields
                    </button>
                </div>

                {/* Result Section */}
                <div className="bg-gray-50 dark:bg-black/20 rounded-2xl p-6 border border-gray-200 dark:border-white/10 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Generated URL</h3>

                    <div className="flex-grow">
                        <div className="bg-white dark:bg-black/40 rounded-xl p-4 border border-gray-200 dark:border-white/5 min-h-[120px] break-all text-gray-600 dark:text-gray-300 font-mono text-sm shadow-inner">
                            {generatedUrl || 'Fill in the fields to generate your URL...'}
                        </div>
                    </div>

                    <div className="mt-6 space-y-4">
                        <button
                            onClick={handleCopy}
                            disabled={!generatedUrl}
                            className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center ${generatedUrl
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg hover:shadow-purple-500/25'
                                : 'bg-gray-200 dark:bg-gray-700/50 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                                }`}
                        >
                            {copied ? (
                                <>
                                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Copied!
                                </>
                            ) : (
                                <>
                                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                    </svg>
                                    Copy URL
                                </>
                            )}
                        </button>

                        {generatedUrl && (
                            <div className="p-4 bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 rounded-xl">
                                <p className="text-xs text-blue-800 dark:text-blue-200">
                                    <span className="font-bold">Tip:</span> Always test your link before using it in a campaign to ensure it directs to the correct page.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UTMBuilder;
