import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";

const app = express();

const PORT = 5000;

app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {

    //show the time
    console.log('Back-end is working! ' + new Date().toLocaleTimeString());
    res.json('Back-end is working!');
});

app.get('/kittens', async (req, res) => {

    res.json(await getAllKittens());

});

app.post('/kittens', async (req, res) => {

    res.json(await seedKittens());

});

const connection = await connectToMongoDB();
console.log('connected to mongoDB');
const Cat = mongoose.model('Cat', { name: String });

async function connectToMongoDB() {
    try {
        return (await mongoose.connect(`mongodb://db:27017`)).connection;
    } catch (error) {
        console.log(error);
    }
}
async function seedKittens() {
    const kitty = new Cat({ name: Math.random() * 10 + ' Zildjian' });
    const kitty2 = new Cat({ name: Math.random() * 10 + ' Kitty2' });
    kitty.save().then(() => console.log('meow'));
    kitty2.save().then(async () => {
        console.log('meow2');
    });
    return { kitty, kitty2 };

}
async function getAllKittens() {
    const kittens = await Cat.find();
    console.log(kittens);
    return kittens;
}

app.listen(PORT, () => {

    console.log('New Server listening on port ' + PORT);

});