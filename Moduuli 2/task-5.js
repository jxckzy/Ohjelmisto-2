let nums = [];
let num;

while (true) {
    num = Number(prompt("Enter a number:"));

    if (nums.includes(num)) {
        alert(`The number ${num} has already been given!`);
        break;
    }

    nums.push(num);
}

nums.sort((a, b) => a - b);

console.log("Numbers in ascending order:");
for (let n of nums) {
    console.log(n);
}