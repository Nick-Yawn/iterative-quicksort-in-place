const shuffle = require('./shuffle.js');
const quicksort = require('./quicksort.js');

for( let i = 1; i < 10; i++ ){
  let length = 10 ** i
  let array = new Array( length );

  for( let i = 0; i < array.length; i++ ){
    array[i] = i;
  }
  shuffle(array);

  let str = `sorting ${stringFormat(length)}`;
  console.time(str);
  quicksort(array);
  console.timeEnd(str);
  console.log('---');
} 


function stringFormat(int){
  let chars = int.toString().split('');
  let newChars = [];
  let counter = 0;
  for( let i = chars.length - 1; i >= 0; i-- ){
    if( counter !== 0 && counter % 3 === 0 ) newChars.unshift(',');
    newChars.unshift(chars[i]);
    counter++;
  }
  return newChars.join('');
}
