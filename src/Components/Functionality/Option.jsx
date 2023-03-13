import React from 'react';

const Option = ({ name, logo, color }) => {
  return (
    <span
      className={`w-48 flex items-center justify-center gap-1 border-b-4 border-b-${color}-500 cursor-pointer`}
    >
      <img src={`/design/line/export/${logo}.svg`} alt={name} className="w-8" />
      <p className="h-5">{name}</p>
    </span>
  );
};

export default Option;
