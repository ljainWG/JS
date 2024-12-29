const cart = ["shirt", "pant", "shoe"];

// consumer code
const promise = createOrder(cart)
    .then((orderId) => {
        console.log('Order created successfully with orderId:', orderId);
        return orderId;
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then((paymentId) => {
        console.log('Payment done successfully with paymentId:', paymentId);
    })
    .catch((err) => {  // catch is used to catch the error thrown by the promise and handle it and also err is sent into another callback function
        console.log('Error:', err.message);
    });
// whenever we are chaining the promises then we have to return the promise from the then block so that the next then block can get the value from the previous then block and if we are not returning the promise from the then block then the next then block will not get the value from the previous then block and the catch block will be executed and the error will be thrown and catch block will catch the error and handle it and the error will be printed on the console and the program will be stopped and the next then block will not be executed.



// producer code
function createOrder(cart) {
    const pr = new Promise((resolve, reject) => {   // resolve and reject are functions that are passed to the promise function as arguments and are passed by js engine
        // logic what ever you want to do in createOrder function 
        // validate cart, create order, charge credit card, ship order, make entry in database, make entry in log file, send email to customer, send email to admin, make api call to inventory system, make api call to shipping system, make api call
        if (!validateCart(cart)) {
            const err = new Error('Invalid cart');
            reject(err);
        }
        // logic for creating order
        const orderId = 123;
        if (validateOrderId(orderId)) {
            setTimeout(() => resolve(orderId), 5000);

        }
    })
    return pr;
};
function proceedToPayment(orderId) {
    const pr = new Promise((resolve, reject) => {
        // logic for payment
        // validate order id, charge credit card, make entry in database, make entry in log file, send email to customer, send email to admin, make api call to payment gateway, make api call to inventory system, make api call to shipping system, make api call
        if (!validateOrderId(orderId)) {
            const err = new Error('Invalid orderId');
            reject(err);
        }
        // logic for payment
        const paymentId = 456;
        if (validatePaymentId(paymentId)) {
            setTimeout(() => resolve(paymentId), 5000);
        }
    })
    return pr;
}

function validateCart(cart) {
    return true;
    return false;
}
function validateOrderId(orderId) {
    return true;
    return false;
}
function validatePaymentId(paymentId) {
    return true;
    return false;
}

// what is the difference between below two cases
// case 1
const promise_1 = createOrder(cart)
    .then((orderId) => {
        console.log('Order created successfully with orderId:', orderId);
        return orderId;
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then((paymentId) => {
        console.log('Payment done successfully with paymentId:', paymentId);
    })
    .catch((err) => {  // catch is used to catch the error thrown by the promise and handle it and also err is sent into another callback function
        console.log('Error:', err.message);
    });
// case 2
const promise_2 = createOrder(cart)
    .then((orderId) => {
        console.log('Order created successfully with orderId:', orderId);
        return orderId;
    })
    .catch((err) => {  // catch is used to catch the error thrown by the promise and handle it and also err is sent into another callback function
        console.log('Error:', err.message);
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then((paymentId) => {
        console.log('Payment done successfully with paymentId:', paymentId);
    });

// the difference is of resposiblity of catch block
// Case 1: .catch () at the end of the chain

// - In this case, the.catch() is at the end of the chain.
// - It handles any error that occurs in the entire promise chain(from createOrder to proceedToPayment).
// - If any.then() block throws an error or a promise rejects at any point, the.catch() block will be executed, and the error will be logged.
//     After.catch() is executed, no subsequent.then() blocks are called because the error breaks the chain.

//     Example Flow:
// - createOrder succeeds → proceedToPayment succeeds → payment is logged.
// - If createOrder or proceedToPayment fails → the error is caught by.catch().

// Case 2: .catch () in the middle of the chain
// - In this case, the.catch() is in the middle of the chain(after the first.then()).
// - If an error occurs in createOrder(cart), the.catch() block will handle the error and resolve the promise with undefined(since no value is returned explicitly).
// - The subsequent.then() blocks will still execute, with the value of orderId being undefined.
// - Key Point: After the.catch() block is executed, the chain does not stop.It continues to the next.then().

//     Example Flow:
// - If createOrder succeeds → proceeds to proceedToPayment as normal.
// - If createOrder fails → logs the error, then passes undefined to the next.then().
//   - This could cause issues in proceedToPayment(orderId) if orderId is required.

// check the catch-image.png image in JS screenshots folder

// Best Practice
// Use Case 1 if you want to handle errors globally and ensure the chain stops on error.
// Use Case 2 if you want to handle errors for specific steps and allow the chain to continue.However, ensure subsequent steps can handle the default or undefined values.



// suppose if there are multiple promises and we want to combine them, then how to do that
// also suppose we want to call multiple promises simultaneously and we want to wait for all the promises to complete and then we want to do something then how to do that
// what are the advantages, disadvantages of promises
// what are the different ways to create promises
// what is the different ways to consume promises
// what is the difference between promise and callback
// what is the difference between promise and async-await
// there are many more concepts in promises
// we cover them all in lecture-30.js file