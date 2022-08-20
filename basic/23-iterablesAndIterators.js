// iterable is any object that implement a method with key as '[symbol.iterator]()'

// Iterable {
//     [Symbol.Iterator]() : Iterator
// }

// Iterator {
//     next() : iResultObj
// }

// iResultObj {
//     value: any
//     done: bool
// }


let iterable = [1,2,3];

function createIterator(array){
    let count = 0;
    return{
        next: function(){
            return count < array.length ? {value: array[count++], done: false} : {value: undefined, done: true}
        }
    }
}

let myIterator = createIterator(iterable);

console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());