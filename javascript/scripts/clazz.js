'use strict';

/**
 * Memberクラスコンストラクタ、プロパティ
 */
let Member = function(firstName, lastName){
  if (!(this instanceof Member)) {
    return new Member(firstName, lastName);
  }
  /**
   * 名字
   */
  this.firstName = firstName;
  /**
   * 名前
   */
  this.lastName = lastName;

  /**
   * フルネームをを返す
   * @return フルネーム
   */
  this.getName = function() {
    return this.lastName + ' ' + this.firstName;
  };

  /**
   * オブジェクトの文字列表現を返す
   * @return 文字列表現
   */
  this.toString = function() {
    return this.getName();
  }
};

console.log(Member);
console.log(Member.prototype);

let mem1 = Member('Morishita', 'Daisuke')
console.log(mem1);
console.log(mem1.getName());

let mem2 = new Member('Morishita', 'Daisuke');
console.log(mem2);
console.log(mem2.getName());
