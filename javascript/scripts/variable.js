'use strict';

let book = {
  title: 'hoge',
  publish: 'fuga',
  price: 2000
};

let {price, title, memo = 'なし'} = book;
console.log(title);
console.log(price);
console.log(memo);
