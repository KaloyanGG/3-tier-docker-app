import express from 'express';
import cors from 'cors';
// import dotenv from 'dotenv';
// dotenv.config();

const app = express();

const PORT = 5000;

//activate cors for everyone
app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {

    // console.log('port: ' + PORT);
    console.log('Back-end is working!');

    res.json('Back-end is working!!!');

});

app.listen(PORT, () => {

    console.log('Server listening on port ' + PORT);

});