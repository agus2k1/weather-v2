import React, { useState } from 'react';

function WeatherIcon({ logo }) {
  const [animateIcon, setAnimateIcon] = useState(false);
  const handleOnHover = (isHovering) => {
    if (isHovering) {
      setAnimateIcon(true);
    } else {
      setAnimateIcon(false);
    }
  };

  return (
    <div
      className="w-auto cursor-pointer"
      onMouseEnter={() => handleOnHover(true)}
      onMouseLeave={() => handleOnHover(false)}
    >
      <img
        src={`/design/fill${
          !animateIcon
            ? `/export/wi_${logo}.svg`
            : `/animation-ready/${logo}.svg`
        }`}
        alt=""
        className="w-24 xxs:w-24"
        data-te-toggle="tooltip"
        title={logo}
      />
    </div>
  );
}

export default WeatherIcon;
