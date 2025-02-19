"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Bot, Sparkles, Brain, ShieldCheck } from "lucide-react";

const faqs = [
  {question: "What is Agentic AI?",
    answer:
      "Agentic AI refers to artificial intelligence models that can make autonomous decisions, adapt to environments, and optimize tasks without direct human intervention.",
    icon: <Brain className="text-pink-400" size={22} />,
  },
  {
    question: "How does Agentic AI work?",
    answer:
      "Agentic AI operates using advanced machine learning, reinforcement learning, and neural networks to analyze data, predict outcomes, and act accordingly.",
    icon: <Sparkles className="text-purple-400" size={22} />,
  },
  {
    question: "What are the key applications of Agentic AI?",
    answer:
      "Agentic AI is used in robotics, autonomous systems, smart assistants, AI-driven research, financial analysis, and self-optimizing workflows.",
    icon: <Bot className="text-pink-400" size={22} />,
  },
  {
    question: "Is Agentic AI the same as traditional AI?",
    answer:
      "No. Traditional AI follows predefined rules, whereas Agentic AI can learn, adapt, and make real-time decisions based on evolving data.",
    icon: <ShieldCheck className="text-purple-400" size={22} />,
  },
  {
    question: "Can Agentic AI replace human intelligence?",
    answer:
      "Agentic AI enhances human intelligence rather than replacing it. It automates repetitive tasks, augments decision-making, and provides intelligent insights.",
    icon: <Brain className="text-pink-400" size={22} />,
  },
  {
    question: "How secure is Agentic AI?",
    answer:
      "Security depends on implementation. Ethical guidelines, robust encryption, and bias mitigation strategies are used to ensure responsible AI behavior.",
    icon: <ShieldCheck className="text-purple-400" size={22} />,
  },
];

export default function QuestionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 md:px-16 bg-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl text-white/5"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              rotate: Math.random() * 360
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Brain />
          </motion.div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2  data-aos="fade-down"
        className="text-3xl md:text-5xl lg:text-6xl pb-4 font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent animate-pulse"
          >
            Intelligent Insights
          </h2>
          <p  className="text-gray-400 text-xl mb-12"
        data-aos="fade-up"
        data-aos-delay="200">
            Answers to common questions about our{" "}
            <span className="text-purple-400 font-medium">Agentic AI</span> platform
          </p>
        </motion.div>

        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`group relative overflow-hidden rounded-xl border ${
                openIndex === index 
                  ? "border-purple-500/30 bg-gradient-to-b from-purple-500/10 to-pink-500/5"
                  : "border-gray-800 hover:border-purple-500/20 bg-gray-900/50"
              } backdrop-blur-lg transition-all`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              onClick={() => toggleFAQ(index)}
            >
              <div className="p-6 cursor-pointer">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`p-3 rounded-lg ${
                        openIndex === index 
                          ? "bg-purple-500/20" 
                          : "bg-gray-800/50 group-hover:bg-purple-500/10"
                      } transition-colors`}
                      animate={{ rotate: openIndex === index ? 360 : 0 }}
                    >
                      {faq.icon}
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-100">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    className="text-purple-400 ml-4"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="mt-4 pl-16 pr-8 text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}