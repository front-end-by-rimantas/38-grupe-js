const marks = [10, 2, -7, 5, -1, -3.14];
let min = 0;
let max = 0;

for (const mark of marks) {
    if (mark > max) {
        max = mark;
    }
    if (mark < min) {
        min = mark;
    }
}

console.log(min, max);