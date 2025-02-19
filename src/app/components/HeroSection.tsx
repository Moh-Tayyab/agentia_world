'use client';

import React from 'react';
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import TypewriterEffect from 'typewriter-effect';
import { FaRocket, FaMicrochip, FaRegLightbulb, FaRobot } from "react-icons/fa";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [stars, setStars] = useState<React.ReactNode[]>([]);

  // Floating hologram animation variants
  const hologramVariants = {
    initial: { y: 0 },
    animate: {    
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Grid background animation
  useEffect(() => {
    const createGrid = () => {
      const gridElements = [];
      const lines = 30;
      
      for (let i = 0; i < lines; i++) {
        gridElements.push(
          <div
            key={`h-${i}`}
            className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"
            style={{ top: `${(i / lines) * 100}%` }}
          />
        );
        gridElements.push(
          <div
            key={`v-${i}`}
            className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent"
            style={{ left: `${(i / lines) * 100}%` }}
          />
        );
      }
      return gridElements;
    };

    setStars(createGrid());
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden isolate">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 w-full h-full opacity-20">
        {stars}
      </div>

      {/* Floating Holographic Elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        variants={hologramVariants}
        initial="initial"
        animate="animate"
      >
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mix-blend-screen blur-3xl opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mix-blend-screen blur-3xl opacity-30" />
      </motion.div>

      {/* Parallax Content */}
      <div className="max-w-7xl mx-auto px-4 py-4 relative mt-32" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Animated Badge */}
          <motion.div
            className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-lg rounded-full border border-white/10"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm font-semibold text-purple-400 ">
              PANAVERSITY POWERED
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </motion.div>

          <div className="flex flex-col items-center justify-center">
  {/* Animated Title */}
  <motion.h1
    className="text-3xl lg:text-6xl font-bold text-center my-4"
    animate={{
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    }}
    transition={{
      repeat: Infinity,
      duration: 10,
      ease: 'linear',
    }}
    style={{
      backgroundImage: 'linear-gradient(45deg, #8B5CF6, #EC4899, #3B82F6)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      backgroundSize: '300% 300%',
    }}
  >
    <span className="block mb-4">ENTERPRISE AI AGENT</span>
    <span className="block">For The Future</span>
    <motion.span
      className="block"
      animate={{ y: [-5, 5, -5] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      Agents Platform
    </motion.span>
  </motion.h1>
</div>


          {/* Animated AI Message */}
          <motion.div
            className="relative p-6 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-20" />
            <div className="flex items-center gap-4">
              <div className="relative">
                <FaRobot  className="text-3xl text-purple-400" />
                <div className="absolute inset-0 rounded-full bg-purple-400 blur-lg opacity-30" />
              </div>
              <span className="text-lg font-medium text-gray-300">
              <TypewriterEffect
          options={{
            strings: [
             
               "I can help optimize your workflows with AI 🤖",
               "Let's build something intelligent together 🚀",
                "AI can boost your productivity ⚡",
                "Experience the future of automation ✨",
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
            cursor: "<span class='text-white'>|</span>",
          }}
        />
                  
              </span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-6 mt-12 justify-center">
            <GlowButton
              text="Start Free Trial"
              icon={<FaRocket className="text-xl" />}
            />
            <GlowButton
              text="Watch Demo"
              variant="secondary"
              icon={<FaRegLightbulb className="text-xl" />}
            />
          </div>

          {/* Animated Scroll Indicator */}
          <motion.div
            className="mt-20 flex flex-col items-center gap-2"
            animate={{ y: [0, 20, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
          >
            <div className="w-8 h-12 rounded-full border-2 border-white/20 flex items-start justify-center p-1 hover:cursor-pointer">
              <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" />
            </div>
            <span className="text-sm text-white/60">Explore More</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating AI Chips */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaMicrochip />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const GlowButton = ({ text, icon, variant = 'primary' }: { text: string, icon?: React.ReactNode, variant?: 'primary' | 'secondary' }) => {
  return (
    <motion.a
      href="#"
      className={`relative px-8 py-4 rounded-xl font-semibold flex items-center gap-3 overflow-hidden transition-all duration-300 group ${
        variant === 'primary' 
          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
          : 'bg-white/10 text-gray-300 border border-white/20 hover:border-white/40'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && (
        <span className="relative z-10 group-hover:animate-bounce">
          {icon}
        </span>
      )}
      <span className="relative z-10">{text}</span>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12" />
      
      {/* Particle burst on hover */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              x: Math.cos((i * 30 * Math.PI) / 180) * 50,
              y: Math.sin((i * 30 * Math.PI) / 180) * 50,
            }}
            transition={{
              duration: 0.6,
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        ))}
      </div>
    </motion.a>
  );
};

export default HeroSection;