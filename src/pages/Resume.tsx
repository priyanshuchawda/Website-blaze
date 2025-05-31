import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';
import Button from '../components/UI/Button';
import SectionHeading from '../components/UI/SectionHeading';

const Resume: React.FC = () => {
  useEffect(() => {
    document.title = 'Resume | Priyanshu Chawda';
  }, []);

  // Mock PDF URL - Replace with an actual PDF link in production
  const resumeUrl = '/resume.pdf';
  
  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="My Resume"
          subtitle="Download my resume or view it online to learn more about my experience and qualifications."
          centered
        />
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-center"
          >
            <Button
              href={resumeUrl}
              variant="primary"
              size="lg"
              icon={<FileDown size={20} />}
            >
              Download Resume (PDF)
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-dark-100 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Professional Summary
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Innovative AI and Full-Stack Developer with a passion for creating intelligent 
              applications that solve real-world problems. Experienced in developing machine learning 
              models, natural language processing systems, and responsive web applications. Strong 
              problem-solving skills and a commitment to clean, efficient code.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Programming Languages
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  JavaScript, TypeScript, Python, Java, C++, SQL
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Frameworks & Libraries
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  React, Next.js, Node.js, Express, Django, TailwindCSS, Flask
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  AI & Machine Learning
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  TensorFlow, PyTorch, Scikit-Learn, OpenAI API, Hugging Face, NLP
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Tools & Technologies
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Git, Docker, AWS, MongoDB, PostgreSQL, Firebase, GraphQL
                </p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Work Experience
            </h3>
            
            <div className="mb-6">
              <div className="flex flex-wrap justify-between items-baseline mb-2">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Senior AI Developer
                </h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Jan 2023 - Present
                </span>
              </div>
              <h5 className="text-md text-primary-600 dark:text-primary-400 mb-2">
                TechInnovate Solutions
              </h5>
              <ul className="list-disc list-outside ml-5 text-gray-700 dark:text-gray-300">
                <li>Developed and deployed AI-powered chatbots for customer service, resulting in a 40% reduction in response time.</li>
                <li>Created machine learning models for predictive analytics in e-commerce applications.</li>
                <li>Led a team of 4 developers in building full-stack applications with AI integration.</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <div className="flex flex-wrap justify-between items-baseline mb-2">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Full-Stack Developer
                </h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Mar 2020 - Dec 2022
                </span>
              </div>
              <h5 className="text-md text-primary-600 dark:text-primary-400 mb-2">
                WebSphere Technologies
              </h5>
              <ul className="list-disc list-outside ml-5 text-gray-700 dark:text-gray-300">
                <li>Built responsive web applications using React, Node.js, and MongoDB.</li>
                <li>Implemented RESTful APIs and GraphQL endpoints for various client projects.</li>
                <li>Optimized application performance, reducing load times by 35%.</li>
              </ul>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Education
            </h3>
            
            <div className="mb-6">
              <div className="flex flex-wrap justify-between items-baseline mb-2">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Master of Science in Computer Science
                </h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  2018 - 2020
                </span>
              </div>
              <h5 className="text-md text-primary-600 dark:text-primary-400">
                University of Technology
              </h5>
              <p className="text-gray-700 dark:text-gray-300">
                Specialization in Artificial Intelligence and Machine Learning
              </p>
            </div>
            
            <div>
              <div className="flex flex-wrap justify-between items-baseline mb-2">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Bachelor of Technology in Information Technology
                </h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  2014 - 2018
                </span>
              </div>
              <h5 className="text-md text-primary-600 dark:text-primary-400">
                Institute of Engineering
              </h5>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Resume;