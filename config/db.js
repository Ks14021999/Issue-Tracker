const mongoose = require('mongoose');
require('dotenv').config();

main().catch(err => console.log("Database is not connected"));

async function main(){
    await mongoose.connect('mongodb+srv://ks14:qazwsxedc@mern1.xq4bs.mongodb.net/test?retryWrites=true&w=majority');
    console.log('Database is connected');
}

module.exports;