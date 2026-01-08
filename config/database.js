const mongoose = require('mongoose');
require('dotenv').config();

const connectwithDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectwithDB;
