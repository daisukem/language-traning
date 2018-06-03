'use strict';

/**
 * Diamondクラスコンストラクタ
 */
let Diamond = function() {
  //-----------------------------
  // privateメンバ
  //-----------------------------
  let _width;
  let _height;

  //------------------------------
  // 特権メソッドをプロパティとして定義
  //------------------------------
  Object.defineProperties(this, {
     width: {
       get: function() {
         return _width;
       },
       set: function(width) {
         if (typeof width === 'number' && width > 0) {
           _width = width;
         }
       }
     },
     height: {
       get: function() {
         return _height;
       },
       set: function(height) {
         if (typeof height === 'number' && height > 0) {
           _height = height;
         }
       }
     }
  });
};

//------------------------------
// 一般publicメソッド
//------------------------------
Diamond.prototype = {
  getArea: function() {
    return this.width * this.height / 2;
  }
};

let d = new Diamond();
d._width = 10;
d._height = 2;
console.log(d.getArea());

d.width = 10;
d.height = 2;
console.log(d.getArea());
