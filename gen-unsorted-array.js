
const genUnsortedArray = length => {
  str1 = `generating unsorted array of length ${length}`;
  console.time(str1);
  let result = new Array(length);
  let map = new Map();
  let nums = new Array(length);
  let index;
  let value;

  for( let i = 0; i < length; i++ ){
    nums[i] = i;
  }

  for( let i = 0; i < length; i++ ){
    index = Math.floor( Math.random() * nums.length );
    value = nums[index];
    if( index === nums.length - 1 ) nums.pop();
    else nums[index] = nums.pop();
    result[i] = value;
  }

  console.timeEnd(str1);
  return result;
}

/*
for( let i = 0; i < 100; i++ ){
  genUnsortedArray(100 * 2 **i);
}

no idea how to benchmark this, but it's fast.

*/
module.exports = genUnsortedArray;
