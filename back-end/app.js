import express from 'express';
import cors from 'cors';
const app = express();

const PORT = 5000;

app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {

    console.log('Back-end is working!');

    res.json('Back-end is working!!!');

});

app.listen(PORT, () => {

    console.log('Server listening on port ' + PORT);

});