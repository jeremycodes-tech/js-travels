import { asset } from "@/utils/assets";

// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/', key: 'how_HIlink_work', label: 'How The J’s Work' },
  { href: '/', key: 'services', label: 'Services' },
  { href: '/', key: 'pricing ', label: 'Pricing' },
  { href: '/', key: 'contact_us', label: 'Contact Us' },
];

// CAMP SECTION
export const PEOPLE_URL = [
  asset('/person-1.png'),
  asset('/person-2.png'),
  asset('/person-3.png'),
  asset('/person-4.png'),
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Offline Maps, Always Ready',
    icon: asset('/map.svg'),
    variant: 'green',
    description:
      'No signal? No problem. Explore confidently with detailed offline maps that guide your journey wherever adventure takes you.',
  },
  {
    title: 'Plan Your Adventures',
    icon: asset('/calendar.svg'),
    variant: 'green',
    description:
      "Easily create trip schedules and share them with friends. With The J’s, planning is simple so you can focus on the experience.",
  },
  {
    title: 'Smart AR Navigation',
    icon: asset('/tech.svg'),
    variant: 'green',
    description:
      'Cutting-edge augmented reality shows you the safest routes and hidden gems—no internet connection required.',
  },
  {
    title: 'Fresh Destinations Monthly',
    icon: asset('/location.svg'),
    variant: 'orange',
    description:
      'Discover new trails, camps, and hidden spots added every month, shared by a global community of explorers.',
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About The J’s',
      'Press Releases',
      'Sustainability',
      'Careers',
      'Privacy Policy',
      'Contact Us',
    ],
  },
  {
    title: 'Our Community',
    links: [
      'The J’s Explorers',
      'Hiking Adventures',
      'Stories from the Trail',
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Customer Support', value: '+254708716419' },
    { label: 'Email', value: 'support@thejs.com' },
  ],
};

export const SOCIALS = {
  title: 'Follow Us',
  links: [
    asset('/facebook.svg'),
    asset('/instagram.svg'),
    asset('/twitter.svg'),
    asset('/youtube.svg'),
    asset('/wordpress.svg'),
  ],
};
