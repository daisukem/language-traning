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
};

/**
 * Memberクラスメソッド
 */
Member.prototype = {
  /**
   * フルネームをを返す
   * @return フルネーム
   */
  getName: function() {
    return this.lastName + ' ' + this.firstName;
  },
  /**
   * オブジェクトの文字列表現を返す
   * @return 文字列表現
   */
  toString: function() {
    return this.getName();
  }
};
