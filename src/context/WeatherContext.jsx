import React, { useContext, useState, useEffect } from 'react';
import weatherObject from '../assets/Weather';
import cityObject from '../assets/City';

const WeatherContext = React.createContext(null);

export const useWeatherContext = () => {
  return useContext(WeatherContext);
};

const daysInAWeek = [
  'SUNDAY',
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
];

const actualDayIndex = new Date().getDay();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});
  const [cityData, setCityData] = useState({});
  const [day, setDay] = useState('');
  const [cityName, setCityName] = useState('');

  const getFollowingDays = () => {
    const finalArray = [];
    const firstPart = daysInAWeek.slice(0, actualDayIndex);
    const secondPart = daysInAWeek.slice(
      actualDayIndex + 1,
      daysInAWeek.length
    );
    const daysArray = secondPart.concat(firstPart);

    daysArray.forEach((weekDay) => {
      finalArray.push({ weekDay, logo: 'rain', temp: '21º' });
    });

    return finalArray;
  };

  //   useEffect(() => {
  //     if (cityData) {
  //       fetch(
  //         `https://api.open-meteo.com/v1/forecast?latitude=${cityData.lat}&longitude=${cityData.lon}&timezone=GMT&daily=temperature_2m_max,temperature_2m_min`
  //       )
  //         .then(async (response) => {
  //           const weatherResponse = await response.json();
  //           setWeatherData(weatherResponse);
  //         })
  //         .catch((err) => console.log(err));
  //     }
  //   }, [cityData]);

  //   useEffect(() => {
  //     fetch(
  //       `https://nominatim.openstreetmap.org/search?q=${'buenosaires'}&format=json&limit=1`
  //     )
  //       .then(async (response) => {
  //         const cityResponse = await response.json();
  //         setCityData(cityResponse[0]);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);

  useEffect(() => {
    setWeatherData(weatherObject);
    setCityData(cityObject);
    setDay(daysInAWeek[actualDayIndex]);
  }, []);

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  useEffect(() => {
    console.log(cityData);
  }, [cityData]);

  useEffect(() => {
    console.log(cityName);
  }, [cityName]);

  return (
    <WeatherContext.Provider
      value={{ day, cityName, setCityName, getFollowingDays }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
