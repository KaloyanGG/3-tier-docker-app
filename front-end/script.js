const resultBox = document.querySelector('#result');
let textToOutput = '';



setInterval(async () => {

    try {
        //! Does not work:
        // const response = await fetch('http://back-end:5000/');
        // const response = await fetch('http://172.22.0.3:5000/');

        //! Works:
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


}, 5000);

