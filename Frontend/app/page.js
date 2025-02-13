'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import VideoUpload from '@/components/VideoUpload';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-72 px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7  }}
              className="text-center"
            >
              <h1 className="text-6xl font-bold text-brand-black mb-6">
                Floor Plan Analysis
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Our AI-powered system analyzes your floor plan videos to predict and optimize indoor movement patterns with unprecedented accuracy.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hover-animation bg-brand-black text-brand-white px-8 py-3 rounded-md font-medium inline-flex items-center gap-2"
              >
                Start Analysis
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      
        {/* Video Upload Section */}
        <section className="rounded-lg  py-16 px-15 bg-gray-100 ">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-brand-black mb-4">
                Upload Your Video
              </h2>
              <p className="text-gray-600">
                Drag and drop your floor plan video or click to browse
              </p>
            </motion.div>
            <VideoUpload />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Easy Upload',
                  description: 'Simple drag-and-drop interface supporting multiple video formats'
                },
                {
                  title: 'Real-time Processing',
                  description: 'Advanced algorithms analyze your videos instantly'
                },
                {
                  title: 'Accurate Results',
                  description: 'Get detailed movement pattern analysis with high accuracy'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="hover-animation bg-white p-8 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-bold text-brand-black mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}