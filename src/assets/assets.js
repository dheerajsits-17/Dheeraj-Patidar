import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import projectProperty from '../assets/project_property.png';
import projectMatrimony from '../assets/project_matrimony.png';
import projectTravel from '../assets/project_travel.png';
import projectMosque from '../assets/project_mosque.png';
import projectVideo from '../assets/project_video.png';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];


export const skills = [
  {
    title: "Full-Stack & MERN",
    description: "Building scalable web platforms with complete end-to-end architecture.",
    icon: FaServer,
    tags: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "SQL"]
  },
  {
    title: "Frontend & Next.js",
    description: "Crafting fast, modern, and server-rendered web applications.",
    icon: FaCode,
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "REST APIs"]
  },
  {
    title: "Mobile App Development",
    description: "Building cross-platform mobile apps for Android and iOS.",
    icon: FaMobileAlt,
    tags: ["React Native", "Mobile App UI", "Cross-Platform", "App Integration"]
  }
];




export const projects = [
  {
    title: "Property Management & Fractional Investment Platform",
    description: "Responsive Admin and User portals with role-based access, property investment tracking dashboards, KYC verification workflows, and billing APIs.",
    image: projectProperty,
    tech: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs"],
    demo: "https://realestatily.com/",
  },
  {
    title: "Shubh Parinay Matrimony Web Application",
    description: "Complete matrimony platform with multi-step registration, advanced profile search & filtering, partner preferences, and protected user routes.",
    image: projectMatrimony,
    tech: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs", "Axios"],
    demo: "https://share.google/YAccfEUadz6PCZblr",
  },
  {
    title: "KSA Travel & Tourism Platform",
    description: "Comprehensive travel platform for Saudi Arabia featuring hotel bookings, transportation, event ticketing, and custom itinerary planning.",
    image: projectTravel,
    tech: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs"],
    demo: "#",
  },
  {
    title: "Mosque Management System",
    description: "Location-based mosque discovery platform featuring Google / Leaflet Maps API integration, community information, and multi-step donation workflow.",
    image: projectMosque,
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Maps API"],
    demo: "#",
  },
  {
    title: "Video Calling Web Application — Zoom Clone",
    description: "Real-time P2P video calling app with meeting room creation, peer audio/video streaming, screen sharing, live chat, and Firebase auth.",
    image: projectVideo,
    tech: ["React.js", "Firebase", "WebRTC", "Tailwind CSS"],
    demo: "#",
  }
];


export const workData = [
  {
    role: "Software Developer",
    company: "Shivarix IT Services (Indore, MP)",
    duration: "Jan 2026 – Present (6 Months)",
    description:
      "Architected and built 100% of client-facing web applications and software solutions independently using MERN Stack, React.js, Next.js, React Native, TypeScript, and Node.js. Integrated RESTful APIs, databases (MongoDB/SQL), and mobile app workflows.",
    color: "purple"
  }
];
