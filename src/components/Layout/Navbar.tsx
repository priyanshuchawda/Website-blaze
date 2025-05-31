import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Menu, X, Moon, Sun } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Contact', path: '/contact' },
  { label: 'Resume', path: '/resume' },
];

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);
  
  // Animation variants
  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 } 
    }
  };
  
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.3,
      }
    })
  };
  
  const mobileMenuVariants = {
    closed: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren"
      }
    },
    open: { 
      opacity: 1, 
      height: 'auto',
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const mobileNavItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-dark-200/95 backdrop-blur-md py-4 shadow-elevation-2' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2 z-10">
          <motion.span 
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ 
              scale: 1.05, 
              rotate: [0, -2, 2, -2, 0],
              transition: { duration: 0.5 }
            }}
            whileTap={{ scale: 0.95 }}
            className="font-bold text-2xl md:text-3xl font-display bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-transparent bg-clip-text"
          >
            Team Blaze
          </motion.span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, i) => (
            <motion.div
              key={item.path}
              custom={i}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `relative font-medium text-sm md:text-base transition-all hover:text-primary-500 dark:hover:text-primary-400 py-2 ${
                    isActive 
                      ? 'text-primary-500 dark:text-primary-400' 
                      : 'text-gray-700 dark:text-gray-300'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-indicator"
                        className="absolute bottom-[-5px] left-0 right-0 h-[2px] bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                        initial={{ opacity: 0, width: '0%', left: '50%' }}
                        animate={{ opacity: 1, width: '100%', left: '0%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </motion.div>
          ))}
        </nav>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="flex items-center space-x-4"
        >
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-100 transition-colors shadow-soft-sm"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-primary-600" />
            )}
          </motion.button>
          
          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className="text-primary-500 dark:text-primary-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} className="text-gray-700 dark:text-gray-300" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-white/95 dark:bg-dark-200/95 backdrop-blur-md mt-4 rounded-xl shadow-elevation-3 overflow-hidden"
          >
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <motion.div key={item.path} variants={mobileNavItemVariants}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-6 py-3 text-lg font-medium transition-colors flex items-center ${
                        isActive
                          ? 'text-primary-500 dark:text-primary-400 bg-gray-50/80 dark:bg-dark-100/80'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50/50 dark:hover:bg-dark-100/50'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className="flex-grow">{item.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 dark:bg-primary-400 mr-2" />
                        )}
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;