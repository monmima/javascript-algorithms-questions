// How many people are you going to disturb while going to the bathroom, assuming all seats are occupied? Note that you exit throught the right of your row.

// level: medium

function seatsInTheater(nCols, nRows, col, row) {
    const colDiff = nCols - col + 1;
    const rowDiff = nRows - row;

    return colDiff * rowDiff;
}

console.log(seatsInTheater(16, 11, 5, 3)); // 96