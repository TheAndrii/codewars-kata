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
