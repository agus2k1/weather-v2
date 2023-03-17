import React, { useState } from 'react';
import Tab from './Tab';
import tabs from '../../assets/tabs';

function FooterTabs() {
  return (
    <div className="flex">
      {tabs.map((tab, i) => {
        const { name, color, logo } = tab;
        return (
          <Tab key={name + i} index={i} name={name} logo={logo} color={color} />
        );
      })}
    </div>
  );
}

export default FooterTabs;
