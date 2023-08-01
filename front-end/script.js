const resultBox = document.querySelector('#result');
let textToOutput = '';

setInterval(async () => {


    try {
        // const response = await fetch('http://172.21.0.2:5000/');
        const response = await fetch('http://localhost:4000/');
        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }
        const data = await response.json();
        textToOutput = data;

    } catch (err) {
        textToOutput = err;
    }

    resultBox.textContent = textToOutput + '\n' + new Date().toLocaleTimeString();


}, 1000);

