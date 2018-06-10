'use strict';

function* myGenerator() {
  yield 'あいうえお';
  yield 'かきくけこ';
  yield 'さしすせそ';
};

for (let t of myGenerator()) {
  console.log(t);
};


class MyIterator {
  constructor(data) {
    this.data = data;

    //--------------------------
    // iteratorを返す
    //--------------------------
    this[Symbol.iterator] = function*() {
      let current = 0;
      let that = this;
      while(current < that.data.length) {
        yield that.data[current++];
      }
    }
  }
}

let mi = new MyIterator(['one','two','three']);
for (let v of mi) {
  console.log(v);
};
