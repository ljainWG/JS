// map, filter, reduce

// [].map()
// [].filter()
// [].reduce() 

const arr = [1, 2, 33, 4, 5];

const double = arr.map(function (num) {
    return num * 2;
});

const binary = arr.map(function (num) {
    return num.toString(2);
});

const divisibleBy4 = arr.filter(function (num) {
    return num % 4 === 0;
});
const notDivisibleBy4 = arr.filter(function (num) {
    return num % 4;
});
const greaterThan4 = arr.filter(function (num) {
    return num > 4;
});
const sumOfAllElements = arr.reduce(function (accumulator, current) {       // current is the current element in the array 
    // and accumulator is the result of the previous operation
    return accumulator + current;
}, 0 /* initial value of accumulator */);
const mamxElementOfAllElements = arr.reduce(function (accumulator, current) {       // current is the current element in the array
    // and accumulator is the result of the previous operation

    // if (accumulator > current) {
    //     return accumulator;
    // } else {
    //     return current;
    // }

    // return accumulator > current ? accumulator : current;

    return Math.max(accumulator, current);

}, Number.MIN_VALUE /* initial value of accumulator */);

console.log(arr);
console.log(double);
console.log(binary);
console.log(divisibleBy4);
console.log(notDivisibleBy4);
console.log(greaterThan4);
console.log(sumOfAllElements);
console.log(mamxElementOfAllElements);

const users = [
    { fname: 'John', lname: 'peterson', age: 34 },
    { fname: 'Jane', lname: 'Doe', age: 24 },
    { fname: 'Tom', lname: 'Jerry', age: 44 },
    { fname: 'Elon', lname: 'Musk', age: 54 },
    { fname: 'Jeff', lname: 'Bezos', age: 64 },
    { fname: 'Bill', lname: 'Gates', age: 74 },
    { fname: 'Mark', lname: 'Zuckerberg', age: 34 },
    { fname: 'Steve', lname: 'Jobs', age: 64 },
    { fname: 'Donald', lname: 'Trump', age: 74 }
];
const usersfullname = users.map(function (user) {
    return user.fname + " " + user.lname;
    // return `${user.fname} ${user.lname}`;
});
console.log(usersfullname);

// const usersAboveAge30 = users.filter(function (user) {
//     return user.age > 30;
// });
// console.log(usersAboveAge30);
// const usersFullNameAboveAge30 = usersAboveAge30.map(function (user) {
//     return `${user.fname} ${user.lname}`;
// });
// a better version of above code is this, but chaining
// const usersfullNameAboveAge30 =
//     users.filter((user) => user.age > 30) // Filter users with age greater than 30
//         .map((user) => `${user.fname} ${user.lname}`); // Map to their full names
// we can also do like this, by using reduce
const usersfullNameAboveAge30 = users.reduce(function (accumulator, current) {
    if (current.age > 30) {
        accumulator.push(`${current.fname} ${current.lname}`);
    }
    return accumulator;
}, []);
console.log(usersFullNameAboveAge30);


const ageCounts = users.reduce(function (accumulator, current) {
    if (accumulator[current.age]) {
        accumulator[current.age]++;
    } else {
        accumulator[current.age] = 1;
    }
    return accumulator;
}, {});
console.log(ageCounts);
// better version of the above code
// const ageCounts = users.reduce((acc, user) => {
//     acc[user.age] = (acc[user.age] || 0) + 1;
//     return acc;
// }, {});