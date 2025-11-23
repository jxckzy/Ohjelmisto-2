let num;
let nums = [];

do {
    num = Number(prompt("Type in number"));
    if (num !== 0) {
        nums.push(num);
    }
} while (num !== 0);

nums.sort((a,b) => b-a);

for (let n of nums) {
    console.log(`${n}`);
}