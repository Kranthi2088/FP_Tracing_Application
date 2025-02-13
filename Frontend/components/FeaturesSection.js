'use client';

import { motion } from 'framer-motion';
import { Brain, Navigation, BarChart3, Building } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'CNN Technology',
    description: 'Advanced neural networks trained on real-world movement data',
  },
  {
    icon: Navigation,
    title: 'Movement Prediction',
    description: 'Accurate prediction of human traffic patterns and flow',
  },
  {
    icon: BarChart3,
    title: '79% Accuracy',
    description: 'Proven accuracy compared to manual tracing methods',
  },
  {
    icon: Building,
    title: 'Virtual Reality Integration',
    description: 'Immersive visualization of space utilization',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-16">Key Features</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl backdrop-blur-sm hover:from-gray-800 hover:to-gray-900 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}