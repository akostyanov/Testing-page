function positiveSum(arr) {
    return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

b = [1, 2, 3];
console.log(positiveSum(b));