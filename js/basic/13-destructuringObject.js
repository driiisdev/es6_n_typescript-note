let employee = {
    fname: 'idris',
    lname: 'yakub',
    gender: 'male'
};

// let {fname, lname, gender} = employee
// console.log(fname);
// console.log(lname);
// console.log(gender);

// == es6+ allows the creation of alias while destructuring an object
let {fname: f, lname: l, gender: g} = employee
console.log(f);
console.log(l);
console.log(g);