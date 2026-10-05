import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, description, image, tech, demo }) => {
  const hasLiveLink = demo && demo !== "#";

  return (
    <div className="bg-slate-50/90 border border-gray-200 shadow-xs rounded-2xl transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-purple-300 md:overflow-hidden flex flex-col justify-between">
      <div>
        <img src={image} alt={title} className="w-full h-56 object-cover" />

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-700 mb-4 text-sm leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tech?.map((item, index) => (
              <span
                key={index}
                className="text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200/80 px-3 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 pt-2">
        {hasLiveLink ? (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-300 shadow-xs text-sm"
          >
            <span>View Live Project</span>
            <FaExternalLinkAlt className="ml-2 text-xs" />
          </a>
        ) : (
          <div className="w-full text-center px-4 py-2.5 bg-gray-100 text-gray-400 rounded-lg font-semibold text-xs border border-gray-200">
            Internal Production Platform
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
