// == const keyword ==

// it cannot be hoisted
// it must be initialized
// const values are immutable (i.e unchangeable)
// const keyword obeys both functional and block scope

// best use of 'const' : object, array, function

let obj1; //works: declaration w/o initialization is allowed

// const obj2; //wont work: declaration w/o initialization is not allowed. must be initialized.

const obj2 ={
    name: 'idris'
}
console.log(obj2.name);

obj2.name = 'yakub';
console.log(obj2.name);