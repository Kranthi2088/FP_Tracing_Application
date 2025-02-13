'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    title: 'Chief Technology Officer',
    bio: 'Expert in AI and machine learning with 10+ years of experience in spatial analytics.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Michael Chen',
    title: 'Lead Developer',
    bio: 'Full-stack developer specializing in computer vision and real-time processing systems.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Emily Rodriguez',
    title: 'UX Research Lead',
    bio: 'Human-computer interaction specialist focused on creating intuitive spatial interfaces.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  }
];

const achievements = [
  {
    title: '1M+ Analysis',
    description: 'Floor plans analyzed with our AI system',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  },
  {
    title: '99% Accuracy',
    description: 'In movement pattern prediction',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
  },
  {
    title: '50+ Partners',
    description: 'Global architecture firms trust our solution',
    image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80'
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Modern office space with people collaborating"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative h-full max-w-6xl mx-auto px-8 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h1 className="text-5xl font-bold mb-4">About FlowSpace AI</h1>
              <p className="text-xl max-w-2xl">
                Revolutionizing spatial design through advanced AI technology and human-centered solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-8 bg-brand-gray">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-8">
                  To transform how people interact with built environments by leveraging cutting-edge AI technology and deep spatial understanding.
                </p>
                <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
                <p className="text-gray-600">
                  A world where every space is optimized for human movement, comfort, and interaction through intelligent design and analysis.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80"
                  alt="Team collaborating on architectural plans"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the experts behind FlowSpace AI's innovative spatial analysis technology.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover-animation"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-brand-accent mb-4">{member.title}</p>
                    <p className="text-gray-600 mb-6">{member.bio}</p>
                    <div className="flex space-x-4">
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-gray-600">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href={member.social.twitter} className="text-gray-400 hover:text-gray-600">
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a href={member.social.github} className="text-gray-400 hover:text-gray-600">
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 px-8 bg-brand-gray">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Milestones that mark our journey in revolutionizing spatial design.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover-animation"
                >
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
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