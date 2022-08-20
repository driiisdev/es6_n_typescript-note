let cmyk = ['cyan', 'magenta', 'yellow', 'key'];

//== 'for in' loop iterate the postion of each element in an array (i.e 0,1,2,...)
for(let index in cmyk){
    console.log(cmyk[index]);
}

//== 'for of' loop iterate each element in an array
for (let color of cmyk){
    console.log(color);
}

//== 'for of' loop iterate each element of a string
let letters = 'abcde';

for(letter of letters){
    console.log(letter);
}