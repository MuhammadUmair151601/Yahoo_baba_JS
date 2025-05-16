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

// *****************************lecture 21************************
// Functions:
// functions are a block of code use to per form a specific task  in programming:
// functions can be used as:
// function functionName(){
// }--------------------------->Function Declaration:
// functionName();-------------------------->Function calling:
// Example:
// function fun(){
//     console.log("Hello \n");
//     console.log("How are you")
// }
// fun();
// function addition(){
//     let a = 10;
//     let b = 20;
//     let c = a + b;
//     console.log(c);
// }
// addition();

// ***********************lecture 22**************************
// Functions with parameters
// We use functions with parameters because sometimes we want to change the valuse inside the functions with time:
// Functions with parameters can be defined as:
// function FunName(parameter1, parameter2){
// statement(argument1, argument2);}
// Example one
// function funName(firstname, lastname){
//     console.log("hello " + firstname +" "+lastname);
// }
// funName("Muhammad", "umair")
// Example two
// function sum(a , b){
//     console.log("The sum of "+ a +" and "+ b +" is "+ " " + (a+b));
// }
// sum(15, 15)

// *************************lecture 23******************************
// functions with return values
// we can use the return values of the functions in order to use these functions in variables later in code.
// it can be declared as:
// function funName(p1, p2){
// var s = p1 + p2;
// var p = sum/500*100;
// return s;
// return p;}
// var tt = funName(s);
// var per = funName(p);
// Example one
// function result(math, phy, chem, bio, eng, comp){
//     var sum = math+phy+chem+bio+eng+comp;
//     var percentage = ((sum/600)*100 +"%");
//    return{sum: sum, percentage: percentage};
// }
// var Result = result(90, 99, 87, 88, 78, 78);
// console.log(Result);
// function result(math, phy, chem, bio, eng, comp) {
//     var sum = math + phy + chem + bio + eng + comp;
//     var percentage = (sum / 600) * 100;
    
//     return { sum: sum, percentage: percentage };
// }

// var ResultData = result(90, 89, 85, 34, 88, 92);

// console.log("Total Marks:", ResultData.sum);
// console.log("Percentage:", ResultData.percentage + "%");
// function fullName(fname, lname){
//     let name = (fname + lname) ;
//     return name;
// }
// let Name = fullName("Muhammad " , "Zaweyar");
// console.log(Name);

// ************************lecture 24************************
//Local variable and Global variable:
//A variable outside the block of code is called global variable like a variable outside the function.
// A variable inside the block of code or inside a function is called local variable.
// global variable can be accessed from anywhere while local cannot be accessed:
// Example:
// var a = " Hello everyone";
// function greetings(){
//     console.log(a);
// }
// // greetings();

// ************************lecture 25***********************
// events in js 
// Events in js are used for giving functionality to the elements of HTML
// following events are used:
/* click--------------->onclick
double click----------->ondblclick
right click ----------->oncountextmenu
mouse hover------------>onmouseenter
mouse cut-------------->onmousecut
mouse down------------->onmousedown
mouse up--------------->onmouseup
key press-------------->onkeypress
key up ---------------->onkeyup
load ------------------>onload
unload ---------------->onunload
resize ---------------->onresize
scroll----------------->onscroll
some events are used in body while some inside the element and everyone has its own functionality:*/

// Examples of events in JS:
// let a = "hello there";
// function hello(){
//     alert(a);
// }

// ************************lecture 26**********************
//loops 
// there are five types of loops used in JS:
// while loop
// do while loop
// for loop
// for in loop
// for each loop
// Now while loop:
// it has following syntax
// 1: initialization
// 2: condition
// 3: incrementation etc.

// Example:
// If we want to print numbers from 1 ot 50:
// let a = 1; 
// while(a<=50){
//     console.log(a);
//     a++;
// }
// if we want to print them in reverse order:
// let a = 50;
// while(a>=1){
//     console.log(a);
//     a--;
// }
// if we want to print a sentence multiple times:
// let a = 1;
// while(a<=10){
//     console.log(a + ")I am fine")
//     a++;
// }
// if we want to print them in reverse order:
// let a = 10;
// while(a>=1){
//     console.log(a + ") i am fine")
//     a--;
// }

// ***********************lecture 27**********************************
// do while loop
// same as while loop but the structure is same first the loop is run atleast once then the condition is checked.
// general form
// let a = value;
// do{
// console.log(value)
// value++}
// while(condition)

// Example 1:
// let a = 1;
// do{
// console.log(a)
// a++;
// }
// while(a<=10)

// Example 2:
// printing numbers in reverse order
// let a = 10;
// do{
//     console.log(a);
//     a--;
// }
// while(a>=1)

// **********************lecture 28*****************
// for loop
// in this loop the initialization, condition and incrementation is declared before the statements:
// general form:
// for(let a=value; value<=another value; value++/--)
// { console.log(a)
// a++
// }
// nowadays most of the developers use it because it is most reliable and easy way in loops:

// Example 1:
// printing numbers from one to ten:
// for(let a = 1; a<=10; a++){
//     console.log(a)
// }

// Example 2:
// printing them in reverse order:
// for(let a = 10; a>=1; a--)
// {
//     console.log(a)
// }

// ***********************lecture 29****************************
// break and continue in JS:
// continue continues the loop from next iteration if more than one conditions are given inside a loop:
// while break jumps out of the loop and ends it on that time:

// Example:continue 
// for(let a = 1; a<=10; a++){
//     if(a==3){
//         console.log("---->" + a)
//         continue;
//     }
//     console.log("->" + a);
// }
// The ---->3 will be printed and the 4 will be started from loop again:

