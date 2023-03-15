import React, { useState, useRef, useEffect } from 'react';
import { useWeatherContext } from '../../context/WeatherContext';

const Search = () => {
  const { setCityName } = useWeatherContext();
  const [searchTerm, setSearchTerm] = useState('');

  const searchValue = useRef();

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setCityName(searchTerm.toLowerCase());
    console.log('submit');
  };

  const handleOnSearch = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <form className="w-50 h-50" onSubmit={(e) => handleOnSubmit(e)}>
      <div className="p-4">
        <label htmlFor="name" className="mr-2">
          Search for city
        </label>
        <input
          type="text"
          id="name"
          ref={searchValue}
          onChange={handleOnSearch}
        />
      </div>
    </form>
  );
};

export default Search;
