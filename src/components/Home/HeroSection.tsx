import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FileDown, Eye, Send, ChevronDown } from 'lucide-react';
import Button from '../UI/Button';
import ParticleBackground from './ParticleBackground';

const HeroSection: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };
  
  const handleScrollToContent = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <ParticleBackground/>
      
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute top-20 right-10 md:right-20 w-32 h-32 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary-200/20 to-secondary-300/20 blur-3xl z-0"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="absolute bottom-10 left-10 w-40 h-40 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-accent-200/20 to-primary-300/20 blur-3xl z-0"
      />
      
      <div className="container mx-auto px-6 md:px-12 pt-32 pb-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold font-display">
              <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-transparent bg-clip-text inline-block">
                Team Blaze
              </span>
              <motion.span 
                className="inline-block ml-1"
                animate={{ 
                  rotate: [0, 10, 0, 10, 0],
                  scale: [1, 1.2, 1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatDelay: 5
                }}
              >
                🔥
              </motion.span>
            </h1>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mb-8">
            <div className="text-xl md:text-3xl text-gray-700 dark:text-gray-200 font-medium mb-6 h-20 md:h-24">
              <TypeAnimation
                sequence={[
                  'We build AI-powered solutions',
                  1000,
                  'We create intelligent automation',
                  1000,
                  'We develop scalable applications',
                  1000,
                  'We turn ideas into reality with AI & full-stack development',
                  5000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="h-full"
              />
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              A <span className="text-primary-500 dark:text-primary-400 font-semibold">dynamic team</span> of AI & Full-Stack Developers crafting intelligent solutions for tomorrow's challenges. We combine cutting-edge technology with creative problem-solving to deliver exceptional results.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            <Button
              to="/projects"
              variant="primary"
              size="lg"
              icon={<Eye size={20} />}
              shadow={true}
            >
              View Projects
            </Button>
            
            <Button
              to="/team"
              variant="outline"
              size="lg"
              icon={<FileDown size={20} />}
              shadow={true}
            >
              Meet the Team
            </Button>
            
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              icon={<Send size={20} />}
              shadow={true}
            >
              Get in Touch
            </Button>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="mt-16 md:mt-24"
          >
            <motion.button
              onClick={handleScrollToContent}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                y: { 
                  repeat: Infinity, 
                  duration: 1.5, 
                  ease: "easeInOut" 
                }
              }}
              className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="Scroll down to content"
            >
              <span className="text-sm font-medium mb-2">Discover More</span>
              <ChevronDown size={24} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 dark:from-dark-300 to-transparent"
      />
    </div>
  );
};

export default HeroSection;