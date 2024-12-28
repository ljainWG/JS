// higher order functions and functional programming

// Higher order functions are functions that take other functions as arguments or return functions as their results.


// without higher order functions or code reusability

const radiuses = [3, 1, 2, 4];

const calculateArea = (radiuses) => {
    const output = [];
    for (let i = 0; i < radiuses.length; i++) {
        output.push(Math.PI * radiuses[i] * radiuses[i]);
    }
    return output;
}

const calculateCircumference = (radiuses) => {
    const output = [];
    for (let i = 0; i < radiuses.length; i++) {
        output.push(2 * Math.PI * radiuses[i]);
    }
    return output;
}

const calculateDiameter = (radiuses) => {
    const output = [];
    for (let i = 0; i < radiuses.length; i++) {
        output.push(2 * radiuses[i]);
    }
    return output;
}


console.log(calculateArea(radiuses));
console.log(calculateCircumference(radiuses));
console.log(calculateDiameter(radiuses));

// with higher order functions or code reusability we can do like this by refactoring the above code and passing the function as an argument or return the function as a result
function calculate(radiuses, logic) {
    const output = [];
    for (let i = 0; i < radiuses.length; i++) {
        output.push(logic(radiuses[i]));
    }
    return output;
}

function area(radius) {
    return Math.PI * radius * radius;
}
function circumference(radius) {
    return 2 * Math.PI * radius;
}
function diameter(radius) {
    return 2 * radius;
}

const calculateAreaRefactored = (radiuses) => {
    return calculate(radiuses, area);
}
const calculateCircumferenceRefactored = (radiuses) => {
    return calculate(radiuses, circumference);
}
const calculateDiameterRefactored = (radiuses) => {
    return calculate(radiuses, diameter);
}

// console.log(calculateAreaRefactored(radiuses));
// console.log(calculateCircumferenceRefactored(radiuses));
// console.log(calculateDiameterRefactored(radiuses));
// or we can do like this
console.log(calculate(radiuses, area));
console.log(calculate(radiuses, circumference));
console.log(calculate(radiuses, diameter));

// it is very similiar to map
console.log(radiuses.map(area));
console.log(radiuses.map(circumference));
console.log(radiuses.map(diameter));

// we can do same thing using object as we have in map
Array.prototype.calculate = function (logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}
console.log(radiuses.calculate(area));


// or we can do like this


// function logic(radius) {
//     return {
//         area: area(radius),
//         perimeter: perimeter(radius),
//         diameter: diameter(radius)
//     }
// }