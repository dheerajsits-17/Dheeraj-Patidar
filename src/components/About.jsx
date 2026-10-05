import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { FaLightbulb, FaCode, FaPaintBrush } from "react-icons/fa";

const About = () => {
  const aboutInfo = [
    {
      label: "Innovative",
      value: "I love creating unique solutions to complex problems with cutting-edge technologies.",
      icon: <FaLightbulb />,
    },
    {
      label: "Design Oriented",
      value: "Beautiful design and user experience are at the heart of everything I create.",
      icon: <FaPaintBrush />,
    },
    {
      label: "Clean Code",
      value: "I write maintainable, efficient code following best practices and modern patterns.",
      icon: <FaCode />,
    },
  ];

  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200/80"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-3 sm:mb-4 text-gray-900 tracking-tight">
          About <span className="text-purple-600">Me</span>
        </h2>

        <p className="text-gray-600 font-medium text-center max-w-2xl mx-auto mb-10 sm:mb-16 text-sm sm:text-base md:text-lg">
          Get to know more about my background and passion
        </p>

        {/* Image + Content Container */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 md:gap-12 lg:gap-16">
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full lg:w-1/3 flex justify-center lg:justify-end"
          >
            <img
              src={assets.profileImg}
              alt="Profile"
              className="w-48 sm:w-60 md:w-72 lg:w-full max-w-sm rounded-2xl object-cover shadow-xl border border-gray-200"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full lg:w-2/3"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center lg:text-left text-gray-900">
              My Journey
            </h3>

            <p className="text-gray-700 mb-4 sm:mb-6 text-center lg:text-left text-sm sm:text-base md:text-lg leading-relaxed">
              I am a passionate Software Developer & Freelancer specializing in Web Development and Mobile App Development. 
              I bring hands-on experience in building scalable, high-performance web applications and mobile apps 
              using MERN Stack, Next.js, React Native, Node.js, Express.js, MongoDB, and SQL.
            </p>

            <p className="text-gray-700 mb-8 sm:mb-12 text-center lg:text-left text-sm sm:text-base md:text-lg leading-relaxed">
              My expertise spans across diverse domains, including <b className="text-gray-900 font-semibold">Real-time Video Conferencing, Property Management, 
              Matrimony apps, Travel & Tourism, and Mobile App solutions.</b> Whether you need an end-to-end Web application 
              or an iOS/Android Mobile App for your business, I deliver pixel-perfect designs, robust backend APIs, and smooth user experiences.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {aboutInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-50/80 rounded-2xl p-5 sm:p-6 text-center hover:-translate-y-2 transition-all duration-300 border border-gray-200 shadow-xs hover:shadow-md hover:border-purple-300"
                >
                  <div className="flex justify-center mb-3 sm:mb-4 text-purple-600 text-3xl sm:text-4xl">
                    {item.icon}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold mb-2 text-gray-900">
                    {item.label}
                  </h4>
                  <p className="text-gray-700 text-xs sm:text-sm leading-normal">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;