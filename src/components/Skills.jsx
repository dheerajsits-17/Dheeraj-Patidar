import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="skills"
      className="py-16 sm:py-20 lg:py-24 bg-slate-100/70 border-b border-gray-200/80"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-3 sm:mb-4 text-gray-900 tracking-tight">
          Technical <span className="text-purple-600">Skills</span>
        </h2>

        <p className="text-gray-600 font-medium text-center max-w-2xl mx-auto mb-10 sm:mb-16 text-sm sm:text-base md:text-lg">
          Equipped with Full-Stack MERN Stack, Next.js, Node.js, SQL, Express.js, and React Native Mobile App capabilities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 
                         hover:-translate-y-2 shadow-xs hover:shadow-md hover:border-purple-300 transition-all duration-300"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <skill.icon className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-gray-900">{skill.title}</h3>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{skill.description}</p>
                </div>
              </div>

              {/* Tags Section */}
              <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
                {skill.tags.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 sm:px-3 py-1 bg-purple-50 text-purple-700 border border-purple-200/80 text-xs font-semibold rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;