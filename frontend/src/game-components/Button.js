import React from 'react';

const Button = ({ onClick, innerText }) => (
  <button onClick={onClick} className='button'>{innerText}</button>
);

export default Button;
