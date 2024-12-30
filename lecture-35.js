// here is one more variation related to async and await with normal code and setTimeout() in global/ individual without async-await

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data has been retrieved from the DataBase");
    }, 5000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data has been modified into the DataBase");
    }, 7000);
});


console.log("Hello you are global space - 1 time");

async function getData_2() {

    console.log("Hello you are global space - 5 time");

    const resolvedValue1 = await promise1;
    // console.log("getData_2 :  Hello Lakshay 1st time");
    // console.log("getData_2 :  " + resolvedValue1);

    console.log("Hello you are global space - 6 time");

    const resolvedValue2 = await promise2;
    // console.log("getData_2 :  Hello Lakshay 2nd time");
    // console.log("getData_2 :  " + resolvedValue2)

    console.log("Hello you are global space - 7 time");

}
getData_2();

console.log("Hello you are global space - 2 time");

async function getData_3() {

    console.log("Hello you are global space - 5 time");

    const resolvedValue2 = await promise2;
    // console.log("getData_3 :  Hello Lakshay 2nd time");
    // console.log("getData_3 :  " + resolvedValue2);

    console.log("Hello you are global space - 6 time");

    const resolvedValue1 = await promise1;
    // console.log("getData_3 :  Hello Lakshay 1st time");
    // console.log("getData_3 :  " + resolvedValue1);

    console.log("Hello you are global space - 7 time");

}
// getData_3();

console.log("Hello you are global space - 3 time");

setTimeout(() => {
    console.log("Hello you are global space - 4 time");
}, 6000);


// this is why it is said time, tide and js waits for none, due to this context switching inside the callback
// which is justified by the defination of js itself
// js is single threaded synchronous programming language