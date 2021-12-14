const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.js')

const app = express(); // create an express server instance
const PORT = process.env.PORT || 5001; // set port

require('dotenv').config(); // use environment variable in node file

app.use(cors()); // cross resource scripting
app.use(express.json()); // send payloads from frontend to backend
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('hello, world')
});

app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));