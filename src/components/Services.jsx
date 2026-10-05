import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaTachometerAlt,
  FaVideo,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    icon: FaCode,
    title: "Full-Stack Web Development",
    description:
      "Building high-performance, responsive web applications from scratch using MERN Stack (MongoDB, Express.js, React.js, Node.js) and Next.js.",
    features: ["Custom Web Apps", "MERN Stack Architecture", "Next.js & SSR Solutions"],
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    description:
      "Engineering cross-platform mobile apps for Android and iOS using React Native with smooth UI, offline support, and API integrations.",
    features: ["React Native Apps", "Cross-Platform (iOS & Android)", "Smooth Native Performance"],
  },
  {
    icon: FaServer,
    title: "Backend APIs & Databases",
    description:
      "Designing RESTful APIs, secure authentication, and handling complex database models using Node.js, Express, MongoDB, and SQL.",
    features: ["REST API Development", "MongoDB & SQL Databases", "JWT Auth & Security"],
  },
  {
    icon: FaTachometerAlt,
    title: "Custom SaaS & Business Portals",
    description:
      "Creating scalable property management portals, matrimony apps, e-commerce stores, and admin dashboards tailored for clients.",
    features: ["Admin Dashboards", "Property & Booking Systems", "Scalable SaaS Architecture"],
  },
  {
    icon: FaVideo,
    title: "Real-time & Video Streaming Apps",
    description:
      "Integrating WebRTC video conferencing, instant messaging with Socket.io, live chat, and real-time database syncing with Firebase.",
    features: ["WebRTC P2P Video Calls", "Socket.io Live Chat", "Firebase Real-time Sync"],
  },
  {
    icon: FaCheckCircle,
    title: "Freelance Product Delivery & Maintenance",
    description:
      "Providing complete end-to-end product development for client projects, bug fixes, deployment, and performance optimization.",
    features: ["End-to-End Client Projects", "Vite & Vercel Deployment", "Code Refactoring & Support"],
  },
];

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="services"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200/80"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-3 sm:mb-4 text-gray-900 tracking-tight">
          My <span className="text-purple-600">Services</span>
        </h2>

        <p className="text-gray-600 font-medium text-center max-w-2xl mx-auto mb-10 sm:mb-16 text-sm sm:text-base md:text-lg">
          Full-Stack Web & Mobile App development services tailored for clients, startups, and business solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-50/90 border border-gray-200 rounded-2xl p-6 sm:p-8 hover:-translate-y-2 shadow-xs hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-6 shadow-xs">
                  <service.icon />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  {service.description}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-gray-200/80">
                {service.features.map((feat, i) => (
                  <div key={i} className="flex items-center text-xs font-semibold text-gray-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mr-2 shrink-0"></span>
                    {feat}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
