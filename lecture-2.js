function welcomeUser(name){
    console.log("Welcome, "+name);
}

// arrow function representation
// arrow function(welcomeUser2) behave as variable not as a classical function and will be treated in that way or same way
var welcomeUser2 = (name) => {
    console.log("Welcome, "+name);
}

// this is representation of function, in this way (welcomeUser3) is also treated as variable instead of function
var welcomeUser2 = function(name) {
    console.log("Welcome, "+name);
}