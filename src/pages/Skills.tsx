import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import SkillCard from '../components/UI/SkillCard';
import SectionHeading from '../components/UI/SectionHeading';

const Skills: React.FC = () => {
  useEffect(() => {
    document.title = 'Skills | Priyanshu Chawda';
  }, []);

  // Group skills by category
  const languageSkills = skills.filter(skill => skill.category === 'language');
  const frameworkSkills = skills.filter(skill => skill.category === 'framework');
  const aimlSkills = skills.filter(skill => skill.category === 'aiml');
  const toolSkills = skills.filter(skill => skill.category === 'tool');
  
  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="My Skills & Expertise"
          subtitle="I have experience with a wide range of technologies across various domains of software development."
          centered
        />
        
        <div className="space-y-16">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
            >
              <span className="inline-block w-8 h-8 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-md mr-3 flex items-center justify-center">
                🧰
              </span>
              Programming Languages
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {languageSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
          
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
            >
              <span className="inline-block w-8 h-8 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 rounded-md mr-3 flex items-center justify-center">
                🏗️
              </span>
              Frameworks & Libraries
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {frameworkSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
          
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
            >
              <span className="inline-block w-8 h-8 bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 rounded-md mr-3 flex items-center justify-center">
                🤖
              </span>
              AI & Machine Learning
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {aimlSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
          
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
            >
              <span className="inline-block w-8 h-8 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md mr-3 flex items-center justify-center">
                🔧
              </span>
              Tools & Technologies
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {toolSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;