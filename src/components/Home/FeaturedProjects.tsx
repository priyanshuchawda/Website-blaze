import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';
import ProjectCard from '../UI/ProjectCard';
import Button from '../UI/Button';
import SectionHeading from '../UI/SectionHeading';

const FeaturedProjects: React.FC = () => {
  const featuredProjects = projects.filter(project => project.featured);
  
  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-200">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Featured Projects"
          subtitle="Check out some of my recent work that showcases my skills and expertise in AI and full-stack development."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Button
            to="/projects"
            variant="outline"
            size="lg"
            icon={<ArrowRight size={20} />}
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;