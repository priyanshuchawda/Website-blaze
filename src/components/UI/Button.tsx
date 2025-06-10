import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'accent' | 'success' | 'error' | 'warning' | 'blaze' | 'ghost';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  rounded?: boolean;
  shadow?: boolean;
  glow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  className = '',
  disabled = false,
  isLoading = false,
  type = 'button',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  rounded = false,
  shadow = false,
  glow = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent relative overflow-hidden group';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white focus:ring-blue-500 shadow-lg shadow-blue-500/25',
    secondary: 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white focus:ring-gray-500 shadow-lg shadow-gray-500/25',
    outline: 'border-2 border-white/30 bg-transparent hover:bg-white/10 text-white focus:ring-white/50 backdrop-blur-sm',
    text: 'bg-transparent hover:bg-white/5 text-gray-300 hover:text-white focus:ring-white/30',
    accent: 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white focus:ring-orange-500 shadow-lg shadow-orange-500/25',
    success: 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white focus:ring-green-500 shadow-lg shadow-green-500/25',
    error: 'bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white focus:ring-red-500 shadow-lg shadow-red-500/25',
    warning: 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white focus:ring-yellow-500 shadow-lg shadow-yellow-500/25',
    blaze: 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white focus:ring-orange-500 shadow-2xl shadow-orange-500/30',
    ghost: 'bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/30 backdrop-blur-sm focus:ring-white/30',
  };
  
  const sizeClasses = {
    xs: 'text-xs px-3 py-1.5 space-x-1',
    sm: 'text-sm px-4 py-2 space-x-1.5',
    md: 'text-base px-6 py-3 space-x-2',
    lg: 'text-lg px-8 py-4 space-x-3',
    xl: 'text-xl px-10 py-5 space-x-4',
  };
  
  const roundedClasses = rounded ? 'rounded-full' : 'rounded-xl';
  const shadowClasses = shadow ? 'shadow-2xl hover:shadow-3xl' : '';
  const glowClasses = glow ? 'hover:shadow-2xl hover:shadow-current/25' : '';
  const widthClasses = fullWidth ? 'w-full' : '';
  
  const disabledClasses = disabled || isLoading
    ? 'opacity-60 cursor-not-allowed'
    : 'transform hover:scale-105 hover:-translate-y-0.5 active:scale-95 active:translate-y-0';
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${roundedClasses} ${shadowClasses} ${glowClasses} ${widthClasses} ${disabledClasses} ${className}`;
  
  const content = (
    <>
      {/* Shimmer Effect */}
      <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      {isLoading ? (
        <span className="flex items-center justify-center relative z-10">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {children}
        </span>
      ) : (
        <span className="flex items-center justify-center relative z-10">
          {icon && iconPosition === 'left' && <span className="mr-2 group-hover:scale-110 transition-transform">{icon}</span>}
          <span>{children}</span>
          {icon && iconPosition === 'right' && <span className="ml-2 group-hover:scale-110 transition-transform">{icon}</span>}
        </span>
      )}
    </>
  );
  
  // Disable animations when button is disabled or loading
  const motionProps = disabled || isLoading ? {} : {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };
  
  if (href) {
    return (
      <motion.a
        href={href}
        className={allClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }
  
  if (to) {
    return (
      <Link to={to} className="inline-block">
        <motion.div 
          {...motionProps}
          className={allClasses}
        >
          {content}
        </motion.div>
      </Link>
    );
  }
  
  return (
    <motion.button
      type={type}
      className={allClasses}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
};

export default Button;