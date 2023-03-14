import React, { useState } from 'react';
import Search from './Components/Functionality/Search';
import Option from './Components/Functionality/Option';
import ActualWeather from './Components/UI/ActualWeather';
import DailyWeather from './Components/UI/DailyWeather';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Lights from './Components/Lights';

const App = () => {
  const [start, setStart] = useState(true);
  const [openTab, setOpenTab] = useState(null);
  // const aspectRatio = window.innerWidth / window.innerHeight;
  // const cameraWidth = 2000;
  // const cameraHeight = cameraWidth / aspectRatio;

  const handleTabClick = () => {
    if (start) {
      setStart(false);
    }
    setOpenTab((prevState) => !prevState);
  };

  return (
    <div className="w-screen h-screen bg-cover bg-center bg-rain relative overflow-hidden">
      {/* Main */}
      <section className="w-full h-full py-20 px-28 flex flex-col justify-between">
        <span className="flex items-end gap-5">
          <img src="/location-logo.png" alt="location" />
          <p className="h-12 text-5xl font-extralight">London, UK</p>
        </span>
      </section>
      {/* Menu options */}
      <div className="w-full flex flex-col absolute bottom-0">
        <div className="flex" onClick={() => handleTabClick()}>
          <Option
            name={'Weather'}
            logo={'wi_partly-cloudy-day'}
            color={'#f59e0b'}
          />
          <Option
            name={'Weather'}
            logo={'wi_partly-cloudy-day'}
            color={'#6366f1'}
          />
          <Option
            name={'Weather'}
            logo={'wi_partly-cloudy-day'}
            color={'#10b981'}
          />
        </div>
        {!start && (
          <div
            // bg-slate-300 or bg-gray-400
            className={`pl-20 bg-slate-300 bg-opacity-50 backdrop-blur-lg ${
              openTab ? 'animate-openTab' : 'animate-closeTab'
            }`}
          >
            <div className="h-full w-full flex">
              <div className="pr-14">
                <ActualWeather
                  temp={'28º'}
                  day={'MONDAY 27th'}
                  wind={'4 mph'}
                  minTemp={'67º'}
                />
              </div>
              <DailyWeather day={'TUE'} temp={'21º'} />
              <DailyWeather day={'WED'} temp={'21º'} />
              <DailyWeather day={'THU'} temp={'21º'} />
              <DailyWeather day={'FRI'} temp={'21º'} />
              <DailyWeather day={'SAT'} temp={'21º'} />
              <DailyWeather day={'SUN'} temp={'21º'} />
            </div>
          </div>
        )}
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
