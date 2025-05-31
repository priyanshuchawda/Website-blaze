import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centerTitle?: boolean;
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  gradientColors?: string;
  withLine?: boolean;
  withAnimation?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centerTitle = false, // For backward compatibility
  align = 'left',
  size = 'lg',
  gradientColors = 'from-primary-500 to-secondary-500',
  withLine = false,
  withAnimation = true,
}) => {
  // Override align if centerTitle is true (for backward compatibility)
  if (centerTitle) align = 'center';
  
  // Determine alignment class
  const alignmentClass = {
    'left': 'text-left',
    'center': 'text-center mx-auto',
    'right': 'text-right ml-auto',
  }[align];
  
  // Determine size classes
  const sizeClasses = {
    'sm': 'text-2xl md:text-3xl',
    'md': 'text-3xl md:text-4xl',
    'lg': 'text-4xl md:text-5xl',
    'xl': 'text-5xl md:text-6xl',
  }[size];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const AnimatedOrStatic = withAnimation ? motion.div : 'div';
  const animationProps = withAnimation ? {
    variants: containerVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: '-100px' }
  } : {};
  
  const TitleComponent = withAnimation ? motion.h2 : 'h2';
  const titleAnimationProps = withAnimation ? {
    variants: itemVariants
  } : {};
  
  const SubtitleComponent = withAnimation ? motion.p : 'p';
  const subtitleAnimationProps = withAnimation ? {
    variants: itemVariants
  } : {};
  
  return (
    <AnimatedOrStatic 
      className={`mb-16 ${alignmentClass}`}
      {...animationProps}
    >
      <TitleComponent
        className={`${sizeClasses} font-bold font-display text-gray-900 dark:text-white mb-4 relative inline-block`}
        {...titleAnimationProps}
      >
        <span className={`bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent`}>
          {title}
        </span>
        {withLine && (
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r ${gradientColors} rounded-full`}
          ></motion.span>
        )}
      </TitleComponent>
      
      {subtitle && (
        <SubtitleComponent
          className={`text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}
          {...subtitleAnimationProps}
        >
          {subtitle}
        </SubtitleComponent>
      )}
    </AnimatedOrStatic>
  );
};

export default SectionHeading;