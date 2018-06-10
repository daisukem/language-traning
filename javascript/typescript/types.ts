const add = (a: number, b: number): number => {
  return a + b;
}
console.log(add(5, 8));

function onSuccess(callback: (value: string) => void) {
  callback("成功だぜ!");
}
onSuccess(value => console.log(value));
