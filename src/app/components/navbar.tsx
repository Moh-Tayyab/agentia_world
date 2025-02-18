"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Bot, Cpu, BarChart, DollarSign, Mail } from "lucide-react";

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.4,
      type: "spring",
      stiffness: 120
    },
  }),
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Technology", icon: <Cpu size={20} />, link: "#technology" },
    { name: "Analysis", icon: <BarChart size={20} />, link: "#analysis" },
    { name: "Pricing", icon: <DollarSign size={20} />, link: "#pricing" },
    { name: "Contact", icon: <Mail size={20} />, link: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/95 backdrop-blur-lg shadow-2xl" : "bg-transparent backdrop-blur-sm"}`}>
      {/* Animated Top Border */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 origin-left"
      />

      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with Enhanced Animation */}
          <motion.a
            href="/"
            className="flex items-center gap-2 group"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"
              whileHover={{ rotate: [0, -15, 15, 0], scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Bot size={32} className="text-white" />
            </motion.div>
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0%', '200%'] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              style={{ 
                backgroundSize: '200% auto',
              }}
            >
              Agentia World
            </motion.span>
          </motion.a>

          {/* Desktop Menu with Enhanced Interactions */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
            
            {/* Enhanced CTA Button */}
            <motion.a
              href="#discover"
              className="ml-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl shadow-2xl relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Bot size={20} />
                Discover More
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent w-1/2 -skew-x-12"
                initial={{ x: '-150%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.8 }}
              />
            </motion.a>
          </div>

          {/* Mobile Menu Toggle with Animation */}
          <motion.button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
              {isOpen ? (
                <X className="text-white w-8 h-8" />
              ) : (
                <Menu className="text-white w-8 h-8" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu with Staggered Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-4 pt-4 border-t border-gray-700/50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/30 rounded-lg transition-colors"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.2 }}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    {item.name}
                  </div>
                </motion.a>
              ))}
              <motion.a
                href="#discover"
                className="mt-4 block w-full px-4 py-3 text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => setIsOpen(false)}
              >
                Discover More
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}