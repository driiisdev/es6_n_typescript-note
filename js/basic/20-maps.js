// the difference btw map and object
//  the property of an object can only be a string
// the key and value of a map can be any data type

let myMap = new Map();

myMap.set("fname","idris");
myMap.set("age",30);

console.log(myMap.get("age"));

let obj1 = {};
let obj2 = {};

myMap.set(obj1, 10);
myMap.set(obj2, 50);

console.log(myMap.get(obj2));

console.log(myMap.size);

console.log(myMap.has("fname"));
