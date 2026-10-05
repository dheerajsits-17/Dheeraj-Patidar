import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'
import { FaArrowRight } from "react-icons/fa";


const Project = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id='project'
      className='py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200/80'
    >
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-3 sm:mb-4 text-gray-900 tracking-tight'>
          My <span className='text-purple-600'>Projects</span>
        </h2>

        <p className='text-gray-600 font-medium text-center max-w-2xl mx-auto mb-10 sm:mb-16 text-sm sm:text-base md:text-lg'>
          Live production web applications and enterprise platforms engineered with React.js, TypeScript, Tailwind CSS, and REST APIs.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto'>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
      </div>
    </motion.div>
  )
}

export default Project
