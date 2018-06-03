'use strict';

function namespace(ns) {
  let names = ns.split('.');
  let parent = global;

  for(let i = 0, len = names.length; i < len; i++) {
    parent[names[i]] = parent[names[i]] || {};
    parent = parent[names[i]];
  }
  return parent;
}

let my = namespace('Wings.Gihyo.Js.MyApp');
console.log(typeof my);

my.Person = function() {};
console.log(my.Person);

let p = new Wings.Gihyo.Js.MyApp.Person();
console.log(typeof p);
console.log(Wings.Gihyo.Js.MyApp.Person);
