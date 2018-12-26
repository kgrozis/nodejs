// Differences between a JavaScript object, primitive, and literal and how can 
// you tell which is which

// JavaScript literal - represents a specific type:
//                      string: quoted string
//                      floating-point number: number
//                      boolean: boolean
"this is a string" // declare string
1.45               // declare float
true               // declare boolean

// JavaScript primitive - instance of a particular data type: string, number, 
//                        boolean, null, undefined
//                        3 of primitive types have constructor objects:
//                        string, number, boolean.  These provide access to the
//                        builtin properties and mthods
"this is a string" // example of a string primitive
null               // example of a null primitive
// construtor object
var str1 = "this is a simple string";  // quoted value is the string literal
var num1 = 1.45;                       // value of 1.45 is the number literal
var answer = true;                     // true and false are boolean literals
console.log(str1.length);              // use String object's length property
// create primitve boolean, string and number variables using literal 
// representations:
var str1 = String("this is a simple string");  // string literal
var num1 = Number(1.45);                       // number literal
var bool1 = Boolean(true);                     // boolean literals
// deliberately instantiate an object use new operator
var str2 = new String("this is a simple string");  // string obj instance
var num2 = new Number(1.45);                       // number obj instance
var bool2 = new Boolean(true);                     // boolean obj instance
// difference between a primitive and obj when you compare an obj instance to
// a literal value using strict equality
//
// primitive variables are strictly equal to literals
// primitives are compared by value and values are literals
if (str1 === "this is a simple string") {
  console.log('equal')
}
if (num1 === 1.45) {
  console.log('equal')
}
if (bool1 === true) {
  console.log('equal')
}
// object instances are not strictly equal to literals
// type is object
if (str2 === "this is a simple string") {
  console.log('equal')
} else {
  console.log('not equal')
}
if (num2 === 1.45) {
  console.log('equal')
} else {
  console.log('not equal')
}
if (bool2 === true) {
  console.log('equal')
} else {
  console.log('not equal')
}
console.log(typeof num1) // type number
console.log(typeof num2) // type objec t