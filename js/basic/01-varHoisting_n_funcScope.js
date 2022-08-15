// function greetPerson(name) {
//     if (name === "idris") {
//         greet = `hello ${name}`
//     } else {
//         greet = `hi there`
//     }
//     console.log(greet);
//     var greet;
// }

// greetPerson("idris")

// == Hoisting ==
// by default, javascript takes all variable declation to the top of its scope(i.e the 'var greet' is by default moved automatically to the top of its scope(in this case 'the top of the function'))


function greetPerson(name) {
    if (name === "idris") {
        var greet = `hello ${name}`
    } else {
        greet = `hi there`
    }
    console.log(greet);
}

greetPerson("idris")

// == scope ==
// the var keyword is not bound by any scope except functional scope (i.e its not block scoped)
