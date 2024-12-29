const GITHUB_API = "https://api.github.com/users/ljainWG";

// Prototype : Promise or anything else
// PromiseState : Pending or fullfilled or rejected
// PromiseResult : undefined or Response (data return by Github_API)

const user = fetch(GITHUB_API);
console.log(user);
user.then((data) => {       // arror function
    console.log(data)
});
// promise objects are immutable and can be resolved only once
// resolve only once means 

// defination of promise
// promise is a object that may produce a single value some time in the future, it is a kind of placeholder where we can get the value in future or fill it in future by a async operation/ api call/ function call
// promise is a container for a value that may not be available yet but will be available in future
// promise is a object that represents the eventual completion or failure of an asynchronous operation and its resulting value
// promise is a object that may produce a single value some time in the future, either a resolved value or a reason that it is not resolved (rejected)

// to avoid callback hell, we use promise chaining 
// promise chaining is a way to call multiple promises one after another in a sequence 

createOrder(cart)
    .then(function (orderId) {
        return proccedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo);
    })
    .then(function (walletId) {
        return updateWalletBalance(walletId);
    });

// create order then procced to payment then proceed to show order summary then update wallet balance

