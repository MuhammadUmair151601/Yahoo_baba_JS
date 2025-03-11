// ********************Lecture 01**********************
// web base scripting language vs client side scripting language
// ********web base scripting language*****************\
// file is loaded from server and then run of web live.
// ********Server side scripting language**************
// its not loaded in website and give HTML in return we can say it is used in back end coding like databases php, nodejs, python etc
// we will learn MERN stack mongo db, react, expressjs and nodejs.

// *******************lecture 02***********************
// applying JS in HTML file.
// we can add js file in both the start of the head and the end of the body but in the end of the body it is more reliable as it resposnds fast as compared to the file linked before the  body
// <head>
// <script src = "index.js"> </script>----------------->for adding before body
//    </head>
// same as <body> ---------code --------------- <script src = "index.js"> </script> </body>
// we can use the link from the external js file.

// ********************lecture 03***********************
// HTML tags use in js.
// we can use tags of html inside the js code.
// Example:
// document.write("i am a <br> programmer")
// console.log("hello there <b> everyone </b> is fine")
// document.write used to write in document of HTML
// console.log used to write in the console of the page in inspection portion.

// ********************lecture 04************************
// how to use comments in JS
// comments can be single line and double line. for single line we use //  in start of the line while for double line we use /*____________-*/

// ********************lecture 05************************
// variables in js
// these are like containers which stores value and can be changed any time during coding.
// Rules
// now space in variable name
// no starting numbers
// no starting special characters
// numbers,_, and special characters are used in mid of the name
// can be camel case like variableName
// Example
// let a = 15;
// console.log(a)
// // Example
// let b ;
// a= 23;
// console.log(a);

// **********************lecture 06 *************************
// var vs let vs const
// in js we will use let mostly in js and const for constant values
// var can be accessed from anywhere in the code while let is more secure similarly, var value can be overrided when we declare the var with same name the variable declared second will run instead of first but in let case we cannot do that but will be given as an error.
// Const use for fixed values like numbers and decimal values.

// *************************lecture 07***********************
// data types in JS
// types of data used in coding we.
//  var, let , const, bool, array, obj, null, undefined and string etc.

// ***********************lecture 08************************
// Arithematic operators in js
// +,-,*,/,**,%,++,--
// ** used as exponent 2**3 is equal to 2*2*2.
// ++ used as increment it has pre and post increment used as pre run and post run in programming in post first it will provide its original value then it will give incremented value.
// -- used as decrement it has pre and post increment used as pre run and post run in programming in post first it will provide its original value then it will give decremented value.
// Example
// let a = 23;
// console.log(a++);
// console.log(a)
// result of 1st console = 23
// result of 2nd console = 24
// similarly,
// let b = 20;
// console.log(++b);
// result of it will be directly 21.

// *************************lecture 09**************************
// Assignment operators in Js
// =,+=,-=,-=,*=,/=,%=,**=.
//  += -------------------> x= x+y
// -= --------------------> x= x-y
// *= --------------------> x= x*y
// /= --------------------> x= x/y
// %= --------------------> x= x%y
// **= -------------------> x= x**y
// the operations follows BODMAS rule

// ***************************lecture 10***************************
// chrome console tutorial
// make files html and css
// link them through <script> tag
// run in live server
// inspect the page and you will find the page of console in the browser
// we can use console.log() for console operations
// document.write for html document writing
// console.time("test");
// console.timeend("test");--------------> used for the time of execution finding
// console.clear("clears the console page");
// document.getElementbyId("main"); to get element through id name;
