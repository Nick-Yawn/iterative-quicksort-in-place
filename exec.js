const Quicksort = require('./quicksort');
const genUnsortedArray = require('./gen-unsorted-array');

const ARRAY_LENGTH = 25;

const isSorted = array => {
  for( let i = 0; i < ARRAY_LENGTH - 1; i++ ){
    if( array[i] + 1 !== array[i + 1] ) return false;
  }
  return true;
}

// a better shuffle
const array = genUnsortedArray(ARRAY_LENGTH);


const str = `SORTED ${ARRAY_LENGTH} values:`;

console.time(str);
Quicksort(array);
console.timeEnd(str);

console.log(`isSorted: ${isSorted(array)}`);

/*
const array2 = genUnsortedArray(ARRAY_LENGTH);

const str2 = `BUILT_IN SORT:`;

console.time(str2);
array2.sort( (a,b) => a - b );
console.timeEnd(str2);




guess what, for 10,000,000 values? mine is faster :)
*/
