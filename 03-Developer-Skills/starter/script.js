// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// 32. Activating Strict Mode
// `use strrict`;
// Strict mode helps catch common errors that could lead to bugs in your code.

// 33. Function
// function logger() {
// console.log("My name is Jonas");
// }
// calling , running , invoking function
// logger(); //My name is Jonas
// logger(); //My name is Jonas
// logger(); //My name is Jonas

// function fruitProcessor(apple, oranges) {
//     const juice = `Juice with ${apple} apples and ${oranges} oranges`;
//     return juice;
// }
// console.log(fruitProcessor(5, 0)); //Juice with 5 apples and 0 oranges
// console.log(fruitProcessor(2, 6)); //Juice with 2 apples and 6 oranges

// 34. Function Declarations vs. Expressions
// you can choose what ever you like between declaration and expression
//Function declaration
// function calcAge1(birthYear) {
//     return 2024 - birthYear;
// }
// console.log(calcAge1(1991));

//Function expression
// const calcAge2 = function (birthYear) {
//     return 2024 - birthYear;
// };
// console.log(calcAge2(2000));

// 35. Arrow Functions  ES6
// Arrow function is good to use when function has one parameter and one line of code which we wanna return something (otherwise no)
// const calcAge3 = (birthYear) => 2024 - birthYear;
// console.log(calcAge3(1999));

// const yearsUntillRetirment = (birthYear) => {
//     const age = 2024 - birthYear;
//     const retirment = 65 - age;
//     return retirment;
// };
// console.log(yearsUntillRetirment(2000));

// if we wanna add more parameters then we have to wrap() parametrs
// arrow function do not get (This) key word
// const yearsUntillRetirment2 = (birthYear, firstName) => {
//     const age = 2024 - birthYear;
//     const retirment = 65 - age;
//     return `${firstName} retires in ${retirment} years`;
// };
// console.log(yearsUntillRetirment2(2000, "Jonas"));
// console.log(yearsUntillRetirment2(1995, "James"));

