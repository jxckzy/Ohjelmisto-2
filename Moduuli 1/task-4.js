const name = prompt("Welcome to Hogwarts! What is your name?");

const draw = Math.floor(Math.random() * 4) + 1;

let school;

switch (draw) {
    case 1:
        school = "Gryffindor";
        break;
    case 2:
        school = "Slytherin";
        break;
    case 3:
        school = "Hufflepuff";
        break;
    case 4:
        school = "Ravenclaw";
        break;
}

console.log(name + `, you are ` + school);