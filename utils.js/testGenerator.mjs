export function getRandom(min, max) {
    let rand = 0;
    var plusOrMinus = 1;
    var limit = max;
    if (min > 0) {
        rand += 1
        limit -= 1;
    }
    else if (min < 0) {
        plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        limit = min;
    }
    rand += Math.floor(Math.random() * limit) * plusOrMinus;
    return rand;
}

export function getRandomArray(min, max, columns, rows = 1) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const array = new Array(columns);
        for (let j = 0; j < columns; j++) {
            array[j] = getRandom(min, max);
        }
        matrix.push(array);
    }
    if (rows > 1) return matrix;
    return matrix[0];
}