// Example:Break
// for(let a = 1; a<=10; a++){
//     if(a==3){
//         console.log("---->" + a)
//         break;
//     }
//     console.log("->" + a);
// }
// it will print until 3 and will stop the loop at 3:

// ******************lecture 30***************************************
// finding even and odd numbers in using loop:

// for finding even numbers:
// for(let a = 1; a <= 20; a++){
//     if(a % 2 == 0){
//         console.log(a)
//     }
// }

// finding odd numbers:
// for(let a = 1; a <= 20; a++){
//     if(a % 2 != 0){
//         console.log(a)
//     }
// }

// **********************lecture 31*********************
// nested loops
// when we put loops inside the loops are called nested loops 
// we use nested loops when we want to show data in tabular or matrix form.
// we can use more than one loop inside the loop
// General form
// For (conditions etc){
// for(conditions etc){
// document.write(statement);
// }
//  document.write("<br>")
// }

// Example:
// if we want to show data from one to hundred in a tabular form
// for (let a = 1; a <= 100; a += 10) {
//     for (let b = a; b < a + 10; b++) {
//         document.write(b + "\n");
//     }
//     document.write("<br>"); 
// }

// **********************lecture 32**************************
// Example 1 on nested for loop:
// for (let a = 1; a<= 5; a++){
//     for(let b = 1; b <= a; b++){
//         document.write(b + "\n")
//     }
//     document.write("<br>")
// }

// Example 2:
// for (let a = 1; a <= 5; a++){
//     for (let b = 1; b <= a; b++){
//         document.write(a +" ")
//     }
//     document.write("<br>")
// }

// Example 3:
// for(let a = 5; a >= 1; a--){
//     for(b=a; b>=1; b--){
//         document.write(b)
//     }
//     document.write("<br>")
// }

// Self made example:
// for(let a = 5; a>=1; a--){
//     for(let b = a; b>=1; b--){
//         document.write(a+" ")
//     }
//     document.write("<br>")
// }

// ********************lecture 33*****************************
// Arrays
// Used to store multiple values in a single variable.
// Example:
// let arr = [1,2,3,4,5]
// document.write(arr);
// we can also use arrays in lists and summitions 

// Example 1:
// Applying array in loop:
// let array = [1,2,3,4,5]
// for(a=0; a<=4; a++){
//     document.write(array[a])
// }

// Example 2:
// Applying array for summition:
// let array = [1,2,3,4,5]
// sum = 0;
// for(a=0; a<=4; a++){
//     document.write(array[a] +"<br>")
//     sum = sum + array[a];
// }
// document.write("The total is: "+ sum);

// Example 3:
// applying lists on an array
// let array = [1,2,3,4,5]
// for(a=0; a<=4; a++){
//         document.write("<li>" +array[a]+"</li>")
//     }

// ******************************lecture 34*************************
// var arr = new Array();
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[3] = 4;
// arr[4] = 5;
// for(let a=0; a<=4; a++){
//     console.log(arr[a]);
// }

// Now for finding the sum of the given numbers:
// var arr = new Array();
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[3] = 4;
// arr[4] = 5;
// sum = 0;
// for(let a=0; a<=4; a++){
//     console.log(arr[a]);
//     sum = sum + arr[a];
// }
// console.log("The sum is :" + " " +sum);

// using prompt for Array values:
// let arr = new Array(4);
// document.write("<ul>")
// for (let a = 0; a<4; a++){
//     arr[a] = +prompt("Enter the value")
//     document.write(arr[a] + "<br>");
// }
// document.write("<ul>")

// *************************lecture 35*****************************
// Multidimentional Array
// let arr = [
//     ["ali", 13, "male", "ninth"],
//     ["anam", 20, "female", "BSCS"],
//     ["raza", 30, "male", "lecturer"],
//     ["ahmed", 25, "male", "BSSE"]
// ];
// console.log(arr);

// if we want to print separately specific elements 
// let arr = [
//     ["ali", 13, "male", "ninth"],
//     ["anam", 20, "female", "BSCS"],
//     ["raza", 30, "male", "lecturer"],
//     ["ahmed", 25, "male", "BSSE"]
// ];
// console.log(arr[0]); ---------it will print only 0 index array
// console.log(arr[0][2]); ---------it will print only 2nd value in 0 index array

// Now we can apply loop on it
// let arr = [
//     ["ali", 13, "male", "ninth"],
//     ["anam", 20, "female", "BSCS"],
//     ["raza", 30, "male", "lecturer"],
//     ["ahmed", 25, "male", "BSSE"]
// ];
// for(let a=0; a<3; a++){
//         document.write(arr[a] + "<br>");
// }

// we can also apply nested loops on internal arrays:
// let arr = [
//     ["ali", 13, "male", "ninth"],
//     ["anam", 20, "female", "BSCS"],
//     ["raza", 30, "male", "lecturer"],
//     ["ahmed", 25, "male", "BSSE"]
// ];
// for(let a=0; a<3; a++){ 

//     for(let b=0; b<3; b++){
//         document.write(arr[a][b] + "<br>"); -----------break is applied on both the internal and external arrays:
//      }
        
// }

// Now applying table on multidimentional arrays:
// let arr = [
//     ["Name", "Age", "Gender", "Education"],
//     ["Ali", 13, "Male", "Ninth"],
//     ["Anam", 20, "Female", "BSCS"],
//     ["Raza", 30, "Male", "Lecturer"],
//     ["Ahmed", 25, "Male", "BSSE"]
// ];

// document.write("<table border='1' cellpadding='5' cellspacing='0'>");

