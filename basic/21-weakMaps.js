// in weakMaps, the keys can only be objects and the objects references are weak(i.e they dont interfere with the garbage collector)

let myMap = new WeakMap();
let obj1 = {};

myMap.set(obj1, "hello world")

console.log(myMap.get(obj1));

obj1 = null // here the map becomes empty

// practical use of weakMaps is very rare