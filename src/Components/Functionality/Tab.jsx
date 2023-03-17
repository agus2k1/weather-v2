import React from 'react';
import { useWeatherContext } from '../../context/WeatherContext';

const Tab = ({ index, name, logo, color }) => {
  const {
    start,
    openTab,
    activeTabIndex,
    setActiveTabIndex,
    setStart,
    setOpenTab,
    cityName,
  } = useWeatherContext();

  const handleTabClick = () => {
    if (cityName) {
      if (start) {
        setStart(false);
      }
      if (openTab && activeTabIndex === index) {
        setOpenTab(false);
      } else {
        setOpenTab(true);
      }
      setActiveTabIndex(index);
    }
  };

  return (
    <div
      className="w-48 flex items-center justify-center gap-1 border-b-4 cursor-pointer"
      style={{ borderColor: `${color}` }}
      onClick={() => handleTabClick()}
    >
      <img src={`/design/line/export/${logo}.svg`} alt={name} className="w-8" />
      <p className="h-5">{name}</p>
    </div>
  );
};

export default Tab;
