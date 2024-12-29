// custom errors
// go and check lecture-28.js for custom errors as class and inheritance

// create custom error
const myCustomError = new Error('Some error message');
myCustomError.name = 'myCustomError';

// then in your code
try {
    if (condition) {
        throw myCustomError;
    }
    // rest of the code
} catch (error) {
    if (error.name === 'myCustomError') {
        console.error('Do something custom');
    } else {
        console.error(error.message);
    }
}