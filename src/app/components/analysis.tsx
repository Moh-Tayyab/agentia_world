"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Line, Bar, Doughnut, Radar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import CountUp from 'react-countup';
import { FaBrain, FaChartLine, FaRocket, FaDatabase, FaNetworkWired } from "react-icons/fa";

Chart.register(...registerables);

const Analysis = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Chart Data Configurations
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "AI Model Accuracy",
      data: [78, 82, 88, 85, 92, 95],
      borderColor: "#8B5CF6",
      backgroundColor: "rgba(139, 92, 246, 0.2)",
      borderWidth: 3,
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 8,
    }]
  };

  const barData = {
    labels: ["NLP", "CV", "Predictive", "Generative", "RL"],
    datasets: [{
      label: "AI Model Performance",
      data: [92, 88, 85, 90, 82],
      backgroundColor: [
        "rgba(139, 92, 246, 0.8)",
        "rgba(236, 72, 153, 0.8)",
        "rgba(59, 130, 246, 0.8)",
        "rgba(16, 185, 129, 0.8)",
        "rgba(245, 158, 11, 0.8)"
      ],
      borderColor: "rgba(255, 255, 255, 0.3)",
      borderWidth: 2,
    }]
  };

  const doughnutData = {
    labels: ["Training", "Validation", "Testing"],
    datasets: [{
      data: [60, 20, 20],
      backgroundColor: [
        "rgba(139, 92, 246, 0.8)",
        "rgba(236, 72, 153, 0.8)",
        "rgba(59, 130, 246, 0.8)"
      ],
      borderColor: "rgba(255, 255, 255, 0.3)",
      borderWidth: 2,
    }]
  };

  const radarData = {
    labels: ["Speed", "Accuracy", "Scalability", "Flexibility", "Efficiency"],
    datasets: [{
      label: "Model Capabilities",
      data: [95, 92, 88, 90, 93],
      backgroundColor: "rgba(139, 92, 246, 0.2)",
      borderColor: "#8B5CF6",
      borderWidth: 2,
      pointBackgroundColor: "#8B5CF6",
    }]
  };

  // Chart Options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0,0,0,0.9)",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "rgba(255,255,255,0.1)",
        borderWidth: 1,
        padding: 12,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: "rgba(255,255,255,0.1)" },
        ticks: { color: "#fff" }
      },
      x: {
        grid: { color: "rgba(255,255,255,0.1)" },
        ticks: { color: "#fff" }
      }
    }
  };

  const radarOptions = {
    ...chartOptions,
    scales: {
      r: {
        angleLines: { color: "rgba(255,255,255,0.1)" },
        grid: { color: "rgba(255,255,255,0.1)" },
        pointLabels: { color: "#fff" },
        ticks: { display: false }
      }
    }
  };

  // Stats Configuration
  const stats = [
    { 
      icon: <FaRocket className="text-purple-400" />,
      value: 95, 
      label: "Accuracy Rate", 
      suffix: "%",
      bg: "bg-purple-500/10",
      border: "border-purple-500/30",
      glow: "hover:shadow-purple-500",
    },
    { 
      icon: <FaDatabase className="text-blue-400" />,
      value: 2.5, 
      label: "Data Processed", 
      suffix: "PB",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
      glow: "hover:shadow-blue-500",
    },
    { 
      icon: <FaChartLine className="text-green-400" />,
      value: 1.8, 
      label: "Response Time", 
      suffix: "ms",
      bg: "bg-green-500/10",
      border: "border-green-500/30",
      glow: "hover:shadow-green-500",
    },
    { 
      icon: <FaBrain className="text-orange-400" />,
      value: 15, 
      label: "AI Models", 
      suffix: "+",
      bg: "bg-orange-500/10",
      border: "border-orange-500/30",
      glow: "hover:shadow-orange-500",
    },
  ];

  return (
    <section id="analysis" className="relative py-20 w-full min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 md:px-10 overflow-hidden">
      
      {/* Section Header */}
      <div className="relative z-10 text-center mb-16">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          AI-Powered Analysis
          </span>
          <span className="block mt-2 text-xl text-gray-400">Unlock insights with AI-driven data visualization and predictive analytics.</span>
        </motion.h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-7xl px-4 mb-16">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className={`p-6 ${stat.bg} backdrop-blur-lg rounded-xl border ${stat.border} relative overflow-hidden ${stat.glow} hover:shadow-[0_0_20px] `}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-20 " />
            
            <div className="flex items-center gap-4">
              <motion.div 
                className="p-3 rounded-lg bg-white/5"
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                {stat.icon}
              </motion.div>
              <div>
                <div className="text-3xl font-bold mb-1">
                  <CountUp
                    end={stat.value}
                    duration={2}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </div>
            
            <motion.div 
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 2 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-7xl px-4">
        {/* Line Chart */}
        <motion.div 
          className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl border border-purple-500/30"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FaRocket className="text-purple-400 text-xl" />
            <h3 className="text-xl font-semibold">Accuracy Progression</h3>
          </div>
          <div className="h-64">
            <Line data={lineData} options={chartOptions} />
          </div>
        </motion.div>

        {/* Bar Chart */}
        <motion.div 
          className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-2xl border border-blue-500/30"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FaChartLine className="text-blue-400 text-xl" />
            <h3 className="text-xl font-semibold">Performance Metrics</h3>
          </div>
          <div className="h-64">
            <Bar data={barData} options={chartOptions} />
          </div>
        </motion.div>

        {/* Doughnut Chart */}
        <motion.div 
          className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-2xl border border-green-500/30"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FaNetworkWired className="text-green-400 text-xl" />
            <h3 className="text-xl font-semibold">Data Distribution</h3>
          </div>
          <div className="h-64">
            <Doughnut data={doughnutData} options={chartOptions} />
          </div>
        </motion.div>

        {/* Radar Chart */}
        <motion.div 
          className="p-6 bg-gradient-to-br from-orange-500/10 to-amber-500/10 backdrop-blur-xl rounded-2xl border border-orange-500/30"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FaBrain className="text-orange-400 text-xl" />
            <h3 className="text-xl font-semibold">Model Capabilities</h3>
          </div>
          <div className="h-64">
            <Radar data={radarData} options={radarOptions} />
          </div>
        </motion.div>
      </div>

      {/* Animated Separator */}
      <motion.div 
        className="w-full max-w-7xl my-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
      />
    </section>
  );
};

export default Analysis;