import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Send, ArrowRight } from 'lucide-react';
import { teamMembers } from '../../data/team';
import SectionHeading from '../UI/SectionHeading';
import Button from '../UI/Button';

const TeamSection: React.FC = () => {
  // Staggered animation controls
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };
  
  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-100 dark:from-dark-300 dark:to-dark-200">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Meet the Team"
          subtitle="Get to know the innovative minds behind Team Blaze who are passionate about creating impactful technology solutions"
          centerTitle={true}
          withLine={true}
          size="lg"
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl mx-auto"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              className="group"
            >
              <div className="bg-white dark:bg-dark-100 rounded-2xl overflow-hidden shadow-elevation-2 hover:shadow-elevation-3 transition-all duration-500">
                <div className="relative overflow-hidden">
                  {/* Image overlay with gradient */}
                  <div className="relative h-64 sm:h-80 overflow-hidden">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.7 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                  
                  {/* Member info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <div className="flex items-center mb-2">
                        <span className="h-1 w-8 bg-primary-500 rounded-full mr-3"></span>
                        <span className="uppercase text-sm font-semibold tracking-wider text-primary-300">
                          {member.subtitle}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-bold mb-1 font-display">
                        {member.name}
                      </h3>
                      
                      <p className="text-gray-200 text-lg">
                        {member.role}
                      </p>
                    </motion.div>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8">
                  <div className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {member.bio}
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-sm uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 mb-3">
                      Expertise
                    </h4>
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {member.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          variants={skillItemVariants}
                          className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-700/30 shadow-soft-sm"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      <motion.a
                        href={`https://github.com/${member.social.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`${member.name}'s GitHub profile`}
                      >
                        <Github size={18} />
                      </motion.a>
                      <motion.a
                        href={`https://linkedin.com/in/${member.social.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin size={18} />
                      </motion.a>
                      <motion.a
                        href={`https://t.me/${member.social.telegram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`${member.name}'s Telegram`}
                      >
                        <Send size={18} />
                      </motion.a>
                    </div>
                    
                    <Button
                      to={`/team/${member.id}`}
                      variant="text"
                      size="sm"
                      icon={<ArrowRight size={16} />}
                      iconPosition="right"
                    >
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-16">
          <Button
            to="/team"
            variant="outline"
            size="lg"
            shadow={true}
            rounded={true}
          >
            Meet the Entire Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;