'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">FlowSpace AI</h3>
            <p className="text-gray-600 max-w-md">
              Advanced floor plan analysis using CNN technology for predicting indoor human movement patterns.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Technology', 'Contact'].map((item) => (
                <motion.li key={item} whileHover={{ x: 2 }}>
                  <Link href={`/${item.toLowerCase()}`} className="text-gray-600 hover:text-gray-900 text-sm">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>info@flowspace.ai</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
      </div>
    </footer>
  );
}