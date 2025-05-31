import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin, Globe } from 'lucide-react';
import Button from '../components/UI/Button';
import SectionHeading from '../components/UI/SectionHeading';
import { socialLinks } from '../data/socialLinks';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact | Team Blaze';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  //
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulating API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus({
        submitted: true,
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
      });
      
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (_) {
      setStatus({
        submitted: true,
        success: false,
        message: 'Oops! Something went wrong. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? Feel free to reach out!"
          align="center"
        />
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-dark-100 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-md mr-4">
                    <Mail className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Email</h4>
                    <a 
                      href="mailto:contact@teamblaze.dev" 
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      contact@teamblaze.dev
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary-100 dark:bg-secondary-900/30 p-3 rounded-md mr-4">
                    <Globe className="text-secondary-600 dark:text-secondary-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Website</h4>
                    <a 
                      href="https://teamblaze.dev" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-secondary-500 dark:hover:text-secondary-400 transition-colors"
                    >
                      teamblaze.dev
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Connect With Me
                </h3>
                
                <div className="flex space-x-4">
                  {socialLinks.map((link) => {
                    // Manually map icon strings to components
                    let IconComponent;
                    if (link.icon === 'github') IconComponent = Github;
                    else if (link.icon === 'linkedin') IconComponent = Linkedin;
                    else if (link.icon === 'send') IconComponent = Send;
                    else if (link.icon === 'mail') IconComponent = Mail;
                    else IconComponent = Globe; // Default fallback
                    
                    return (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 dark:bg-dark-200 hover:bg-primary-100 dark:hover:bg-primary-900/30 p-3 rounded-full transition-colors group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={link.name}
                      >
                        {IconComponent && 
                          <IconComponent 
                            size={24} 
                            className="text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" 
                          />
                        }
                      </motion.a>
                    );
                  })}
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Have a project idea?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Let's talk about your project! Our team is available for consulting, development, and AI solution implementation.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-dark-100 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Us a Message
              </h3>
              
              {status.submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-md mb-6 ${
                    status.success
                      ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300'
                      : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-dark-200 border border-gray-300 dark:border-dark-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-dark-200 border border-gray-300 dark:border-dark-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-dark-200 border border-gray-300 dark:border-dark-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 text-gray-900 dark:text-white resize-none"
                  ></textarea>
                </div>
                
                <div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={<Send size={20} />}
                    disabled={loading}
                    className="w-full"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;