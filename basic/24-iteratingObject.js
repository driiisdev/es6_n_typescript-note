// 

let person = {
    fname: "idris",
    lname: "yakub"
};

// for(let p of person){
//     console.log(p); // output: not a function or not iterable

// }

// to iterate over an object, a function has to be created to perform such task

// person[Symbol.iterator] = function(){
//     let properties = Object.keys(person);
//     let count = 0;
//     let isDone = false;
//     let next = () => {
//         if (count>=properties.length) {
//             isDone =true
//         }
//         return{
//             done: isDone,
//             value: this[properties[count++]]
//         };
//     }
//     return {next};
// }

// for(let p of person){
//     console.log(p);
// }


// == using generator to iterates an object
// == another method

person[Symbol.iterator] = function*(){
    let properties = Object.keys(person);
    for(let it of properties){
        yield this[it];
    }
}

for(let p of person){
    console.log(p);
}