import React, { Suspense } from 'react';
import Search from './Components/Functionality/Search';
import Option from './Components/Functionality/Option';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Lights from './Components/Lights';

const App = () => {
  const aspectRatio = window.innerWidth / window.innerHeight;
  const cameraWidth = 2000;
  const cameraHeight = cameraWidth / aspectRatio;

  return (
    <div className="w-screen h-screen bg-cover bg-center bg-rain relative">
      {/* Main */}
      <section className="w-full h-full py-20 px-28 flex flex-col justify-between">
        <span className="flex items-end gap-5">
          <img src="/location-logo.png" alt="location" />
          <p className="h-12 text-5xl font-extralight">London, UK</p>
        </span>
        <div className="flex items-center">
          <img
            src="/design/fill/animation-ready/rain.svg"
            alt="rain"
            className="w-52"
          />
          <p className="h-28 text-9xl font-bold">20º</p>
        </div>
      </section>
      {/* Menu options */}
      <div className="w-full flex absolute bottom-0">
        <Option
          name={'Weather'}
          logo={'wi_partly-cloudy-day'}
          color={'yellow'}
        />
        <Option
          name={'Weather'}
          logo={'wi_partly-cloudy-day'}
          color={'indigo'}
        />
        <Option
          name={'Weather'}
          logo={'wi_partly-cloudy-day'}
          color={'green'}
        />
      </div>

      {/* <Canvas frameloop="demand" className="bg-blue-300">
        <Suspense fallback={null}></Suspense>
        <OrbitControls />
        <Lights />
        <mesh>
          <boxGeometry attach="geometry" args={[1, 1, 1]} />
          <meshLambertMaterial color={'red'} />
        </mesh>
      </Canvas> */}
    </div>
  );
};

export default App;
