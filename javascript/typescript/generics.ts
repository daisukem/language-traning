function identity<T>(arg: T): T {
  return arg;
}
let output1 = identity<string>('Daisuke!');
let output2 = identity<number>(100);
console.log(output1 + output2);

class GenericClass<T> {
  private v: T;
  constructor(public value: T) {
    this.v = value;
  }

  get getValue() {
    return this.v;
  }
}
let obj1 = new GenericClass<string>("Daisuke!");
console.log(obj1.getValue);

interface GenericInterface<T> {
  value: T;
}
let obj2: GenericInterface<number> = {value: 1};
console.log(obj2.value);
