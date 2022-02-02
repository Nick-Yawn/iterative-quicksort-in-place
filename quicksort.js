const VERBOSE = true;

const Quicksort = arr => {

  const array_length = arr.length; // let's only hit this once
  let stack = new Array(); // unlike a queue, stack behavior — pop / push — is constant time.
                           // so, we'll just use it. don't have to fake it.                            
  stack.push(0, arr.length - 1); // this is a depth-first traversal setup

  let iterationStartIndex; // I define all variables outside the loop to minimize memory management
  let iterationEndIndex;   // no idea if it makes a difference, but why wouldn't it?
  let pivot;
  let pivotIndex;

  while( stack.length > 1 ){  // if we only have 1 index left, we're done!
    iterationEndIndex = stack.pop();    // we'll push front-first, pop back-first
    iterationStartIndex = stack.pop();
    //console.log(stack.join(','), iterationStartIndex,iterationEndIndex); 
 
    if( iterationEndIndex === iterationStartIndex ||
        ((iterationEndIndex - 1 === iterationStartIndex) && 
        (arr[iterationStartIndex] < arr[iterationEndIndex])) ){
      // in this case, our indices are adjacent and sorted, or the same
      // so we need to discard this EndIndex, and restack the start index.
      // eventually we will be out of indexes, and our sort will be complete
      stack.push(iterationStartIndex);
    } else {
      // sort between indexes
      pivot = arr[iterationStartIndex];
      pivotIndex = iterationStartIndex;
      if (VERBOSE) printPivot(pivot, pivotIndex, iterationStartIndex, iterationEndIndex, arr);
      for( let i = iterationStartIndex; i <= iterationEndIndex; i++ ){
        value = arr[i];
        if( value < pivot ){
          arr[i] = arr[pivotIndex + 1]; // I could save ops by not swapping the pivot
          arr[pivotIndex + 1] = pivot;  // until the end of the sort
          arr[pivotIndex] = value;      // however, this will visualize better.
          pivotIndex++;
        }
      }
      if (VERBOSE) printPivot(pivot, pivotIndex, iterationStartIndex, iterationEndIndex, arr);
      // time to re-stack! front-first.
      // we push up to five numbers. These represent the start and ends of the two unsorted halves
      // plus the pivotIndex between them, which is now in the correct spot.
      stack.push( iterationStartIndex );
      if( pivotIndex - 1 > iterationStartIndex ) stack.push( pivotIndex - 1 );
      stack.push( pivotIndex );
      if( pivotIndex + 1 < iterationEndIndex ) stack.push( pivotIndex + 1 );
      stack.push( iterationEndIndex );     
 
    }

  }

  return;
}

// abandon all hope, ye who enter here
// no really, it's not worth it
const printPivot = (pivot, pivotIndex, iterationStartIndex, iterationEndIndex, arr) => {
  let value, string, base;
  console.log( 
    `pivot: ${pivot}\t— ` +
    ( arr.slice(0,iterationStartIndex).length ?
      arr.slice(0,iterationStartIndex).map(n => { // this allows the values to line up.
        string = ' ';
        base = 10;
        while( n >= base ){
          string += ' ';
          base *= 10;
        }
        return string;  
      }).join(' ') + ' ' : '' )
       + ' ' +
    ( iterationStartIndex === pivotIndex ? '' : 
     arr.slice(iterationStartIndex, pivotIndex).join(' ') + ' ' ) + 
    pivot + '|' + arr.slice(pivotIndex + 1, iterationEndIndex + 1).join(' ') 
  );
  // I told you!
}

module.exports = Quicksort;
