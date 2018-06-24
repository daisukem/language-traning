class BaseClass {
  prop1 = "publicプロパティ1";
  public prop2 = "publicプロパティ2";
  private prop3 = "privateプロパティ";
  protected prop4 = "protectedプロパティ";
}

class SubClass extends BaseClass {
  // get getProp3() {
  //   return this.prop3;
  // }
  get getProp4() {
    return this.prop4;
  }
}

let base = new BaseClass();
console.log(base.prop1);
console.log(base.prop2);
//console.log(base.prop3);
//console.log(base.prop4);

let sub = new SubClass();
//console.log(sub.prop4);
//console.log(sub.getProp3);
console.log(sub.getProp4);
