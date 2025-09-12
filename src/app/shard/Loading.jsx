"use client";
import { motion } from "framer-motion";
import { FaCar } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="text-blue-500 text-6xl"
      >
        <FaCar />
      </motion.div>
      <motion.p
        className="ml-4 text-xl font-semibold text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        Loading Services...
      </motion.p>
    </div>
  );
}
