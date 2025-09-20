/* Start with the second element (index 1) since a single element (index 0) is trivially sorted.
 Compare the current element with the elements before it.
 Shift all elements greater than the current element one position ahead.
 Insert the current element into its correct position.
 Repeat until the array is sorted.

Input: [5, 3, 4, 1, 2]
i = 1 → key = 3 → compare with 5 → shift → [3, 5, 4, 1, 2]
i = 2 → key = 4 → compare with 5 → shift → [3, 4, 5, 1, 2]
i = 3 → key = 1 → shift 5,4,3 → [1, 3, 4, 5, 2]
i = 4 → key = 2 → shift 5,4,3 → [1, 2, 3, 4, 5]
Output: [1, 2, 3, 4, 5] ✅ */

const SelectionSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    if (minIndex != i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp; 
    }
  }
  return arr;
};
console.log(SelectionSort([64, 34, 25, 12, 22, 11, 90]));
