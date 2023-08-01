import express from 'express';

const app = express();

app.get('/', (req, res) => {

    console.log('Back-end is working!');
    res.send('Back-end is working!');

});

app.listen(3000, () => {

    console.log('Server listening on port 3000');

});