/**************************** 
* Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Varible naming rules
var _years = 3;
var JohnMark = 'John and Mark';
var if = 23;
*/


/******************************
 * Varible mutation and type coercion
 */

 /***************************** 
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'Driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/



/*****************************
 * Basic operators
 */
// var year, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;
// // Math operators
// yearJohn = now - 28;
// yearMark = now - 33;

// console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);


// // Logical operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);



// // Typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageMark);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof x);




/****************************
 * Operator precedence
 */


// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // Multiple operators
// var isFullAge = now - yearJohn >= fullAge; // true
// console.log(isFullAge);

// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 -6;// 8 * 4 -  6 // 32 - 6 // 26
// console.log(x, y);

// // More operartors
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
//  x = x + 1;
//  console.log(x);
//  x += 1;
//  console.log(x);
//  x++;
//  console.log(x);

/***************************
 * CODING CHALLENGE 1
 */

 /*
  Mark and John are trying to compare their BMI (Body
  Mass Index), which is calculated using the formula:
  BMI = mass / height^2 = mass / (height * height).
  (mass in kg and height in meter).

  1. Store Mark's andf John's mass and height in
  variables
  2. Calculate both their BMIs
  3. Create a boolean variable containing information
  about whether Mark has a higher BMI than John.
  4. Print a string to the console containing 
  the variable from Step 3. (Something like "Is mark's BMI
  higher than John's? true").

 */

//  var markHeight, johnHeight, markMass, johnMass;
//  markHeight = 1.8288;
//  johnHeight = 2.01168;
//  markMass = 90.7185;
//  johnMass = 86.1826;

//  var markBMI = markMass / (markHeight * markHeight);
//  var johnBMI = johnMass / (johnHeight * johnHeight);
// console.log(markBMI, johnBMI);

//  var greaterBMI = markBMI > johnBMI;
// console.log(`Is Mark's BMI higher than John's? ${greaterBMI}`);

/***********************
 * If / else statements
 */


//  var firstName = 'John';
//  var civilStatus = 'single';

//  if (civilStatus === 'married'){
//    console.log(`${firstName} is married!`);   
//  } else {
//    console.log(`${firstName} is single!`);
//  }

// var isMarried = true;
// if (isMarried){
//   console.log(`${firstName} is married!`);   
// } else {
//   console.log(`${firstName} is single!`);
// }


// var markHeight, johnHeight, markMass, johnMass;
// markHeight = 1.8;
// johnHeight = 2;
// markMass = 90;
// johnMass = 86;

// var markBMI = markMass / (markHeight * markHeight);
// var johnBMI = johnMass / (johnHeight * johnHeight);

// if (markBMI > johnBMI){
//   console.log(`Mark's BMI is higher than John's`);
// } else {
//   console.log(`John's BMI is higher than Mark's`);
// }

/************************
 * Boolean Logic
 */

//  var firstName = 'John';
//  var age = prompt(`what is your age ${firstName}!`);

//  if (age < 13){
//    console.log(`${firstName} is a boy.`);
//   } else if (age >= 13 && age < 20) { // Between 13 and 20
//     console.log(`${firstName} is a teenager.`); 
//   } else if (age >= 20 && age < 30) { // Between 13 and 20
//     console.log(`${firstName} is a young man.`); 
//   }
//   else {
//    console.log(`${firstName} is a man.`); 
//   }

/*************************
 * The Ternary operator and switch statments
 */

 var firstName = 'John';
 var age = 22;

 // Ternary operator
 age >= 18 ? console.log(`${firstName} drinks Beer.`) : console.log(`${firstName} drinks Juice.`);
 
 var drink = age >= 18 ? 'Beer' : 'Juice';
 console.log(drink);

 /*
 if (age >= 18){
    var drink = 'Beer';
 } else {
    var drink = 'Juice';
 }
 */

//  Switch statment
var job = 'instructor';
switch (job) {
  case 'teacher':
  case 'instructor':
      console.log(`${firstName} teaches kids how to code.`);
      break;
  case 'driver':
      console.log(`${firstName} drives an Uber in Lisbon.`);
      break;
  case 'designer':
      console.log(`${firstName} designs beautiful websites.`);   
      break;
  default:
        console.log(`${firstName} does something else.`);
        
}

switch (true) {
  case age < 13:
      console.log(`${firstName} is a boy.`);
      break;
  case age >= 13 && age < 20:
      console.log(`${firstName} is a teenager.`); 
      break;
  case age >= 20 && age < 30:
      console.log(`${firstName} is a young man.`);
      break;
  default:
      console.log(`${firstName} is a man.`); 
}

