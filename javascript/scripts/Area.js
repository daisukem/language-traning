'use strict';

let Area = function() {};

Area.version = '1.0';

Area.triangle = function(base, height) {
  return base * height / 2;
};

Area.diamond = function(width, height) {
  return width * height / 2;
};

console.log(Area.version);
console.log(Area.triangle(2, 4));
console.log(Area.diamond(2, 4));

let a = new Area();
console.log(a.diamond(3, 6));
