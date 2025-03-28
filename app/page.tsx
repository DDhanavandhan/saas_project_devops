'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import DescriptionInput from '@/components/DescriptionInput';

// Dynamically import the 3D components with no SSR
const DynamicCanvas = dynamic(() => import('@react-three/fiber').then(mod => mod.Canvas), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-white">Loading 3D Scene...</div>
    </div>
  ),
});

const DynamicOrbitControls = dynamic(() => import('@react-three/drei').then(mod => mod.OrbitControls), {
  ssr: false,
});

const DynamicPresentationScene = dynamic(() => import('@/components/PresentationScene'), {
  ssr: false,
});

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
            <DynamicCanvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <DynamicPresentationScene description={description} />
              <DynamicOrbitControls />
            </DynamicCanvas>
          </div>
        </div>
      </div>
    </main>
  );
}