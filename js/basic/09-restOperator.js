let displayColors = (msg, ...colors) => {
    // restOperator is mostly specified in the function declaration (i.e in the function parameters)
    
    console.log(msg);
    console.log(colors);
    console.log(arguments.length);

    for(let i in colors){
        console.log(colors[i]);
    }
}
let msg = 'lists of color'

displayColors(msg, 'black', 'white')
displayColors(msg, 'red', 'green', 'blue')
displayColors(msg, 'cyan', 'magenta', 'yellow', 'key')

// in other words, rest operator turns passed in arguments into array []

// rest operator is to combine