// // Loop through the array to generate table rows and columns
// for (let a = 0; a < arr.length; a++) {  
//     document.write("<tr>");
//     for (let b = 0; b < arr[a].length; b++) {
//         if (a === 0) {
//             document.write("<th>" + arr[a][b] + "</th>"); // Table headers for the first row
//         } else {
//             document.write("<td>" + arr[a][b] + "</td>");
//         }
//     }
//     document.write("</tr>");
// }

// document.write("</table>");

// ********************lecture 36**********************
// modify and delete array elements:
// replacing index elements with other elements:
// let a = [1,2,3,4,5]
// a[1] = 12;
// //for a[1] the 12 value will replace 2 in index 1:
// // similarly if we want to replace 3 with 11 on index 2:
// a[2] = 11;
// console.log(a);

// delete element from an array
// let a=["ali", 19, "Msc"];
// delete a [1];

// // this will delete 19 from array:
// delete a[2];
// console.log(a);

// ******************lecture 37**********************
// Array methods
// there are total 24 methods in Arrays we wil now discuss sorting and reversing of an array:
// let a = ["ali","ahmed","wahid", "fahad", "shayan", "naveed"];
// // now if we want to print these values in ascending order:
// a.sort();
// console.log(a);

// Now if we want to reverse the array:
// let a = [1,2,3,4,5];
// a.reverse();
// console.log(a);
// it will reverse all the elements:

// ********************lecture 38*********************
// push and pop of an array
// push: adds an element to the end of an array:
// pop: removes element from the end of an array:
// let a = [1,2,3,4,5]
// a.pop(4);
// console.log(a);
// a.push(5,6);
// // it will add back the element 5 and 6 into the last of the array
// console.log(a);

// ********************lecture 39************************
// shift and unshift.
// shift and unshift are also used for adding and removing messages from an array to the first index of an array
// shift: it removes the first element from an array.
// unshift adds the element to the first index of an array.
// Example:
// let a = [1,2,3,4,5];
// a.shift();
// console.log(a);
// // similarly:
// // let a = [1,2,3,4,5];
// a.unshift(1);
// console.log(a);

// *******************lecture 40*********************
// concat() and join():
// concat is used to link two or three or more arrays to each other:
// while join is used to link all the elements inside an array:

// Eample concat():
// let a = [1,2,3,4,5];
// let b = [4,5,6,7,8];
// let c = a.concat(b);
// console.log(c);
// similarly;
// let a = [1,2,3,4,5];
// a = a.concat("ali",3,4,5,5);
// console.log(a)
// For three arrays we can do:
// let a = [1,2,3,4,5];
// let b = [4,5,6,7,8];
// let c = [7,8,9,10,11,21]
// let d = a.concat(b,c);
// console.log(d);

// join(): Example:
// let a = ["ali","Ahmed","khan"];
// let b = a.join("_");
// console.log(b);
// it will join all the words in form of ali_ahmed_khan:

// *************************lecture 41*********************************
// slice and splice of an array:
// slice is used to get a piece of an array and print it;
// Example:
// let a = [1,2,3,4,5,6,7,8,9,0];
// const slicedarray = a.slice(2,6);
// console.log(slicedarray);
// it will print elements from index 

// Splice Array:
// it is used to replace elements of an array with new ones;
// let a = [1,2,3,4,5,6,7,8,9,0];
// // now we want to  replace 2,3,4 with 1,1,1
// a.splice(1,3,1,1,1);
// console.log(a);

// **********************lecture 42*************************
// IsArray();
// Used to check whether the variable declared is an array or not:
// Example:
// let a = [1,2,3,4,5];
// let b = Array.isArray(a);
// console.log(b);
// We can also use if statements in this:
// 
// similarly:
// let a = "hello";
// if(Array.isArray(a))
//     {
//     console.log("it is an array:");
// }
// else{
//     console.log("it is not an array:")
// }

// ********************lecture 43***********************
// indexof / lastindexof
// they are used to search the index of an element 
// indexof is used to search index of element from the start while lastindexof is used to search the index of an element from last:

// Example:indexof
// let a = [1,2,3,4,5,6,7,8,9];
// let b = a.indexOf(3);
// console.log(b);

// let a = [1,2,3,4,5];
// let b = a.lastIndexOf(4);
// console.log(b);

// *******************lecture 44********************
// includes():
// this method is used where the item in an array is included in it or not:
// Example:
// let a = [12,23,34,4,5];
// let b = a.includes(34);
// console.log(b);

// *********************lecture 45***********************
// some and every method in an array:
// some(): used when atleast one element in an array satisfies the condition;
// every(): used when all the elments in an array satisfies the condition;
// Example for some() method:
// let age = [12,14,12,4,55];
// let b = age.some(checkeligibility);
// function checkeligibility(age){
//     return age>=18
// }
// console.log(b);

// Example for every() method:
// let value = [2,4,6];
// let divisibility = value.every(divisible);
// function divisible(value){
//     return value%2==0;
// }
// console.log(divisibility);

// **********************lecture 46***************************
// find() & findindex():
// find() method is used to print the first value of the element in an array which passes the condition:
// findindex() used to print the first index of the element which passes the condition:

// Example find():
// let value = [10,20,30,40];
// let age = value.find(check);
// function check(num) {
//     return num >=20;
// }
// console.log(age);

// Example indexof():
// let value = [23,34,45,56];
// let correct = value.find(check);
// let index= value.findIndex(check);
// function check(number){
//     return number>=40;
// }
// console.log(correct);
// console.log(index);

// ********************lecture 47************************
// filter():
// this method is used to print all the elements of an array which satisfies the condition:
// Example:
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let b = a.filter(check);
// function check(num) {  
//     return num >= 5;
// }
// console.log(b); 

