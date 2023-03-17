import React, { useState, useRef } from 'react';
import cities from '../../assets/cities';
import { useWeatherContext } from '../../context/WeatherContext';

const Search = () => {
  const { setWeatherData, setCityName } = useWeatherContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);

  const searchValue = useRef();

  const handleOnSubmit = (e, cityName) => {
    e.preventDefault();
    setWeatherData('');
    if (cityName) {
      setFilteredCities([]);
      searchValue.current.value = '';
      setCityName(cityName.toLowerCase());
    } else if (
      filteredCities.some(
        (city) => city.name.toLowerCase() === searchTerm.toLowerCase()
      )
    ) {
      setFilteredCities([]);
      searchValue.current.value = '';
      setCityName(searchTerm.toLowerCase());
    }
  };

  const handleOnSearch = () => {
    const actualSearch = searchValue.current.value;
    setSearchTerm(actualSearch);

    const filter = cities.filter((city) =>
      city.name.toLowerCase().includes(actualSearch.toLowerCase())
    );

    if (actualSearch.length > 2) {
      const citiesNames = filter.map((city) => city.name);

      const uniqueArray = filter.filter(
        ({ name }, index) => !citiesNames.includes(name, index + 1)
      );

      setFilteredCities(uniqueArray);
    } else {
      actualSearch === '' ? setFilteredCities([]) : setFilteredCities(filter);
    }
  };

  return (
    <form className="w-56 h-52" onSubmit={(e) => handleOnSubmit(e)}>
      <div className="w-full py-1 px-2 flex items-center bg-white rounded-lg border-none">
        <input
          type="text"
          id="name"
          ref={searchValue}
          placeholder="Search for city..."
          onChange={handleOnSearch}
          className="w-44 h-8 text-base bg-white text-black pt-1 pl-2 focus:outline-none"
        />
        <span className="cursor-pointer" onClick={(e) => handleOnSubmit(e)}>
          <img src="/search-logo.png" alt="search" />
        </span>
      </div>
      {filteredCities.length !== 0 && (
        <div
          className="w-44 h-32 bg-white shadow-lg overflow-hidden overflow-y-auto rounded-lg mt-1 scrollbar-hide"
          style={{}}
        >
          {filteredCities.slice(0, 10).map((city) => {
            return (
              <p
                key={city.name}
                className="w-full h-8 text-base flex text-black pt-2 pl-2 hover:bg-gray-300 cursor-pointer overflow-hidden"
                onClick={(e) => handleOnSubmit(e, city.name)}
              >
                {city.name}
              </p>
            );
          })}
        </div>
      )}
    </form>
  );
};

export default Search;
