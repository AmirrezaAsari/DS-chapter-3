function isTranspose(matrix1, matrix2) {
    if (matrix1.length !== matrix2[0].length || matrix1[0].length !== matrix2.length) {
        return false;
    }

    for (let i = 0; i < matrix1.length; i++) {
        for (let j = 0; j < matrix1[0].length; j++) {
            if (matrix1[i][j] !== matrix2[j][i]) {
                return false;
            }
        }
    }

    return true;
}

// Example matrices
const matrixA = [
    [1, 2, 3],
    [4, 5, 6]
];

const matrixB = [
    [1, 4],
    [2, 5],
    [3, 6]
];

console.log(isTranspose(matrixA, matrixB)); 
