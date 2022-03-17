function isLeapYear(y) {
    return (y % 4 === 0) && (y % 100 !== 0) || (y % 400 === 0);
}

console.log(`2020년은 윤년일까? ${isLeapYear(2020)}`);