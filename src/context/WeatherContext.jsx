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
  const [weatherData, setWeatherData] = useState();
  const [cityData, setCityData] = useState();
  const [day, setDay] = useState('');
  const [cityName, setCityName] = useState('');
  const [isNight, setIsNight] = useState(false);

  const getWeatherLogo = (code) => {
    switch (code) {
      case 0:
      case 1:
        return isNight ? 'clear-night' : 'clear-day';
      case 2:
        return isNight ? 'partly-cloudy-night' : 'partly-cloudy-day';
      case 3:
        return isNight ? 'overcast-night' : 'overcast-day';
      case 45:
      case 48:
        return isNight ? 'fog-night' : 'fog-day';
      case 51:
      case 53:
        return isNight
          ? 'partly-cloudy-night-drizzle'
          : 'partly-cloudy-day-drizzle';
      case 55:
        return 'drizzle';
      case 56:
        return isNight ? 'partly-cloudy-night-hail' : 'partly-cloudy-day-hail';
      case 57:
        return 'hail';
      case 61:
      case 63:
      case 80:
      case 81:
        return isNight ? 'partly-cloudy-night-rain' : 'partly-cloudy-day-rain';
      case 65:
      case 82:
        return 'rain';
      case 66:
      case 67:
        return 'sleet';
      case 71:
      case 73:
      case 85:
        return isNight ? 'partly-cloudy-night-snow' : 'partly-cloudy-day-snow';
      case 75:
      case 86:
        return 'snow';
      case 77:
        return 'snowflake';
      case 95:
        return isNight ? 'thunderstorms-night' : 'thunderstorms-day';
      case 96:
        return isNight ? 'thunderstorms-night-snow' : 'thunderstorms-day-snow';
      case 99:
        return 'thunderstorms';
    }
  };

  const getFollowingDays = () => {
    const finalArray = [];
    const firstPart = daysInAWeek.slice(0, actualDayIndex);
    const secondPart = daysInAWeek.slice(
      actualDayIndex + 1,
      daysInAWeek.length
    );
    const daysArray = secondPart.concat(firstPart);

    daysArray.forEach((weekDay, i) => {
      const temp = Math.round(weatherData.daily.temperature_2m_max[i]);
      const logo = getWeatherLogo(weatherData.daily.weathercode[i]);

      finalArray.push({ weekDay, logo, temp: `${temp}º` });
    });

    return finalArray;
  };

  console.log(cityName);

  // useEffect(() => {
  //   if (cityData) {
  //     fetch(
  //       `https://api.open-meteo.com/v1/forecast?latitude=${cityData.lat}&longitude=${cityData.lon}&timezone=auto&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_probability_mean,windspeed_10m_max`
  //     )
  //       .then(async (response) => {
  //         const weatherResponse = await response.json();
  //         setWeatherData(weatherResponse);
  //         console.log(weatherResponse);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [cityData]);

  // useEffect(() => {
  //   if (cityName) {
  //     const cityNameAPI = cityName.split(' ').join('');
  //     fetch(
  //       `https://nominatim.openstreetmap.org/search?q=${cityNameAPI}&format=json&limit=1`
  //     )
  //       .then(async (response) => {
  //         const cityResponse = await response.json();
  //         setCityData(cityResponse[0]);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [cityName]);

  useEffect(() => {
    setWeatherData(weatherObject);
    setCityData(cityObject);
    setDay(daysInAWeek[actualDayIndex]);
  }, []);

  // useEffect(() => {
  //   console.log(weatherData);
  // }, [weatherData]);

  // useEffect(() => {
  //   console.log(cityData);
  // }, [cityData]);

  useEffect(() => {
    console.log(cityName);
  }, [cityName]);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        day,
        cityName,
        setCityName,
        getFollowingDays,
        getWeatherLogo,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
