let employee = ['idris', 'yakub', 'male'];

// let [fname, lname, gender] = employee;

// console.log(fname);
// console.log(lname);
// console.log(gender);

//  == es6+ allows destructuring the needed array
// let [ , ,gender] = employee
// console.log(gender);

// == es6+ allows destructuring using rest operators
// let [fname, ...otherInfo] = employee
// console.log(fname);
// console.log(otherInfo);

// == es6+ allows destructuring using default values
let [fname, lname, gender, age=30] = employee
console.log(fname);
console.log(lname);
console.log(gender);
console.log(age);

// another example with default value
let worker = ['john', 'doe', 'female'] // female is the default value here

let [fName, lName, Gender= 'male'] = worker;

console.log(Gender); // this will output : 'female' as its default values
