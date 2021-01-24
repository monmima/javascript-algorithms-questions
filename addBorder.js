// Build a wall of asterisks around an array.

// level: easy

function addBorder(arr) {
    const lengthTopBottom = arr[0].length + 2;
    const wallTopBottom = "*".repeat(lengthTopBottom);
    const sideWallsArr = [];

    for (item of arr) {
        sideWallsArr.push(`*${item}*`);
    }

    return [wallTopBottom, ...sideWallsArr, wallTopBottom];
}

console.log(addBorder(["abc", "def"])); // ["*****", "*abc*", "*def*", "*****"]