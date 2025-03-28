import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useRef, useState } from 'react';

interface SceneProps {
  description: string;
}

export default function Scene({ description }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [rotation, setRotation] = useState(0);

  useFrame((state, delta) => {
    setRotation((prev) => prev + delta * 0.5);
  });

  return (
    <group ref={groupRef} rotation={[0, rotation, 0]}>
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