import React from 'react';
import { useWeatherContext } from '../../context/WeatherContext';

const ActualWeather = ({ wind, minTemp }) => {
  const { weatherData, day, getWeatherLogo } = useWeatherContext();

  const temp = Math.round(weatherData?.current_weather.temperature);

  const logo = getWeatherLogo(weatherData?.current_weather.weathercode, false);

  return (
    <div className="w-auto pl-10 pr-6 flex gap-4 xxs:pl-6 xs:pl-10">
      <div className="flex flex-col text-center mt-10 xxs:mt-14 xs:mt-10">
        <p className="text-8xl font-semibold xxs:text-6xl xs:text-8xl">
          {temp + 'º'}
        </p>
        <p className="font-light bg-zinc-600 px-2 pt-1 rounded-2xl">{day}</p>
      </div>
      <div className="w-32 flex flex-col text-center mt-3 xxs:w-20 xxs:mt-8 xs:w-32 xs:mt-3">
        <img
          src={`/design/fill/animation-ready/${logo}.svg`}
          alt={logo}
          className="w-32 xxs:w-20 xs:w-32"
        />
        <p className="text-1xl font-bold">
          {wind} <span className="text-slate-400">/</span> {minTemp}
        </p>
      </div>
    </div>
  );
};

export default ActualWeather;
