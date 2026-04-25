export interface ComparisonDifference {
  aspect: string;
  a: string;
  b: string;
}

export interface Comparison {
  slug: string;
  termA: string;
  termB: string;
  termASlug: string;
  termBSlug: string;
  title: string;
  description: string;
  intro: string;
  termADefinition: string;
  termBDefinition: string;
  differences: ComparisonDifference[];
  whenToUseA: string[];
  whenToUseB: string[];
  verdict: string;
  relatedCalculator?: { href: string; label: string };
  relatedComparisons: string[];
}

export const comparisons: Comparison[] = [
  {
    slug: 'cpm-vs-cpc',
    termA: 'CPM',
    termB: 'CPC',
    termASlug: 'cpm',
    termBSlug: 'cpc',
    title: 'CPM vs CPC: Which Ad Pricing Model Should You Use?',
    description:
      'CPM (Cost Per Mille) and CPC (Cost Per Click) are the two most common ad pricing models. Learn the key differences, when to use each, and how to choose the right model for your campaigns.',
    intro:
      'When buying digital advertising, the pricing model you choose determines when and how you pay — and it should align with your campaign goal. CPM (Cost Per Mille) charges you per 1,000 impressions regardless of clicks, while CPC (Cost Per Click) charges you only when someone clicks your ad. Choosing the wrong model can mean paying for ad exposure that never converts or leaving valuable traffic on the table.',
    termADefinition:
      'CPM (Cost Per Mille) is a pricing model where you pay a fixed rate for every 1,000 times your ad is displayed, regardless of whether anyone clicks. It measures the cost of visibility.',
    termBDefinition:
      'CPC (Cost Per Click) is a performance pricing model where you pay each time a user clicks on your ad. You only pay when someone actively engages with your creative.',
    differences: [
      { aspect: 'You pay for', a: 'Every 1,000 impressions (views)', b: 'Each individual click' },
      { aspect: 'Primary goal', a: 'Brand awareness and reach', b: 'Traffic and direct response' },
      { aspect: 'Risk', a: 'Paying for impressions with no engagement', b: 'Click volume can vary widely' },
      { aspect: 'Control', a: 'Predictable budget usage', b: 'Costs scale with ad quality and CTR' },
      { aspect: 'Best platforms', a: 'Display networks, programmatic, video', b: 'Search ads, social ads' },
      { aspect: 'Optimization lever', a: 'Creative and audience quality', b: 'Quality Score, bid strategy, landing page' },
    ],
    whenToUseA: [
      'Launching a new product and need to build brand awareness at scale',
      'Running video or display campaigns where the impression itself is the message',
      'Targeting a large broad audience and paying a fixed rate for eyeballs',
      'Your goal is reach and frequency, not immediate clicks or conversions',
    ],
    whenToUseB: [
      'Running direct-response campaigns aimed at driving traffic to your site',
      'Operating in a niche where you only want to pay for interested users',
      'Testing ad creative — CPC helps you identify which ads drive the most clicks per dollar',
      'Search advertising where users have active purchase intent',
    ],
    verdict:
      'Use CPM when your goal is awareness and you want to control how many people see your message. Use CPC when your goal is clicks, traffic, or conversions — especially in search advertising where every click signals intent. For most performance marketers, CPC or CPA models dominate, while CPM shines for brand campaigns and video placements.',
    relatedCalculator: { href: '/cpm-to-cpc-calculator', label: 'CPM to CPC Calculator' },
    relatedComparisons: ['cpm-vs-cpa', 'cpc-vs-cpa', 'cpm-vs-cpl'],
  },
  {
    slug: 'cpm-vs-cpa',
    termA: 'CPM',
    termB: 'CPA',
    termASlug: 'cpm',
    termBSlug: 'cpa',
    title: 'CPM vs CPA: Impressions vs Conversions — What Matters More?',
    description:
      'CPM (Cost Per Mille) charges for impressions while CPA (Cost Per Action) charges per conversion. Learn which model fits your campaign goals and how to evaluate their trade-offs.',
    intro:
      'CPM and CPA represent opposite ends of the ad pricing spectrum. CPM pays for potential exposure — you buy eyeballs. CPA pays for proven results — you buy conversions. The right choice depends entirely on where your campaign sits in the funnel and what business outcome you are optimizing for.',
    termADefinition:
      'CPM (Cost Per Mille) charges advertisers per 1,000 ad impressions. You pay for the opportunity to be seen, not for any response or action the viewer takes.',
    termBDefinition:
      'CPA (Cost Per Action) charges advertisers only when a user completes a defined action — such as a purchase, sign-up, or download. It is the most performance-aligned pricing model.',
    differences: [
      { aspect: 'Payment trigger', a: '1,000 impressions served', b: 'A specific user action completed' },
      { aspect: 'Risk profile', a: 'Advertiser bears all performance risk', b: 'Platform/publisher absorbs risk' },
      { aspect: 'Cost structure', a: 'Fixed, predictable per-impression rate', b: 'Variable — depends on conversion rate' },
      { aspect: 'Funnel stage', a: 'Top of funnel (awareness)', b: 'Bottom of funnel (conversion)' },
      { aspect: 'Data required', a: 'Minimal — just impressions', b: 'Conversion tracking, pixel setup required' },
      { aspect: 'ROI transparency', a: 'Indirect — depends on downstream conversion', b: 'Direct — every dollar tied to an action' },
    ],
    whenToUseA: [
      'Brand awareness campaigns where your goal is reach and recognition',
      'Entering a new market or launching a new product line',
      'Video or rich-media campaigns where the content itself drives brand recall',
      'You have a large enough audience and a strong creative team',
    ],
    whenToUseB: [
      "Performance campaigns where you're accountable for cost per acquisition",
      "E-commerce, lead gen, or app install campaigns with measurable conversion events",
      "You have conversion tracking in place and enough data for CPA bidding algorithms",
      'You need predictable acquisition costs to hit unit economics targets',
    ],
    verdict:
      'CPM and CPA serve different purposes and are not truly competitors. A well-structured funnel uses CPM for upper-funnel awareness and CPA (or CPC) for lower-funnel conversion campaigns. If you are a direct-response advertiser with good tracking in place, CPA bidding is more efficient. If you are a brand marketer building long-term awareness, CPM gives you reach at a known cost.',
    relatedCalculator: { href: '/cpm-calculator', label: 'CPM Calculator' },
    relatedComparisons: ['cpm-vs-cpc', 'cpc-vs-cpa', 'cpm-vs-cpl'],
  },
  {
    slug: 'cpm-vs-cpl',
    termA: 'CPM',
    termB: 'CPL',
    termASlug: 'cpm',
    termBSlug: 'cpl',
    title: 'CPM vs CPL: Awareness Reach vs Lead Generation',
    description:
      'Compare CPM (Cost Per Mille) and CPL (Cost Per Lead) to understand when to optimize for impressions versus lead acquisition in your campaigns.',
    intro:
      'CPM campaigns buy raw audience exposure; CPL campaigns buy qualified leads. These two models are often used sequentially in the same marketing funnel — CPM builds awareness with a broad audience, while CPL campaigns target warmer prospects with lead-capture offers. Understanding when and how to use each is essential for B2B and high-consideration B2C marketers.',
    termADefinition:
      'CPM (Cost Per Mille) is a media buying model where you pay per 1,000 impressions. You control reach and frequency, but not what the audience does after seeing your ad.',
    termBDefinition:
      'CPL (Cost Per Lead) is a performance model where you only pay when a user submits their contact information or takes a defined lead-capture action.',
    differences: [
      { aspect: 'Payment trigger', a: '1,000 ad impressions', b: 'A completed lead form or sign-up' },
      { aspect: 'Audience stage', a: 'Cold or broad audiences', b: 'Warm, interest-qualified audiences' },
      { aspect: 'Output', a: 'Brand impressions and recall', b: 'A contact in your CRM' },
      { aspect: 'Tracking complexity', a: 'Low — no conversion pixel required', b: 'Moderate — requires form tracking' },
      { aspect: 'Sales team dependency', a: 'None', b: 'High — leads must be followed up on' },
      { aspect: 'Best channels', a: 'Display, video, programmatic', b: 'LinkedIn, Facebook Lead Ads, paid search' },
    ],
    whenToUseA: [
      'Priming a cold audience before a lead-gen campaign launch',
      'Product launches requiring wide awareness before demand capture',
      'Retargeting campaigns where your CPL audience came from prior CPM exposure',
      'B2C brands where direct awareness-to-purchase is the dominant path',
    ],
    whenToUseB: [
      'B2B marketing where collecting a business email or phone number is the campaign goal',
      'High-consideration purchases (SaaS, real estate, financial services) with long sales cycles',
      'When your sales team needs a pipeline of warm contacts to call',
      'Webinar and event registration campaigns',
    ],
    verdict:
      'In B2B and high-consideration verticals, CPM and CPL work best in tandem. Use CPM to introduce your brand to a target audience, then layer in CPL campaigns to capture leads from those who engaged. Evaluate CPL alongside lead quality and close rate — a $50 CPL means nothing if only 1% of leads close.',
    relatedCalculator: { href: '/cpm-calculator', label: 'CPM Calculator' },
    relatedComparisons: ['cpm-vs-cpc', 'cpm-vs-cpa', 'cpc-vs-cpa'],
  },
  {
    slug: 'cpm-vs-cpv',
    termA: 'CPM',
    termB: 'CPV',
    termASlug: 'cpm',
    termBSlug: 'cpv',
    title: 'CPM vs CPV: Impressions vs Video Views Explained',
    description:
      'CPM charges per 1,000 impressions while CPV charges per video view. Learn which model is right for your video advertising campaigns.',
    intro:
      'Both CPM and CPV are used in video advertising, but they measure different things. CPM charges you each time your video ad appears on screen — regardless of whether it was watched. CPV charges you only when someone actually views your video (to a defined threshold). For video campaigns, the choice between CPM and CPV significantly affects your cost structure and the quality of engagement you pay for.',
    termADefinition:
      'CPM in video advertising charges per 1,000 ad impressions — meaning the ad loaded and appeared on screen, regardless of how long it played or whether it was skipped.',
    termBDefinition:
      "CPV (Cost Per View) charges only when a viewer watches your video to a qualifying threshold. On YouTube's TrueView format, this means 30 seconds watched (or the full ad if shorter) or an interaction.",
    differences: [
      { aspect: 'Payment trigger', a: 'Ad served/displayed (1,000 times)', b: 'Video viewed to qualifying threshold' },
      { aspect: 'Skip behavior', a: 'You pay even if the ad is skipped', b: 'You do not pay if skipped before threshold' },
      { aspect: 'Audience quality', a: 'Passive — includes all viewers', b: 'Active — only engaged viewers' },
      { aspect: 'Cost efficiency', a: 'Lower CPM rate but less engagement certainty', b: 'Higher per-event cost but guaranteed engagement' },
      { aspect: 'Format compatibility', a: 'All ad formats including display', b: 'Primarily in-stream video formats' },
      { aspect: 'Best for', a: 'Broad reach and brand visibility', b: 'Message completion and storytelling' },
    ],
    whenToUseA: [
      'Maximizing brand reach and frequency across a broad audience',
      'Non-skippable video formats where you know every impression will be viewed',
      'Programmatic video buys where CPV is not available',
      'Campaigns where reach volume is more important than engagement depth',
    ],
    whenToUseB: [
      "YouTube TrueView campaigns where you only want to pay for interested viewers",
      'Brand storytelling videos where completing the narrative is key',
      'Campaigns where view-through rate is the primary KPI',
      'Scenarios where you have limited budget and need guaranteed engagement',
    ],
    verdict:
      "For YouTube advertising, CPV (TrueView) is often the better model when you want to pay only for genuine viewers — especially for longer-form creative. CPM is preferred for non-skippable placements or when your priority is raw reach and you're comfortable paying for impressions even if some are skipped.",
    relatedCalculator: { href: '/youtube-money-calculator', label: 'YouTube Money Calculator' },
    relatedComparisons: ['cpm-vs-cpc', 'ecpm-vs-cpm', 'vcpm-vs-cpm'],
  },
  {
    slug: 'cpc-vs-cpa',
    termA: 'CPC',
    termB: 'CPA',
    termASlug: 'cpc',
    termBSlug: 'cpa',
    title: 'CPC vs CPA: Cost Per Click vs Cost Per Action — Which to Choose?',
    description:
      'CPC (Cost Per Click) and CPA (Cost Per Action) are both performance pricing models but optimize for different outcomes. This guide explains when each works best.',
    intro:
      'CPC and CPA are both performance-based ad pricing models, but they optimize for different parts of the conversion journey. CPC pays for traffic — the moment someone clicks your ad. CPA pays for results — the moment someone converts. Your choice between them depends on how much control you want over your costs versus how much you trust the platform\'s algorithm to optimize toward conversions.',
    termADefinition:
      'CPC (Cost Per Click) is a pricing model where you pay each time a user clicks on your ad. You are buying traffic; what happens after the click depends on your landing page.',
    termBDefinition:
      'CPA (Cost Per Action) is a pricing model where you only pay when a user completes a defined action such as a purchase, sign-up, or app install. You are buying conversions.',
    differences: [
      { aspect: 'Payment trigger', a: 'A click on your ad', b: 'A completed conversion action' },
      { aspect: 'Conversion risk', a: 'Advertiser bears risk (click ≠ conversion)', b: 'Platform absorbs risk' },
      { aspect: 'Data requirements', a: 'Minimal — just a destination URL', b: 'Requires conversion tracking and data volume' },
      { aspect: 'Algorithmic control', a: 'Manual or CPC bidding', b: 'Smart bidding (Target CPA) on the platform' },
      { aspect: 'Transparency', a: 'You know exactly what each click costs', b: 'Costs vary; platform optimizes to hit target CPA' },
      { aspect: 'Funnel stage', a: 'Mid-funnel — driving consideration traffic', b: 'Bottom-funnel — acquiring customers' },
    ],
    whenToUseA: [
      'Your landing page conversion rate is known and strong enough to back-calculate CPA',
      "You're testing new ad creative and want to control cost per click independently",
      'You lack enough conversion data for CPA bidding algorithms to work effectively',
      'Search and content campaigns where you want to drive blog readers or product explorers',
    ],
    whenToUseB: [
      'You have 30–50+ conversions per month needed for smart bidding to work',
      'Your campaign goal is direct acquisition — purchases, sign-ups, leads',
      'You want to hand off optimization to the platform and focus on creative strategy',
      'You need predictable unit economics tied directly to customer acquisition',
    ],
    verdict:
      "CPC gives you more direct control over traffic costs and is better when you're early in campaign optimization or lack sufficient conversion data. CPA is the superior model for mature campaigns with reliable conversion tracking — the platform's algorithm can optimize far more efficiently toward conversions than manual CPC bidding. Most performance marketers graduate from CPC → Target CPA as data accumulates.",
    relatedCalculator: { href: '/cpm-to-cpc-calculator', label: 'CPM to CPC Calculator' },
    relatedComparisons: ['cpm-vs-cpc', 'cpm-vs-cpa', 'roas-vs-roi'],
  },
  {
    slug: 'ecpm-vs-cpm',
    termA: 'eCPM',
    termB: 'CPM',
    termASlug: 'ecpm',
    termBSlug: 'cpm',
    title: 'eCPM vs CPM: What Is the Difference?',
    description:
      'eCPM and CPM look similar but serve different purposes. eCPM is a derived metric for comparing campaigns; CPM is a buying price. Learn when each is relevant.',
    intro:
      'eCPM and CPM are often confused because both are expressed as "cost per 1,000 impressions" — but they represent fundamentally different things. CPM is a negotiated price you pay when buying media on an impression basis. eCPM is a derived, normalized metric used to compare revenue or efficiency across campaigns that may have been bought on different pricing models (CPC, CPA, flat rate, etc.).',
    termADefinition:
      'eCPM (Effective Cost Per Mille) is a calculated metric that normalizes any campaign — regardless of original pricing model — into a cost-per-1,000-impressions figure. It is used for comparison, not for buying.',
    termBDefinition:
      'CPM (Cost Per Mille) is the actual negotiated or bid price paid for 1,000 ad impressions. It is the direct pricing model, not a derived metric.',
    differences: [
      { aspect: 'What it is', a: 'A derived / calculated metric', b: 'A direct pricing model' },
      { aspect: 'How it is set', a: 'Calculated from actual spend and impressions', b: 'Negotiated or bid directly' },
      { aspect: 'Primary user', a: 'Publishers comparing ad units; advertisers benchmarking', b: 'Advertisers buying reach' },
      { aspect: 'Can be influenced by', a: 'Click volume, conversion rate, and fill rate', b: 'Audience targeting, seasonality, competition' },
      { aspect: 'Usage context', a: 'Cross-campaign comparison and optimization', b: 'Media planning and buying' },
    ],
    whenToUseA: [
      'You want to compare a CPC campaign against a CPM campaign using a common metric',
      "A publisher evaluating which ad unit or demand source generates the most revenue per 1,000 impressions",
      'Benchmarking campaign efficiency across channels with different pricing models',
    ],
    whenToUseB: [
      'You are buying display, video, or social advertising on an impressions basis',
      'Planning reach-and-frequency brand campaigns with a predictable impression budget',
      'Comparing inventory prices across publishers or programmatic deals',
    ],
    verdict:
      'CPM is your price tag when buying impressions. eCPM is your ruler when comparing performance. Publishers use eCPM to find their best-performing inventory; advertisers use it to normalize reporting across mixed-model campaigns. If you are buying media, you negotiate CPM. If you are analyzing performance, you calculate eCPM.',
    relatedCalculator: { href: '/cpm-calculator', label: 'CPM Calculator' },
    relatedComparisons: ['cpm-vs-cpc', 'vcpm-vs-cpm', 'cpm-vs-cpv'],
  },
  {
    slug: 'vcpm-vs-cpm',
    termA: 'vCPM',
    termB: 'CPM',
    termASlug: 'vcpm',
    termBSlug: 'cpm',
    title: 'vCPM vs CPM: Standard vs Viewable Impressions',
    description:
      'vCPM only counts impressions that were actually visible on screen, while standard CPM counts all served impressions. Learn which is better for your display campaigns.',
    intro:
      'Standard CPM counts every impression where your ad was technically served — even if it appeared below the fold and was never seen by human eyes. vCPM (Viewable CPM) only counts impressions that met the MRC viewability standard: at least 50% of the ad was visible for at least 1 second. vCPM emerged as advertisers demanded accountability for the fact that a significant portion of "served" impressions were never actually viewed.',
    termADefinition:
      'vCPM (Viewable CPM) is a pricing model that only charges for impressions that met a minimum viewability standard — the ad was on-screen for a qualifying duration.',
    termBDefinition:
      'Standard CPM (Cost Per Mille) charges for all 1,000 served impressions, regardless of whether the ad was actually in the user\'s viewport or visible for any meaningful time.',
    differences: [
      { aspect: 'Impression counted when', a: 'Ad is 50%+ in view for ≥1 second (display)', b: 'Ad is technically served to the page' },
      { aspect: 'Typical viewability rate', a: '100% by definition', b: 'Industry average ~50–60%' },
      { aspect: 'Price vs. standard CPM', a: 'Higher CPM (premium inventory)', b: 'Lower base CPM' },
      { aspect: 'Waste reduction', a: 'Eliminates paying for unseen ads', b: 'Includes below-fold, hidden placements' },
      { aspect: 'Availability', a: 'Google Display Network, select programmatic', b: 'Universal across all display buying' },
    ],
    whenToUseA: [
      'Brand campaigns where actual visibility and ad recall matter',
      'You want assurance that your budget is only spent on genuinely seen impressions',
      'Premium display buys where viewability is a contractual requirement',
    ],
    whenToUseB: [
      'Performance campaigns where clicks (not views) are the actual goal',
      'Programmatic campaigns where vCPM inventory is limited',
      'When the volume of impressions matters more than guaranteeing each one was seen',
    ],
    verdict:
      "vCPM is the superior model for brand awareness campaigns because it eliminates spending on ads that nobody saw. It typically costs more per impression but delivers more value per dollar. Standard CPM remains common in programmatic buying and performance campaigns where viewability is less critical than click or conversion volume. For brand advertisers, moving from CPM to vCPM bidding on Google Display is a straightforward quality upgrade.",
    relatedCalculator: { href: '/cpm-calculator', label: 'CPM Calculator' },
    relatedComparisons: ['cpm-vs-cpc', 'ecpm-vs-cpm', 'cpm-vs-cpv'],
  },
  {
    slug: 'roas-vs-roi',
    termA: 'ROAS',
    termB: 'ROI',
    termASlug: 'roas',
    termBSlug: 'roi',
    title: 'ROAS vs ROI: Which Metric Should You Optimize For?',
    description:
      'ROAS measures ad revenue efficiency; ROI measures true profitability. Learn the key differences and when each metric should drive your advertising decisions.',
    intro:
      "ROAS and ROI are both measures of advertising effectiveness, but they answer fundamentally different questions. ROAS asks: how much revenue did my ads generate relative to what I spent? ROI asks: was this campaign actually profitable after all costs? A campaign can have a high ROAS and still lose money if margins are thin. Knowing which metric to optimize — and why — is essential for any performance advertiser.",
    termADefinition:
      'ROAS (Return on Ad Spend) is the ratio of revenue generated to advertising spend. A ROAS of 4.0 means you earned $4 for every $1 spent on ads.',
    termBDefinition:
      'ROI (Return on Investment) is the ratio of net profit to total investment. It accounts for all costs — ad spend, COGS, agency fees, and overhead — not just ad spend.',
    differences: [
      { aspect: 'Formula', a: 'Revenue ÷ Ad Spend', b: '(Net Profit ÷ Total Investment) × 100%' },
      { aspect: 'Costs considered', a: 'Only advertising spend', b: 'All costs (COGS, overhead, fees)' },
      { aspect: "What it answers", a: 'Revenue efficiency of ad spend', b: 'True profitability of the campaign' },
      { aspect: 'Benchmark positive', a: 'ROAS > 1 (break-even depends on margins)', b: 'ROI > 0%' },
      { aspect: 'Used by', a: 'Media buyers, e-commerce, ad platforms', b: 'CFOs, business owners, growth teams' },
      { aspect: 'Limitation', a: 'Ignores product margin — high ROAS can still be unprofitable', b: 'Harder to attribute in multi-channel campaigns' },
    ],
    whenToUseA: [
      'Optimizing active paid media campaigns and ad platform bidding',
      'Comparing revenue efficiency across ad channels or campaigns',
      'Setting Target ROAS in Google Ads, Meta, or other smart-bidding platforms',
      'Quick performance checks during campaign flights',
    ],
    whenToUseB: [
      'Evaluating whether to increase or decrease overall marketing investment',
      'Reporting campaign performance to leadership or investors',
      'Comparing marketing investment against other business investments (hiring, product development)',
      'Long-term budget allocation decisions',
    ],
    verdict:
      'Use ROAS to manage and optimize your active campaigns — it is the language of ad platforms. Use ROI to evaluate whether your marketing program is profitable as a whole. A 4× ROAS looks great but means nothing if your product margin is 20% (you need 5× ROAS just to break even on ad spend). Always know your break-even ROAS before setting campaign targets.',
    relatedCalculator: { href: '/break-even-roas-calculator', label: 'Break-Even ROAS Calculator' },
    relatedComparisons: ['cpc-vs-cpa', 'cac-vs-ltv', 'cpm-vs-cpa'],
  },
  {
    slug: 'cac-vs-ltv',
    termA: 'CAC',
    termB: 'LTV',
    termASlug: 'cac',
    termBSlug: 'ltv',
    title: 'CAC vs LTV: The Most Important Ratio in Business',
    description:
      'Customer Acquisition Cost (CAC) and Lifetime Value (LTV) together form the most important ratio for assessing business model viability. Learn how to calculate and improve both.',
    intro:
      "CAC (Customer Acquisition Cost) and LTV (Lifetime Value) are not opposites — they are two sides of the same coin. Together, the LTV:CAC ratio is the single most important health metric for any subscription, e-commerce, or recurring-revenue business. It determines whether your business model is fundamentally sustainable: are you spending less to acquire customers than those customers are worth over time? Improving either number — or the ratio between them — is the core job of a growth team.",
    termADefinition:
      'CAC (Customer Acquisition Cost) is the total spend required to acquire one new paying customer, including all marketing, sales, and overhead costs.',
    termBDefinition:
      'LTV (Lifetime Value) is the total net revenue or profit a single customer generates over the entire duration of their relationship with your business.',
    differences: [
      { aspect: 'What it measures', a: 'Cost to acquire one customer', b: 'Revenue/profit from one customer over time' },
      { aspect: 'Time horizon', a: 'Point-in-time acquisition cost', b: 'Cumulative value over customer lifespan' },
      { aspect: 'Influenced by', a: 'Ad spend, channel mix, conversion rate', b: 'AOV, purchase frequency, retention, churn rate' },
      { aspect: 'Goal direction', a: 'Minimize (lower is better)', b: 'Maximize (higher is better)' },
      { aspect: 'Healthy benchmark', a: "LTV:CAC ratio ≥ 3:1", b: 'LTV ≥ 3× CAC' },
      { aspect: 'Payback period', a: 'How long until CAC is recovered by revenue', b: 'N/A — LTV is the total recovery' },
    ],
    whenToUseA: [
      'Evaluating the efficiency of individual acquisition channels (paid search vs. social vs. organic)',
      'Setting maximum bids or CPA targets in ad platforms',
      'Diagnosing whether you can profitably scale a specific channel',
      'Investor reporting on unit economics',
    ],
    whenToUseB: [
      'Determining how much you can afford to spend acquiring a customer',
      'Segmenting customers to identify your highest-value cohorts',
      'Improving retention strategy to increase the value of existing customers',
      'Modeling business profitability at scale',
    ],
    verdict:
      'CAC and LTV must always be read together. A CAC of $200 sounds expensive until you learn the LTV is $1,200 (6:1 ratio — excellent). A CAC of $20 sounds cheap until you learn the LTV is $30 (1.5:1 ratio — unsustainable). The benchmark 3:1 LTV:CAC ratio means you recover acquisition costs 3× over the customer lifetime. Below 1:1, you are destroying value with every customer acquired.',
    relatedCalculator: { href: '/ltv-to-cac-calculator', label: 'LTV to CAC Calculator' },
    relatedComparisons: ['roas-vs-roi', 'cpm-vs-cpa', 'cpc-vs-cpa'],
  },
  {
    slug: 'reach-vs-impressions',
    termA: 'Reach',
    termB: 'Impressions',
    termASlug: 'reach',
    termBSlug: 'impressions',
    title: 'Reach vs Impressions: What Is the Difference?',
    description:
      'Reach counts unique users; impressions count total ad displays. Learn when each metric matters and how the two relate in your media planning.',
    intro:
      'Reach and impressions are often used interchangeably but they measure completely different things. Reach tells you how many unique people saw your content; impressions tell you how many times your content was displayed in total. A single person can generate dozens of impressions. Understanding the difference is fundamental to media planning — it determines whether you are building new audience breadth (reach) or reinforcing your message with existing viewers (frequency).',
    termADefinition:
      'Reach is the number of unique individuals who were exposed to your ad or content at least once during a given time period. It deduplicates multiple exposures to the same person.',
    termBDefinition:
      'Impressions is the total number of times your ad or content was displayed, counting every instance including multiple views by the same person.',
    differences: [
      { aspect: 'Counts', a: 'Unique people', b: 'Total ad displays (including repeats)' },
      { aspect: 'Relationship', a: 'Reach × Frequency = Impressions', b: 'Impressions ÷ Reach = Frequency' },
      { aspect: 'What it measures', a: 'Breadth of your audience', b: 'Volume of exposures' },
      { aspect: 'Upper limit', a: 'Capped by target audience size', b: 'Unlimited — scales with budget and frequency' },
      { aspect: 'Use case', a: 'Awareness: how many new people did I reach?', b: 'Exposure: how often was my ad seen?' },
    ],
    whenToUseA: [
      'Measuring the breadth of a brand awareness campaign',
      'Evaluating whether your campaign is penetrating new audience segments',
      'Setting goals for product launches where reaching new people is the priority',
      'Comparing efficiency: reach per dollar spent',
    ],
    whenToUseB: [
      "Calculating CPM — impressions are the denominator",
      'Understanding total ad volume and frequency',
      'Diagnosing ad fatigue — rising impressions with flat reach signals over-frequency',
      'Programmatic media buying where impressions are the traded unit',
    ],
    verdict:
      'Neither metric is more important — they answer different questions. If your goal is awareness, maximize reach. If your goal is recall or consideration, balance reach with healthy frequency (and therefore higher impressions). Always look at both together: 10M impressions from 500K people (frequency 20) is very different from 10M impressions from 5M people (frequency 2).',
    relatedCalculator: { href: '/cpm-calculator', label: 'CPM Calculator' },
    relatedComparisons: ['cpm-vs-cpc', 'ecpm-vs-cpm', 'vcpm-vs-cpm'],
  },
  {
    slug: 'ctr-vs-conversion-rate',
    termA: 'CTR',
    termB: 'Conversion Rate',
    termASlug: 'ctr',
    termBSlug: 'conversion-rate',
    title: 'CTR vs Conversion Rate: Ad Clicks vs Actual Results',
    description:
      'CTR (Click-Through Rate) measures ad engagement; conversion rate measures what happens after the click. Learn how to balance both metrics for profitable campaigns.',
    intro:
      'CTR tells you how many people clicked your ad. Conversion rate tells you how many of those clicks resulted in the outcome you actually wanted. A campaign can have an exceptional CTR and a terrible ROI if the landing page fails to convert. Conversely, low CTR with high conversion rate can still be highly profitable. These two metrics form the critical bridge between ad performance and business results.',
    termADefinition:
      'CTR (Click-Through Rate) is the percentage of people who clicked your ad out of all who saw it. It measures your ad creative\'s ability to generate interest and action.',
    termBDefinition:
      'Conversion Rate is the percentage of visitors (or clicks) who completed a desired action — a purchase, sign-up, or lead submission. It measures your landing page and offer\'s ability to convert interest into results.',
    differences: [
      { aspect: 'Measures', a: 'Ad-to-click effectiveness', b: 'Click-to-conversion effectiveness' },
      { aspect: 'Formula', a: 'Clicks ÷ Impressions × 100%', b: 'Conversions ÷ Visitors × 100%' },
      { aspect: 'Controlled by', a: 'Ad creative, copy, audience targeting', b: 'Landing page, offer, trust signals, UX' },
      { aspect: 'Impact of improvement', a: 'More clicks for same impressions spend', b: 'More conversions for same traffic spend' },
      { aspect: 'Benchmark', a: 'Search: 2–5%; Display: ~0.1%; Social: 0.5–2%', b: 'E-commerce: 1–4%; Lead gen: 5–15%' },
    ],
    whenToUseA: [
      'Evaluating and A/B testing ad creative and copy',
      'Diagnosing why a campaign is not driving enough traffic',
      'Comparing ad performance across campaigns or ad sets',
      'Calculating your effective CPC from a CPM campaign',
    ],
    whenToUseB: [
      'Optimizing landing pages to improve cost per acquisition',
      'Diagnosing why high traffic campaigns are not generating revenue',
      'Evaluating the effectiveness of offers, pricing, and trust signals',
      'Calculating your CPA from a known CPC',
    ],
    verdict:
      "You need both. A high CTR with low conversion rate means your ad promises something your landing page doesn't deliver — fix the landing page. A low CTR with high conversion rate means your ad is selective (which can be fine) or your creative needs work (which costs you volume). Optimize CTR to reduce the cost of traffic; optimize conversion rate to make that traffic profitable.",
    relatedCalculator: { href: '/cpm-to-cpc-calculator', label: 'CPM to CPC Calculator' },
    relatedComparisons: ['cpc-vs-cpa', 'cpm-vs-cpc', 'roas-vs-roi'],
  },
  {
    slug: 'retargeting-vs-prospecting',
    termA: 'Retargeting',
    termB: 'Prospecting',
    termASlug: 'retargeting',
    termBSlug: 'cpm',
    title: 'Retargeting vs Prospecting: How to Balance Your Ad Budget',
    description:
      'Retargeting re-engages warm audiences; prospecting finds new ones. Learn how to allocate your ad budget between both strategies for sustainable growth.',
    intro:
      "Every paid media program has two jobs: find new customers and close the ones already considering you. Prospecting campaigns introduce your brand to cold audiences — people who have never heard of you. Retargeting campaigns re-engage warm audiences — people who visited your site, watched your video, or interacted with your brand but didn't convert. The balance between the two is one of the most important budget allocation decisions in performance marketing.",
    termADefinition:
      'Retargeting (remarketing) serves ads to people who have previously engaged with your brand — website visitors, video viewers, past customers, or email subscribers.',
    termBDefinition:
      'Prospecting campaigns target cold audiences who have no prior interaction with your brand. They discover new potential customers through interest, demographic, or behavioral targeting.',
    differences: [
      { aspect: 'Audience temperature', a: 'Warm — already aware of your brand', b: 'Cold — no prior brand exposure' },
      { aspect: 'Typical ROAS/CVR', a: '2–4× higher conversion rate vs. prospecting', b: 'Lower CVR but drives new customer volume' },
      { aspect: 'Audience size', a: 'Limited by your traffic volume', b: 'Virtually unlimited (capped by platform scale)' },
      { aspect: 'CPM relative cost', a: 'Often higher (small, precise audience)', b: 'Often lower (broad targeting)' },
      { aspect: 'Growth contribution', a: 'Improves conversion of existing pipeline', b: 'Grows total addressable pipeline' },
      { aspect: 'Risk without prospecting', a: 'Audience exhaustion — you run out of warm users', b: 'N/A — prospecting feeds retargeting' },
    ],
    whenToUseA: [
      'Cart abandonment campaigns to recover near-purchase users',
      'Cross-selling to existing customers with complementary products',
      "Nurturing users who viewed your product page but didn't buy within a week",
      'High-frequency reminder ads close to conversion events (promotions, sales)',
    ],
    whenToUseB: [
      'Scaling total revenue beyond your current audience pool',
      'Entering new markets or launching new product lines',
      'Feeding your retargeting audience to prevent audience exhaustion',
      'Building brand awareness in new geographic or demographic segments',
    ],
    verdict:
      "A common mistake is over-investing in retargeting because the metrics look better. But retargeting only converts people prospecting already introduced to your brand. Without prospecting, your retargeting pool shrinks and your overall growth stalls. A typical budget split for e-commerce brands is 60–70% prospecting, 30–40% retargeting — though this varies by business stage and audience size.",
    relatedCalculator: { href: '/cpm-calculator', label: 'CPM Calculator' },
    relatedComparisons: ['cpm-vs-cpc', 'cpm-vs-cpa', 'cpc-vs-cpa'],
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getRelatedComparisons(slugs: string[]): Comparison[] {
  return slugs.map((s) => getComparisonBySlug(s)).filter(Boolean) as Comparison[];
}
