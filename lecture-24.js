// promises in js
// promises are a way to handle async code in js

const cart = {};

// function createOrder(cart, callback) {} // this createOrder function's primary goal is to creae orderId  and callback the callback function

// createOrder(order, function (orderId) {
//     proceedToPayment(orderId);
// });

// this above code will do IOC

// we can do the same async code with promises
function createOrder(cart) { return orderId }    // the aim of this function is to return the orderId
const promise = createOrder(cart);
promise.then(function (orderId) {       // 
    proceedToPayment(orderId);
});

// the core differnce between the above two approach is passing a function as arg and attaching a function to another function
// the difference between passing and attaching is 

// in lecture-25.js we will see real or actual use of promises