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