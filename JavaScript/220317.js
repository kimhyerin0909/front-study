function isLeapYear(y) {
    return (y % 4 === 0) && (y % 100 !== 0) || (y % 400 === 0);
}

console.log(`2020년은 윤년일까? ${isLeapYear(2020)}`);

function AddAtoB(a, b) {
    let sum = 0;
    for(let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}

console.log(`4부터 18까지 더하면 ${AddAtoB(4, 18)}`);

function min(arr) {
    let output = arr[0]
    for(const item of arr) {
        if(output > item) {
            output = item;
        }
    }
    return output;
}

const testArr = [32, 12, 43, 65, 98];
console.log(`배열 중 최솟값은 ${min(testArr)}`);