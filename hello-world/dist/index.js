"use strict";
console.log('Hello World.');
let age = 20;
age = 10.5;
console.log(age);
if (age > 10) {
    age += 10;
}
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
let numbers = [1, 2, 3];
numbers[1] = 10;
numbers.forEach(n => n.toLocaleString);
let user = [18, "guo"];
user.push(10);
var Size;
(function (Size) {
    Size["Small"] = "a";
    Size["Medium"] = "b";
    Size["Large"] = "c";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
function cal(x, y = 100) {
    if (x < 10)
        return x;
    return x * y;
}
console.log(cal(10, 99));
let employee = {
    id: 1,
    name: "",
    retire: (date) => {
        console.log(date);
    }
};
function kg2tael(weight) {
    if (typeof weight === "number") {
        return weight * 20;
    }
    return parseInt(weight) * 20;
}
console.log(kg2tael(10));
console.log(kg2tael('10kg'));
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
let q1 = 100;
let m1 = 'cm';
let m2 = 'inch';
function greet(name) {
    if (name) {
        console.log("hello", name.toLowerCase);
    }
    console.log("hola");
}
greet("guo");
greet(null);
greet(undefined);
