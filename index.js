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

// **************************lecture 11****************************
// comparison operators
// <, >, <=, >=,==, ===,!=, !==
// <   used for less than
// >   used for greater than
// <=  used for less than or equal to
// >= used for greater than or equal to
// == used only for equality check
// === used for datatype check as well
// != used for not equal to
// !== used for not equal data types

// EXAMPLE
// let a = 12;
// let b = 13;
// console.log(a<b);
// console.log(a>b);

// EXAMPLE 2
// let a = 12;
// let b = 12;
// console.log(a==b)
// let a = 12;
// let b = "12";
// console.log(a===b)

// EXAMPLE 3
// let a = 13;
// let b = 14;
// console.log(a!==b);

// ******************************lecture 12*************************
// if Statements
// used for condition situations if condition satisfies the statement will run 
// general form
// if (condition){
//                     statement};
// Example
// let prompt("is it rain today?")
// if(yes){
//     alert("take an umbrella with yourself")
// }

// *******************************lecture 13*************************
// logical operators
// there are three types of it and is used according to the scenario of the proplem
// 1  && AND operator used when both the conditions are to be true:
// 2 || OR operator used when either one of the situations is true:
// 3 ! NOT operator used when we want the opposite to be done:

// EXAMPLE:
// we want to make age restriction 
// let age = prompt("please enter your age:");
// if(age>=18 && age<=90){
//     alert("you are eligible for the licence")
// }
// else{
//     alert("you are not eligible");
// }

// *******************************lecture 14****************************
// IF else statement
// if fisrst statement becomes false then the else statement will run:
// let marks = prompt("enter your marks:");
// if(marks<50){
//     alert("you are fail");
// }
// else{
//     alert("you are pass")
// }

// ********************************lecture 15****************************
// IF else if statement:
// written as generally:
// if(condition){
// statement:}
// else if(condition){
// }
// else{ statement  }
// if first condition don't satisfy then second will execute then third and so on...... we can use multiple if else statements;

// Example:
// let marks = +prompt("please insert your marks");
// if(marks<=50){
//     alert("you are failed:")
// }
// else if(marks>=50 && marks<=60){
//     alert("you got second division")
// }
// else if(marks>=60 && marks<=70){
//     alert("you got first division")
// }
// else if(marks>70 && marks<=100){
//     alert("you got an A+")
// }
// else{
//     alert("insert a valid number please")
// }

// ******************************lecture 16*****************************
// Conditional (ternary operators)
// we can say it is the shortcut form of if statement:
// let a = 10;
// let b = 11;
// (a==b)? b = "true": b = "false";

// ******************************lecture 17*****************************
// Alert box:
// it is clear from the name that it gives us an alert box to show a message or warning etc.
// Example
// alert("Hello everyone")
// let a = "Welcome to javascript";
// alert(a);

// ******************************lecture 18*****************************
// confirm is same as alert but it requires options ok and  cancel 
// EXAMPLE
// confirm("hi");

// ******************************lecture 19*****************************
// prompt box:
// used to get some input from the user for a website prompt and +prompt used for getting number as an input
// let number = +prompt("enter a number please")

// *****************************lecture 20******************************
// Switch statement:
// it is same a if statement and is used for multiple statements choicing purpose:
// let num = +prompt("enter a day number from one to seven:");
// switch(num){
//     case 1: {
//         alert("it is monday");
//         break;
//     }
//     case 2: {
//         alert("it is tuesday");
//         break;
//     }
//     case 3: {
//         alert("it is wednesday");
//         break;
//     }
//     case 4: {
//         alert("it is thursday");
//         break;
//     }
//     case 5: {
//         alert("it is friday");
//         break;
//     }
//     case 6: {
//         alert("it is saturday");
//         break;
//     } 
//     case 7: {
//         alert("it is sunday");
//         break;
//     }
//     default: {alert("enter a valid number")}
// }