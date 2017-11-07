var age = prompt("What is your age?");

if (age < 0 ) {
    console.log("ERROR ERROR");
}

if (age === 21) {
    console.log("Happy 21st birthdday!!");
}

if (age % 2 !== 0) {
    console.log("Your age is odd");
}

if (age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square!!!");
}