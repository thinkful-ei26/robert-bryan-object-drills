'use strict';

const loaf = {
  flour: 300,
  water: 210,
  hydration: () =>
    (loaf.water / loaf.flour) * 100,
};


console.log(loaf);
console.log(loaf.hydration());

