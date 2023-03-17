import React, { useEffect, useState } from 'react';
import DailyWeather from './DailyWeather';
import { useWeatherContext } from '../../context/WeatherContext';

const WeeklyWeather = () => {
  const { weatherData, getFollowingDays } = useWeatherContext();
  const [followingDays, setFollowingDays] = useState([]);

  useEffect(() => {
    if (weatherData) setFollowingDays(getFollowingDays());
  }, [weatherData]);

  return (
    <div className="w-[100%] items-center sm:flex sm:w-auto relative">
      <img src="/arrow-left.svg" alt="" className="absolute top-20 sm:hidden" />
      <img
        src="/arrow-right.svg"
        alt=""
        className="absolute top-20 right-0 sm:hidden"
      />
      {followingDays.map((day) => {
        const { weekDay, logo, temp } = day;
        const dayChars = weekDay.slice(0, 3);
        return (
          <DailyWeather key={dayChars} day={dayChars} logo={logo} temp={temp} />
        );
      })}
    </div>
  );
};

export default WeeklyWeather;
