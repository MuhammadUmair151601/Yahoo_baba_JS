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