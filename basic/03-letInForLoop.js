
// for (var i = 1; i <= 5; i++) {
//     setTimeout(()=>{
//         console.log(i);
//     },3000)
// }

//  'var' keyword doesnt obey the closure rule. hence this result will display :
// 6
// 6
// 6
// 6
// 6
// reason that it will have executed; 1, 2, 3, 4, 5 before the setTimeout function is executed. thereby increasing each to 6 (i.e satisfying the 'i<=5, i++' condition).


for (let i = 1; i <= 5; i++) {
    setTimeout(()=>{
        console.log(i);
    },3000)
}

//  'let' keyword obeys the closure rule. hence this result will display :
// 1
// 2
// 3
// 4
// 5
// code is run after the setTimeout function is executed.