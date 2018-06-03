'use strict';

class Member {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  getName() {
    return this.lastName + ' ' + this.firstName;
  }
}

let m = new Member('Daisuke', 'Morishita');
console.log(m.getName());



class BusinessMember extends Member {
  constructor(firstName, lastName, clazz) {
    super(firstName, lastName);
    this.clazz = clazz;
  }

  getClazz() {
    return this.clazz;
  }

  getName() {
    return super.getName() + '/' + this.getClazz();
  }

  work() {
    return this.getName() + 'は超働いてる';
  }
}

let bm = new BusinessMember('Daisuke', 'Morishita', 'Senior Manager');
console.log(BusinessMember);
console.log(bm.getClazz());
console.log(bm.getName());
console.log(bm.work());
