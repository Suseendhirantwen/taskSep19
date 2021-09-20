var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };
let keys = Object.keys(obj1);
let equal = keys.every((item) => {
  return obj1[item] === obj2[item];
});
console.log(equal ? "Equal" : "Not Equal");
