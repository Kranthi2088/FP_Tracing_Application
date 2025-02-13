'use client';

import { motion } from 'framer-motion';
import { Activity, Cpu, LineChart } from 'lucide-react';

export default function TechnicalOverview() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white">Technical Overview</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Our CNN-powered system analyzes floor plans and predicts movement patterns with unprecedented accuracy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl"
          >
            <Activity className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Real-time Processing</h3>
            <p className="text-gray-400">
              Advanced algorithms process floor plans and generate movement predictions in real-time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl"
          >
            <Cpu className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">CNN Architecture</h3>
            <p className="text-gray-400">
              Utilizes state-of-the-art convolutional neural networks trained on extensive movement data.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl"
          >
            <LineChart className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">Performance Metrics</h3>
            <p className="text-gray-400">
              Achieves 79% accuracy in movement prediction compared to traditional methods.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}