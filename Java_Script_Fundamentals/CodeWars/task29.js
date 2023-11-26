// function solve(arr) {
//     let bigger = new Map();
//     let sortMap = new Map();
//     let max = arr.length;
//     for (let i = 0; i < max; i++) {
//         let elm = arr[i];
//         if (bigger.has(elm)) bigger.set(elm, bigger.get(elm) + 1);
//         else bigger.set(elm,1);
//     }
//     let sortArray = Array.from(bigger).sort((a, b) => a[0] - b[0]);
//     sortArray.forEach(([key, value]) => sortMap.set(key, value));
//     for (let i = 0; i < max; i++) {
//         let smaller = 0;
//         let elm = arr[i];
//         sortMap.set(elm, sortMap.get(elm) - 1);
//         for (const [key,val] of sortMap) {
//             if (key < elm) smaller += val;
//             else break;
//         }
//         arr[i] = smaller;
//     }
//     return arr;
// }

function solve(arr) {
    if (arr.length <= 1) {
      return Array(arr.length).fill(0);
    }
  
    // Function to merge and count smaller elements to the right
    function mergeAndCountSmaller(left, right) {
      const merged = [];
      const countSmaller = new Array(left.length).fill(0);
  
      let i = 0, j = 0;
  
      while (i < left.length || j < right.length) {
        if (j === right.length || (i < left.length && left[i] <= right[j])) {
          // Case: Element from the left array is smaller or equal
          merged.push(left[i]);
          countSmaller[i] += j; // Increment count for smaller elements to the right
          i++;
        } else {
          // Case: Element from the right array is smaller
          merged.push(right[j]);
          j++;
        }
      }
  
      return { merged, countSmaller };
    }
  
    // Recursive function to perform merge sort and count smaller elements
    function mergeSortAndCount(arr) {
      if (arr.length <= 1) {
        return { sorted: arr, countSmaller: Array(arr.length).fill(0) };
      }
  
      const mid = Math.floor(arr.length / 2);
      const leftPart = arr.slice(0, mid);
      const rightPart = arr.slice(mid);
  
      const { sorted: leftSorted, countSmaller: leftCount } = mergeSortAndCount(leftPart);
      const { sorted: rightSorted, countSmaller: rightCount } = mergeSortAndCount(rightPart);
  
      const { merged, countSmaller } = mergeAndCountSmaller(leftSorted, rightSorted);
  
      return { sorted: merged, countSmaller: countSmaller.concat(leftCount).concat(rightCount) };
    }
  
    const { countSmaller } = mergeSortAndCount(arr);
  
    return countSmaller;
  }

console.log(solve([5, 4, 3, 2, 1, -5, 3]));                //[
console.log(solve([5, 4, 3, 2, 1]));                //[4, 3, 2, 1, 0]
console.log(solve([1, 2, 3]));                      //[0, 0, 0]
console.log(solve([1, 2, 0]));                      //[1, 1, 0]
console.log(solve([1, 2, 1]));                      //[0, 1, 0]
console.log(solve([1, 1, -1, 0, 0]));               //[3, 3, 0, 0, 0]
console.log(solve([5, 4, 7, 9, 2, 4, 4, 5, 6]));    //[4, 1, 5, 5, 0, 0, 0, 0, 0]
console.log(solve([5, 4, 7, 9, 2, 4, 1, 4, 5, 6])); //[5, 2, 6, 6, 1, 1, 0, 0, 0, 0]

