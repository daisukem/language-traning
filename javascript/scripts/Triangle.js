'use strict';

let Triangle = function() {
  //---------------------
  // privateメンバ
  //---------------------
  let _base;
  let _height;

  let _checkArgs = function(val) {
    return (typeof val === 'number' && val > 0);
  };

  //--------------------------------
  // publicな特権メソッド(closure)
  //--------------------------------
  this.setBase = function(base) {
    if (_checkArgs(base)) {
      _base = base;
    }
  }
  this.setHeight = function(height) {
    if (_checkArgs(height)) {
      _height = height;
    }
  }
  this.getBase = function() {
    return _base;
  }
  this.getHeight = function() {
    return _height;
  }
}

//-----------------------------
// publicな一般メソッド
//-----------------------------
Triangle.prototype = {
  getArea: function() {
    return this.getBase() * this.getHeight() / 2;
  }
};

let t = new Triangle();
t._base = 10;
t._height = 2;
console.log(t.getArea());

t.setBase(10);
t.setHeight(2);
console.log(t.getArea());
