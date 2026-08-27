import aiMlImage from '../assets/ai-ml.jpeg';
import webDevelopmentImage from '../assets/webdev.jpeg';
import mobileDevelopmentImage from '../assets/mobileApp.jpeg';
import uiUxImage from '../assets/ui-ux.jpeg';
import qualityAssuranceImage from '../assets/qualityAssurance.jpeg';

export const SERVICES = [
  {
    id: 'ai-ml',
    number: '01',
    icon: 'fa-solid fa-brain',
    title: 'AI / ML Solutions',
    description:
      'We build intelligent systems that learn, adapt and make smart decisions. From data analysis to predictive models, we turn data into intelligence.',
    features: [
      'Predictive Analytics',
      'Machine Learning Models',
      'Deep Learning',
      'NLP & Computer Vision',
    ],
    image: aiMlImage,
  },

  {
    id: 'web-development',
    number: '02',
    icon: 'fa-solid fa-code',
    title: 'Web Development',
    description:
      'We create fast, secure and scalable web applications with modern frameworks and clean architecture that deliver exceptional user experiences.',
    features: [
      'Custom Web Apps',
      'Frontend Development',
      'Backend & APIs',
      'CMS & Admin Panels',
    ],
    image: webDevelopmentImage,
  },

  {
    id: 'mobile-development',
    number: '03',
    icon: 'fa-solid fa-mobile-screen-button',
    title: 'Mobile Development',
    description:
      'We build high-performance mobile apps for iOS and Android that are intuitive, engaging and built to scale your business.',
    features: [
      'iOS Development',
      'Android Development',
      'Cross-Platform Apps',
      'App Maintenance',
    ],
    image: mobileDevelopmentImage,
  },

  {
    id: 'ui-ux-design',
    number: '04',
    icon: 'fa-solid fa-pen-ruler',
    title: 'UI/UX Design',
    description:
      'We design beautiful, functional and user-centric experiences that connect with users and strengthen your brand.',
    features: [
      'User Research',
      'UI/UX Design',
      'Prototyping',
      'Design Systems',
    ],
    image: uiUxImage,
  },

  {
    id: 'quality-assurance',
    number: '05',
    icon: 'fa-solid fa-shield-halved',
    title: 'Quality Assurance',
    description:
      'We ensure your product is reliable, secure and bug-free through rigorous testing and quality assurance practices.',
    features: [
      'Manual Testing',
      'Automation Testing',
      'Performance Testing',
      'QA Consulting',
    ],
    image: qualityAssuranceImage,
  },
];

export const TRUST_POINTS = [
  {
    icon: 'fa-solid fa-chess-knight',
    title: 'Strategy First',
    description: 'We align technology with business goals',
  },
  {
    icon: 'fa-solid fa-cubes',
    title: 'Scalable Solutions',
    description: 'Built to grow with your business',
  },
  {
    icon: 'fa-solid fa-hammer',
    title: 'Modern Technologies',
    description: 'Using the latest tools and frameworks',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Quality Assured',
    description: 'Tested, secure and performance-driven',
  },
];

export const PROCESS_STEPS = [
  {
    icon: 'fa-solid fa-magnifying-glass',
    title: 'Discover',
    description: 'Understand your goals & challenges',
  },
  {
    icon: 'fa-regular fa-calendar-check',
    title: 'Plan',
    description: 'Define strategy & roadmap',
  },
  {
    icon: 'fa-solid fa-pen-ruler',
    title: 'Design',
    description: 'Craft user-centric experiences',
  },
  {
    icon: 'fa-solid fa-laptop-code',
    title: 'Develop',
    description: 'Build scalable & secure solutions',
  },
  {
    icon: 'fa-solid fa-vial',
    title: 'Test',
    description: 'Ensure quality & performance',
  },
  {
    icon: 'fa-solid fa-rocket',
    title: 'Launch',
    description: 'Deploy, monitor & scale',
  },
];