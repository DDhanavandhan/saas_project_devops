'use client';

import React from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

interface PresentationSceneProps {
  description: string;
}

export default function PresentationScene({ description }: PresentationSceneProps) {
  const [rotation, setRotation] = React.useState(0);

  useFrame((state, delta) => {
    setRotation((prev) => prev + delta * 0.5);
  });

  return (
    <group rotation={[0, rotation, 0]}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
      </mesh>
      <Text
        position={[0, 2, 0]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {description || 'Enter a description to generate 3D scene'}
      </Text>
    </group>
  );
} 