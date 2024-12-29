// With a message and a name
class MyCustomError_2 extends Error {
    constructor(message) {
        super(message);
        this.name = 'MyCustomError';
    }
};
class MyCustomError_1 extends Error {
    constructor(name, message) {
        this.name = name;       // name of custom error, in this case i am not considering MyCustomError_1 as the name of error which we want to give our error thown, i mean if i want to thow error invalidusername error then i will throw this by MyCustomeError_1 with errorname as invalidusername and message with that, else what i can do i can create a class with name invalidusername and then throw that error with message, just like we did in above example code/ error
        this.message = message
    }
};

// Function that may throw the custom error
function riskyFunction(shouldThrow) {
    if (shouldThrow) {
        throw new MyCustomError_2("Something went wrong in riskyFunction!");
    } else {
        return "Function executed successfully!";
    }
}

// Main code block to handle the error
try {
    // Call the function with a flag to simulate error
    let result = riskyFunction(true); // Change `true` to `false` to test the successful case
    console.log(result);
} catch (error) {
    if (error instanceof MyCustomError_2) {
        // Handle MyCustomError_2 specifically
        console.error(`Custom Error Caught: ${error.name} - ${error.message}`);
    } else {
        // Handle other generic errors
        console.error(`Generic Error: ${error.message}`);
    }
} finally {
    console.log("Execution completed, with or without errors.");
}