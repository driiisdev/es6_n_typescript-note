// es6 introduces a new primitive types called => symbols
// the purpose of symbols is to generate a unique id (but we never get access to the id 'funny')

let s = Symbol();
console.log(typeof s);

let sym = Symbol("my name");
console.log(sym.toString());

let s1 = Symbol.for('regSymbol'); // setting the key for this symbol as 'regSymbol'
let s2 = Symbol.for('regSymbol')// setting the key for this symbol as 'regSymbol'

console.log(s1 === s2); // this will output: true, since the key set for both is same. otherwise it will be false as each will by default have a unique id
console.log(Symbol.keyFor(s2)); // will output: regSymbol, as the key set for s2 is 'regSymbol'

let fname = Symbol("firstName");
let person = {
    [fname] : "idris"
};

console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));

// == symbol iterator

// for ..of --> iterator method --> symbol.iterator

let str = 'Hello';
let arr = [1,2,3,4];
let num = 5;
let obj = {name: 'idris'}

console.log(`for string :- ${typeof str[Symbol.iterator]}`);
console.log(`for array :- ${typeof arr[Symbol.iterator]}`);
console.log(`for number :- ${typeof num[Symbol.iterator]}`);//output: undefined
console.log(`for object :- ${typeof obj[Symbol.iterator]}`); //output: undefined

// hence, number and object are not iterable (i.e can not be used in a for of loop).
// to iterate an object, an iterator function needs to be created to perform the task.
