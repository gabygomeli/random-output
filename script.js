const sujeto = ["El perro", "El gato", "Un pájaro", "Una persona", "Un robot"];
const verbo = ["corre", "salta", "come", "duerme", "baila"];
const complemento = ["en el parque", "bajo el sol", "con alegría", "durante la noche", "en la ciudad"];

const getRandomElement = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

const fraseAleatoria = `${getRandomElement(sujeto)} ${getRandomElement(verbo)} ${getRandomElement(complemento)}`;

console.log(fraseAleatoria);

/*
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

*/