//36. Functions Calling Other Functions
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange `;
// }
// console.log(fruitProcessor(2, 4));
// console.log(fruitProcessor(5, 10));

// 37. Reviewing Functions
// reviewed

// 38. CHALLENGE #1: Video Solution

// Tesk 1
// const calcAverage = (score1,score2,score3) => (score1 + score2 +score3) / 3;

// let scoreDolphins = calcAverage(44,23,71);
//  let scoreKoalas = calcAverage(65,54,49);

//  const checkWinner = function(avgDolphins,avgKoalas){
//      if(avgDolphins >= 2 * avgKoalas){
//          console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
//      }else if(avgKoalas >= 2 * avgDolphins){
//          console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
//      }else{
//          console.log("No team wins...")
//      }
//  }
//  console.log(checkWinner(scoreDolphins,scoreKoalas));
//  console.log(checkWinner(345,111));

// // Tesk 2

// scoreDolphins = calcAverage(85,54,41);
// scoreKoalas = calcAverage(23,34,27);
// checkWinner(scoreDolphins,scoreKoalas);

// 39. Introduction to Arrays
// const friend1 = `Michael`;
// const friend2 = `Steve`;
// const friend3 = `Piter`;
// //there are
// const friends = [`Michael`, `Steve`, `Piter`];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years[years.length - 1]);
// console.log(years.length);
// console.log(years[0]);
// console.log(years[1]);

// friends[0] = "Jamshid";
// console.log(friends);

// //Exercise with function
// function calcAge1(birthYear) {
//     return 2024 - birthYear;
// }

// console.log(calcAge1(years[0]));
// console.log(calcAge1(years[1]));
// console.log(calcAge1(years[years.length - 1]));

// 40. Basic Array Operations (Methods)

// const friends = [`Michael`, `Steve`, `Piter`];
// friends.push("Adam");
// console.log(friends);
// friends.unshift("James");
// console.log(friends);
// friends.pop();
// console.log(friends);
// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Piter")); // 2
// console.log(friends.indexOf("Bob")); // -1

// console.log(friends.includes("Piter")); //true
// console.log(friends.includes("Bob")); //false

// if (friends.includes("Piter")) {
//     console.log("You have a friend called Piter");
// }

// 41. CHALLENGE #2: Video Solution

// const calcTip = function (bill) {
//     if (bill >= 50 && bill <= 300) {
//         return bill * 0.15;
//     } else {
//         return bill * 0.2;
//     }
// };

// let bills = [125, 555, 44];
// let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

// 42. Introduction to Objects
// const jonasArray = [
//     "Jonas",
//     "Schmedtmann",
//     2024 - 1991,
//     "teacher",
//     ["Michael", "Piter", "Steven"]
// ];
// const jonasObject = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     age: 2024 - 1991,
//     job: "teacher",
//     friends: ["Michael", "Piter", "Steven"]
// };

// console.log(jonasObject.lastName);
// console.log(jonasObject["lastName"]);

// 43. Dot vs. Bracket Notation
// const jonasObject = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     age: 2024 - 1991,
//     job: "teacher",
//     friends: ["Michael", "Piter", "Steven"]
// };

// jonasObject.location = "New york city";
// jonasObject["Instagram"] = "Jami_3303";
// console.log(jonasObject.friends.length);

// 44. Object Methods
// const jonasObject = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     birthYear: 1991,
//     job: "teacher",
//     friends: ["Michael", "Piter", "Steven"],
//     hasDriverLicense: true,

//     calcAge: function (birthYear) {
//         return 2024 - this.birthYear;
//     }
// };
// console.log(jonasObject.calcAge(jonasObject.birthYear));
// console.log(jonasObject["calcAge"](jonasObject.birthYear));

// this keyword
// console.log(jonasObject["calcAge"]());
// console.log(jonasObject["calcAge"]());

// 45. CHALLENGE #3: Video Solution

// 46. Iteration: The for Loop
// for loop keeps running while condition is TRUE
// for (let i = 1; i <= 10; i++) {
//     console.log(`Lifting weights repitition ${i}`);
// }

// 47. Looping Arrays, Breaking and Continuing
// const jonasArray = [
//     "Jonas",
//     "Schmedtmann",
//     2024 - 1991,
//     "teacher",
//     ["Michael", "Piter", "Steven"],
//     true
// ];
// const types = [];
// for (let i = 0; i < jonasArray.length; i++) {
//     types.push(typeof jonasArray[i]);
// console.log(jonasArray[i], typeof jonasArray[i]);
// console.log(types);
// }

// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//     ages.push(2024 - years[i]);
// }
// console.log(ages);

//continue and break
// console.log(jonasArray);
// for (let i = 0; i < jonasArray.length; i++) {
//     if (typeof jonasArray[i] !== "string") continue;
//     console.log(jonasArray[i]);
// }

// 48. Looping Backwards and Loops in Loops
// const jonasArray = [
//     "Jonas",
//     "Schmedtmann",
//     2024 - 1991,
//     "teacher",
//     ["Michael", "Piter", "Steven"],
//     true
// ];
// for (let i = jonasArray.length - 1; i >= 0; i--) {
//     console.log(i, jonasArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`___________Starting exercise ${exercise}`);
//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`Lifting weight repitition ${rep}`);
//     }
// }

// 49. The while Loop
// for (let i = 1; i <= 10; i++) {
//     console.log(`Lifting weight repitition ${i}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weight repitition ${rep}`);
//     rep++;
// }

// 50. CHALLENGE #4: Video Solution

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// const calcTip = function (bill) {
//     if (bill >= 50 && bill <= 300) {
//         return bill * 0.15;
//     } else {
//         return bill * 0.2;
//     }
// };
// for (let i = 0; i <= bills.length - 1; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }
// console.log(totals);

// function calcAverage(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         // sum = sum + arr[i];
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
// console.log(calcAverage([2, 4, 6]));

// 59. Using Google, StackOverflow and MDN
// PROBLEM
// We for a company building a smart home thermometr. Our most recent task is this : "Given a array temperatures of one day, colculate the temperature amplitude. Keep in mind that sometimes there might be sensor error."

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is the temp  amplitude? Answer: difference between highest and lowest temp.
// - How to compute min and max temperatures?
// - What is sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore sensor errors?
// - Find max value in temp array
// - Find min value in temp array

// const calcTempAmplitude = function (temp) {
//     let max = temp[0];
//     let min = temp[0];
//     for (let i = 0; i < temp.length; i++) {
//         if (typeof temp[i] !== "number") continue;
//         if (temp[i] > max) max = temp[i];
//         if (temp[i] < min) min = temp[i];
//     }
//     // console.log(max, min);
//     return max - min;
// };
// console.log(calcTempAmplitude(temperatures));

// 60. Debugging (Fixing Errors)

// 61. Debugging with the Console and Breakpoints
// const measureKelvin = function () {
//     const measurement = {
//         type: "type",
//         unit: "celsius",
//         value: prompt("Degrees celsius:")
//     };
//     const kelvin = measureKelvin.value + 273;
//     return kelvin;
// };
// console.log(measureKelvin());
// console.warn(measureKelvin());
// console.error(measureKelvin());

// 62. Coding Challenge #1
