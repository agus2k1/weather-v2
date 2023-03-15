import React from 'react';
import { useWeatherContext } from '../../context/WeatherContext';

const DailyWeather = ({ day, logo, temp }) => {
  return (
    <div className="border-l-2 border-slate-500">
      <div className="h-full flex flex-col items-center mt-5 px-6">
        <span className="font-light bg-zinc-600 px-2 pt-1 rounded-2xl">
          {day}
        </span>
        <img
          src={`/design/fill/animation-ready/${logo}.svg`}
          alt={logo}
          className="w-28"
        />
        <p className="text-3xl font-bold">{temp}</p>
      </div>
    </div>
  );
};

export default DailyWeather;
