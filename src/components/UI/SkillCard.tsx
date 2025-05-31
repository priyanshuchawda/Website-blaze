import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Skill } from '../../types';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const IconComponent = Icons[skill.icon as keyof typeof Icons] || Icons.Code;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
      className="flex items-center p-4 bg-white dark:bg-dark-100 rounded-lg shadow-sm hover:shadow-md transition-all"
    >
      <div className={`
        p-2 rounded-md mr-3
        ${skill.category === 'language' ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400' : ''}
        ${skill.category === 'framework' ? 'bg-secondary-100 text-secondary-600 dark:bg-secondary-900/30 dark:text-secondary-400' : ''}
        ${skill.category === 'aiml' ? 'bg-accent-100 text-accent-600 dark:bg-accent-900/30 dark:text-accent-400' : ''}
        ${skill.category === 'tool' ? 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400' : ''}
      `}>
        <IconComponent size={20} />
      </div>
      <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
    </motion.div>
  );
};

export default SkillCard;