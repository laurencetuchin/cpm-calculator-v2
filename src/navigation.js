import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Get Started',
      href: getPermalink('/get-started')
    },
    {
      text: 'CPM Calculator',
      href: getPermalink('/cpm-calculator')
    },
    {
      text: 'CPM to CPC', 
      href: getPermalink('/cpm-to-cpc-calculator')
    },
    {
      text: 'Influencer Calculator',
      href: getPermalink('/influencer-cpm-calculator')
    },
    {
      text: 'Cost Per Impression',
      href: getPermalink('/calculate-cost-per-impression')
    }
  ],
  actions: [{ text: 'Try now', href: 'https://cpmcalculator.online', target: '_blank' }]
}

export const footerData = {
  links: [
    {
      title: 'Blog',
      links: [
        { text: 'Use case Excel', href: '/cpm-formula-excel' },
        { text: 'Marketing Data', href: '#' },
        { text: 'Influencer Marketing', href: '/influencer-cpm-calculator' },
      ],
    },
    {
      title: 'About', 
      links: [
        { text: 'About', href: '/about' },
        { text: 'Top 10 Marketing Books', href: '/top-10-marketing-books' },
        { text: 'How to Sell Online', href: '#' },
        { text: 'Best Personal Development Books', href: '/personal-development-books' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/cpm-calculator-online/', target: '_blank', rel: 'noopener noreferrer' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=61564261973878', target: '_blank', rel: 'noopener noreferrer' },
  ],
  footNote: `
    Copyright CPM Calculator 2024.
  `,
};
