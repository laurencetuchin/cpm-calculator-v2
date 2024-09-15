import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Get Started',
      href: getPermalink('/get-started')
    },
    {
      text: 'CPM to CPC Calculator',
      href: getPermalink('/cpm-to-cpc-calculator')
    },
    


    {
      text: 'Blog',
      href: getPermalink('/blog')
    
}]
      ,
  actions: [{ text: 'Try now', href: 'https://cpmcalculator.online', target: '_blank' }]}

export const footerData = {
  links: [

    {
      title: 'Blog',
      links: [
        { text: 'Use case Excel', href: '#blog-post-excel' },
        { text: 'Marketing Data', href: '#' },
        { text: 'Influencer Marketing', href: '#' },


      ],
    },
    {
      title: 'About',
      links: [
        { text: 'About', href: '#' },
        { text: 'Top 10 Marketing Books', href: '#' },
        { text: 'How to Sell Online', href: '#' },
        { text: 'Best Personal Development Books', href: '#' },

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

    Copyright CPM Calculator Online 2024.
  `,
};
