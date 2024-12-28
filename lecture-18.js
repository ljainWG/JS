// basic example of event listener
// document.getElementById('clickButton')
//     .addEventListener('click', function buttonClicked() {
//         console.log("You have successfully clicked the button");
//         this.textContent = "You have clicked the button";
//     });

// closure with event listener
// function attachEventListener() {
//     let count = 0;
//     document.getElementById('clickButton')
//         .addEventListener('click', function buttonClicked() {
//             console.log("You have successfully clicked the button", ++count);
//             this.textContent = "You have clicked the button";
//         });
// }
// attachEventListener();

// better version of above code if.e., closure with event listener
function attachEventListener() {
    let count = 0; // Initialize the click counter
    const button = document.getElementById('clickButton');

    if (button) {
        button.addEventListener('click', function buttonClicked() {
            count++; // Increment the count
            console.log("You have successfully clicked the button", count);
            this.textContent = `You have clicked ${count} time(s)`; // Update button text dynamically
        });
    } else {
        console.error("Button with id 'clickButton' not found.");
    }
}
attachEventListener();

// garbage collection and remove event listener
// we can remove event listener by using removeEventListener() method
// we can remove event on occurence of some event or after some time
// we should or need to remove event listener because they are heavy and to avoid memory leaks
// and to improve performance by freeing up memory which is hold by event listener
// and to avoid unexpected behavior of our application or website,
// also the closure which is created by event listener will not be garbage collected until we remove the event listener
// and it will cause memory leak  and it will cause performance issue
// and it will cause unexpected behavior of our application or website



// some advance level example
// document.addEventListener('DOMContentLoaded', () => {
//     const button = document.getElementById('clickButton');
//     if (button) {
//         button.addEventListener('click', function buttonClicked() {
//             console.log("You have successfully clicked the button");
//             this.textContent = "You have clicked the button"; // Updates the button text
//         });
//     } else {
//         console.error("Button with id 'clickButton' not found.");
//     }
// });