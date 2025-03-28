'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import type { CanvasProps } from '@react-three/fiber';
import type { OrbitControlsProps } from '@react-three/drei';
import PresentationScene from './PresentationScene';

interface ThreeCanvasProps {
  description: string;
}

// Dynamically import Three.js components to avoid SSR issues
const ThreeCanvasComponent = dynamic(
  () => import('./ThreeCanvasComponent').then((mod) => mod.default),
  { ssr: false }
);

export default function ThreeCanvas({ description }: ThreeCanvasProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div className="text-white">Loading 3D Scene...</div>
      </div>
    );
  }

  return <ThreeCanvasComponent description={description} />;
} 