// real world example to understand working with promise and promises

const GITHUB_USER_URL_API = "https://api.github.com/users/xyz";

const promise = fetch(GITHUB_USER_URL_API);     // fetch give you Response object as output, which also a type of promise
// this response has a readable stream
//  response.json() give us that response but again it gives us a promise
// when we resolve this response.json(), we get the data

async function getUserDetails() {

    console.log("You are inside the async function you will get your requested data shortly");

    const response = await promise;
    const unresolved_data = response.json();
    const resolved_data = await unresolved_data;

    // const login = resolved_data.login;
    // console.log(login);
    // const id = resolved_data.id;
    // console.log(id)

    console.log("Hello user here is your details", resolved_data);

    console.log("how are you feeling ?")
}

getUserDetails();

console.log("Hello World");