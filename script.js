//32. ACTIVATING STRICT MODE

// strict mode forbids us from making mistakes nd creates visible errors

"use strict";

let hasDriversLicence = false;
const passtest = true;

if (passtest) hasDriverLicence = true;
if (hasDriversLicence) console.log("I can drive :D");

//33. FUNCTIONS

// A function is simply a piece of code we can reuse again and again in our code.

function logger() {
  console.log("My Name is Sohom");
}
//  calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

fruitProcessor(5, 2);
/ / / //the actual value of the parameters are called arguments.
  //create a variable to store value of the function juice.

  // after storing the value in the variable the the value in the juice will be produced.

  // instead of locking the value in the variable we can directly use this;
  console.log(fruitProcessor(5, 2));
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

console.log(fruitProcessor(5, 2));

console.log(fruitProcessor(5, 3));

const num = Number("23");

//34. FUNCTION DECLARATION VS EXPRESSIONS.
//FUNCTION DECLARATION

function calcAge1(birthYear) {
  return 2020 - birthYear;
}

const age1 = calcAge1(1991);

//FUNCTION EXPRESSION
//After the function expression is stored in a variable, the variable can be used as a function.

const calcAge2 = function (birthYear) {
  return 2020 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);

//35.ARROW FUNCTION

const calcAge3 = (birthYear) => 2020 - birthYear; //storing the value of birthyear in calcAge3
const age3 = calcAge3(2002); //storing the value of calcage3 in age3
console.log(age3); //proving the value of age3

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2020 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1997, "Sayan"));

//36.FUNCTIONS CALLING OTHER FUNCTIONS.

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(4, 5));

//37. REVIEWING FUCTIONS

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Sohom"));

//coding challenge

const calcAveraage = (a, b, c) => (a + b + c) / 3;
console.log(calcAveraage(3, 4, 5));

let scoreDolphins = calcAveraage(44, 23, 71);
let scoreKoalas = calcAveraage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

//39. INTRODUCTION TO ARRAY
//Array is like a big container in which u can throw some variables and later reference them.

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

//arrays are zer0-based just like index, first element is 0.

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

//Length - The length property returns the length of a string (number of characters).

// The length of an empty string is 0.

console.log(friends.length);
console.log(friends[friends.length - 1]);
//inside the square bracket js requires an expression, not a statement.

//changing the value in an array/mutating the array, u cannot replace the whole array.
friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Sohom", 2037 - 1991, "teacher", friends];
console.log(jonas);

//EXERCISE

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const y = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

//40.BASIC ARRAY OPERATION(METHODS)

//Add elements

const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//Remove elements
friends.pop(); //last
const popped = friends.pop(); //storing the removed element in a variable
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend named Steven");
}

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

//42. INTRODUCTION TO OBJECTS.

// In objects, we actually define key value pairs, so we can give each of these values here, a name.

const sohomArray = [
  "sohom",
  "pal",
  2021 - 2002,
  "coder",
  ["akshath, srinath, gautham"],
];

const sohom = {
  firstName: "sohom",
  lastName: "pal",
  age: 2021 - 2002,
  job: "coder",
  friends: ["akshath, srinath, gautham"],
};

//43. DOT VS BRACKET NOTATION

const sohom = {
  firstName: "sohom",
  lastName: "pal",
  age: 2021 - 2002,
  job: "coder",
  friends: ["akshath, srinath, gautham"],
};

console.log(sohom);

console.log(sohom.lastName);
console.log(sohom["lastName"]);

const nameKey = "Name";
console.log(sohom["first" + nameKey]);
console.log(sohom["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about sohom? Choose between firstName, lastName, age, job and friends"
);

if (sohom[interestedIn]) {
  console.log(sohom[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends"
  );
}

sohom.location = "India";
sohom["twitter"] = "@sohoooom";
console.log(sohom);

console.log(
  `${sohom.firstName} has ${sohom.friends.length} friends, and his best friend is called ${sohom.friends[0]}`
);

//44. OBJECT METHODS

const sohom = {
  firstName: "Sohom",
  lastName: "Pal",
  birthYear: 2002,
  job: "coder",
  friends: ["Papai", "sonai", "tukai"],
  hasDriversLicence: true,

  // calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return 2037 - this.birthYear;
  },
};

console.log(sohom.calcAge());

console.log(sohom.age);
console.log(sohom.age);
console.log(sohom.age);

//coding challenge

//46. ITERATION- THE FOR LOOP

for (let rep = 1; rep <= 10; rep++) {
  console.log(`${rep} Babies are the cutest😘, pandas are the cutest🥰 `);
}

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  types[i] = typeof jonas[i];
}

console.log(types);

const years = [2000, 2002, 2004, 2006];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2021 - years[i]);
}
console.log(ages);

console.log("---ONLY STRINGS---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log("---BREAK WITH NUMBERS---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 😀`);
  }
}

let rep = 1;
while (rep <= 10) {
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
