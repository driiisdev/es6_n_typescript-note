let mySet = new Set();
let obj1 = {};
let obj2 = {};

mySet.add('sets contains unique items/elements');
mySet.add(1);
mySet.add(obj1);
mySet.add(obj2);
console.log(mySet.size);

let newSet = new Set([1,2,2,2,3,3,4,4,4,5,5,5])
console.log(newSet.size);

let chainSet = new Set().add('good morning').add('good night');
console.log(chainSet.size);

newSet.delete(1);
console.log(newSet.has(1));
console.log(newSet.size);
