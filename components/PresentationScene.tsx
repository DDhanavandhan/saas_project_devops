'use client';

import { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PresentationSceneProps {
  description: string;
}

export default function PresentationScene({ description }: PresentationSceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (groupRef.current) {
      groupRef.current.rotation.y = 0;
    }
  }, [description]);

  useFrame((state) => {
    if (groupRef.current && isMounted) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  if (!isMounted) {
    return null;
  }

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#4a90e2" />
      </mesh>
      <mesh position={[2, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#e24a4a" />
      </mesh>
      <mesh position={[-2, 0, 0]}>
        <torusGeometry args={[0.5, 0.2, 16, 100]} />
        <meshStandardMaterial color="#4ae24a" />
      </mesh>
      <mesh position={[0, 2, 0]}>
        <coneGeometry args={[0.5, 1, 32]} />
        <meshStandardMaterial color="#e2a74a" />
      </mesh>
      <mesh position={[0, -2, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 1, 32]} />
        <meshStandardMaterial color="#a74ae2" />
      </mesh>
    </group>
  );
} 