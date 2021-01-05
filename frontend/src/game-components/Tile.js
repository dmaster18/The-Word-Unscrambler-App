import React from 'react';

const Tile = ({ id, letter, onClick }) => (
  <button onClick={onClick} value={letter} className='tile' id={id}>{letter}</button>
);

export default Tile;
