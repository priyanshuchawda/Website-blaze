import React from 'react';
import { motion } from 'framer-motion';
import { Github as GitHub, ExternalLink, ArrowUpRight, Calendar, Bookmark } from 'lucide-react';
import Button from './Button';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'compact' | 'featured' | 'showcase';
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project,
  variant = 'default',
  index = 0 
}) => {
  // Animation variants for staggered animations
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.1 * index
      }
    }
  };
  
  // For featured variant with two different layout options
  const isAlternativeLayout = index % 2 === 1;
  
  // Different card styles based on variant
  if (variant === 'featured') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className={`group relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 bg-white dark:bg-dark-100 rounded-2xl overflow-hidden shadow-elevation-2 hover:shadow-elevation-3 transition-all duration-500 p-6 md:p-0 ${isAlternativeLayout ? 'md:flex-row-reverse' : ''}`}
      >
        {/* Image section */}
        <div className="relative h-64 md:h-full rounded-xl md:rounded-none overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover ${isAlternativeLayout ? 'md:object-left' : 'md:object-right'} transition-transform duration-700 group-hover:scale-105`}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Project date badge */}
          <div className="absolute bottom-4 left-4 flex items-center bg-white/90 dark:bg-dark-200/90 backdrop-blur-sm text-xs font-medium px-3 py-1.5 rounded-full shadow-md">
            <Calendar size={14} className="mr-1.5 text-primary-500" />
            {project.date || '2025'}
          </div>
        </div>
        
        {/* Content section */}
        <div className={`flex flex-col justify-center p-0 md:p-8 ${isAlternativeLayout ? 'md:pr-12' : 'md:pl-12'}`}>
          {/* Featured badge */}
          {project.featured && (
            <div className="inline-flex items-center mb-4 text-accent-500 dark:text-accent-400 font-semibold text-sm tracking-wide">
              <Bookmark size={14} className="mr-1.5" />
              FEATURED PROJECT
            </div>
          )}
          
          <h3 className="text-2xl md:text-3xl font-bold font-display text-gray-900 dark:text-white mb-4 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          
          <div className="prose dark:prose-invert prose-sm md:prose-base mb-6 text-gray-600 dark:text-gray-300">
            <p>
              {project.description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.05 }}
                className="text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-700/30 shadow-soft-sm"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                href={project.githubLink}
                variant="outline"
                size="md"
                icon={<GitHub size={16} />}
                shadow={true}
              >
                View Source
              </Button>
            </motion.div>
            
            {project.liveLink && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  href={project.liveLink}
                  variant="primary"
                  size="md"
                  icon={<ExternalLink size={16} />}
                  shadow={true}
                >
                  Live Demo
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    );
  }
  
  // Showcase variant (larger, more detailed)
  if (variant === 'showcase') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="group relative bg-white dark:bg-dark-100 rounded-2xl overflow-hidden shadow-elevation-2 hover:shadow-elevation-3 transition-all duration-500"
      >
        <div className="relative overflow-hidden h-72">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-90" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                {project.featured && (
                  <span className="inline-flex items-center mr-3 text-accent-300 font-semibold text-sm">
                    <Bookmark size={14} className="mr-1" />
                    FEATURED
                  </span>
                )}
                <span className="inline-flex items-center text-white/80 text-sm">
                  <Calendar size={14} className="mr-1.5" />
                  {project.date || '2025'}
                </span>
              </div>
              
              <div className="flex space-x-2">
                {project.githubLink && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                  >
                    <GitHub size={18} />
                  </motion.a>
                )}
                
                {project.liveLink && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                )}
              </div>
            </div>
            
            <h3 className="text-3xl font-bold font-display text-white mb-3">
              {project.title}
            </h3>
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.05 }}
                className="text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-700/30"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          
          <motion.div 
            className="flex justify-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button
              href={project.liveLink || project.githubLink}
              variant="text"
              size="sm"
              icon={<ArrowUpRight size={16} />}
              iconPosition="right"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </motion.div>
    );
  }
  
  // Compact variant (smaller cards with less details)
  if (variant === 'compact') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="group relative bg-white dark:bg-dark-100 rounded-lg overflow-hidden shadow-soft-md hover:shadow-soft-lg transition-all duration-300"
      >
        <div className="relative overflow-hidden h-36">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {project.featured && (
            <div className="absolute top-2 right-2 bg-accent-500 text-white text-xs font-bold px-2 py-0.5 rounded-sm">
              Featured
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors truncate">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex space-x-2">
            <a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              aria-label="View source code on GitHub"
            >
              <GitHub size={16} />
            </a>
            
            {project.liveLink && (
              <a 
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="View live demo"
              >
                <ExternalLink size={16} />
              </a>
            )}
            
            <div className="flex-grow"></div>
            
            <div className="flex -space-x-1.5">
              {project.tags.slice(0, 3).map((tag, i) => (
                <div 
                  key={tag} 
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white dark:border-dark-100 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                  title={tag}
                  style={{ zIndex: 3 - i }}
                >
                  {tag.slice(0, 1)}
                </div>
              ))}
              
              {project.tags.length > 3 && (
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white dark:border-dark-100 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  title={`${project.tags.length - 3} more tags`}
                  style={{ zIndex: 0 }}
                >
                  +{project.tags.length - 3}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
  
  // Default variant
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group bg-white dark:bg-dark-100 rounded-xl overflow-hidden shadow-elevation-2 hover:shadow-elevation-3 transition-all duration-500"
    >
      <div className="relative overflow-hidden h-52">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {project.featured && (
          <div className="absolute top-3 right-3 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-md shadow-md">
            Featured
          </div>
        )}
        
        {/* Date badge */}
        <div className="absolute bottom-3 left-3 flex items-center bg-white/80 dark:bg-dark-200/80 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-md shadow-sm">
          <Calendar size={12} className="mr-1 text-primary-500" />
          {project.date || '2025'}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.05 }}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-100"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          <Button
            href={project.githubLink}
            variant="outline"
            size="sm"
            icon={<GitHub size={16} />}
          >
            Code
          </Button>
          
          {project.liveLink && (
            <Button
              href={project.liveLink}
              variant="primary"
              size="sm"
              icon={<ExternalLink size={16} />}
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;