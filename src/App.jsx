import React, { useState } from 'react';
import Search from './Components/Functionality/Search';
import FooterTabs from './Components/Functionality/FooterTabs';
import ActualWeather from './Components/UI/ActualWeather';
import WeeklyWeather from './Components/UI/WeeklyWeather';
import DailyWeather from './Components/UI/DailyWeather';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Lights from './Components/Canvas/Lights';
import { useWeatherContext } from './context/WeatherContext';

const App = () => {
  const { cityName } = useWeatherContext();
  const [start, setStart] = useState(true);
  const [openTab, setOpenTab] = useState(null);
  // const aspectRatio = window.innerWidth / window.innerHeight;
  // const cameraWidth = 2000;
  // const cameraHeight = cameraWidth / aspectRatio;

  const handleTabClick = () => {
    if (cityName) {
      if (start) {
        setStart(false);
      }
      setOpenTab((prevState) => !prevState);
    }
  };

  return (
    <div className="w-screen h-screen bg-cover bg-center bg-rain relative overflow-hidden">
      {/* Main */}
      <section className="w-full h-full py-20 px-28 flex justify-between">
        <span className="flex items-start gap-5">
          <img src="/location-logo.png" alt="location" className="w-12" />
          <p className="h-12 text-5xl font-extralight">
            {cityName
              ? cityName[0].toUpperCase() + cityName.slice(1, cityName.length)
              : 'London'}
          </p>
        </span>
        <Search />
      </section>
      {/* Menu options */}
      <div className="w-full flex flex-col absolute bottom-0">
        <div className="flex" onClick={() => handleTabClick()}>
          <FooterTabs />
        </div>
        {!start && (
          <div
            // bg-slate-300 or bg-gray-400
            className={`pl-20 bg-slate-300 bg-opacity-50 backdrop-blur-lg ${
              openTab ? 'animate-openTab' : 'animate-closeTab'
            }`}
          >
            <div className="h-full w-full flex justify-between">
              <div className=" pr-14">
                <ActualWeather
                  temp={'28º'}
                  day={'MONDAY 27th'}
                  wind={'4 mph'}
                  minTemp={'67º'}
                />
              </div>
              <div className=" flex">
                <WeeklyWeather />
              </div>
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
