import React from 'react';
import { useWeatherContext } from '../../context/WeatherContext';

const ActualWeather = ({ temp, wind, minTemp }) => {
  const { day } = useWeatherContext();

  return (
    <>
      <div className="flex items-center justify-between mt-3">
        <p className="text-8xl font-semibold pt-5 pl-1">{temp}</p>
        <img
          src="/design/fill/animation-ready/rain.svg"
          alt="rain"
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
