import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-24 sm:pt-28 pb-12 sm:pb-16 bg-gradient-to-br from-slate-100 via-purple-50/60 to-slate-100 border-b border-gray-200/80"
    >
      <div className="container mx-auto px-4 sm:px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-12">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 text-gray-900 tracking-tight">
            Hi, I'm <span className="text-purple-600">Dheeraj Patidar</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 typewriter text-gray-900 inline-block">
            Software Developer
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-800 font-medium mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Proactive Software Developer & Freelancer specializing in building scalable Web Applications and Mobile Apps. Proficient across the MERN Stack (MongoDB, Express.js, React.js, Node.js), Next.js, SQL, and React Native. Experienced in delivering full-stack digital products, real-time platforms, property management portals, and high-performance cross-platform solutions for clients worldwide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <a
              href="#project"
              className="w-full sm:w-auto px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300 shadow-md hover:shadow-lg text-center"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 border-2 border-purple-600 text-purple-700 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition duration-300 text-center"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* right side img */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center p-1.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 shadow-xl"
          >
            <img
              className="rounded-full w-full h-full object-cover z-10 border-2 border-white"
              src={assets.profileImg}
              alt="Profile"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