// ********************lecture 48**********************
// tostring(), valueof(), fill().
// tostring is used to convert an array to a string:
// valueof is used for printing the values of the array we dont use it as it is default:
// fill is used to replace an element of array with all the elements of the array:

// example on to string:
// let a = ["i", "am", "learning", "javascript"];
// b= a.toString();
// console.log(b);

// example of value  of:
// let a = ["hi","i","am","there"];
// console.log(valueof(a));

// example of fill():
// let a = [1,2,3,4,5];
// let b = a.fill(8);
// console.log(b);

// *****************lecture 49**************************
// foreach loop:
// foreach loop is used on arrays and it targets the elements of an array:
// we can implement a specific function on the elements of an array:

// Example:
// let a = ["a", "b", "c", "d"];

// a.forEach(function(value) {
//     console.log(value);
// });
// if we want to multiply each number by 5:
// let a = [1,2,3,4,5];
// a.forEach(function(number){
//     console.log(number*5)
// });

// *********************lecture 50**********************
// objects in JS:
// Objects in js are used which contains data and also some nested objects with some specific properties:
// objects are represents as objectName{data}
// we can put biodata, arrays, nested objects and general information:

// Examples of objects
// let obj1 = 
// {
//     firstName : "muhammad",
//     lastName  : "umair",
//     gender    : "male",
//     age       : 25,
//     email     : "uk@123gmail.com",
//     favSubs   : ["ip","DB","OS","DLD","WebEngg"]
// }; 
// console.log(obj1.favSubs);

// we can also put functions in it:
// let obj1 = 
// {
//     firstName : "muhammad",
//     lastName  : "umair",
//     gender    : "male",
//     age       : 25,
//     email     : "uk@123gmail.com",
//     favSubs   : ["ip","DB","OS","DLD","WebEngg"],
//     a:function(a , b){
//         return a + b;
//     }
// }; 
// console.log(obj1.favSubs);
// console.log(obj1.a(5 , 6));

// We can also add another object inside the object:
// let obj1 = 
// {
//     firstName : "muhammad",
//     lastName  : "umair",
//     gender    : "male",
//     age       : 25,
//     email     : "uk@123gmail.com",
//     favSubs   : ["ip","DB","OS","DLD","WebEngg"],
//     a:function sum(a , b){
//         return a+b;
//     },
//     obj2 :
//     {
//         fName : "ali",
//         lName : "ahmed"
//     }
// }; 
// console.log(obj1.favSubs);
// console.log(obj1.a(5, 6));
// console.log(obj1.obj2.fName)

// **********************lecture 51************************
// new method for declaring objects:
// we can declare objects before and then after some coding we insert values with properties in it:
// let  name = new Object();
// // after some coding
// name.firstName = "fahad",
// name.lastName = "khan"
// console.log(name.firstName);

// **********************lecture 52***********************
// Array of objects
// let std = [
//     {Name : "ram" , age : "25"},
//     {Name : "karan", age : "43"},
//     {Name : "naheed", age : "67"}
// ];
// // for printing specific object
// for (let a = 0; a<std.length; a++){
//     console.log(std[a].Name + " " +std[a].age);
// }
// // console.log(std[1].Name + " " + std[1].age);

// *********************Lecture 53 *************************8
// constant and variables with array and objects:
// we can use objects inside an array and then we can also do some changes outside that array as well:
// Example
// let a = [
//     {fname : "ali", lname : "khan"},
//     { fname : "ahmed", lname : "raza"},
//     { fname : "fahad", lname : "shah"}
// ]
// console.log(a);
// now,
// let a = 
//     {
//         fname : "ali", 
//         lname : "khan",
//         age : 25}
    
// // console.log(a.fname);
// a.fname = "jan"
// console.log(a.fname)

// ***********************Lecture 54***********************************
// for in loop:
// // used to print all the elements of an object at once when we want to print an object we print one by one element:
// let a = {
//     name : "umair",
//     age : 25,
//     gender : "male", 
//     education : "graduation"
// }
// // simply we do 
// // console.log(a.name);
// // console.log(a.age);
// // console.log(a.gender);
// // console.log(a.education);
// for (let key in a){
//     console.log(a[key] + "  ");
// }
// it will print all elements at once:

// **********************lecture 55*********************
// Map method in Js
// if we want to do some changes in the array but it results in a new array without disturbing the current array:
// let a = [1,2,3,4,5];
// // we want to multiply a elements by 10: 
// let b = a.map(multiply); 
// function multiply(x){
//     return x * 10;
// }
// console.log(b);

// ***********************Lecture 56 **********************
// String methods:
// 1: property:
// length--> used to show us the length of the string:
// Example:
// let a = "HEllo everyone how are you?";
// let b = a.length;
// console.log(b);

// method 1: toLowerCase:
// used to convert the string completely to lowercase:
// let a = "Hello everyone";
// let b = a.toLowerCase();
// console.log(b);

// Method 2: toUpperCase:
// used to convert string to upper case letters:
// let a = "HELLO EVERYONE HOW ARE YOU?"
// let b = a.toUpperCase();
// console.log(b);

// method 3: Includes:
// finds the words or characters in the string and replies with true or false if not found:
// let a = "i am coding";
// let b = a.includes("am");
// console.log(b);

// let a = "i am coding";
// let b = a.includes("is");
// console.log(b);

// method 4: startsWith():
// used to find the starting characters of the string:
// let a = "how was your day?";
// let b = a.startsWith("how");
// console.log(b);

// let a = "how was your day?";
// let b = a.startsWith("day");
// console.log(b);

// method 5: endsWith();
// let a = "I am fine";
// let b = a.endsWith("fine");
// console.log(b);

// let a = "I am fine";
// let b = a.endsWith("no");
// console.log(b);

