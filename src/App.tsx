import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import Scene from './components/Scene';
import DescriptionInput from './components/DescriptionInput';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #1a1a1a, #000000);
  color: white;
  padding: 2rem;
`;

const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #a0aec0;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CanvasContainer = styled.div`
  height: 600px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  overflow: hidden;
`;

function App() {
  const [description, setDescription] = useState('');

  const handleDescriptionSubmit = (text: string) => {
    setDescription(text);
  };

  return (
    <AppContainer>
      <Header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>3D Presentation Maker</Title>
        <Subtitle>Transform your descriptions into stunning 3D presentations</Subtitle>
      </Header>

      <MainContent>
        <DescriptionInput onSubmit={handleDescriptionSubmit} />
        <CanvasContainer>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Scene description={description} />
            <OrbitControls />
          </Canvas>
        </CanvasContainer>
      </MainContent>
    </AppContainer>
  );
}

export default App; 