import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Cpu, Zap, Target, Rocket, Shield, Lightbulb } from 'lucide-react';

const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);
  
  const features = [
    {
      icon: Cpu,
      title: "AI-Native Development",
      description: "We don't just use AI tools - we think in AI. Every solution is architected with intelligence at its core.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Lightning Execution",
      description: "While others plan, we build. Our rapid prototyping gets you from idea to market in record time.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Every line of code serves a purpose. We craft solutions that are elegant, efficient, and bulletproof.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Scale-Ready Architecture",
      description: "Built for tomorrow's demands today. Our systems grow with your ambitions, not against them.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Fortress Security",
      description: "Security isn't an afterthought - it's the foundation. We build systems that hackers respect.",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation Catalyst",
      description: "We don't follow trends - we create them. Your project becomes the benchmark others chase.",
      color: "from-indigo-500 to-blue-500"
    }
  ];
  
  return (
    <section ref={containerRef} className="relative py-32 bg-gradient-to-b from-slate-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            style={{ y }}
            className="inline-block"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                WHY WE'RE
              </span>
              <br />
              <span className="text-white">DIFFERENT</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            We're not your typical dev team. We're digital alchemists who transform 
            complex challenges into elegant solutions that make your competitors wonder 
            <span className="text-orange-400 font-semibold"> "How did they do that?"</span>
          </motion.p>
        </motion.div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.5 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <div className="relative h-full">
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-300" />
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500`} />
                
                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Hover Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="mt-4 text-orange-400 font-semibold flex items-center"
                  >
                    Learn More →
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-3xl border border-orange-500/20 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to build something extraordinary?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl">
              Let's turn your wildest ideas into reality. No project too ambitious, no challenge too complex.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-full shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300"
            >
              Let's Talk →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;