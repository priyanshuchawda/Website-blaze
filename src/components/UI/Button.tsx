import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'accent' | 'success' | 'error' | 'warning';
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
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500 border border-primary-500',
    secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white focus:ring-secondary-500 border border-secondary-500',
    outline: 'border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-50 dark:hover:bg-dark-100 text-gray-700 dark:text-gray-300 focus:ring-primary-500',
    text: 'bg-transparent hover:bg-gray-50 dark:hover:bg-dark-100 text-gray-700 dark:text-gray-300 focus:ring-primary-500',
    accent: 'bg-accent-500 hover:bg-accent-600 text-white focus:ring-accent-500 border border-accent-500',
    success: 'bg-success-500 hover:bg-success-600 text-white focus:ring-success-500 border border-success-500',
    error: 'bg-error-500 hover:bg-error-600 text-white focus:ring-error-500 border border-error-500',
    warning: 'bg-warning-500 hover:bg-warning-600 text-white focus:ring-warning-500 border border-warning-500',
  };
  
  const sizeClasses = {
    xs: 'text-xs px-2 py-1 space-x-1',
    sm: 'text-sm px-3 py-1.5 space-x-1.5',
    md: 'text-base px-4 py-2 space-x-2',
    lg: 'text-lg px-6 py-3 space-x-3',
    xl: 'text-xl px-8 py-4 space-x-4',
  };
  
  const roundedClasses = rounded ? 'rounded-full' : 'rounded-md';
  const shadowClasses = shadow ? 'shadow-elevation-2 hover:shadow-elevation-3' : '';
  const widthClasses = fullWidth ? 'w-full' : '';
  
  const disabledClasses = disabled || isLoading
    ? 'opacity-60 cursor-not-allowed'
    : 'transform hover:-translate-y-0.5 active:translate-y-0';
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${roundedClasses} ${shadowClasses} ${widthClasses} ${disabledClasses} ${className}`;
  
  const content = (
    <>
      {isLoading ? (
        <span className="flex items-center justify-center">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {children}
        </span>
      ) : (
        <span className="flex items-center justify-center">
          {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
          <span>{children}</span>
          {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
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
      <Link to={to} className={allClasses}>
        <motion.span 
          {...motionProps}
          className="flex items-center justify-center w-full h-full"
        >
          {content}
        </motion.span>
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