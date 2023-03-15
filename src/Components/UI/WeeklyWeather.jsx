import React, { useEffect, useState } from 'react';
import DailyWeather from './DailyWeather';
import { useWeatherContext } from '../../context/WeatherContext';

const WeeklyWeather = () => {
  const { getFollowingDays } = useWeatherContext();
  const [followingDays, setFollowingDays] = useState([]);

  useEffect(() => {
    setFollowingDays(getFollowingDays());
  }, []);

  return (
    <>
      {followingDays.map((day) => {
        const { weekDay, logo, temp } = day;
        const dayChars = weekDay.slice(0, 3);
        return (
          <DailyWeather key={dayChars} day={dayChars} logo={logo} temp={temp} />
        );
      })}
    </>
  );
};

export default WeeklyWeather;
