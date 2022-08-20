// import { fname, lname } from "./moduleB.js";

// console.log(`${fname} ${lname}`);

// import firstName from "./moduleB.js"

// console.log(firstName);


// == using alias
// import fn from "./moduleB.js"

// console.log(fn);


// or 

// import {default as oruko} from "./moduleB.js"

// console.log(oruko);

import { greet, GreetMessage } from "./moduleB.js";

greet('good day')

let gm = new GreetMessage();

gm.greet()

