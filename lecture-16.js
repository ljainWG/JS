// // data hiding or encapsulation with clouser

// function counter() {
//     var count = 1;

//     function printCount() {
//         console.log(count);
//     }

//     function incrementCount() {
//         count++;
//     }

//     return {
//         incrementCount: incrementCount,
//         printCount: printCount
//     };

//     // return { incrementCount, printCount }

//     //     const toolbox = {
//     //     incrementCount: function incrementCount() { count++; },
//     //     printCount: function printCount() { console.log(count); }
//     // };
//     // return toolbox;

// }

// // console.log(count++);      // it will throw reference error

// var myCounter = counter();
// myCounter.incrementCount();
// myCounter.printCount();

// myCounter.incrementCount();
// myCounter.printCount();

// // this below code will create a new counter which will have no relation with previous one
// myCounter = counter();              // or var myCounter = counter(); 
// myCounter.incrementCount();
// myCounter.printCount();



function counter() {
    var count = 1;

    this.printCount = function() {
        console.log(count);
    }

    this.incrementCount = function() {
        count++;
    }

}

var count1 = new counter();
count1.incrementCount();
count1.printCount();
count1.incrementCount();
count1.printCount();

var count2 = new counter();
count2.incrementCount();
count2.printCount();
