function getRandomText() { 
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        console.log("This is your first message");
    } else if (randomNum === 1) {
        console.log("This is your second message");
    } else if (randomNum === 2) {
        console.log("This is your third message");
    } else {
        console.log("There was an error");
    }
};

const randomText = getRandomText();

console.log(randomText);