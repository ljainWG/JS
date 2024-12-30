// when we are working with async and await we donot handle errors with .catch()
// instead of that we use try catch block for it
// we can also do it with .catch() over a promise but we should avoid it as good developers

const GITHUB_USER_URL_API = "https://api.github.com/users/xyz";
// const GITHUB_USER_URL_API = "https://aapi.github.com/users/xyz";

const promise = fetch(GITHUB_USER_URL_API);

// without error handling
async function getUserDetails_1() {
    console.log("Hello you are inside the function");
    const response = await promise;
    const resolved_data = await response.json();
    console.log("Hello user here is your details", resolved_data);
}

// with error handling using try catch finally
async function getUserDetails_2() {
    try {
        console.log("Hello you are inside the function");
        const response = await promise;
        const resolved_data = await response.json();
        console.log("Hello user here is your details", resolved_data);
    } catch (err) {
        console.error("Error : ", err);
    }
}

// getUserDetails_1();
getUserDetails_2();
// getUserDetails_1().catch((err) => {
//     console.error("Error : ", err);
// });

console.log("Hello World");