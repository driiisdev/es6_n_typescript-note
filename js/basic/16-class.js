// define class

class Person{
    greet(){
        console.log(`Hi idris`);
    }
}

// creating an instance of a class (object)
let p = new Person();

function employee(){}
employee();

console.log(typeof p);

console.log(p.greet === Person.prototype.greet); // output: true

// NB: classes are very similar to function except that there are not hoisted. (i.e can't be called before declaration)

//  == class body and method ==
// = 3 types of class method =
// 1. constructor method: a class can only have one constructor
// 2. static method: static method can be called w/o instanciating a class
// 3. prototype method: 

class Student{
    // body
    constructor(name){
        //  A class can only have one constructor
        this.name = name;
        console.log(`${this.name} is a badass`);
    }

    static sayWelcome(){
        // static method can be called w/o instanciating a class
        // static method can be called directly
        console.log(`${this.name}, welcome back`);
    }

    annoucement(){
        // can be called by class instances (object)
        console.log(`we will start our programme shortly`);
    }
}

let s = new Student('driiisdev')

// static method can be called directly
Student.sayWelcome(); 

// prototype method can be called as object method after instanciating the class
s.annoucement();

// == class inheritance

class Staff{
    constructor(name){
        console.log(`Hi chef ${name}, the kitchen is fully equipped`);
    }
    getAge(){
        return 32;
    }
}

class Chef extends Staff{
    constructor(name){
        super(name) // super constructor must be called before accessing inherited constructor
        console.log(`Here is your bedroom, chef ${name}`);
    }
    // getAge(){
    //     return 35;
    // }
    getAge(){
        return super.getAge();
    }
}

let c = new Chef('austin');

console.log(c.getAge()); // output will be 32 bcos class chief inherited class staff, thus can access its methods but in a case where the child class also has same method as the parent class, the child class will be outputted. hence 35. incase u create a child method that is also present in the parent method but u want to access that of the parent, u will inplement the super constructor just as the example. so the output will be 32; again. 
