// Given a string array, return all the longest strings from the array.

// level: easy

function allLongestStrings(arr) {
    let maxLength = 0;
    const maxLengthValues = [];

    // looking for the longest length
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxLength) {
            maxLength = arr[i].length;
        }
    }

    // creating a new array
    for (e of arr) {
        if (e.length === maxLength) {
            maxLengthValues.push(e);
        }
    }

    return maxLengthValues;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])); // ["aba", "vcd", "aba"]