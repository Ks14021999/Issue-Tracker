const mongoose = require('mongoose');
require('dotenv').config();

main().catch(err => console.log("Database is not connected"));

async function main(){
    await mongoose.connect(process.env.URI);
    console.log('Database is connected');
}

module.exports;