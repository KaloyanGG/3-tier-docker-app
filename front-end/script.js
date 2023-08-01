const resultBox = document.querySelector('#result');
let textToOutput = '';

setInterval(async () => {

    // const textToOutput = new Date().toLocaleTimeString();

    try {
        await fetch('localhost:3000/back-end');
    } catch (err) {
        textToOutput = err;
    }

    resultBox.textContent = textToOutput;


}, 1000);

