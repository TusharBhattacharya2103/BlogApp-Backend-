const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// routes
const blog = require('./routes/blog');

// mount routes
app.use('/api/v1/blog', blog);

// database connection
const connectwithDB = require('./config/database');
connectwithDB();

// default route
app.get("/", (req, res) => {
    res.send("Welcome to the Blog API");
});

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