// method 6: search():
// used to search the character and show the index of that character:
// let a = "hello everyone how are you all?"
// let b = a.search("everyone");
// console.log(b);


// method 7: match():
// used to find out the matching characters in the string and show them in an array form:
// let a = "i am feeling well but i would like to be in bed insted";
// let b = a.match("i");
// console.log(b);

// method 8: indexOf():
// used to show the index of the character:
// let a = "somehow i managed to get on time.";
// let b = a.indexOf("i");
// console.log(b);
// if no index found then it will result in -1:

// Method 9: lastIndexOf():
// counts the index from reverse and the tells us:
// let a = "i am going to get graduated:";
// let b = lastIndexOf("to");
// console.log(b);

// Method 10: replace:
// used to replace characters with some others:
// let a = "hello all";
// let b = a.replace("all", "everyone");
// console.log(b);

// method 11: trim:
// used to trim the string from sides like extra spaces:
// let a = "   what is your name   ";
// let b = a.trim("what is your name");
// alert(b);

// ***************************Lecture 57 ****************************/
// string methods II:
// 12: charAt():
// used to return the character at the given position:
// let a = "Hello everyone";
// let b = a.charAt(6);
// console.log(b);

// 13: charCodeAt():
// // returns the ascii code of the character of the position:
// let a =  "Hello everyone";
// let b = a.charCodeAt(6)
// console.log(b);

// 14: concat(): 
// used to combine strings together;
// var a = "hello" + " ";
// var b = "everyone";
// var c = a.concat(b);
// console.log(c);

// 15: split();
// used to split string on the positions we mention:and return it in the form of an array:
// let a = "jS is very interesting";
// let b = a.split("i");
// console.log(b);

// 16: repeat();
// used to repeat the string how many times we want:
// let a = "I am good in coding "+ " \n";
// let b = a.repeat(10);
// console.log(b);

// 17: slice();
// Give us the slice of the string:
// let a = "its very cold today:";
// let b = a.slice(3,8);
// console.log(b);

// 18: substring():
// same as slice(): but return value from the position mentioned:
// let a = "ali_ahmed";
// let b = a.substring(6);
// console.log(b);

// 19: substr(): same as substring:

// 20: toString();
// convert the elements to the string:
// let a = 155;
// let b = a.toString();
// console.log(b);
// console.log(b + 55); 
// now it will give 15555 not added as it is converted to string:

// 21: valueOf();
// default returns whatever value is declared like string and number.

// *******************************Lecture 58*****************************
// Number methods(): used to apply different methods related to numbers:
// 1: number();
// converts a number declared in string is converted to number: opposite of toString():
// let a = "190";
// let b = Number(a);
// console.log(b + 10);
// IT WILL RETURN 200:

// 2: parseInt(x):
// convert the decimal number to the integer:
// let a = 1.22;
// let b = parseInt(a);
// console.log(b);

// 3: parseFloat(x):
// it converts the string into Floating number:
// let a = 23.567757;
// let b = parseFloat(a);
// console.log(b);

// 4: isFinite():
// used to show whether the number is finite or not: it will tell us whether it is true or not:
// let a = Infinity;
// let b = isFinite(a);
// console.log(b);

// 5: isInteger():
// used to fing whether the number is integer or not:
// let a = 45.5;
// let b = Number.isInteger(a);
// console.log(b);
// now if we put an integer value:
// let a = 45;
// let b = Number.isInteger(a);
// console.log(b);

// 6: toFixed:
// used to convert a decimal value to a nearest fixed value:
// let a = 45.665;
// let b = a.toFixed();
// console.log(b);

// 7: toPrecision:
// round off the value to the required precision:
// let a = 123.23423;
// let b = a.toPrecision(5);
// console.log(b);

//***********************Lecture 59 *******************************
// Math methods:
// 1: Math.ceil();
// used to round off the number to the nearest value above than 0.5:
// let a = 5.56;
// let b = Math.ceil(a);
// console.log(b);

// 2: Math.floor():
// used to round off the number to the nearest value below than 0.5:
// let a = 5.44;
// let b = Math.floor(a);
// console.log(b);

// 3: Math.round(x):
// combination of ceil and floor and round off to the nearest integer value:
// let a = 34.43;
// let b = Math.round(a);
// console.log(b);

// 4: Math.max(x,x,x,x,x,):
// find out the maximum value among the multiple values in the group:
// let a = Math.max(1,2,3,4,5,5,6,6);
// console.log(a);

// 5: Math.min(x,x,x,x,x):
// finds out the minimum number among the group numbers:
// let a = Math.min(1,2,3,4,4,5,6,6,7,8,9);
// console.log(a); 

// 6: Math.trunc():
// convert numer to simple  integer:
// let a = 34.545;
// let b = Math.trunc(a);
// console.log(b);

// 7,8,9: math.sqrt(x);
// it gives the square root of a number:
// math.cbrt(x):
// it gives the cube root of a number:
// math.pow(x,y);
// gives power of the number:

// 10: math.random():
// chooses the random value between two points:

// console.log(Math.floor(Math.random() * 100)+1 );

//  11: math.abs(x):
// provides the absolute value of number:
// example |a| same as in mathematics:

// math.pi:
// it prints the value of pi 22/7 or the exact value which is 3.14:

// ************************Date Methods******************************
// used to fixed different date related situations:
// var a = new Date();
// console.log(a);
// it will give us the date and its location from out PC:

// a.getdate(): will give us the today date only;
// let a = new Date();
// let b = a.getDate();
// console.log(b);

// a.getfullyear(): will give us the current year:
// let a = new Date();
// let b = a.getFullYear();
// console.log(b);

// a.getmonth(): will give us the current month:
// let a = new Date();
// let b = a.getMonth();
// console.log(b);

