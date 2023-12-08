function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

function khayamPascal(rows) {
    for (let i = 0; i < rows; i++) {
        let row = '';

        // Add spaces to align the triangle to the right
        for (let j = 0; j < rows - i - 1; j++) {
            row += '  ';
        }

        // Generate the numbers for the current row
        for (let j = 0; j <= i; j++) {
            row += factorial(i) / (factorial(j) * factorial(i - j)) + '   ';
        }

        console.log(row);
    }
}


khayamPascal(10);