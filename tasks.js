//Tasks from https://medium.com/@reach2arunprakash/www-guvi-io-zen-d395deec1373
console.log(
  "Tasks from https://medium.com/@reach2arunprakash/www-guvi-io-zen-d395deec1373"
);
//TASK 1
console.log("Task1");
let v1, v2, v3, v4;
console.log("1", v1, v2, v3, v4);
var myvar = 1;
console.log("2:myvar", myvar);
let firstName;
let lastName;
let maritalStatus;
let country;
let age;
{
  let firstName, lastName, maritalStatus, country, age;
}
let string = "string";
let boolean = true;
let unDefined = undefined;
let noData = null;

let number = "10";
console.log(parseInt(number));
console.log(Number(number));
console.log(+number);

console.log("Task 2: Simple Programs todo for Operators");
//find square of a num
function square(a) {
  return Math.pow(a, 2);
}
console.log("sqaure of 2", square(2));

//Swap two nums
let a = 1;
let b = 2;
function swap(x, y) {
  b = x;
  a = y;
}
swap(a, b);
console.log("Swap 2nums", a, b);
// Addition of 3 nums
function sum(a, b, c) {
  return a + b + c;
}
console.log("Addition of 3 nums 1,2,3", sum(1, 2, 3));

//Celsius to fahrenheit conversion

function celsiusToFahrenheit(c) {
  return ((c * 9) / 5 + 32).toFixed(2);
}

console.log("100 Celsius to Fahrenheit", celsiusToFahrenheit(100));

//Meter to miles
function meterToMiles(m) {
  return m * 0.000621371;
}

console.log("10 Metre to miles", meterToMiles(10));

//Pounds to kg
function poundsToKg(p) {
  return p * 0.453592;
}

console.log("10 Pounds to kg", poundsToKg(10));

//Average

function average(a, b, c, d, e) {
  return (a + b + c + d + e) / 5;
}

console.log("Average of 1,2,3,4,5", average(1, 2, 3, 4, 5));

//Power of Any number

function power(x, y) {
  return Math.pow(x, y);
}

console.log("2power9", power(2, 9));

//Simple interest

function simpleInterest(p, r, t) {
  return (p * r * t) / 100;
}

console.log(
  "Simple interest of p=10000,r=15,t=12",
  simpleInterest(10000, 15, 12)
);

//Area of Equilateral triangle
const side = 5;
const equilateral_triangle_area = (Math.sqrt(3) / 4) * (side * side);
console.log(
  "Area of equilateral triangle with side 5",
  equilateral_triangle_area
);

//Area of isosceles triangle

function isoscelesTriangleArea(b, h) {
  return (b * h) / 2;
}
console.log(
  "Area of Isosceles triangle with b=10,h=12",
  isoscelesTriangleArea(10, 12)
);
// Find discount
function findDiscount(actualCost, soldCost) {
  return ((actualCost - soldCost) / actualCost) * 100;
}
console.log(
  "Discount for ActualCost=60 soldcost=45",
  findDiscount(60, 45) + "%"
);

//Find Dia, circumference, Area

function findCircleParams(r) {
  let area = 3.14 * Math.pow(r, 2);
  let circumference = 2 * 3.14 * r;
  let dia = 2 * r;
  console.log("Area", area);
  console.log("Circumference", circumference);
  console.log("Diameter", dia);
}
console.log("Circle params provided Radius 12");
findCircleParams(12);

//Arithmetic operators

function arithmeticOps(a, b) {
  console.log("Sum", a + b);
  console.log("Sub", a - b);
  console.log("Multiply", a * b);
  console.log("Division", a / b);
  console.log("Modulus", a % b);
}
console.log("Arithmetic operations of 20,10");
arithmeticOps(20, 10);
console.log("Asterisk pattern without loop");
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");

function electricityBill(watts, rate) {
  let kiloWattsPerDay = (watts * 24) / 1000;
  let totalCost = kiloWattsPerDay * rate * 30;
  return totalCost;
}

console.log(
  "Electricity bill for 100 watts per hour daily per unit rate 10",
  electricityBill(100, 10)
);

