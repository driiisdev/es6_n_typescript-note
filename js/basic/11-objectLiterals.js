let firstName = 'idris';
let lastName = 'yakub';

let person = {
    // firstName: firstName,
    // lastName: lastName,

    // == object Literals ==
    // es6+ allows this, since the object property and value are of the same name.
    firstName,
    lastName
}

console.log(person.firstName);
console.log(person.lastName );

function createPerson(firstname, lastname, age) {
    let fullname = firstname +" "+ lastname;
    return({
        firstname, 
        lastname, 
        fullname,
        isSenior: function () {
            return age > 60;
        }
    });
}

let p = createPerson('olayinka', 'aremu', 45)
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());



// es6+ allows white spaces for object property and can be access with '[]' instead of '.'

let people = {
    'first name': 'john'
}
console.log(people['first name']);


// es6+ allows using of variable name as object property

let ln = 'last name'

let fam = {
    'first name': 'sariyu',
    [ln]: 'atoke'
}

console.log(fam['first name']);
console.log(fam[ln]);