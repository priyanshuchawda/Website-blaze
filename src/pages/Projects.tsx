import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/UI/ProjectCard';
import SectionHeading from '../components/UI/SectionHeading';

const Projects: React.FC = () => {
  useEffect(() => {
    document.title = 'Projects | Priyanshu Chawda';
  }, []);

  // Extract unique tags from all projects
  const allTags = ['All', ...Array.from(new Set(projects.flatMap(project => project.tags)))];
  
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.tags.includes(activeFilter)));
    }
  }, [activeFilter]);
  
  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="My Projects"
          subtitle="Browse through my collection of projects showcasing my expertise in AI, machine learning, and full-stack development."
          centered
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === tag
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found with the selected filter.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Projects;