// a.getday(): will return the current day:
// let a = new Date();
// let b = a.getDay();
// console.log(b);

// a.gethours(): will give us the current hour:
// let a = new Date();
// let b = a.getHours();
// console.log(b);

// a.getminutes,seconds and milliseconds are also used:

// let date = new Date(); 

// date.setDate(15);             
// date.setMonth(0);             
// date.setFullYear(2025);                  
// date.setMinutes(30);          
// date.setSeconds(0);  

// console.log(date);  

// *********************Lecture 61*********************************
// DOM (document object modele):
// important same as events because JavaScript uses the DOM to access and manipulate HTML or CSS dynamically.
// changing elements, changing elements, reacting to user actions and deleting elements from page.
// it uses the HTML tree to access different elements of the page.
// we will use mostly get and set methods mostly in this.

// **********************Lecture 62*****************************
// Methods for targeting elements in DOM:[index number if there exist multiple ids]
// ID: getElementbyId("idname"):
// class: getElementbyClass("classname")[index number if there are multiple classes]:
// tag: getElementbytagname("tagname")[index number if there exist multiple tags]:

// Example:
// let element;
// element = document;
// console.log(document.all);  --->shows all elements used in the page:
// console.log(document.title); -->Targets the title of the page in HTML:
// console.log(document.head); -->Targets the head of the HTML page:
// console.log(document.body); -->Targets the body of the HTML page:
// console.log(document.a); -->Targets all the anchor tags in page:
// console.log(document.images); -->Targets all the images in the page:
// console.log(document.doctype); -->shows which doc type is used in page:
// console.log(document.URL); -->shows the url of the current page:
// console.log(document.domain); --> shows the domain of the page:
// console.log(document.URI); -->same as domain:

// ******************lecture 63********************
// Get and set methods in DOM:
// Get:
// we can get HTML,text and attributes through get method
// now, for getting the inner values we use the following methods:

// innertext used for getting the text
// let element;
// element = document.getElementsByTagName("h1")[0].innerText;
// console.log(element);

// innerHTMl for getting Inner HTMl
// var element;
// element = document.getElementById("paragraph").innerHTML;
// console.log(element);

// getAttribute --> gives the value of the attribute:when the same tag consist ot two attributes like id and class:
// it will call the only attribute called inside that tag: either style, onClick() etc.
// let element;
// element = document.getElementById("paragraph").getAttribute("id");
// console.log(element);

// getAttributenode -->Same as get attribute but it returns the name of the attribute as well with the name:
// attributes
// let element;
// element= document.getElementById("paragraph").getAttributeNode("class");
// console.log(element);
// element= document.getElementById("paragraph").getAttributeNode("class").value;--->will return only value inside quotes:

// Attributes:
// shows all the attributes used inside a tag:
// attribute.[1]name; for only name of attribute:
// let element;
// element = document.getElementById("paragraph").attributes;
// console.log(element);

// changing the innertext in a tag:it changes the inner text:
// let item;
// item = document.getElementById("paragraph").innerText = ("so far so good");
// console.log(item);

// Changing the innerHTML innertext from inside: it changes the inner HTML: 
// let element;
// element= document.getElementById("paragraph").innerHTML = ("Hi everyone");
// console.log(element);

// setAttribute: used to change the attribute values;
// let element = document.getElementById("paragraph"); // get the element first
// element.setAttribute("class", "xyz"); // then change the class
// console.log(element);

// removeAttribute: removes complete attribute:
// let element = document.getElementById("paragraph");
// element.removeAttribute("class");
// console.log(element);

// ***********************Lecture 64*******************************
// DOM query selector and DOM query selector all():
// generally it can be written as 
// document.querySelector("element"):
// it returns the first button element: while
// document.querySelectorAll("element");
// it returns all the same name elements:

// **********************Lecture 65*******************************
// DOM css styling methods:
// we can implement styling on elements of HTML using queryselectors:
// document.querySelector("h1").style.backgroundColor = "grey";
// in above line we targeted only 1st h1 through DOM:
// Now, for selecting all h1 elements.
// document.querySelectorAll("h1").forEach(h1 => h1.style.color = "blue");
// document.querySelectorAll("h1").forEach(function(h1){
//  h1.style.backgroundColor = "tan";
// });

// *********************Lecture 66********************************
// className method and classList method:
// className method is used to replace a class name with the new one:
// let element = document.querySelector("#hi");
// console.log(element.className);
// element.className = "everyone";

// classList method is used for adding, removing and togling(if present then remove if not present then add):
// it returns classes in the form of an array:
// let element = document.querySelector("#hi");
// now.classList.add("blue");
// now.classList.remove("everyone");

// ***********************Lecture 67***************************
// Adding eventlistener():
// we normally use the onclick and onmouseenter events in HTML which makes the HTML more complex and difficult to understand:
// now we will use eventlisteners in DOM in order to handle the code from outside the HTML:
// document.getElementById("now").onclick = function(){
//     document.getElementById("now").style.backgroundColor = "yellow";
// }

// ****************************Lecture 68***********************
// DOM traversal method:
// used to access the parent and child elements related to each other:
// 1: parentElements or parentNodes:
// var a = document.getElementById("inner").parentElement.style.backgroundColor = "yellow";
// it will targer the parent element of the inner element and change its background color:

// var a = document.getElementById("inner").parentNode;
// console.log(a);
// this will target the parent node and and show the tags as well in the console.

// **********************Lecture 69*******************************
// children and childNode:
// childElement
// we can access the child node as well just like accessing the parent node of the current node:
// let a = document.getElementById("outer").children[0];
// console.log(a);

