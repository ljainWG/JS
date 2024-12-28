// anonymous function
// function without name
// what are first class functions?
// functions are first class citizens in javascript
// what is first class citizen?
// callback function, higher order function, pure function, arrow function, anonymous function, first class function
// difference between function statement, function expression function declaration
// difference between arguments and parameters in function
// what are event loop, call stack, callback queue, event loop, web api, callback function, higher order function, pure function
// synchronous and asynchrnous JS
// blocking main thread
// power of garbage collector, how to make sure that gabage value is collected (setting it null, etc)
// event listeners and closure with event listeners, its scope
// garbage collection and remove event listeners


// function statement or function declaration
function sayHello() {
    console.log('Hello');
}
sayHello(); // Hello


// function expression
// here we assign a anonymous function to a variable called sayHello
var sayHelloMessage = function() {
    console.log('Hello');
}
sayHelloMessage(); // Hello


// arrow function
var sayHello = () => {
    console.log('Hello');
}
sayHello(); // Hello


// anonymous function
// they are used in places where we use function as value
// function () {
// }


// named function expression
// anonymous function to create a function expression
var sayHelloMessage = function sayHello() {
    console.log('Hello');
}
sayHelloMessage();  // Hello
sayHello();         // Error: ReferenceError: sayHello is not defined


// first class function
// function inside a function as argument
// the ability to use function as value and can be passed as argument to another function and can be returned from another function, this ability is called first class function
function sayHello(param) {
    console.log(param);
}
function callback(){
    console.log("this function is call back function");
}
sayHello(callback);
// also we can return a function from a function (closure)
// function sayHello(callback) {
//     callback();
// }


// call back functions help us to make use of asynchonous world/enviroment in a single threaded synchronous language
setTimeout(
    function(){
        console.log("Hello");
}, 5000);
console.log('World');
// a anonymous call stack is created and the function is pushed to the call stack and it is executed after 5 seconds


// creating a event listener