import React, { useState } from 'react';
import { useWeatherContext } from '../../context/WeatherContext';

const ActualWeather = ({ wind, minTemp }) => {
  const { weatherData, day, getWeatherLogo } = useWeatherContext();

  const temp = Math.round(weatherData?.current_weather.temperature);

  const logo = getWeatherLogo(weatherData?.current_weather.weathercode, false);

  return (
    <>
      <div className="flex items-center justify-between mt-3">
        <p className="text-8xl font-semibold pt-5 pl-1">{temp + 'º'}</p>
        <img
          src={`/design/fill/animation-ready/${logo}.svg`}
          alt={logo}
          className="w-32"
        />
      </div>
      <div className="flex items-center justify-between ">
        <p className="font-light bg-zinc-600 px-2 pt-1 rounded-2xl">{day}</p>
        <p className="text-1xl font-bold">
          {wind} <span className="text-slate-400">/</span> {minTemp}
        </p>
      </div>
    </>
  );
};

export default ActualWeather;
