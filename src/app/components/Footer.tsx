"use client";

import Image from "next/image";
import { FaTwitter, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-[#15002f] via-[#0a001a] to-black text-white py-16 px-6 sm:px-12 lg:px-24">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-transparent to-blue-900 opacity-20 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Agentic World
            </h2>
            <p className="mt-4 text-gray-400 max-w-md">
              Building the future with AI & Robotics. Stay connected and explore next-generation innovations.
            </p>
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-6 mt-6">
              <Link
                aria-label="Twitter"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-purple-500 transition duration-200"
              >
                <FaTwitter />
              </Link>
              <Link
                aria-label="LinkedIn"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-500 transition duration-200"
              >
                <FaLinkedin />
              </Link>
              <Link
                aria-label="GitHub"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-400 transition duration-200"
              >
                <FaGithub />
              </Link>
              <Link
                aria-label="Discord"
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-indigo-500 transition duration-200"
              >
                <FaDiscord />
              </Link>
            </div>
          </motion.div>

          {/* Email Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-md text-center md:text-left"
          >
            <h3 className="text-2xl font-semibold text-purple-300">Join Our AI Revolution</h3>
            <p className="mt-2 text-gray-400">
              Stay updated with the latest trends and innovations in AI.
            </p>
            <div className="mt-6 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-lg bg-[#1a1a2e] border border-gray-700 focus:border-purple-500 text-white placeholder-gray-400 outline-none"
              />
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-r-lg text-white font-semibold hover:opacity-90 transition duration-200">
                Subscribe
              </button>
            </div>
          </motion.div>

          {/* Robot Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="w-40 sm:w-48 md:w-56 lg:w-64"
          >
            <Image
              src="/robotImage.webp"
              alt="Robot Mascot"
              width={300}
              height={300}
              className="drop-shadow-xl rounded-full"
            />
          </motion.div>
        </div>

        {/* Footer Links */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-400 text-sm">
          {/* Product */}
          <div>
            <h4 className="text-white font-semibold text-lg border-b border-gray-700 pb-2 mb-4">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-purple-400 transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-purple-400 transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-purple-400 transition">
                  API
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-purple-400 transition">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-lg border-b border-gray-700 pb-2 mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-purple-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-purple-400 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-purple-400 transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-purple-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-lg border-b border-gray-700 pb-2 mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-purple-400 transition">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-purple-400 transition">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-purple-400 transition">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-purple-400 transition">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-lg border-b border-gray-700 pb-2 mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-purple-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-purple-400 transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-purple-400 transition">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Agentic World. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;