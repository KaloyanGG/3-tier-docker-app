import mongoose from "mongoose";

let config = {
    "host": "localhost",
    "database": "funWithDocker"
}

const Cat = mongoosev.model('Cat', { name: String });

async function go() {
    const connection = await connectToMongoDB();
    const kitty = new Cat({ name: 'Zildjian' });
    const kitty2 = new Cat({ name: 'Kitty2' });
    kitty.save().then(() => console.log('meow'));
    kitty2.save().then(async () => {
        console.log('meow2');
        await connection.close();
    });


}

async function getAllKittens() {
    const connection = await connectToMongoDB();
    const kittens = await Cat.find();
    console.log(kittens);
    await connection.close();
}

// go();
getAllKittens();


export async function connectToMongoDB() {
    // mongoose.set('strictQuery', false);
    try {
        return (await mongoose.connect(`mongodb://localhost:27017`)).connection;
    } catch (error) {
        console.log(error);
    }


}