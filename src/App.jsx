import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Lights from './Components/Lights';

const App = () => {
  const aspectRatio = window.innerWidth / window.innerHeight;
  const cameraWidth = 2000;
  const cameraHeight = cameraWidth / aspectRatio;

  return (
    <div className="w-screen h-screen bg-white">
      <Canvas frameloop="demand" className="bg-blue-300">
        <Suspense fallback={null}></Suspense>
        <OrbitControls />
        <Lights />
        {/* <mesh>
          <boxGeometry attach="geometry" args={[1, 1, 1]} />
          <meshLambertMaterial color={'red'} />
        </mesh> */}
      </Canvas>
    </div>
  );
};

export default App;
