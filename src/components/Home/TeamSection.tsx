import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Send, ArrowRight, Code, Brain, Zap } from 'lucide-react';
import { teamMembers } from '../../data/team';
import Button from '../UI/Button';

const TeamSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 100, 
      opacity: 0,
      rotateX: -15
    },
    visible: { 
      y: 0, 
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-white">MEET THE</span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              REBELS
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            The masterminds behind the magic. Each bringing their own flavor of genius 
            to create solutions that <span className="text-orange-400 font-semibold">defy expectations</span>.
          </p>
        </motion.div>
        
        {/* Team Grid */}
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <div className="relative h-full">
                {/* Card Background with Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-sm border border-white/20 group-hover:border-orange-500/30 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/10 group-hover:to-red-500/10 rounded-3xl transition-all duration-500" />
                
                <div className="relative p-8 h-full">
                  {/* Member Image */}
                  <div className="relative mb-8">
                    <div className="relative w-32 h-32 mx-auto">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full rounded-2xl overflow-hidden border-4 border-gradient-to-r from-orange-500 to-red-500 shadow-2xl shadow-orange-500/25"
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      
                      {/* Status Indicator */}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-4 border-black flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Member Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {member.name}
                    </h3>
                    
                    <div className="flex items-center justify-center space-x-2 mb-3">
                      <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent flex-grow" />
                      <span className="text-orange-400 font-bold text-sm tracking-wider uppercase">
                        {member.subtitle}
                      </span>
                      <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent flex-grow" />
                    </div>
                    
                    <p className="text-gray-300 text-lg font-semibold">
                      {member.role}
                    </p>
                  </div>
                  
                  {/* Bio */}
                  <p className="text-gray-400 leading-relaxed mb-8 text-center">
                    {member.bio}
                  </p>
                  
                  {/* Skills */}
                  <div className="mb-8">
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.skills.slice(0, 3).map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + skillIndex * 0.1 }}
                          className="px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border border-orange-500/30"
                        >
                          {skill}
                        </motion.span>
                      ))}
                      {member.skills.length > 3 && (
                        <span className="px-3 py-1 rounded-full text-sm font-bold bg-gray-800 text-gray-400 border border-gray-700">
                          +{member.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Social Links & CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      {[
                        { icon: Github, url: `https://github.com/${member.social.github}`, color: 'hover:text-purple-400' },
                        { icon: Linkedin, url: `https://linkedin.com/in/${member.social.linkedin}`, color: 'hover:text-blue-400' },
                        { icon: Send, url: `https://t.me/${member.social.telegram}`, color: 'hover:text-cyan-400' }
                      ].map((social, socialIndex) => (
                        <motion.a
                          key={socialIndex}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          whileTap={{ scale: 0.9 }}
                          className={`p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 ${social.color} transition-all duration-300 border border-white/10 hover:border-white/20`}
                        >
                          <social.icon size={18} />
                        </motion.a>
                      ))}
                    </div>
                    
                    <Button
                      to={`/team/${member.id}`}
                      variant="ghost"
                      size="sm"
                      icon={<ArrowRight size={16} />}
                      iconPosition="right"
                      className="text-orange-400 hover:text-white"
                    >
                      Profile
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-3xl border border-orange-500/20 backdrop-blur-sm">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Code className="w-8 h-8 text-orange-400" />
              <Brain className="w-8 h-8 text-red-400" />
              <Zap className="w-8 h-8 text-pink-400" />
            </div>
            
            <h3 className="text-3xl font-black text-white mb-4">
              Want to join the rebellion?
            </h3>
            
            <p className="text-gray-400 mb-6 max-w-2xl">
              We're always looking for exceptional talent who aren't afraid to challenge the status quo.
            </p>
            
            <Button
              to="/team"
              variant="blaze"
              size="lg"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
              glow
            >
              See Full Team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;