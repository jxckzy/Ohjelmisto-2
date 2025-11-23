let i = 0;
let numlist = [];

while (i < 5) {
    const number = prompt(`Enter a number`);
    numlist.push(number);
    i++;
}

if (i === 5) {
    for (let j = numlist.length - 1; j >= 0; j--) {
        console.log(`Number ${numlist[j]}`);
    }
}