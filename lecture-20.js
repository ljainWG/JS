// trust issues with set time out
console.log("Start");

setTimeout(function () {
    console.log("callback");
}, 5000); // Schedule the callback after 5000ms (5 seconds)

console.log("Somewhere in the middle");

let currentTime = new Date().getTime();
let finalTime = currentTime;

// Busy wait for 6000ms (6 seconds)
while (finalTime < currentTime + 6000) {
    finalTime = new Date().getTime(); // Update the finalTime
}

console.log("End");