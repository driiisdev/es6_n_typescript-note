let set = new WeakSet;
let key = {};
set.add(key);
console.log(set.has(key));
console.log(set.size); // undefined

key = null;
console.log(set.size); //undefined


//  the only advantage of weak set over strong set is memory is handled properly with weak set