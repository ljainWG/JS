// async and await and how they are different or traditional or older way of dealing with it
// nature of await is whatever we write under the await it will wait for promise to be resolved


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data has been retrieved from the DataBase");
    }, 5000);
});

////

// function getData_3() {
//     console.log("getData_3" + promise);
// }
// getData_3();

////

function getData_1() {
    console.log("getData_1 :  Hello Lakshay");
    promise.then((result) => console.log("getData_1 : " + result));
}
getData_1();

// function getData_2() {
//     return promise.then((result) => result);
// }
// console.log("getData_2 : " + getData_2());

////

async function getData_4() {
    console.log("getData_4  :  Hello Lakshay 1st time");
    const resolvedValue = await promise;
    console.log("getData_4 :  Hello Lakshay 2nd time")
    console.log("getData_4 : " + resolvedValue);
}
getData_4();

////

// go and check lecture-33.js file it has another concept which is about how async await works with normal code
// also check the lecture-34.js