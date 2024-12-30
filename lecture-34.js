// in this lecture try to understand how does await works
// when we try to resolve same promise multiple time
// and when we try to resolve different promises in same piece of code/ function
// carefully watch the output
// and carefully uncomment and comment the code(or function calls) to see/ observe the difference clearly

// Observation : when we try to resolve same promise then no extra time is taken by js engine,
// but when we try to resolve different promises one after another then first or above one gets reolved first and then second one parallely
// if lower one resolves first then it will wait for above one till that get resolved and just after that the lower/ second one will get resolved
// if lower/ second one resolves later then first above one will get resolved and parallely it will also work on second/ lower one and will get resolved as as its time expires, it will not take complete time but only the extra time
// example first take t time and second takes t+x time
// then at time t=T first is resolved and
// at time t=T+x second is resolved, i.e., it just waits for extra x time after first one is resolved

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


async function getData_1() {
    const resolvedValue1 = await promise1;
    console.log("getData_1 :  Hello Lakshay 1st time");
    console.log("getData_1 :  " + resolvedValue1);

    const resolvedValue2 = await promise1;
    console.log("getData_1 :  Hello Lakshay 2nd time");
    console.log("getData_1 :  " + resolvedValue2);
}
// getData_1();

async function getData_2() {
    const resolvedValue1 = await promise1;
    console.log("getData_2 :  Hello Lakshay 1st time");
    console.log("getData_2 :  " + resolvedValue1);

    const resolvedValue2 = await promise2;
    console.log("getData_2 :  Hello Lakshay 2nd time");
    console.log("getData_2 :  " + resolvedValue2)
}
getData_2();


async function getData_3() {
    const resolvedValue2 = await promise2;
    console.log("getData_3 :  Hello Lakshay 2nd time");
    console.log("getData_3 :  " + resolvedValue2);

    const resolvedValue1 = await promise1;
    console.log("getData_3 :  Hello Lakshay 1st time");
    console.log("getData_3 :  " + resolvedValue1);
}
// getData_3();










// this below is all rubbish
// error is thrown by js engine
// it says :
// SyntaxError: await is only valid in async functions and the top level bodies of modules

// because of the ambiguity created here, what if the second promise takes lesser time than its above one promise, then lower one should wait for it or not and if not then what will it do till the above one gets setteled, due to all this ambiguity using multiple awaits one above another is restricted and throws the syntax error