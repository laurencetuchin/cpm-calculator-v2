export interface GlossaryTerm {
  slug: string;
  term: string;
  abbreviation?: string;
  category: 'Paid Advertising' | 'Social Media' | 'Analytics' | 'E-commerce' | 'General';
  shortDefinition: string;
  fullDefinition: string;
  formula?: string;
  formulaDescription?: string;
  example?: string;
  keyPoints: string[];
  benchmarks?: Array<{ label: string; value: string; note?: string }>;
  relatedTerms: string[];
  relatedCalculator?: { href: string; label: string };
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: 'cpm',
    term: 'Cost Per Mille',
    abbreviation: 'CPM',
    category: 'Paid Advertising',
    shortDefinition: 'The cost an advertiser pays for one thousand ad impressions.',
    fullDefinition:
      'Cost Per Mille (CPM) is an advertising pricing model that defines the price paid for 1,000 impressions of an advertisement. "Mille" is the Latin word for thousand. CPM is the standard metric for buying and selling display advertising across digital platforms including Google Display Network, Facebook, Instagram, LinkedIn, and programmatic exchanges. It is primarily used for brand awareness campaigns where reach and visibility are the primary goals rather than clicks or conversions.',
    formula: 'CPM = (Total Campaign Cost ÷ Total Impressions) × 1,000',
    formulaDescription: 'Divide your total ad spend by the number of impressions, then multiply by 1,000.',
    example:
      'If you spend $500 on a campaign that delivers 200,000 impressions, your CPM = ($500 ÷ 200,000) × 1,000 = $2.50. You paid $2.50 for every 1,000 people who saw your ad.',
    keyPoints: [
      'CPM measures the cost of visibility, not engagement or action',
      'Lower CPM means reaching more people for less money',
      'CPM rates vary widely by platform, industry, and audience',
      'Best used for brand awareness and reach objectives',
      'Can be compared across platforms to evaluate media efficiency',
    ],
    benchmarks: [
      { label: 'Facebook Ads', value: '$5.61 – $12.58', note: 'Varies by targeting and season' },
      { label: 'Instagram Ads', value: '$2.50 – $10.83', note: 'Reels and Stories trend higher' },
      { label: 'Google Display', value: '$2.80 – $5.00', note: 'Rises during Q4 holiday season' },
      { label: 'YouTube Ads', value: '$3.53 – $9.29', note: 'Video formats average higher' },
      { label: 'LinkedIn Ads', value: '$5.01 – $33.80', note: 'B2B targeting increases cost' },
    ],
    relatedTerms: ['ecpm', 'vcpm', 'cpc', 'cpa', 'impressions'],
    relatedCalculator: { href: '/cpm-calculator', label: 'CPM Calculator' },
  },
  {
    slug: 'cpc',
    term: 'Cost Per Click',
    abbreviation: 'CPC',
    category: 'Paid Advertising',
    shortDefinition: 'The amount an advertiser pays each time a user clicks on their ad.',
    fullDefinition:
      'Cost Per Click (CPC) is a performance-based pricing model in which advertisers are charged each time a user clicks on their advertisement. Unlike CPM where you pay for impressions regardless of interaction, CPC ensures you only pay when someone actively engages with your ad. CPC is widely used in search advertising (Google Ads, Bing Ads) and is also available on social platforms. It is the preferred model for direct-response campaigns aimed at driving traffic, leads, or conversions.',
    formula: 'CPC = Total Ad Spend ÷ Total Clicks',
    formulaDescription: 'Divide your total advertising cost by the number of clicks your ad received.',
    example:
      'If you spend $200 and your ad receives 400 clicks, your CPC = $200 ÷ 400 = $0.50 per click. Each visitor to your site cost you fifty cents.',
    keyPoints: [
      'You only pay when someone clicks — no wasted spend on uninterested viewers',
      'CPC is ideal for traffic, lead generation, and conversion campaigns',
      'Average CPC varies enormously by industry (legal, finance, and insurance are among the most expensive)',
      'Quality Score on Google Ads directly impacts your CPC',
      'Can be combined with CPM in mixed-model campaigns',
    ],
    benchmarks: [
      { label: 'Google Search Ads (avg)', value: '$1.00 – $2.00', note: 'Highly variable by industry' },
      { label: 'Facebook Ads (avg)', value: '$0.26 – $0.97', note: 'Lower than search' },
      { label: 'LinkedIn Ads (avg)', value: '$5.00 – $8.00', note: 'Premium B2B audience' },
      { label: 'Finance / Legal (Google)', value: '$5.00 – $50+', note: 'Highest-cost verticals' },
    ],
    relatedTerms: ['cpm', 'cpa', 'ctr', 'quality-score'],
    relatedCalculator: { href: '/cpm-to-cpc-calculator', label: 'CPM to CPC Calculator' },
  },
  {
    slug: 'cpa',
    term: 'Cost Per Action',
    abbreviation: 'CPA',
    category: 'Paid Advertising',
    shortDefinition: 'The cost an advertiser pays for each completed conversion or desired action.',
    fullDefinition:
      "Cost Per Action (CPA), also called Cost Per Acquisition or Cost Per Conversion, is an advertising pricing model where advertisers pay only when a user completes a defined action. That action could be a purchase, form submission, app install, phone call, or newsletter sign-up — any measurable conversion event. CPA is the most performance-driven model because you only pay for actual results. It's calculated from your total spend divided by the number of conversions, and is closely tied to your return on ad spend (ROAS).",
    formula: 'CPA = Total Ad Spend ÷ Number of Conversions',
    formulaDescription: 'Divide your total ad spend by the number of completed actions (conversions).',
    example:
      'If you spend $1,000 and generate 40 purchases, your CPA = $1,000 ÷ 40 = $25.00 per acquisition. Each customer cost you $25 to acquire.',
    keyPoints: [
      'CPA directly measures acquisition efficiency',
      'Your target CPA should be below your average order value or LTV to remain profitable',
      'CPA is influenced by landing page quality, offer relevance, and audience targeting',
      'Automated bidding strategies (Target CPA on Google) optimize toward this metric',
      'Compare CPA to Customer Lifetime Value to assess long-term profitability',
    ],
    relatedTerms: ['cpc', 'roas', 'cac', 'conversion-rate', 'ltv'],
    relatedCalculator: { href: '/cac-calculator', label: 'CAC Calculator' },
  },
  {
    slug: 'cpl',
    term: 'Cost Per Lead',
    abbreviation: 'CPL',
    category: 'Paid Advertising',
    shortDefinition: 'The cost an advertiser pays for each qualified lead generated through an ad campaign.',
    fullDefinition:
      'Cost Per Lead (CPL) is an advertising metric that measures how much it costs to generate one lead — typically a form fill, sign-up, contact request, or trial registration. CPL is a subset of CPA where the conversion event is specifically a lead rather than a direct purchase. It is especially important in B2B marketing and industries with long sales cycles, where a sale may not happen for weeks or months after the initial lead is captured. CPL must be evaluated alongside lead quality and close rate to determine true campaign profitability.',
    formula: 'CPL = Total Ad Spend ÷ Number of Leads Generated',
    formulaDescription: 'Divide your total spend by the total number of leads your campaign produced.',
    example:
      'If you spend $2,000 on a LinkedIn campaign and collect 80 lead form submissions, your CPL = $2,000 ÷ 80 = $25.00 per lead.',
    keyPoints: [
      'A lower CPL is not always better — lead quality matters more than volume',
      'CPL benchmarks vary widely by channel; LinkedIn CPLs tend to be higher than Facebook but often yield higher-quality leads',
      'CPL should be evaluated alongside your lead-to-close rate and average deal value',
      'Lead magnets, landing page optimization, and audience refinement are the primary CPL levers',
    ],
    relatedTerms: ['cpa', 'cac', 'conversion-rate', 'cpc'],
    relatedCalculator: { href: '/cac-calculator', label: 'CAC Calculator' },
  },
  {
    slug: 'cpv',
    term: 'Cost Per View',
    abbreviation: 'CPV',
    category: 'Paid Advertising',
    shortDefinition: 'The amount an advertiser pays each time a user views their video ad.',
    fullDefinition:
      "Cost Per View (CPV) is the pricing model used for video advertising campaigns, where you pay each time a viewer watches your video ad. On YouTube's TrueView format, a view is counted when someone watches at least 30 seconds of your ad (or the full duration if shorter) or interacts with it. CPV allows advertisers to ensure they're only paying for engaged video viewers, not passive scrollers. It's the video advertising equivalent of CPC for display, shifting cost from impressions to actual views.",
    formula: 'CPV = Total Video Ad Spend ÷ Total Views',
    formulaDescription: 'Divide your total video campaign spend by the number of qualifying views.',
    example:
      'If your YouTube campaign costs $300 and generates 15,000 views, your CPV = $300 ÷ 15,000 = $0.02 per view.',
    keyPoints: [
      "On YouTube TrueView, you don't pay if viewers skip before 30 seconds",
      'CPV is ideal for video-first campaigns focused on brand storytelling',
      'Average YouTube CPV ranges from $0.01 to $0.30 depending on targeting',
      'View-through rate (VTR) measures what percentage of viewers completed your video',
    ],
    relatedTerms: ['cpm', 'cpc', 'engagement-rate'],
    relatedCalculator: { href: '/youtube-money-calculator', label: 'YouTube Money Calculator' },
  },
  {
    slug: 'ecpm',
    term: 'Effective Cost Per Mille',
    abbreviation: 'eCPM',
    category: 'Paid Advertising',
    shortDefinition: 'A normalized metric expressing revenue or cost per 1,000 impressions regardless of the original pricing model.',
    fullDefinition:
      'Effective Cost Per Mille (eCPM) is a standardized metric that converts any ad pricing model — whether CPC, CPA, CPV, or flat-rate — into a comparable cost-per-1,000-impressions figure. Publishers use eCPM to compare revenue across ad units with different pricing models. Advertisers use it to benchmark campaign efficiency across channels where they may be buying on different models. A high eCPM for a publisher means their inventory is valued highly; for an advertiser it means they are paying a premium.',
    formula: 'eCPM = (Total Revenue or Spend ÷ Total Impressions) × 1,000',
    formulaDescription: 'Divide total earnings or spend by total impressions, then multiply by 1,000.',
    example:
      'A publisher runs a CPC campaign that earns $150 from 300,000 impressions. eCPM = ($150 ÷ 300,000) × 1,000 = $0.50. Compare this to a CPM campaign paying $2.00 — the CPM deal pays more per impression.',
    keyPoints: [
      'eCPM allows apples-to-apples comparison between campaigns on different pricing models',
      'Publishers use eCPM to optimize ad unit placement and fill strategy',
      'eCPM is not the same as CPM — it is a derived metric, not a directly negotiated price',
      'A rising eCPM indicates improving monetization efficiency',
    ],
    relatedTerms: ['cpm', 'vcpm', 'impressions', 'cpc'],
    relatedCalculator: { href: '/cpm-calculator', label: 'CPM Calculator' },
  },
  {
    slug: 'vcpm',
    term: 'Viewable Cost Per Mille',
    abbreviation: 'vCPM',
    category: 'Paid Advertising',
    shortDefinition: 'The cost per 1,000 ad impressions that were actually seen by a user (viewable impressions).',
    fullDefinition:
      "Viewable Cost Per Mille (vCPM) is a pricing model that only counts impressions where the ad was actually in view on the user's screen. The MRC (Media Rating Council) standard defines a display ad as viewable when at least 50% of its pixels are visible on screen for at least one continuous second (two seconds for video). Because a significant portion of served impressions are never seen (due to below-the-fold placement, ad stacking, or quick scrolling), vCPM provides a more accurate measure of actual ad exposure than standard CPM.",
    formula: 'vCPM = (Total Spend ÷ Viewable Impressions) × 1,000',
    formulaDescription: 'Same as CPM but using only viewable impressions in the denominator.',
    example:
      'You spend $400 on a campaign delivering 500,000 total impressions, of which 300,000 are viewable. Your vCPM = ($400 ÷ 300,000) × 1,000 = $1.33.',
    keyPoints: [
      "vCPM campaigns guarantee you're only paying for ads that were actually seen",
      'Industry average viewability rate is approximately 50–60% for display ads',
      'vCPM CPMs are higher than standard CPM because the inventory is more valuable',
      'Google Display Network supports vCPM (Target vCPM) bidding',
    ],
    relatedTerms: ['cpm', 'ecpm', 'impressions'],
    relatedCalculator: { href: '/cpm-calculator', label: 'CPM Calculator' },
  },
  {
    slug: 'roas',
    term: 'Return on Ad Spend',
    abbreviation: 'ROAS',
    category: 'E-commerce',
    shortDefinition: 'The revenue generated for every dollar spent on advertising.',
    fullDefinition:
      "Return on Ad Spend (ROAS) measures the revenue efficiency of your advertising campaigns. It tells you how many dollars of revenue you earn for every dollar you invest in ads. ROAS is the most direct measure of a campaign's financial performance and is widely used in e-commerce, DTC brands, and any business where purchases are tracked online. A ROAS of 4.0 (or 400%) means you're generating $4 in revenue for every $1 spent. ROAS differs from ROI in that it focuses purely on ad spend vs. revenue, without accounting for other costs like COGS or overhead.",
    formula: 'ROAS = Revenue from Ads ÷ Ad Spend',
    formulaDescription: 'Divide the total revenue attributed to your ad campaign by the total amount spent on those ads.',
    example:
      'You spend $5,000 on Google Shopping ads and attribute $25,000 in sales to those campaigns. ROAS = $25,000 ÷ $5,000 = 5.0 (or 500%). For every $1 you spent, you earned $5 back.',
    keyPoints: [
      'ROAS above 1.0 means campaigns are generating more revenue than they cost',
      'Break-even ROAS depends on your gross margin — a 30% margin product requires at least 3.3× ROAS to break even',
      'ROAS is not the same as profit — you must also account for COGS and overhead',
      'Target ROAS (tROAS) bidding in Google Ads automates bids to hit a desired ROAS',
      'Benchmark ROAS varies by industry; e-commerce averages around 4×',
    ],
    relatedTerms: ['roi', 'cpa', 'cac', 'ltv', 'conversion-rate'],
    relatedCalculator: { href: '/break-even-roas-calculator', label: 'Break-Even ROAS Calculator' },
  },
  {
    slug: 'roi',
    term: 'Return on Investment',
    abbreviation: 'ROI',
    category: 'General',
    shortDefinition: 'A measure of the profit generated relative to the total investment made.',
    fullDefinition:
      "Return on Investment (ROI) is a fundamental business metric that measures the net profit generated from an investment relative to its cost. In marketing, ROI takes a broader view than ROAS — it accounts for all costs including ad spend, creative production, agency fees, and cost of goods sold. A positive ROI means your investment returned more than it cost. Marketing ROI is typically expressed as a percentage. Unlike ROAS, which focuses purely on ad spend vs. revenue, ROI tells you whether your marketing activity is truly profitable after all expenses.",
    formula: 'ROI = (Net Profit ÷ Total Investment) × 100%',
    formulaDescription: 'Subtract total costs from revenue to get net profit, then divide by total investment and multiply by 100.',
    example:
      'You invest $10,000 in a campaign (including ad spend + creative). It generates $30,000 in revenue with $15,000 in COGS. Net profit = $30,000 – $15,000 – $10,000 = $5,000. ROI = ($5,000 ÷ $10,000) × 100% = 50%.',
    keyPoints: [
      'ROI above 0% means the investment was profitable',
      'ROI accounts for all costs, while ROAS only measures ad spend vs. revenue',
      'Marketing ROI is harder to measure because attribution is complex',
      "Longer attribution windows improve ROI accuracy for products with long purchase cycles",
    ],
    relatedTerms: ['roas', 'cac', 'ltv', 'cpa'],
    relatedCalculator: { href: '/break-even-roas-calculator', label: 'Break-Even ROAS Calculator' },
  },
  {
    slug: 'cac',
    term: 'Customer Acquisition Cost',
    abbreviation: 'CAC',
    category: 'E-commerce',
    shortDefinition: 'The total cost of acquiring one new customer, including all marketing and sales expenses.',
    fullDefinition:
      'Customer Acquisition Cost (CAC) is the total cost incurred to acquire a single new paying customer. It includes all marketing spend, sales team costs, tools, and overhead associated with the acquisition process. CAC is one of the most important metrics for determining business model viability. When evaluated alongside Customer Lifetime Value (LTV), it reveals whether your business can sustainably grow. The LTV:CAC ratio is the gold-standard health metric for subscription businesses and venture-backed startups.',
    formula: 'CAC = Total Sales & Marketing Spend ÷ Number of New Customers Acquired',
    formulaDescription: 'Add up all sales and marketing costs over a period, then divide by the number of new customers gained.',
    example:
      "You spend $50,000 on marketing and $20,000 on sales salaries in a quarter and acquire 700 new customers. CAC = $70,000 ÷ 700 = $100 per customer.",
    keyPoints: [
      'CAC should always be compared to LTV — an LTV:CAC ratio of 3:1 is a common benchmark',
      'Blended CAC includes all acquisition channels; paid CAC isolates just paid media',
      'Reducing CAC improves profitability without requiring more revenue',
      'CAC payback period shows how quickly a customer recoups their acquisition cost',
    ],
    relatedTerms: ['ltv', 'roas', 'cpa', 'conversion-rate'],
    relatedCalculator: { href: '/cac-calculator', label: 'CAC Calculator' },
  },
  {
    slug: 'ltv',
    term: 'Customer Lifetime Value',
    abbreviation: 'LTV',
    category: 'E-commerce',
    shortDefinition: 'The total revenue a business can expect from a single customer over the entire relationship.',
    fullDefinition:
      "Customer Lifetime Value (LTV, also written CLV) estimates the total net revenue or profit generated by a customer over the entire duration of their relationship with a business. LTV is foundational to understanding how much you can afford to spend acquiring a customer (CAC). Businesses with a high LTV can outspend competitors on acquisition because they recoup their investment over time. LTV is especially critical for subscription businesses, SaaS companies, and brands with strong repeat purchase rates.",
    formula: 'LTV = Average Order Value × Purchase Frequency × Average Customer Lifespan',
    formulaDescription: 'Multiply the average order value by how often customers buy and how long they stay customers.',
    example:
      'A subscription box charges $40/month. Average customer stays 18 months. LTV = $40 × 12 months × 1.5 years = $720. You can afford up to ~$240 in CAC to maintain a 3:1 LTV:CAC ratio.',
    keyPoints: [
      'LTV:CAC ratio of 3:1 is the benchmark for sustainable growth',
      'Increasing LTV through retention is often more efficient than reducing CAC',
      'Segmenting LTV by acquisition channel helps identify your most valuable customers',
      'Predictive LTV models are used in paid media bidding to optimize for high-value users',
    ],
    relatedTerms: ['cac', 'roas', 'conversion-rate', 'cpa'],
    relatedCalculator: { href: '/ltv-to-cac-calculator', label: 'LTV to CAC Calculator' },
  },
  {
    slug: 'ctr',
    term: 'Click-Through Rate',
    abbreviation: 'CTR',
    category: 'Analytics',
    shortDefinition: 'The percentage of people who click on an ad after seeing it.',
    fullDefinition:
      "Click-Through Rate (CTR) is the ratio of users who click on a specific link or ad to the total number of users who viewed it (impressions). CTR measures how compelling your creative and copy are at driving action. A high CTR means your message is resonating with your audience; a low CTR suggests your creative, targeting, or offer needs work. CTR is used across all digital channels — search ads, display ads, email, and social — though benchmark rates vary dramatically by channel and format.",
    formula: 'CTR = (Total Clicks ÷ Total Impressions) × 100%',
    formulaDescription: 'Divide total clicks by total impressions and multiply by 100 to get a percentage.',
    example:
      'Your ad receives 500 clicks from 50,000 impressions. CTR = (500 ÷ 50,000) × 100% = 1.0%. One in every 100 people who saw your ad clicked it.',
    keyPoints: [
      'Average CTR varies widely: Google Search (~2–5%), Display (~0.1%), Email (~2–3%)',
      'CTR is a quality signal in Google Ads — higher CTR improves Quality Score and lowers CPC',
      'CTR alone does not indicate campaign success — pair it with conversion rate',
      'A/B testing headlines and visuals is the fastest way to improve CTR',
    ],
    relatedTerms: ['cpc', 'conversion-rate', 'impressions', 'quality-score'],
    relatedCalculator: { href: '/cpm-to-cpc-calculator', label: 'CPM to CPC Calculator' },
  },
  {
    slug: 'conversion-rate',
    term: 'Conversion Rate',
    abbreviation: 'CR',
    category: 'Analytics',
    shortDefinition: 'The percentage of visitors or users who complete a desired action.',
    fullDefinition:
      'Conversion Rate (CR or CVR) measures the proportion of users who complete a desired action out of those who had the opportunity to do so. In advertising, this typically means the percentage of ad clicks that result in a purchase, sign-up, or other defined goal. Conversion rate is one of the most impactful metrics in performance marketing — improving conversion rate directly reduces your CPA and improves ROAS without changing your ad spend. Conversion rate optimization (CRO) is the discipline dedicated to improving this metric through landing page testing, UX improvements, and offer refinement.',
    formula: 'Conversion Rate = (Conversions ÷ Total Visitors) × 100%',
    formulaDescription: 'Divide the number of completed actions by total visitors (or clicks) and multiply by 100.',
    example:
      '1,000 users click your ad and land on your product page. 30 purchase. Conversion Rate = (30 ÷ 1,000) × 100% = 3%. Three in every hundred visitors converted.',
    keyPoints: [
      'E-commerce average conversion rate is typically 1–4%',
      'Conversion rate is influenced by landing page quality, offer, pricing, and trust signals',
      'A 1% improvement in CR can halve your effective CPA',
      'Segment conversion rates by traffic source to identify top-performing channels',
    ],
    relatedTerms: ['cpa', 'ctr', 'roas', 'cac'],
    relatedCalculator: { href: '/break-even-roas-calculator', label: 'Break-Even ROAS Calculator' },
  },
  {
    slug: 'impressions',
    term: 'Ad Impressions',
    category: 'Analytics',
    shortDefinition: 'The number of times an advertisement is displayed, regardless of whether it was clicked.',
    fullDefinition:
      "An impression is counted each time an ad is served and displayed on a screen. Impressions measure raw exposure — how many times your ad appeared in front of potential viewers. One user can generate multiple impressions if they see your ad more than once (see: Frequency). Impressions are the foundational unit of measurement in display advertising and are the basis for CPM pricing. It's important to distinguish between served impressions (the ad was technically delivered) and viewable impressions (the ad was actually on-screen).",
    keyPoints: [
      'One user can generate many impressions — impressions ≠ unique viewers',
      'Impressions are a supply metric; they measure potential reach, not guaranteed views',
      'Used as the denominator in CPM, CTR, and eCPM calculations',
      'Unique impressions deduplicate by user; total impressions do not',
    ],
    relatedTerms: ['reach', 'frequency', 'cpm', 'vcpm'],
    relatedCalculator: { href: '/cpm-calculator', label: 'CPM Calculator' },
  },
  {
    slug: 'reach',
    term: 'Ad Reach',
    category: 'Analytics',
    shortDefinition: 'The number of unique people who saw your ad at least once.',
    fullDefinition:
      "Reach is the count of unique individuals who were exposed to your ad at least once during a campaign period. Unlike impressions (which count every instance an ad was displayed), reach deduplicates across multiple exposures to the same person. Reach is a measure of the size of your addressable audience. Brands prioritizing awareness want maximum reach; retargeting campaigns intentionally have low reach but high frequency to stay top-of-mind with a specific group.",
    keyPoints: [
      'Reach × Frequency = Total Impressions',
      'Maximizing reach is the goal of awareness campaigns targeting new audiences',
      "Reach is capped by your target audience size — you can't reach more people than exist in your targeting parameters",
      'Incremental reach measures new people reached vs. those already exposed',
    ],
    relatedTerms: ['impressions', 'frequency', 'cpm'],
    relatedCalculator: { href: '/cpm-calculator', label: 'CPM Calculator' },
  },
  {
    slug: 'frequency',
    term: 'Ad Frequency',
    category: 'Analytics',
    shortDefinition: 'The average number of times a unique user sees your ad during a campaign.',
    fullDefinition:
      'Frequency measures how many times, on average, each unique person in your audience sees your advertisement. It is the ratio of total impressions to unique reach. Frequency is a critical lever in campaign management. Too low and your message may not break through; too high and you risk ad fatigue, where audiences ignore or actively dislike your ad from overexposure. The optimal frequency depends on the campaign objective, ad format, and industry — but most platforms recommend a frequency of 2–5× for awareness campaigns.',
    formula: 'Frequency = Total Impressions ÷ Unique Reach',
    formulaDescription: 'Divide the total number of ad impressions by the number of unique people who saw the ad.',
    example:
      'Your campaign delivers 500,000 impressions to 100,000 unique users. Frequency = 500,000 ÷ 100,000 = 5.0. Each person saw your ad an average of 5 times.',
    keyPoints: [
      'Frequency caps on Meta and other platforms prevent ad fatigue',
      'Retargeting campaigns intentionally run high frequency to maintain top-of-mind awareness',
      'Declining CTR as frequency rises is a sign of ad fatigue — rotate creative',
      'Different audience sizes demand different frequency strategies',
    ],
    relatedTerms: ['impressions', 'reach', 'cpm', 'ctr'],
    relatedCalculator: { href: '/cpm-calculator', label: 'CPM Calculator' },
  },
  {
    slug: 'engagement-rate',
    term: 'Engagement Rate',
    category: 'Social Media',
    shortDefinition: 'The percentage of an audience that interacts with a piece of content.',
    fullDefinition:
      "Engagement Rate measures the level of active interaction an audience has with content — combining likes, comments, shares, saves, and other reactions into a single percentage relative to the audience size. It is the primary metric for evaluating influencer effectiveness and organic social performance. Unlike reach or impressions which measure passive exposure, engagement rate measures active participation. Brands use engagement rate to vet influencers (high follower counts with low engagement often indicate fake or disengaged followers), and creators use it to demonstrate audience quality.",
    formula: 'Engagement Rate = (Total Engagements ÷ Total Followers) × 100%',
    formulaDescription: 'Add up all engagements (likes, comments, shares) and divide by total follower count, then multiply by 100.',
    example:
      "An influencer has 50,000 followers. Their last post received 1,200 likes + 300 comments = 1,500 total engagements. Engagement Rate = (1,500 ÷ 50,000) × 100% = 3%.",
    keyPoints: [
      'Instagram average: 1–3.5%; TikTok average: 3–6%; LinkedIn average: ~2%',
      'Micro-influencers (10K–100K followers) typically have higher engagement rates than mega-influencers',
      'Engagement rate by reach (ER reach) is more accurate but requires access to analytics',
      'Benchmarks vary significantly by niche — beauty and fitness typically outperform B2B',
    ],
    benchmarks: [
      { label: 'Instagram (all tiers)', value: '1% – 3.5%', note: 'Above 6% is considered viral' },
      { label: 'TikTok (all tiers)', value: '3% – 6%', note: 'Naturally higher engagement platform' },
      { label: 'LinkedIn', value: '~2%', note: 'Professional, more passive audience' },
      { label: 'YouTube', value: '0.5% – 2%', note: 'Based on views, not subscribers' },
    ],
    relatedTerms: ['reach', 'impressions', 'cpm', 'ctr'],
    relatedCalculator: { href: '/engagement-rate-calculator', label: 'Engagement Rate Calculator' },
  },
  {
    slug: 'utm',
    term: 'UTM Parameters',
    abbreviation: 'UTM',
    category: 'Analytics',
    shortDefinition: 'Tags added to URLs to track the source, medium, and campaign of web traffic in analytics tools.',
    fullDefinition:
      "UTM (Urchin Tracking Module) parameters are URL tags that pass campaign tracking data into web analytics platforms like Google Analytics. By appending UTM tags to your destination URLs, you can see exactly which campaigns, channels, and content drove traffic and conversions. There are five standard UTM parameters: utm_source (e.g., google, facebook), utm_medium (e.g., cpc, email), utm_campaign (campaign name), utm_term (keyword), and utm_content (differentiates A/B variants). Without UTM tags, traffic from campaigns may appear as direct or (other) in GA, making attribution impossible.",
    keyPoints: [
      'Five standard parameters: source, medium, campaign, term, content',
      'Always use consistent lowercase naming to prevent data fragmentation',
      'URL shorteners can hide UTMs in shared links — consider a redirect layer',
      'UTM data flows into GA4, HubSpot, Salesforce, and most marketing platforms',
      'UTMs work for any channel: paid ads, email, social, influencer campaigns',
    ],
    relatedTerms: ['attribution', 'conversion-rate', 'cpm'],
    relatedCalculator: { href: '/utm-builder', label: 'UTM Link Builder' },
  },
  {
    slug: 'attribution',
    term: 'Marketing Attribution',
    category: 'Analytics',
    shortDefinition: 'The process of assigning credit to marketing touchpoints that contributed to a conversion.',
    fullDefinition:
      "Marketing attribution is the methodology used to determine which marketing channels and touchpoints deserve credit for a conversion or sale. Because most customers interact with multiple ads and content pieces before buying, attribution models decide how to allocate credit across the journey. Common models include Last Click (100% credit to the final touchpoint), First Click (100% to the first), Linear (equal credit across all), Time Decay (more credit to recent touchpoints), and Data-Driven (algorithmic distribution based on actual conversion patterns). Attribution directly impacts how you evaluate ROAS, CPA, and channel ROI.",
    keyPoints: [
      'No attribution model is perfect — each involves trade-offs',
      'Last-click attribution overvalues retargeting and undervalues awareness channels',
      'Data-driven attribution (available in GA4 and Google Ads) is the most accurate for large data sets',
      'iOS 14+ privacy changes significantly degraded mobile attribution accuracy',
      'Multi-touch attribution requires connecting ad platforms, CRM, and analytics data',
    ],
    relatedTerms: ['roas', 'cpa', 'utm', 'conversion-rate'],
    relatedCalculator: { href: '/utm-builder', label: 'UTM Link Builder' },
  },
  {
    slug: 'retargeting',
    term: 'Retargeting',
    category: 'Paid Advertising',
    shortDefinition: 'Showing ads to people who have previously visited your website or interacted with your brand.',
    fullDefinition:
      "Retargeting (also called remarketing) is a form of online advertising that re-engages people who have previously interacted with your website, app, or content. When a user visits your site, a tracking pixel fires and adds them to a retargeting audience. You can then serve ads specifically to this warm audience on platforms like Google Display, Meta, and TikTok. Because retargeting audiences have already shown purchase intent, they typically convert at 2–3× the rate of cold audiences, making retargeting one of the highest-ROAS advertising tactics available.",
    keyPoints: [
      'Retargeting audiences convert 2–3× better than cold audiences on average',
      'Segment retargeting by page visited (product viewers vs. cart abandoners) for best results',
      'Frequency capping is essential for retargeting to prevent ad fatigue',
      'Cookie deprecation and iOS 14+ changes have reduced retargeting audience sizes',
      'First-party data (email lists, CRM data) is becoming the primary retargeting fuel',
    ],
    relatedTerms: ['cpa', 'frequency', 'conversion-rate', 'cpm'],
    relatedCalculator: { href: '/cpm-calculator', label: 'CPM Calculator' },
  },
  {
    slug: 'quality-score',
    term: 'Quality Score',
    category: 'Paid Advertising',
    shortDefinition: "Google's rating of the relevance and quality of your keywords, ads, and landing pages.",
    fullDefinition:
      "Quality Score is Google Ads' 1–10 rating that measures the relevance and quality of your keywords, ad copy, and landing pages relative to what users are searching for. It is calculated based on three factors: Expected Click-Through Rate, Ad Relevance, and Landing Page Experience. A higher Quality Score means Google considers your ad a good match for user queries, rewarding you with lower CPCs and better ad positions. Conversely, a low Quality Score means you pay more to show ads in worse positions. Improving Quality Score is one of the most efficient ways to lower your cost per acquisition in search advertising.",
    keyPoints: [
      'Quality Score impacts both your CPC and your ad position in search results',
      'Three components: Expected CTR, Ad Relevance, Landing Page Experience',
      'A score of 7–10 earns a discount on CPCs; 1–3 incurs a penalty',
      'Tightly themed ad groups improve Quality Scores by keeping keyword–ad–landing page relevance high',
      'Quality Score is a diagnostic tool — optimize the underlying signals, not the score itself',
    ],
    relatedTerms: ['cpc', 'ctr', 'cpm'],
    relatedCalculator: { href: '/cpm-to-cpc-calculator', label: 'CPM to CPC Calculator' },
  },
];

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}

export function getRelatedTerms(slugs: string[]): GlossaryTerm[] {
  return slugs.map((s) => getTermBySlug(s)).filter(Boolean) as GlossaryTerm[];
}
