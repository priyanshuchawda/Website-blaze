import React from 'react';
import { motion } from 'framer-motion';
import TeamSection from '../components/Home/TeamSection';
import SectionHeading from '../components/UI/SectionHeading';

const Team: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen"
    >
      <div className="container mx-auto max-w-7xl">
        <SectionHeading
          title="Our Team"
          subtitle="Meet the talented individuals behind Team Blaze"
          align="center"
          size="xl"
        />
        
        <div className="mt-12">
          <TeamSection />
        </div>
        
        <motion.div 
          className="mt-16 bg-white dark:bg-dark-200 rounded-xl shadow-elevation-2 p-8 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We're always looking for talented individuals to join our team. If you're passionate about technology, innovation, and making a difference, we'd love to hear from you.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 dark:bg-dark-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Open Positions</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• AI Engineer</li>
                <li>• Full Stack Developer</li>
                <li>• UX/UI Designer</li>
                <li>• Product Manager</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-dark-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Benefits</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Flexible working hours</li>
                <li>• Remote work options</li>
                <li>• Continuous learning</li>
                <li>• Competitive salary</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-dark-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">How to Apply</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Send your resume and portfolio to <span className="text-primary-500">careers@teamblaze.dev</span> with the position title in the subject line.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Team;
