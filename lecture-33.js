const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data has been retrieved from the DataBase");
    }, 5000);
});

function getData_1() {
    console.log("getData_1 :  Hello Lakshay");
    promise.then((result) => console.log("getData_1 : " + result));
}
getData_1();

async function getData_4() {
    console.log("getData_4  :  Hello Lakshay 1st time");
    const resolvedValue = await promise;
    console.log("getData_4 :  Hello Lakshay 2nd time")
    console.log("getData_4 : " + resolvedValue);
}
getData_4();

console.log("Hello you are in global space");

// watch the output very carefully