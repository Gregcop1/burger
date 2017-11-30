import React from 'react';
import { BeefSteak, Cheese, SoySteak } from './food';

const Burger = () => (
  <div className="burger">
    <Cheese />
    <SoySteak />
    <Cheese />
    <BeefSteak />
  </div>
);

export default Burger;
