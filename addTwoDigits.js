// Turn a two-digit number into the sum of its digits.

// level: medium

function addTwoDigits(num) {
    const stringNum = num.toString();

    return parseInt(stringNum[0]) + parseInt(stringNum[1]);
}

console.log(addTwoDigits(29)); // 11