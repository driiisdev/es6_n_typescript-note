function greetPerson(name) {
    let greet;
    if (name === "idris") {
        greet = `hello ${name}`
    } else {
        greet = `hi there`
    }
    console.log(greet);
    
}

greetPerson('idris')



//  use 'let' instead of 'var'
// it cannot be hoisted
// it can be declared but not initialized
// let values are mutable (i.e changeable)
// let keyword obeys both functional and block scope
