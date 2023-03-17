import React from 'react';
import Search from './Components/Functionality/Search';
import FooterTabs from './Components/Functionality/FooterTabs';
import ActualWeather from './Components/UI/ActualWeather';
import WeeklyWeather from './Components/UI/WeeklyWeather';
import Loader from './Components/UI/Loader';
import WeatherIcons from './Components/UI/Info-tab/WeatherIcons';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Lights from './Components/Canvas/Lights';
import { useWeatherContext } from './context/WeatherContext';

const App = () => {
  const { start, openTab, activeTabIndex, weatherData, cityName } =
    useWeatherContext();
  // const aspectRatio = window.innerWidth / window.innerHeight;
  // const cameraWidth = 2000;
  // const cameraHeight = cameraWidth / aspectRatio;

  return (
    <div className="w-screen h-screen bg-cover bg-center bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 relative overflow-hidden">
      {/* Main */}
      <section className="w-full h-full py-20 xxs:px-28 flex flex-col items-center justify-center gap-8 md:flex-row md:justify-between md:items-start">
        <span className="flex items-start gap-5">
          <img src="/location-logo.png" alt="location" className="w-12" />
          <p className="h-12 text-5xl font-extralight">
            {cityName &&
              cityName[0].toUpperCase() + cityName.slice(1, cityName.length)}
          </p>
        </span>
        <Search />
      </section>
      {/* Menu options */}
      <div className="w-full flex flex-col absolute bottom-0">
        <FooterTabs />
        {!start && (
          <div
            // bg-slate-300 or bg-gray-400
            className={`w-full h-full bg-slate-400 bg-opacity-50 backdrop-blur-lg relative ${
              openTab ? 'animate-openTab' : 'animate-closeTab'
            }`}
          >
            {activeTabIndex === 0 ? (
              <div className="h-full">
                {weatherData ? (
                  <div className=" flex justify-between">
                    <ActualWeather wind={'4 mph'} minTemp={'67º'} />
                    <WeeklyWeather />
                  </div>
                ) : (
                  <Loader />
                )}
              </div>
            ) : (
              <div className="w-full h-full">
                {weatherData ? <WeatherIcons /> : <Loader />}
              </div>
            )}
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