// childNode:
// let a = document.getElementById("outer").childNodes;
// console.log(a);
// it will return all the nodes in the array form:

// ********************Lecture 70*********************************
// firstchild and lastchild elements:
// firstChildelement:
// it targets the first childElement of the current elements:
// let a = document.getElementById("outer").firstElementChild.innerHTML;
// console.log(a);

// lastChildElement:
// // it targets the last child element:
// let a = document.getElementById("inner").lastElementChild.innerHTML;
// console.log(a);

// **********************Lecture 71******************************
// NextSibling and previousSibling:
// let a = document.getElementById("child").nextElementSibling.innerHTML;
// console.log(a);

// previousElementSibling:
// let a = document.getElementById("child").previousElementSibling.innerHTML;
// console.log(a);

// **********************Lecture 72*****************************
// create element method:
// create element method is used to create the the HTML tags, new html elements and comments in page:
// creating HTML tags:
// var a = document.createElement("h1");
// console.log(a);
// <h1></h1> created in console.

// create textnode:
// let b = document.createTextNode("Hello everyone");
// console.log(b);
// text created in console.

// create comment:
// let c = document.createComment("this is a comment");
// console.log(c);
// comment created:

// ********************Lecture 73*********************************
// DOM append models:
// // used to attach two elements with each other in DOM:

// let b = document.createTextNode("This text is inside h1");
  
// document.getElementById("a").appendChild(b);
// the text is inserted inside the h1 tag in HTML page:
// this will be inserted into a div at the end of the div or tag
// // now to put the text before the other text:
// var target = document.getElementById("a");
// target.insertBefore(b , target.childNodes[0]) --> this will insert the text before the text in h1:

// **********************Lecture 74******************************
// InsertAdjacentElements"
// they create elements and append them all at once:
// let a =  document.createElement("h1");
// let b = document.createTextNode("This is text");
// a.appendChild(b);
// var target = document.getElementById("hi");
// target.insertAdjacentElement("beforeend", hi); -->This will insert the text before the end of the text in h1:
// target.insertAdjacentElement("beforebegin", a ) -->This will insert the text after the text in h1:
// Same goes for the HTML and commnts as well:

// **********************Lecture 75***************************
// Replace and removing the child elements in DOM:
// general form:
// terget.replaceChild(oldone, newone):
// target.removechild([0]):

// let a = document.createElement("li");
// let b = document.createTextNode("this is text");
// a.appendChild(b);
// var target = document.getElementById("id1");
// var oldElement = target.children[1];
// // console.log(oldElement); 
// target.replaceChild(a, oldElement);

// if we want to remove the child completely then we use remove the child with:

// var target = document.getElementById("id1");
// var oldElement = target.children[1];
// target.removeChild(oldElement);

// *******************Lecture 76*************************
// DOM cloneNode method:
// var target = document.getElementById("list1").children[0];
// var copyElement = document.cloneNode(true);
// console.log(copyElement);
// document.getElementById("list2").appendChild(copyElement);

// ********************Lecture 77*************************
// contains() methods:
// used to find whether the element or attribute is available inside the current element:
// var parentElement = document.getElementById("list1");
// var target = document.getElementById("list2");
// var find = parentElement.contains(target);
// console.log(find);
// it will return false as there is no list2 attribute inside list1 attribute:

// var parentElement = document.getElementById("list1");
// var target = document.getElementById("ban");
// var find = parentElement.contains(target);
// console.log(find);
// it will return true as ban is available in the list1 attribute:

// *******************Lecture 78****************************
// has child and has attributes method:
// used either the element has a child node available or not same for the has attribute:
// let element = document.getElementById("list1");
// let find = element.hasAttribute("id");
// console.log(find);

// for hasChild():
// let a = document.getElementById("list1");
// let b = a.hasChildNodes();
// console.log(b);

// **********************Lecture 79*************************
// isEqualNode():
// used for the finding whether the nodes in the separate list are equal or not:
// let target1 = document.getElementById("list1").firstElementChild;
// let target2 = document.getElementById("list2").children[1];
// let equal = target1.isEqualNode(target2);
// console.log(equal);

// *********************Lecture 80*************************
// Forms events:
// Focus(), blurr(), input(), change(), select(), submit(), invalid():
// Focus: Blur:
// focus used to put some extra feature when we start writing inside the text area while blur used to come to original state when we go to next text area field:
// function namefunc(element){
// element.style.backgroundColor = "tan";
// }
// function blurfunction(element){
//     element.style.backgroundColor = "";
// }

// input():
// implemented on text area only and it applies the event as we start to write something in it:
// function blurfunction(element){
//     var x = element.value;
//     document.getElementById("div1").innerHTML= x;
// }

// ***********************Lecture 81***********************
// Change:, select:, submit: invalid:
// it is used to change the value in anothor element as the value in the current element changes:
// function changeFunction(element){
//   var x =  element.value;
//   document.getElementById("div1").innerHTML = x;
// }
// we can implement this on the textbox as well:

// select method:
// it works when already something is declared inside the textbox and we select it as we select the text it will trigger and do it worK:

// function Sf(){
//     console.log("you selected some  text")
// }

// onsubmit:
// it will  trigger as we submit the form:
// function submitfunction(){
//     var x = document.getElementById("fname").value
//     alert("hello " + x +" you submitted a form:")
// }

// invalid:

// ***********************lecture 82***************************
// setinterval and clearinterval:
// used for  animations on elements:
// generally written as:
// setinterval(functionName,millisecond)
// var a = 0;
// var b = setInterval(Ani , 1000);
// function Ani(){
//     a = a + 10;
//     if(a == 200){
//         clearInterval(b);
//     }
//     else{
//         var target = document.getElementById("div1");
//         target.style.width= a + "px";
//     }
// }

