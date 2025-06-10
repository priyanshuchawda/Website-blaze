import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Menu, X, Zap } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Team', path: '/team' },
  { label: 'Skills', path: '/skills' },
  { label: 'Contact', path: '/contact' },
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
    setIsMenuOpen(false);
  }, [location]);
  
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl py-4 shadow-2xl shadow-black/20 border-b border-white/10' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3 z-10 group">
          <motion.div
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/25"
          >
            <Zap className="w-6 h-6 text-white" strokeWidth={2.5} />
          </motion.div>
          
          <motion.span 
            className="font-black text-2xl md:text-3xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-orange-400 group-hover:to-red-500 transition-all duration-300"
          >
            TEAM BLAZE
          </motion.span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, i) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `relative font-bold text-sm md:text-base transition-all duration-300 py-2 px-4 rounded-full ${
                    isActive 
                      ? 'text-white bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-full border border-orange-500/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </motion.div>
          ))}
          
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 transition-all duration-300"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <div className="w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" />
          </motion.button>
        </nav>
        
        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 transition-all duration-300"
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
                <X size={24} className="text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} className="text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-xl mt-4 rounded-2xl border border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col py-4">
              {navItems.map((item, index) => (
                <motion.div 
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-6 py-4 text-lg font-bold transition-all duration-300 flex items-center ${
                        isActive
                          ? 'text-white bg-gradient-to-r from-orange-500/20 to-red-500/20 border-r-4 border-orange-500'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`
                    }
                  >
                    <span className="flex-grow">{item.label}</span>
                    {({ isActive }) => isActive && (
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
                    )}
                  </NavLink>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="px-6 py-4"
              >
                <button
                  onClick={toggleTheme}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                >
                  <div className="w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" />
                  <span className="font-bold">Toggle Theme</span>
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;