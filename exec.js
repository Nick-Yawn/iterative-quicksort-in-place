const quicksort = require('./quicksort');
const shuffle = require('./shuffle');

const ARRAY_LENGTH = 11;

const isSorted = array => {
  for( let i = 0; i < ARRAY_LENGTH - 1; i++ ){
    if( array[i] + 1 !== array[i + 1] && array[i] !== arr[i+1] ) return false;
  }
  return true;
}

// array setup
const arr = new Array(ARRAY_LENGTH);

for( let i = 0; i < arr.length; i++ ){
  arr[i] = i;
}
// a better shuffle
shuffle(arr);

arr.push(3, 3);


console.log(arr)
const str = `SORTED ${ARRAY_LENGTH} values:`;
console.time(str);
quicksort(arr, true); // second argument is verbose
console.timeEnd(str);
console.log(`isSorted: ${isSorted(arr)}`);
console.log(arr)


const arr2 = new Array(ARRAY_LENGTH);
for( let i = arr2.length - 1; i >= 0; i-- ){
  arr2[arr2.length - 1 - i] = i
}
arr2.push(3, 3);

console.log(arr2);
const str2 = `SORTED ${ARRAY_LENGTH} reverse-ordered values:`;
console.time(str2);
quicksort(arr2, true); // second argument is verbose
console.timeEnd(str2);
console.log(`isSorted: ${isSorted(arr2)}`);

/*
const array2 = genUnsortedArray(ARRAY_LENGTH);

const str2 = `BUILT_IN SORT:`;

console.time(str2);
array2.sort( (a,b) => a - b );
console.timeEnd(str2);




guess what, for 10,000,000 values? mine is faster :)
*/

