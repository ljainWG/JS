// block scope and shadowing

var a = 10;
let b = 10;
const c =10;

console.log("a = "+a);
console.log("b = "+b);
console.log("c = "+c);

{
    var a = 20;         // this var a inside the block is shadowing the var a of global var a
    let b = 20;
    const c =20;
    
    var d = 30;
    let e = 30;
    const f = 30;

    console.log("a = "+a);
    console.log("b = "+b);
    console.log("c = "+c);
    console.log("d = "+d);
    console.log("e = "+e);
    console.log("f = "+f);
}

console.log("a = "+a);
console.log("b = "+b);
console.log("c = "+c);

// console.log("d = "+d);
// console.log("e = "+e);
// console.log("f = "+f);



// Illegal shadowing

// let fname = "Lakshay";
// var lname = "Jain";

// console.log("fname = "+fname);
// console.log("lname = "+lname);

// {
//     var fname = "XYZ";
//     let lname = "WER";
//     console.log("fname = "+fname);
//     console.log("lname = "+lname);  
// }

// console.log("fname = "+fname);
// console.log("lname = "+lname);