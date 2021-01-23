// Find the middle number in an array. If the number of items is even, find the first item to the left of the middle point in the array.

// level: easy

function absoluteValueSumMinimization(arr) {
    const isEvenLength = arr.length % 2 === 0;

    return isEvenLength ? arr[arr.length / 2 - 1] : arr[Math.floor(arr.length / 2)];
}

console.log(absoluteValueSumMinimization([2, 4, 7])); // 4
console.log(absoluteValueSumMinimization([2, 4, 7, 6])); // 4
console.log(absoluteValueSumMinimization([2, 4, 7, 6, 6])); // 7
console.log(absoluteValueSumMinimization([2, 4, 7, 6, 6, 8])); // 7