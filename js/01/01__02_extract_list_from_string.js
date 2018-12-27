// Have a string with an embedded list and what to extract the list
//
// Extract the list substring from the list:
var sentence = 'This is one sentence. This is a sentence with a list of items:' +
  'cherries, oranges, apples, bananas. That was the list of items.';
// indexOf() method takes search value and optional beginning index value
// find first index of :
var start = sentence.indexOf(':');
// find first index of . after index of :
// +1 is given for index start value of 0 versus search index start value of 1
var end = sentence.indexOf('.', start+1);

// substring() method creates a substring based on start value and end value 
//   indexes
var listStr = sentence.substring(start+1, end);
console.log(listStr)   // 'cherries, oranges, apples, bananas'

// Use string split() to break the string into an array:
var fruits = listStr.split(',');
console.log(fruits);  //  [' cherries', ' oranges', ' apples', ' bananas']

// substr() method does the same except it uses start index value and a length
//   value
var listStr = sentence.substr(start+1, end-start)
var fruits = listStr.split(',');
console.log(fruits);  //  [' cherries', ' oranges', ' apples', ' bananas']

// each item in fruit array has a leading white space artifact
// forEach() method applies the function passed as parameter callback to each
//   array element
// callback function supports 3 args: the array element value, array element 
//   index, array iteself
fruits.forEach(function(elmnt,indx,arry) {
  arry[indx] = elmnt.trim()
})
console.log(fruits);  //  ['cherries', 'oranges', 'apples', 'bananas']
// Simpiliar approach: pass a regex expression to split() that trims before 
//   it's returned
var fruits = listStr.split(/\s*,\s*/);
console.log(fruits);  //  ['cherries', 'oranges', 'apples', 'bananas']


// Reduce code verboseness by using method chaining
//   Allows us to attach one method call to teh end of a previous method call
//   chain the split() method to substring() method
var fruits = sentence.substring(start+1, end).split(",");
console.log(fruits);  //  [' cherries', ' oranges', ' apples', ' bananas']
