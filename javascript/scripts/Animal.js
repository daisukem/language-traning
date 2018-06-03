'use strict';

/**
 * 基底クラス
 */
let Animal = function(){
  this.name = 'あにまる';
};
Animal.prototype = {
  walk: function() {
    console.log('ドスンドスン');
  }
};

let a = new Animal();
console.log(Animal);
console.log(Animal.prototype);
console.log(a);

/**
 * 派生クラス
 */
var Dog = function() {
  //基底クラスコンストラクタをコール
  Animal.call(this);
  //プロパティ上書き
  this.name = 'どっぐ';
  //プロパティ追加
  this.type = '不明';
};
//プロトタイプチェーン
Dog.prototype = new Animal();
//メソッド追加
Dog.prototype.bark = function() {
  console.log('がうがう');
}

let d = new Dog();
d.walk();
d.bark();

console.log(Dog);
console.log(Dog.prototype);
console.log(d);

console.log(a.constructor);
console.log(d.constructor);

console.log(a instanceof Animal);
console.log(d instanceof Dog);
console.log(d instanceof Animal);
