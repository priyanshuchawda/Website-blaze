import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeading from '../UI/SectionHeading';
import { Code, Cpu, BadgeDollarSign, Lightbulb, Network, ShieldCheck } from 'lucide-react';

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
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

  return (
    <section id="about-section" className="py-20 md:py-32 overflow-hidden bg-gray-50 dark:bg-dark-300">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="About Team Blaze"
          subtitle="Get to know our team and what drives our passion for AI and technology."
          centerTitle={true}
        />
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-start mt-12"
        >
          <motion.div variants={cardVariants} className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-[2px] rounded-xl shadow-elevation-3 overflow-hidden">
              <div className="bg-white dark:bg-dark-200 p-6 md:p-8 rounded-xl h-full">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
                  Who We Are
                </h3>
                <div className="space-y-6 text-gray-600 dark:text-gray-300">
                  <p className="text-lg">
                    Team Blaze is a collaborative group of passionate AI and Full-Stack Developers dedicated to building 
                    cutting-edge solutions that transform businesses and enhance user experiences.
                  </p>
                  <p className="text-lg">
                    Founded on the principles of innovation, quality, and accessibility, we combine our diverse expertise 
                    in artificial intelligence, machine learning, and web development to create intelligent applications 
                    that are both powerful and intuitive.
                  </p>
                  <p className="text-lg">
                    Our team members bring together complementary skills and shared values, allowing us to tackle complex 
                    challenges with creativity and technical excellence. We're constantly learning and evolving to stay at 
                    the forefront of the rapidly changing technology landscape.
                  </p>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="mt-8 flex flex-wrap gap-3"
                >
                  <span className="bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">AI Innovation</span>
                  <span className="bg-secondary-50 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-300 px-3 py-1 rounded-full text-sm font-medium">Full-Stack</span>
                  <span className="bg-accent-50 dark:bg-accent-900/30 text-accent-600 dark:text-accent-300 px-3 py-1 rounded-full text-sm font-medium">Machine Learning</span>
                  <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium">Cloud Solutions</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={cardVariants} className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-secondary-500 to-accent-500 p-[2px] rounded-xl shadow-elevation-3">
              <div className="bg-white dark:bg-dark-200 p-6 md:p-8 rounded-xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-secondary-500 to-accent-500">
                  What We Do
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg text-primary-600 dark:text-primary-300 flex-shrink-0">
                        <Cpu size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 dark:text-white">AI Development</h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          Building intelligent systems using machine learning and NLP techniques.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-secondary-100 dark:bg-secondary-900/30 p-3 rounded-lg text-secondary-600 dark:text-secondary-300 flex-shrink-0">
                        <Code size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Full-Stack Development</h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          Creating responsive web applications with modern frameworks.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent-100 dark:bg-accent-900/30 p-3 rounded-lg text-accent-600 dark:text-accent-300 flex-shrink-0">
                        <Lightbulb size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Innovation Consulting</h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          Helping businesses leverage emerging technologies effectively.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-success-100 dark:bg-success-900/30 p-3 rounded-lg text-success-600 dark:text-success-300 flex-shrink-0">
                        <Network size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Cloud Solutions</h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          Deploying scalable applications with cloud-native architectures.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-warning-100 dark:bg-warning-900/30 p-3 rounded-lg text-warning-600 dark:text-warning-300 flex-shrink-0">
                        <BadgeDollarSign size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Business Intelligence</h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          Transforming data into actionable insights for decision-making.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-error-100 dark:bg-error-900/30 p-3 rounded-lg text-error-600 dark:text-error-300 flex-shrink-0">
                        <ShieldCheck size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Security Integration</h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          Implementing robust security practices in all our solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;