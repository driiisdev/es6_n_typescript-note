let displayColors = (msg, ...colors) => { 

    // rest operator is mostly specified in the function declaration (i.e in the function parameters)

    console.log(msg);
    console.log(colors);
    console.log(arguments.length);

    for(let i in colors){
        console.log(colors[i]);
    }
}
let msg = 'lists of color'
let cmyk = ['cyan', 'magenta', 'yellow', 'key']

displayColors(msg, 'red', 'blue', 'green', ...cmyk)

// spread operator is mostly specified in the function call (i.e in the function arguments)

// in other words, spread operator spilt array into individual element.

// spread operator is to split