// ***************************Lecture 83*******************************
// setTimeout and clearTimeout:
// we want to do animation for specific period of time:
// generally: setTimeout(functionName,millisecond)
// var a = setTimeout(Anim,5000);
// function Anim(){
//     var target = document.getElementById("div1");
//     target.style.width = "500px";
// }
// // its width will increas by 500 px after 3 seconds:
// function stop(){
//     clearTimeout(a);
// }

// *******************************Lecture  84*************************
// introduction to BOM:
// Browser object model:
// like window of a browser:
// used for programming related to browser: window object
// using windows object we can increase or decrease the height and width of the browser:
// open and close browser window:
// move and resize the windows:
// scroll browser window:
// get url, hostname ,protocl and  even history of browser:

// ****************************Lecture 85*****************************
// getting height and width of window  
// inner height, inner  width:
// outer height, outer width:
// var a = window.innerHeight;
// console.log("inner height is " + a);
// var b = window.outerHeight;
// console.log("outer height is " + b);

// var c = window.innerWidth;
// console.log("inner width is " + c);
// var d = window.outerWidth;
// console.log("outer width is " + d);

// **********************Lecture 86***************************
// window open() and close() method:
// if we want to open a new window from the current window we use window open() method:
// if we want to close the window we use window close() method:
// generally written as: window.open(url, name, specs)

// var mywindow;
// function open() {
//   mywindow=  window.open("", "","width = 500px ,height = 300px");
//   mywindow.document.write("<P>this is my window</p>")
// }
// function close(){
//  mywindow.close;
// }

// ***************************Lecture 87********************************88
// moveby() and moveto() methods;
// window by default opens at 0 margin from top and left but we can move it with these methods:
// function move(){
//     mywindow.moveto(100,100);f
// }

// var mywindow;

//   function openWindow() {
//     mywindow = window.open("", "", "width=500,height=300");
//     mywindow.document.write("<p>This is my window</p>");
//     mywindow.document.close(); // Important to finalize the document stream
//   }

//   function closeWindow() {
//     if (mywindow && !mywindow.closed) {
//       mywindow.close();
//     }
//   }

//   function moveWindow() {
//     if (mywindow && !mywindow.closed) {
//       mywindow.moveTo(100, 100); // Moves the window to coordinates (100,100)
//       mywindow.focus();
//     }
//   }
// // move by is same as move to but moveby takes start form the current position of the window:


// ***********************Lecture 88*************************
// resizeto() and resize by methods:
// used to resize the size of the window from current current size:
// function resizewindow(){
//     mywindow.resizeto(700,700)
// }
// resizeby() changes size from current size of the window:

// **********************lecture 89****************************
// scrollby() and scrollto():
// we use these methods to scroll the page without using the scroll bar:
// there are two  types of scroll vertical and horizontal:
// if we want to scroll up,left we will put values in -ive and for down,right we put values in +ive:
// function scrollwindow(){
//     window.scrollBy(0,200);
// // first value for x axis and one value for Y axis:
// // if we put -200 it will start moving up;
// }
// scrollto(): used to scroll to the exact value on the page:
// ex window.scrollto(50,50);
// the page will leave only 50px gap from x and y axis:

// ****************************Lecture 90****************************
// location object:
// Used in location bar of the window to get the location of the website:
// console.log(location);
// this will show all types of locations in console:
// console.log(location.host)
// // it will return host name or IP address:
// console.log(location.href)
// // returns the complete URL:
// console.log(location.port);
// // returns the port number:
// console.log(location.protocol);
// // returns the protocol used
// console.log(location.hash);
// // returns the the value after hash:
// console.log(location.search);
// // returns the value after the ?

// Location object methods:
// there are three methods in location objects>
// assign() to assign new value create a button and put location.assign(www.google.com) in it.
// reload() to relaod the page create a button and put location.reload() in it.
// replace() to replace something same as assign but remove previous pages from history we cannot go back.

// ***********************Lecture 91**************************
// History object:
// used that how many pages in backward or forward are open using the arrow on the window page:
// console.log(history);
// it shows the number of pages in total:
// console.log(history.length);
// it will also show the number of pages:
// methods for history object:
// back(); for going back to previous page:
// forward(); going forward to next page:
// go(); works for both backward and forward:
// function backfunction(){
//     history.back();
// }
// function forwardfunction(){
//     history.forward();
// }
// function gofunction(){
    // history.go(1); 1 for forwarding the page and -1 for reversing the page: 2 for two pages forward and -2 two pages in reverse:
// }

// ************************Lecture 92****************************
// page Yoffset and page Xoffset:
// used for how much the page has been scrolled on x axis and y axis:

// window.addEventListener('scroll', function(){
//     console.clear();
// console.log("pageXOffset" + window.pageYOffset);
// })
// this will show us with the time how much page was scrolled:
// window.addEventListener('scroll', function(){
//     console.clear();
// console.log("pageXOffset :" + window.pageXOffset);
// })
// it will show the horizontal scroll value:

// ***************************lecture 93********************
// offsettop offsetleft:
// used to tell us how much the div or an element is far from top and left of the window:
// var box = document.querySelector("#box");
// console.log("offsettop :" + box.offsetTop);
// console.log("offsetleft :" + box.offsetLeft);

// *************************Lecture 94**********************
// scrolltop and scrollleft:
// used to know how much the page is scrolled from top and left:
// const target = document.querySelector("#box");

// target.addEventListener("scroll", () => {
//     console.clear();
//   console.log("scrolltop :" + target.scrollTop);
//    console.log("scrollleft :" + target.scrollLeft);
// });
// same for horizontal scroll: