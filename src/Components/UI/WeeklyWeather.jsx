import React, { useEffect, useState } from 'react';
import DailyWeather from './DailyWeather';
import { useWeatherContext } from '../../context/WeatherContext';

const WeeklyWeather = () => {
  const { weatherData, getFollowingDays } = useWeatherContext();
  const [followingDays, setFollowingDays] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (weatherData) setFollowingDays(getFollowingDays());
  }, [weatherData]);

  const handleOnClick = (direction) => {
    if (direction === 'left') {
      setActiveIndex((prevIndex) => {
        if (prevIndex === 0) {
          return followingDays.length - 1;
        } else {
          return prevIndex - 1;
        }
      });
    } else {
      setActiveIndex((prevIndex) => {
        if (prevIndex === followingDays.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }
  };

  return (
    <div className="w-[100%] items-center sm:flex sm:w-auto relative">
      <img
        src="/arrow-left.svg"
        alt="left arrow"
        className="absolute top-20 sm:hidden"
        onClick={() => handleOnClick('left')}
      />
      <img
        src="/arrow-right.svg"
        alt="right arrow"
        className="absolute top-20 right-0 sm:hidden"
        onClick={() => handleOnClick()}
      />
      {followingDays.map((day, i) => {
        const { weekDay, logo, temp } = day;
        const dayChars = weekDay.slice(0, 3);
        let active = false;
        if (i === activeIndex) {
          active = true;
        }
        return (
          <DailyWeather
            key={dayChars}
            day={dayChars}
            logo={logo}
            temp={temp}
            active={active}
          />
        );
      })}
    </div>
  );
};

export default WeeklyWeather;
