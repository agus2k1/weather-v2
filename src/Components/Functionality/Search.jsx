import React, { useState, useRef, useEffect } from 'react';
import weatherObject from '../../assets/Weather';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [weather, setWeather] = useState({});
  const searchValue = useRef();

  //   useEffect(() => {
  //     fetch(
  //       'https://api.open-meteo.com/v1/forecast?latitude=-34.61&longitude=-58.38&timezone=GMT&daily=temperature_2m_max,temperature_2m_min'
  //     )
  //       .then(async (response) => {
  //         const weatherResponse = await response.json();
  //         setWeather(weatherResponse);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);

  useEffect(() => {
    setWeather(weatherObject);
  }, []);

  useEffect(() => {
    console.log(weather);
  }, [weather]);

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

  const searchCity = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <form className="w-50 h-50" onSubmit={(e) => e.preventDefault}>
      <div className="p-4">
        <label htmlFor="name" className="text-black">
          Search for city
        </label>
        <input type="text" id="name" ref={searchValue} onChange={searchCity} />
      </div>
    </form>
  );
};

export default Search;
