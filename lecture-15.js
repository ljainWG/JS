// setTimeout() makes sure to execute that statement after x ms and move forward without waiting for its execution, 
// the execution happens automatically on time when it expires by pulling it back into the call stack and executes it

// function x(){
//     var i= 10;
//     console.log("Hello Namaste"+Date())
//     setTimeout(
//         function(){                         // function is making closure here
//             console.log(i + Date());
//         }, 3000
//     )
//     console.log("Hello Namaste"+Date())
// }
// console.log("Hello Namaste"+Date())
// x();

// problem with closure and setTimeout

// function y(){
//     var i= 1;
//     for(i;i<=5;i++){
//         setTimeout(
//             function () {                         
//                 console.log(i);
//             }, i*1000
//         );
//     }
// }
// y();
// this is because the closure remembers the reference of the variable not its value


// to deal with this problem, we do use let variable instead of var, because let has variable scope 
// so this 'let' would help us, to deal with this problem

// function y(){
//     let i= 1;
//     for(i;i<=5;i++){
//         setTimeout(
//             function () {                         
//                 console.log(i);
//             }, i*1000
//         );
//     }
// }
// y();

//oops it didn't work
// because let was declared outside the function scope



// to make it work let i should have functional scope to make the difference and standout alone or away this problem

// function y(){
//     for(let i= 1;i<=5;i++){
//         setTimeout(
//             function () {                        
//                 console.log(i);
//             }, i*1000
//         );
//     }
// }
// y();

// to make it possible or working with var only i.e., without using let variable we can do it in this way
// what happens in this cases when we call anyFunctionName(i), it create a new copy of i each time for itself 
// when loop is running as x(local variable for each time function anyFunctionName called)
function y(){
    for(var i=1;i<=5;i++){
        function anyFunctionName(x){
                setTimeout(
                function () {                         
                    console.log(x);
                }, x*1000
            );
        }
        anyFunctionName(i);
    }
}
y();