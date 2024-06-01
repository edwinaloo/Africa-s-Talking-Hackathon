import React from 'react';

function NavigationBar() {
  return (
    <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
      <li style={{ display: 'inline', marginRight: '10px' }}>
        <a href="#home">Home</a>
      </li>
      <li style={{ display: 'inline', marginRight: '10px' }}>
        <a href="#news">News</a>
      </li>
      <li style={{ display: 'inline', marginRight: '10px' }}>
        <a href="#contact">Contact</a>
      </li>
      <li style={{ display: 'inline', marginRight: '10px' }}>
        <a href="#about">About</a>
      </li>
    </ul>
  );
}

export default NavigationBar;