//Task 3: Simple Programs todo for Condition , Looping and Arrays
console.log("Task 3: Simple Programs todo for Condition , Looping and Arrays");
function hashPattern(number) {
  for (let i = 0; i < number; i++) {
    let currArr = new Array(i + 1).fill("#");
    console.log(currArr.join(""));
  }
}

console.log("Hash pattern");
hashPattern(7);

var strArray = [
  "<option>Jazz</option>",
  ,
  "<option>Blues</option>",
  ,
  "<option>New Age</option>",
  ,
  "<option>Classical</option>",
  ,
  "<option>Opera</option>",
];

strArray.forEach((item) => {
  console.log(item);
});

var myarray = [11, 22, 33, 44, 55];
let length = 0;
myarray.forEach((item) => {
  length++;
});
console.log("find Arr length without using loop", length);

let foods = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
console.log("Fifth fav food", foods[4]);
console.log("Food arr length", foods.length);

let friends = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];
console.log("Friends list", friends);
friends[friends.indexOf("Mari")] = "Munnabai";
console.log("Mari to Munnabai", friends);

console.log("print until CaptianAmerica");
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
  if (friends[i] === "CaptianAmerica") {
    i = friends.length;
  }
}

console.log("find friend");
function findFriend(input, name) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === name) {
      return `${input[i]} found`;
    }
  }
  return name + " not found";
}
let found = findFriend(friends, "Jeff");

console.log(found);

var friends1 = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];
var friends2 = ["Gabbar", "Rajinikanth", "Mass", "Spiderman", "Jeff", "ET"];
let allFriends = [...friends1, ...friends2].sort();
console.log("Sorted friends list", allFriends);
console.log("Friends data handling");
function dataHandling(input) {
  console.log("First item", input[0]);
  console.log("Middle item", input[input.length / 2 - 1]);
  console.log("Last item", input[input.length - 1]);
  input.push("Peter parker");
  input.unshift("Tony starks");
  let namesWithMr = input.map((item) => {
    return `Mr.${item}`;
  });
  console.log("Adding Mr to names", namesWithMr);
  let commaSeparatedNames = namesWithMr.reduce(
    (acc, curr) => `${acc}, ${curr}`
  );
  console.log("Comma sepaarted names", commaSeparatedNames);
  let namesWithA = namesWithMr.filter((item) => item.includes("a"));
  console.log("Names contains a", namesWithA);
  let namesLength = input
    .map((item) => item.length)
    .sort(function (a, b) {
      return a - b;
    });
  let namesLengthAvg =
    namesLength.reduce((acc, curr) => acc + curr) / namesLength.length;
  console.log("avg length of all the friends names", Math.ceil(namesLengthAvg));
  let namesStartsWithM = input.filter((item) => item.charAt(0) === "M");
  console.log("Names starts with M", namesStartsWithM);
  let minLength = namesLength[0];
  let maxLength = namesLength[namesLength.length - 1];
  input.forEach((item) => {
    if (item.length === minLength) {
      console.log("Name with Min chars", item);
    } else if (item.length === maxLength) {
      console.log("Name with Max chars", item);
    }
  });
}
dataHandling(allFriends);

const friendsInfo = [
  6,
  12,
  "Mari",
  1,
  true,
  "Munnabai",
  200,
  "CaptianAmerica",
  8,
  10,
];
let infoSum = 0;
let numsCount = 0;
friendsInfo.forEach((item) => {
  if (typeof item === "number") {
    infoSum += item;
    numsCount++;
  }
});
console.log("Average of nums from friends info", infoSum / numsCount);

var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];
console.log("Printing input variables");
input.forEach((item) => {
  console.log(item.join(" "));
});

let myobject = { 1: "one", 11: 1, name: "arun" };
myobject.ten = "ten";
console.log("Adding ten", myobject);

function createObject(firstName, lastName, buildNo, area, city) {
  return {
    firstName,
    lastName,
    buildNo,
    area,
    city,
  };
}
let guviAddress = createObject("Guvi", "Geek", "6", "IIT-M RP", "Chennai");
console.log("Object creation using object literals", guviAddress);
