const port = 5001;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./Routes/User-Routes');
const subjectRouter = require('./Routes/Subject-Routes');

const dotenv= require('dotenv').config()

const app = express();
app.use(express.json());
app.use(cors());



mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MonqqgoDB', err);
});

app.use('/', router)
app.use('/',subjectRouter)



app.listen(port, () => {
    console.log("Server is running on " + port);
});
