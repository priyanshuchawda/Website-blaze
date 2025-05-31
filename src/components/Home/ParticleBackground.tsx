import React, { useCallback, useMemo } from 'react';
import { loadSlim } from 'tsparticles-slim';
import type { Engine, ISourceOptions } from 'tsparticles-engine';
import { useTheme } from '../../context/ThemeContext';
import Particles from 'react-tsparticles';

interface ParticleBackgroundProps {
  variant?: 'default' | 'dense' | 'light' | 'minimal' | 'connections';
  customColors?: {
    particles?: string;
    links?: string;
  };
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  variant = 'default',
  customColors,
}) => {
  const { theme } = useTheme();
  
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  
  const options: ISourceOptions = useMemo(() => {
    // Base config variables that change with theme
    const particleColor = customColors?.particles || 
      (theme === 'dark' ? 
        'rgba(255, 255, 255, 0.5)' : 
        'rgba(0, 0, 0, 0.3)');
    
    const linkColor = customColors?.links || 
      (theme === 'dark' ? 
        'rgba(255, 255, 255, 0.15)' : 
        'rgba(0, 0, 0, 0.1)');
    
    // Base configuration
    const baseConfig: ISourceOptions = {
      fpsLimit: 60,
      fullScreen: false,
      detectRetina: true,
      particles: {
        color: {
          value: particleColor,
        },
        links: {
          color: linkColor,
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: false,
          straight: false,
          outModes: {
            default: "out",
          },
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 60,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.5,
            },
          },
          push: {
            quantity: 4,
          },
        },
      },
    };
    
    // Variant-specific configurations
    switch (variant) {
      case 'dense':
        return {
          ...baseConfig,
          particles: {
            ...(baseConfig.particles || {}),
            number: {
              ...(baseConfig.particles?.number || {}),
              value: 120,
            },
            move: {
              ...(baseConfig.particles?.move || {}),
              speed: 0.8,
            },
          },
        };
        
      case 'light':
        return {
          ...baseConfig,
          particles: {
            ...(baseConfig.particles || {}),
            number: {
              ...(baseConfig.particles?.number || {}),
              value: 30,
            },
            opacity: {
              value: 0.3,
            },
            size: {
              value: { min: 0.8, max: 2 },
            },
          },
        };
        
      case 'minimal':
        return {
          ...baseConfig,
          particles: {
            ...(baseConfig.particles || {}),
            number: {
              ...(baseConfig.particles?.number || {}),
              value: 20,
            },
            links: {
              ...(baseConfig.particles?.links || {}),
              enable: false,
            },
            move: {
              ...(baseConfig.particles?.move || {}),
              speed: 0.5,
              direction: "top",
              random: true,
            },
            opacity: {
              value: 0.3,
              random: true,
            },
            size: {
              value: { min: 1, max: 4 },
              random: true,
            },
          },
        };
        
      case 'connections':
        return {
          ...baseConfig,
          particles: {
            ...(baseConfig.particles || {}),
            number: {
              ...(baseConfig.particles?.number || {}),
              value: 80,
            },
            links: {
              ...(baseConfig.particles?.links || {}),
              width: 0.8,
              opacity: 0.2,
              distance: 200,
              triangles: {
                enable: true,
                opacity: 0.05,
              },
            },
            move: {
              ...(baseConfig.particles?.move || {}),
              speed: 0.6,
            },
          },
        };
        
      default:
        return baseConfig;
    }
  }, [theme, variant, customColors]);
  
  return (
    <div className="absolute inset-0 z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options}
        className="w-full h-full"
      />
    </div>
  );
};

export default ParticleBackground;