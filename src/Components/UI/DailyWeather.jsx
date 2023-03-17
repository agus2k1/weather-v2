import React from 'react';

const DailyWeather = ({ day, logo, temp, active }) => {
  return (
    <div
      className={`h-full border-l-2 border-slate-500 flex flex-col items-center sm:flex ${
        !active && 'hidden'
      }`}
    >
      <span className="font-light bg-zinc-600 px-2 pt-1 rounded-2xl mt-2 lg:mt-1 md:mt-3 sm:mt-9">
        {day}
      </span>
      <img
        src={`/design/fill/animation-ready/${logo}.svg`}
        alt={logo}
        className="w-32 lg:w-36"
      />
      <p className="text-3xl font-bold">{temp}</p>
    </div>
  );
};

export default DailyWeather;
