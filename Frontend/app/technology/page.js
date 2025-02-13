"use client";
import { motion } from "framer-motion";
import { Cpu, Network, Braces, Database } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-white">
    <Navbar />
    <div className="min-h-screen pt-24">
        
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-4xl px-4"
      >
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Technology Stack
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground"
          >
            Cutting-edge solutions powering our video processing platform
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-card p-6 rounded-lg shadow-lg"
          >
            <Cpu className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-3">AI Processing</h2>
            <p className="text-muted-foreground">
              Advanced neural networks and machine learning algorithms for intelligent video analysis
              and processing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-card p-6 rounded-lg shadow-lg"
          >
            <Network className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-3">Cloud Infrastructure</h2>
            <p className="text-muted-foreground">
              Scalable cloud architecture ensuring fast processing and reliable performance for
              users worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-card p-6 rounded-lg shadow-lg"
          >
            <Braces className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-3">API Integration</h2>
            <p className="text-muted-foreground">
              RESTful APIs and WebSocket connections for real-time processing updates and
              seamless integration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-card p-6 rounded-lg shadow-lg"
          >
            <Database className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-3">Data Management</h2>
            <p className="text-muted-foreground">
              Secure and efficient storage solutions for managing large-scale video processing
              operations.
            </p>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg/50 p-8 rounded-lg mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4">Technical Specifications</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Processing Capabilities</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Support for multiple video formats (MP4, AVI, MOV)</li>
                <li>Up to 500MB file size processing</li>
                <li>Real-time status updates</li>
                <li>Parallel processing support</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Security Features</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>End-to-end encryption</li>
                <li>Secure file storage</li>
                <li>Authentication and authorization</li>
                <li>Regular security audits</li>
              </ul>
            </div>
          </div>

        </motion.section>
      </motion.div>
    </div>
    <Footer />
    </div>
  );
}
