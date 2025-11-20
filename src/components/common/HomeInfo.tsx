import React from 'react';
import { motion } from 'framer-motion';

const HomeInfo: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
              Understanding & Utilizing
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">CPM Calculators</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Master the metrics that matter. Elevate your marketing strategy with precision tools and deep insights.
          </p>
        </motion.div>

        <div className="space-y-20">
          {/* What is CPM Section */}
          <motion.section variants={itemVariants} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white dark:bg-slate-900 rounded-xl p-8 md:p-10 shadow-xl border border-gray-100 dark:border-gray-800">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                      </svg>
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">What is CPM?</h3>
                  </div>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      CPM, or <strong className="text-blue-600 dark:text-blue-400">Cost Per Mille</strong>, is the heartbeat of brand awareness. It represents the cost of 1,000 advertisement impressions, serving as the global benchmark for campaign efficiency across the digital landscape.
                    </p>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 p-8 rounded-2xl border border-blue-100 dark:border-slate-700 relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
                    <p className="text-xl text-gray-700 dark:text-gray-300 italic relative z-10 font-medium">
                      "Unlike performance-based metrics, CPM focuses on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold">visibility</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold">brand awareness</span>, making it the go-to metric for top-of-funnel marketing strategies."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Calculation Section */}
          <motion.section variants={itemVariants}>
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-90"></div>
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

              <div className="relative p-8 md:p-12 text-white">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4">The Formula</h3>
                    <p className="text-blue-100 text-lg mb-8">Mastering the math behind your marketing spend.</p>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                      <div className="text-3xl md:text-5xl font-mono font-bold text-center tracking-wider">
                        CPM = <span className="text-blue-300">(</span>Cost <span className="text-white/60">/</span> Impressions<span className="text-blue-300">)</span> × 1000
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 w-full md:max-w-md">
                    <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <p className="font-mono text-sm text-blue-200 mb-2">// Example Calculation</p>
                      <div className="space-y-2 font-mono text-lg">
                        <div className="flex justify-between">
                          <span className="text-white/60">Cost:</span>
                          <span className="font-bold text-green-400">$500</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Impressions:</span>
                          <span className="font-bold text-blue-400">200,000</span>
                        </div>
                        <div className="h-px bg-white/20 my-2"></div>
                        <div className="flex justify-between text-xl">
                          <span className="text-white/80">Result:</span>
                          <span className="font-bold text-yellow-400">$2.50 CPM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Comparison Section */}
          <motion.section variants={itemVariants}>
            <h3 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">Metric Comparison Guide</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "CPM",
                  subtitle: "Cost Per Mille",
                  desc: "Best for Brand Awareness. You pay for views, regardless of interaction.",
                  color: "blue",
                  icon: "👁️",
                  tag: "Top of Funnel"
                },
                {
                  title: "CPC",
                  subtitle: "Cost Per Click",
                  desc: "Best for Driving Traffic. You only pay when someone clicks your ad.",
                  color: "green",
                  icon: "🖱️",
                  tag: "Middle of Funnel"
                },
                {
                  title: "CPA",
                  subtitle: "Cost Per Action",
                  desc: "Best for Conversions. You pay when a specific action is taken.",
                  color: "purple",
                  icon: "🎯",
                  tag: "Bottom of Funnel"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className={`relative group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden`}
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-${item.color}-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-${item.color}-100 dark:bg-${item.color}-900/30 flex items-center justify-center text-3xl shadow-inner`}>
                      {item.icon}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold bg-${item.color}-50 dark:bg-${item.color}-900/20 text-${item.color}-600 dark:text-${item.color}-400 uppercase tracking-wide`}>
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                  <p className={`text-sm font-medium text-${item.color}-600 dark:text-${item.color}-400 mb-4`}>{item.subtitle}</p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Benefits & Tips Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
            {/* Benefits */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800/30">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <span className="mr-3 text-3xl">🚀</span> Why Use a Calculator?
              </h3>
              <ul className="space-y-4">
                {[
                  "Instantly compute complex figures without errors",
                  "Plan budgets effectively for target reach",
                  "Normalize costs across different ad networks",
                  "Forecast potential reach based on budget"
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-200 dark:bg-emerald-800 flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-emerald-700 dark:text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-8 rounded-3xl border border-amber-100 dark:border-amber-800/30">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <span className="mr-3 text-3xl">💡</span> Tips to Lower CPM
              </h3>
              <ul className="space-y-4">
                {[
                  "Improve Ad Relevance & Quality Score",
                  "Broaden overly specific audience targeting",
                  "A/B test creatives (Video vs. Image)",
                  "Manage frequency to avoid ad fatigue"
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-200 dark:bg-amber-800 flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-4 h-4 text-amber-700 dark:text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Platforms Section */}
          <motion.section variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">Supported Platforms</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Google Ads", color: "bg-blue-500" },
                { name: "Facebook", color: "bg-blue-600" },
                { name: "Instagram", color: "bg-pink-500" },
                { name: "TikTok", color: "bg-black dark:bg-white" },
                { name: "LinkedIn", color: "bg-blue-700" },
                { name: "YouTube", color: "bg-red-600" },
                { name: "Snapchat", color: "bg-yellow-400" },
                { name: "Pinterest", color: "bg-red-500" },
                { name: "Amazon", color: "bg-orange-500" },
                { name: "Spotify", color: "bg-green-500" },
                { name: "Twitter/X", color: "bg-black dark:bg-gray-200" },
                { name: "Programmatic", color: "bg-indigo-500" },
              ].map((platform, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-4 py-2 bg-white dark:bg-slate-800 rounded-full border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md cursor-default transition-colors"
                >
                  <span className={`w-3 h-3 ${platform.color} rounded-full mr-2`}></span>
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{platform.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeInfo;
