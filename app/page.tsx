'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import DescriptionInput from '@/components/DescriptionInput';

// Dynamically import Three.js components to avoid SSR issues
const ThreeCanvas = dynamic(
  () => import('@/components/ThreeCanvas').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full flex items-center justify-center">
        <div className="text-white">Loading 3D Scene...</div>
      </div>
    ),
  }
);

export default function Home() {
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDescriptionSubmit = async (text: string) => {
    setIsGenerating(true);
    setDescription(text);
    // Here we'll add the logic to generate 3D scene based on description
    setIsGenerating(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            3D Presentation Maker
          </h1>
          <p className="text-xl text-gray-300">
            Transform your descriptions into stunning 3D presentations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
            <DescriptionInput onSubmit={handleDescriptionSubmit} />
          </div>
          
          <div className="h-[600px] bg-gray-800 rounded-lg overflow-hidden shadow-xl">
            <ThreeCanvas description={description} />
          </div>
        </div>
      </div>
    </main>
  );
}