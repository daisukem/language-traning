'use strict';

function lazy_execute(callback, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      callback();
      resolve();
    }, delay);
  });
};

const name = '大介';
lazy_execute(() => console.log(`こんにちは！ ${name}さん`), 2000)
  .then(() => lazy_execute(() => console.log('今日の調子はどうですか？'), 2000))
  .then(() => lazy_execute(() => console.log('このチャネルは雑談の場です'), 2000));

function lazy_send(message, delay) {
  const length_max = 10;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (message.length > length_max) {
        reject(`メッセージは${length_max}文字より長いです`);
      }
      console.log(message);
      resolve('投稿完了');
    }, delay);
  });
};

lazy_send("11文字以上の投稿は失敗します。", 1000)
  .then((value) => console.log(`fulfilled: ${value}`))
  .catch((value) => console.log(`rejected: ${value}`));

lazy_send("短ければOK。", 1000)
  .then((value) => console.log(`fulfilled: ${value}`))
  .catch((value) => console.log(`rejected: ${value}`));
