import React from 'react';
import './button.scss';

export const Button = ({ text, children, onCluck }) => {
  return <button onClick={onCluck}>{children || text}</button>;
};
