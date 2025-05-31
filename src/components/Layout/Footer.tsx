import React from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../../data/socialLinks';
import { Github, Linkedin, Send, Mail } from 'lucide-react';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  send: Send,
  mail: Mail
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-dark-200 pt-12 pb-8 border-t border-gray-200 dark:border-dark-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-bold text-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
                Priyanshu Chawda
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-xs">
              I build AI-powered tools & full-stack solutions that solve real-world problems.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                    aria-label={link.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Skills</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/resume" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Resume</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Want something like this built? Let's talk!
            </p>
            <Link
              to="/contact"
              className="inline-block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-md transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-dark-100 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Priyanshu Chawda. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            Built with 💻 by Priyanshu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;