// object creation with literals

const person = {
    fname:"Lakshay",
    lname:"Jain"
};
console.log(person);
person.age=18;
console.log(person);
person.fname="XYZ";
console.log(person);

// object creation with new keyword

const car = new Object();
car.type = "Fiat";
car.model = "500";
car.color = "white";
console.log(car);
car.color = "red";
console.log(car);

// object creation with constructor(function)

function MobileY(brand, model, price) {
  this.brand = brand; 
  this.model = model; 
  this.price = price; 

  this.getDetails = function () {
    return `Brand: ${this.brand}, Model: ${this.model}, Price: ₹${this.price}`;
  };
}

const mobile1 = new MobileY("Samsung", "Galaxy S21", 79999);

console.log(mobile1.getDetails());
console.log(mobile1);

// object creation with constructor(function) with prototype keyword

function MobileX(brand, model, price) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

MobileX.prototype.getDetails = function () {
  return `Brand: ${this.brand}, Model: ${this.model}, Price: ₹${this.price}`;
};

const mobile2 = new MobileX("Samsung", "Galaxy S21", 79999);

console.log(mobile2.getDetails()); 
console.log(mobile2); 