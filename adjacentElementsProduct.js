// Find the largest product for adjacent elements in an array.

// level: easy

function adjacentElementProduct(arr) {
    let inMemory = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] * arr[i - 1] > inMemory) {
            inMemory = arr[i] * arr[i - 1];
            console.log(inMemory);
        }
    }

    return inMemory;
}

console.log(adjacentElementProduct([3, 6, -2, -5, 7, 3])); // 21