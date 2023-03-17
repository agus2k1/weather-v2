import React from 'react';
import WeatherIcon from './WeatherIcon';
import icons from '../../../assets/icons';

function WeatherIcons() {
  return (
    <div className="w-full h-full flex flex-row items-center justify-center">
      <div className="w-full h-full flex flex-wrap items-center justify-center">
        {icons.slice(0, 27).map((icon) => {
          const { logo } = icon;
          return <WeatherIcon key={logo} logo={logo} />;
        })}
      </div>
    </div>
  );
}

export default WeatherIcons;
