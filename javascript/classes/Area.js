'use strict';

class Area {
  static getTriangle(base, height) {
    return base * height / 2;
  }
}

console.log(Area.getTriangle(3, 5));
