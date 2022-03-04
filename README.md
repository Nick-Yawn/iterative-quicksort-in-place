If you only look at one thing, make it `output25.txt`

# Iterative Quicksort, In-Place, JS

To setup: `git clone`

To run one sort: `node exec.js`. This will run 'verbosely': it will show before and after each pivot.

To change size of one sort, edit `ARRAY_SIZE` in `exec.js`

To run a benchmark, `node benchmark.js`. It is set to loop through powers of 10 — try other loops! It does not run verbosely. Press `<Ctrl-c>` to stop the process.

To pipe output into file: `node exec.js > FILENAME` — WARNING: will override file if already exists.


A relatively competitive out-of-place "unsort" is implemented in `gen-unsorted-array.js` — you can take a look, but no need to change anything there.
UPDATE: implemented Fisher-Yates shuffle, which runs an in-place perfect shuffle in O(n). Left in gen-unsorted-array for posterity.



This quicksort managed to sort an array with 100,000,000 values in about 15 seconds, on my machine. Not bad! 


## Comments

A cursory glance through a decent algorithms textbook (*Algorithms* by Sedgewick, in my case) reveals that this algorithm could be improved in a number of ways.

My left-to-right for-loop on each unsorted (sub)array uses the same number of comparisons (n-1 for subarray length n), but more swaps, than the outside-in method commonly employed.

Insertion sort is faster than quicksort on small arrays. Therefore, one can use insertion sort once subarrays are at some length between 5 and 15. [*Sedgewick*]

I currently push more values to the index stack than are required. This could be improved. That being said, Algorithms does not discuss the iterative, as opposed to recursive, versions of sorting algorithms, so this is my own observation.

