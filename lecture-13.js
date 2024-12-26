// constructor function for object

function Person(fname, lname, dateofbirth){
    this.fname=fname;
    this.lname=lname;
    this.dateofbirth= new Date(dateofbirth);

    this.fullname = function(){
        return this.fname+" "+this.lname;
    }
    this.age = function(){
        const currentDate = new Date();
        const age = currentDate.getFullYear() - this.dateofbirth.getFullYear();
        const month = currentDate.getMonth() - this.dateofbirth.getMonth();
        if (month < 0 || (month === 0 && currentDate.getDate() < this.dateofbirth.getDate())) {
            return age - 1;
        }
        return age;
    }
}

const alice = new Person("Alice", "Jain", "2002-09-25");
const bob = new Person("Bob", "Bohra", "2002-08-15");

// adding new property to me object of Person

alice.phoneno = "XXXXXXXXXX";      // this phone no is added to me object not with all objects of Person

console.log(alice);
console.log(bob);

// to add this propert with all objects we have to modify the constructor function

// if we want to do this without modifying the existing code, we can do it with 2 ways

// with prototype
// the problem with this is that prototype proerty is inherited property for all objects so we cannot see those proerties while loging that object
// but we can access them as we access normal properties
// also all objects has same value for that property in beginning, we can modify it for all objects seprately with different value
// we can use this to set default value
Person.prototype.fathername = "XYZ";
console.log(alice.fathername);
console.log(bob.fathername);

alice.fathername="PQR";
console.log(alice.fathername);
console.log(bob.fathername);

// without prototype
// in this way property is not shared amoung all object
// it is different for all objects
// but still we have same problem of inherited property
// but we call the function to define its value and if we dont they it will return [Function(anonymous)]

Person.prototype.gender = function (value) {
  this.gender = value;
};

alice.gender("male");
//bob.gender("female");

console.log(alice.gender);
// console.log(bob.gender);