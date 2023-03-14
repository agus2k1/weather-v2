import React from 'react';

const DailyWeather = ({ day, logo, temp }) => {
  return (
    <div className="border-l-2 border-slate-500">
      <div className="h-full flex flex-col items-center mt-5 px-6">
        <p className="font-light bg-zinc-600 px-2 pt-1 rounded-2xl">{day}</p>
        <img
          src="/design/fill/animation-ready/rain.svg"
          alt="rain"
          className="w-28"
        />
        <p className="text-3xl font-bold">{temp}</p>
      </div>
    </div>
  );
};

export default DailyWeather;
