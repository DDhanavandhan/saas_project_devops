'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface DescriptionInputProps {
  onSubmit: (description: string) => void;
}

export default function DescriptionInput({ onSubmit }: DescriptionInputProps) {
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim()) {
      onSubmit(description);
      setDescription('');
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
      onSubmit={handleSubmit}
    >
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Enter Your Description</h2>
        <p className="text-gray-400">
          Describe what you want to see in your 3D presentation
        </p>
      </div>

      <Textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Example: Create a 3D scene with a futuristic city, flying cars, and neon lights..."
        className="min-h-[200px] bg-gray-700 border-gray-600 text-white"
      />

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
      >
        Generate 3D Presentation
      </Button>
    </motion.form>
  );
} 