import React from 'react';

export const Task = ({ task }) => {
  return <li>{task.text}</li>
};

export const Region = ({ regiones }) => {
  return <option>{regiones}</option>
};

export const Comuna = (region, {arrayComuna}) => {
  return <option> {
      arrayComuna.comunas
    } </option> 
};