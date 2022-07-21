//Task 1 
let x = 20;
let y = 58;
let z = 42;

console.log(x + y + z);

//Task 2
const secPerMin = 60;
const minPerHour = 60;
const hourPerDay = 24;
const daysPerYear = 356;

const myAge = 33;

// +поправка на високосные годы
const myAgeInSeconds =
  myAge * daysPerYear * hourPerDay * minPerHour * secPerMin;

console.log(myAgeInSeconds);

//Task 3

let count = 42;
let name = '42';

let countStringFirst = ('' + count)
let nameNumber = (+ '42')

console.log(countString)
console.log(nameNumber)

console.log(count.toString())
console.log(String(count))
console.log(Number(name))
console.log(parseInt(name))

//Task 4
const a = 1;
const b = 2;
const c = ' белых медведей';

console.log('' + a + b + c);

//Task 5 

let access = 'доступ';
let marine = 'морпех';
let frost = 'наледь';
let reproach = 'попрек';
let chop = 'рубилож';

let lengthWords = access.length + marine.length + frost.length + reproach.length + chop.length;
console.log(lengthWords);

//Task 6
const variableA = 'some string';
const variableAName = Object.keys({ variableA })[0];
const variableAType = typeof variableA;

const variableB = 1;
const variableBName = Object.keys({ variableB })[0];
const variableBType = typeof variableB;

const variableC = true;
const variableCName = Object.keys({ variableC })[0];
const variableCType = typeof variableC;

console.log('Variable: ${variableAName} have type: ${variableAType}');
console.log('Variable: ${variableBName} have type: ${variableBType}');
console.log('Variable: ${variableCName} have type: ${variableCType}');
//Task 7

let userName = prompt("Your name");
let userAge = prompt("Your age");
console.log(userName);
console.log(userAge);

//Advanced
//Task 1
let f = 4;
let n = 3;
[f,n]=[n,f];
console.log(f);
console.log(n);

//Task 2
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);