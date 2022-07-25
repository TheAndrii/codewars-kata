// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  return strArray = string.split(' ');
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function(list){
  return Math.min(...list);
}

var max = function(list){
  return Math.max(...list);
}

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  return toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
}

//https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
  const wolfPosition = queue.reverse().indexOf('wolf');
  console.log(wolfPosition);
  return wolfPosition === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ wolfPosition }! You are about to be eaten by a wolf!`
}

//https://www.codewars.com/kata/beginner-lost-without-a-map
function maps(x){
  return x.map(n => n * 2);
}

//https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
function firstNonConsecutive (arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] > 1) {
      return arr[i];
    }
  } 
  return null;
}

//https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
  return i*2;
}

//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
function century(year) {
  return Math.ceil(year / 100);
}

//https://www.codewars.com/kata/523b66342d0c301ae400003b/train/javascript
const multiply = (a, b) => a * b;

//https://www.codewars.com/kata/58261acb22be6e2ed800003a/train/javascript
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

//https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
const cockroachSpeed = s => Math.floor(s / 0.036);

//https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
const otherAngle = (a, b) => 180 - a - b;

//https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
const twiceAsOld = (dadYearsOld, sonYearsOld) => Math.abs(dadYearsOld - 2 * sonYearsOld);

//https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
const nthEven = n => (n - 1) * 2;

//https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
function getRealFloor(n) {
  if (n >= 1 && n <= 12) {
    return n - 1;
  } else if (n > 12) {
      return n - 2;
  }
  return n;
}

//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s){
  return h * 3600000 + m * 60000 + s * 1000;
}

//https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = args[0];
    for (let i = 1; i < args.length; i++) {
      if (args[i] < min) {
        min = args[i];
      }
    }
    return min;
  }
}
// another way
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
const circleCircumference = (circle) => Math.PI*2*circle.radius;

//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj){
  const five = [];
  for (const key in obj) {
    if (key.length === 5) five.push(key);
    if (obj[key].length === 5) five.push(obj[key]); 
  }
  return five;
}

//https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
function buildFun(n) {
  const res = [];
  for (let i = 0; i < n; i++) res.push(() => i);
  return res;
}

//https://www.codewars.com/kata/56f935002e6c0d55fa000d92/train/javascript
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, 'shark', status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
