import { 
  people01, 
  people02, 
  people03, 
  facebook, 
  instagram, 
  linkedin, 
  twitter, 
  airbnb, 
  binance, 
  coinbase, 
  dropbox, 
  send, 
  shield, 
  star
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Products",
  },
  {
    id: "from-us",
    title: "From Us",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Up To Date",
    content:
      "We ensure the latest and cutting edge technologies to our customers and in our products.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take take serious messures to ensure security and safety in our products and our client's data.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Fast And Easy To Use",
    content:
      "We ensure that our systems are as fast, relaiable and easy to use as possible.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "We have the focus to build the best AI/ML technologies and provide it to our customers.",
    name: "Debadithya Ray Barman",
    title: "Founder & Ceo",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Its fun to play with the cutting edge of technology and we just do that.",
    name: "Rishi Pamar",
    title: "Coo",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Its easy to use an AI and forget it, but its way difficult to build something like that.",
    name: "Vanika Tiwari",
    title: "Head Developer",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Employs",
    value: "10+",
  },
  {
    id: "stats-2",
    title: "Partners",
    value: "4+",
  },
  {
    id: "stats-3",
    title: "Projects",
    value: "3+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "What We Do?",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Contact Us",
    links: [
      {
        name: "Support",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Contact",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];