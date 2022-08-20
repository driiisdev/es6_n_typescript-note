let percentBonus = 0.1;
let getVal = function (value = 10, bonus = 10 * percentBonus) {//value here is a default parameter
    console.log(value + bonus);
    console.log(arguments.length);
}

getVal();
getVal(20);
getVal(20,30);