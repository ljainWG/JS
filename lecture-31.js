// what is async
// what is await
// difference between async and await
// difference between async await promises and call back

async function getData() {
    return "Data fetched";
}
async function setData() {
    return new Promise(
        (resolve, reject) => {
            resolve("Data has been modified in the DataBase");
        }
    );
}

const value_1 = getData();
console.log(value_1);
getData().then((result) => { console.log(result); });

const value_2 = setData();
console.log(value_2);
setData().then((result) => { console.log(result); });